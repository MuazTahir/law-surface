import axios from 'axios';
export default {
  fetchSessionSummary(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/sessions',
      {
        action: 'fetchSessionSummary',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  }
};
