import { Consultation } from '@/models/consultation';
import { NextResponse } from 'next/server';

export async function POST(req) {
  let data = await req.json();
  console.log(data);

  if (data) {
    let newCounselling = new Consultation(data);
    await newCounselling.save();
  }

  return NextResponse.json({
    success: true,
    data
  });
}

export async function GET(req) {
  let counsel = await Consultation.find();

  console.log(counsel);

  return NextResponse.json({
    success: true,
    counsel
  });
}
