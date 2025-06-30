import { getDataType } from '@/app/lib/utils';
import { Company } from '@/models/company';
import { User } from '@/models/user';
import { NextResponse } from 'next/server';
import moment from 'moment';
import { isAuthenticated } from '@/app/lib/session-contol';
import * as jose from 'jose';
import { companyController } from '@/controllers/company';

// Utility to resolve FormData or JSON automatically
async function resolveData(data) {
  if (typeof data?.get === 'function') {
    return Object.fromEntries(data.entries());
  }
  return data;
}

export async function POST(req) {
  try {
    let dataType = await getDataType(req);
    console.log('Data Type:', dataType);
    let auth = await isAuthenticated(req, dataType);

    if (!auth && dataType.type !== 'request-trial' && dataType.type !== 'login') {
      return NextResponse.status(403).json({
        message: 'Not Authorized'
      });
    }

    // Resolve FormData or JSON safely
    const data = await resolveData(dataType.data);

    switch (true) {
      case dataType.type === 'verifyPass': {
        const userFound = await User.findOne({ password: data.newPassword });

        return NextResponse.json({
          success: userFound != null
        });
      }

      case dataType.type === 'changePassword': {
        await User.findByIdAndUpdate(auth._id, {
          $set: { password: data.newPassword }
        });

        return NextResponse.json({
          success: true
        });
      }

      case dataType.type === 'login': {
        console.log('Login request received.');

        const user = await User.findOne({
          email: data.user_email.trim(),
          password: data.user_password.trim()
        })
          .populate({
            path: 'company',
            populate: {
              path: 'users',
              model: 'user',
              select: 'fullName'
            }
          })
          .exec();

        console.log('Login Email:', data.user_email);
        console.log('Login Password:', data.user_password);

        if (user) {
          delete user.password;

          await user.updateOne({ lastLogin: Date.now() });

          const secret = new TextEncoder().encode(process.env.SECRET);
          const token = await new jose.SignJWT({ _id: user._id })
            .setProtectedHeader({ alg: 'HS256' })
            .sign(secret);

          return NextResponse.json({
            success: true,
            token,
            user
          });
        } else {
          console.log('User not found during login.');
          return NextResponse.json({
            success: false
          });
        }
      }

      case dataType.type === 'session-check': {
        console.log('Session check initiated.');

        if (auth) {
          const user = await User.findById(auth._id)
            .populate({
              path: 'company',
              populate: {
                path: 'users',
                model: 'user',
                select: 'fullName email dp'
              }
            })
            .exec();

          if (user) {
            delete user.password;

            console.log('Session user:', auth._id);

            const secret = new TextEncoder().encode(process.env.SECRET);
            const token = await new jose.SignJWT({ _id: user._id })
              .setProtectedHeader({ alg: 'HS256' })
              .sign(secret);

            return NextResponse.json({
              success: true,
              user,
              token
            });
          }
        }

        return NextResponse.json({
          success: false
        });
      }

      case dataType.type === 'request-trial': {
        console.log('Request trial data received:', data);

        const companyExists = await Company.findOne({ businessEmailAddress: data.businessEmailAddress });

        if (companyExists) {
          return NextResponse.json({
            success: false,
            message: 'Company already registered with this email!'
          });
        }

        data.trialStartedOn = new Date();

        const company = new Company(data);
        await company.save();

        await companyController.setup(company);

        const user = new User(data);
        user.company = company;
        await user.save();

        company.users.push(user._id);
        await company.save();

        const secret = new TextEncoder().encode(process.env.SECRET);
        const token = await new jose.SignJWT({ _id: user._id })
          .setProtectedHeader({ alg: 'HS256' })
          .sign(secret);

        return NextResponse.json({
          success: true,
          user,
          token
        });
      }

      default:
        return NextResponse.json({
          success: false,
          message: 'Unknown request type'
        });
    }
  } catch (e) {
    console.error('Error in POST handler:', e.message);
    return NextResponse.json({ error: e.message });
  }
}

export function GET() {
  // You can implement GET handler here if needed
}
