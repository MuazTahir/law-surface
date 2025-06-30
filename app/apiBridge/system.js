import axios from 'axios';
export default {
  getValuesByTitleBulk(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues',
      {
        action: 'getValuesByTitleBulk',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getValuesByTitle(args, adv) {
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
  udateSystemValues(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues',
      {
        action: 'udateSystemValues',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getSystemValues(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues',
      {
        action: 'getSystemValues',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  }
};
