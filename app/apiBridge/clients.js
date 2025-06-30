import axios from 'axios';
export default {
  getClients(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients',
      {
        ...args,
        action: 'getClients',
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  exportReimbursements(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients',
      {
        ...args,
        action: 'exportReimbursements',
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getReimbursemtns(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients',
      {
        ...args,
        action: 'getReimbursements',
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  addReimbursement(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients',
      {
        ...args,
        action: 'addReimbursement',
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  clients(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients',
      {
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  }
};
