import axios from 'axios';
export default {
  verifyPass(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/auth',
      {
        action: 'verifyPass',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  changePassword(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/auth',
      {
        action: 'changePassword',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  }
};
