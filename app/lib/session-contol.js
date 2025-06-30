import { User } from '@/models/user';
import * as jose from 'jose';

let allowedURLs = ['login', 'request-trial', 'verifyPass'];

export const isAuthenticated = async (req, dataType) => {
  let token = 
  req.headers.get('authorization') ||
  req.headers.get('Authorization') ||
  (dataType?.data?.token) ||
  (typeof dataType?.data?.get === 'function' ? dataType.data.get('token') : dataType?.data);

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.SECRET);

      const decoded = await jose.jwtVerify(token, secret);

      console.log('checling');
      console.log(decoded);

      if (decoded.payload?._id) {
        let user = await User.findById(decoded.payload?._id);
        return user;
        // return decoded.payload?._id;
      } else {
        return false;
      }
    } catch (err) {
      console.error('isAuthenticated error: ', err.message);

      return false;
    }
  } else {
    if (!allowedURLs.includes(dataType.data.action)) {
      return false;
    } else {
      return true;
    }
  }
};
