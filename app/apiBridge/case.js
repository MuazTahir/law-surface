import axios from 'axios';
export default {
  getCases(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getCases',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getCaseFormData(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getCaseFormData',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getCase(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getCase',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  geFileCaseNo(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'geFileCaseNo',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getCasesSummary(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getCasesSummary',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  toggleWorktimeVisibility(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'toggleWorktimeVisibility',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  addWorkTimer(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'addWorkTimer',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getCaseByFile(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getCaseByFile',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getWorkTimer(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getWorkTimer',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getUpdates(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getUpdates',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  deleteUpdate(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'deleteUpdate',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  addUpdate(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'addUpdate',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  controlMeeting(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'controlMeeting',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getMeetings(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'getMeetings',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getRelatedCases(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getRelatedCases',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  addProcedure(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'addProcedure',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  saveNotes(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'saveNotes',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getNotes(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getNotes',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  deleteReminder(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'deleteReminder',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getReminders(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general',
      {
        action: 'getReminders',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  addSession(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getSessions(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getSessions',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  exportClaimStatement(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'exportClaimStatement',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  createInvoice(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'createInvoice',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getClaims(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getClaims',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  cases(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  getIssuedInvoices(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        action: 'getIssuedInvoices',
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  },
  addGeneralPayment(args, adv) {
    return axios.post(
      process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case',
      {
        ...args,
        token: localStorage.getItem('token')
      },
      { ...adv }
    );
  }
};
