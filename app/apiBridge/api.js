import axios from 'axios';
export default {
  getUserLinks(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'getUserLinks',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  updateUserLinks(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'updateUserLinks',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  setFollowProcedure(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'setFollowProcedure',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getProcecduresForCase(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'getProcecduresForCase',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getProceduralFollows(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'getProceduresFollowup',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getCaseValuesByTitle(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues',
      {
        action: 'getValuesByTitle',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  generateReport(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/reports',
      {
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  }
};
