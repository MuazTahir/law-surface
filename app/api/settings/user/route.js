import { User } from '../../../../models/user';
import { NextResponse } from 'next/server';

import { getDataType } from '@/app/lib/utils';
import { Opponent } from '@/models/opponentmodel';

export async function POST(request) {
  //   await DbConnect();

  let data = await getDataType(request);

  // const { values, groupTitle } = data.data;

  try {
    console.log(data.type);
    switch (true) {
      case data.type == 'getUsers': {
        let users = await User.find({
          type: { $in: data.data.type },
          company: data.data.company
        });

        return NextResponse.json({ users });
      }

      case data.type == 'getOpponentsByCompany': {
        let opponents = await Opponent.find({
          owner: data.data.company
        });

        return NextResponse.json({ opponents });
      }

      case data.type == 'saveOpponent': {
        let nyaOpponent = new Opponent({
          ...data.data
        });
        await nyaOpponent.save();

        return NextResponse.json({ success: true });
      }

      case data.type == 'getUsers_Attorney': {
        let attorneys = await User.find({ type: 'ATTORNEY', company: data.data.company });
        return NextResponse.json(attorneys);
      }

      case data.type == 'setColor': {
        // TBC, _id should come from token
        await User.findByIdAndUpdate(data.data._id, { color: data.data.color });

        return new Response(JSON.stringify({ success: true }), {
          status: 200
        });
      }

      case data.type == 'setLanguage': {
        console.log('*******');
        console.log('language changed');

        console.log(data);
        // TBC, _id should come from token
        await User.findByIdAndUpdate(data.data._id, { language: data.data.language });

        return new Response(JSON.stringify({ success: true }), {
          status: 200
        });
      }
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}
