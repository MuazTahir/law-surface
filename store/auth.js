import AddAdminstrative from '@/components/addAdminstrative/addAdminstrative';
import { createSlice } from '@reduxjs/toolkit';

// data ka section, portion, store ka aik hissa
let authSlice = createSlice({
  name: 'authSlice',
  initialState: {
    toolTips: {
      edit: {
        nameEn: 'Edit',
        nameAr: 'تعديل'
      },
      email: {
        nameEn: 'Email',
        nameAr: 'مشاركة'
      },
      whatsapp: {
        nameEn: 'Whatsapp',
        nameAr: 'واتساب'
      },
      qr: {
        nameEn: 'Add Event to Calendar',
        nameAr: 'اضافة التاريخ إلى التقويم'
      },

      print: {
        nameEn: 'Print',
        nameAr: 'طباعة'
      },
      delete: {
        nameEn: 'Delete',
        nameAr: 'حذف'
      }
    },
    language: 'En',
    d: '',
    signals: {
      loadUpdates: {},
      loadMeetings: {},
      loadReminders: {},
      loadNotes: {},
      loadReimbursements: {}
    },
    generalTerms: {
      court: {
        nameEn: 'Court',
        nameAr: 'محكمة'
      },
      details: {
        nameEn: 'Details',
        nameAr: 'تفاصيل'
      },
      status: {
        nameEn: 'Status',
        nameAr: 'حالة'
      },
      stage: {
        nameEn: 'Case Stage',
        nameAr: 'مرحلة'
      },
      department: {
        nameEn: 'Department',
        nameAr: 'إدارة'
      },
      sessionType: [
        { _id: 1, nameEn: 'Court Session', nameAr: 'جلسة محكمة' },
        { _id: 2, nameEn: 'Expertise Session', nameAr: 'جلسة خبرة' },
        { _id: 3, nameEn: 'Preparatory Session', nameAr: 'جلسة تحضيرية' },
        { _id: 4, nameEn: 'Reconcilation Session', nameAr: 'جلسة تصالح' },
        { _id: 5, nameEn: 'Reconcilation Session', nameAr: 'جلسة تصالح' },
        { _id: 6, nameEn: 'Settlement Session', nameAr: 'جلسة تسوية' }
      ],
      case: {
        nameEn: 'Case',
        nameAr: 'دعوى'
      }
    },
    loading: false,
    company: {},
    currentUser: {},
    data: {
      case: null,
      meetings: [],
      reminders: []
    }
  },
  // agar ooper waley initial section ko
  // change/update wagera krna h to
  // neeche reduers ka objet banakar
  // usme hasb-zaroorat function rakhi jyen
  reducers: {
    loadCaseGlobal: (puranaData, nyData) => {
      puranaData.data.case = nyData.payload;
    },
    loadReminders: (puranaData, nyData) => {
      puranaData.signals.loadReminders = {};
    },
    loadImbursements: (puranaData, nyData) => {
      puranaData.signals.loadReimbursements = {};
    },
    loadWorkTimer: (puranaData, nyData) => {
      puranaData.signals.loadWorkTimer = {};
    },
    loadMeetings: (puranaData, nyData) => {
      puranaData.signals.loadMeetings = {};
    },
    loadUpdates: (puranaData, nyData) => {
      puranaData.signals.loadUpdates = {};
    },
    loadNotes: (puranaData, nyData) => {
      puranaData.signals.loadNotes = {};
    },

    changeColor: (puranaData, nyData) => {
      puranaData.color = nyData.payload;
    },
    changeLanguage: (puranaData, nyData) => {
      puranaData.language = nyData.payload;
    },
    addMeeting: (puranaData, nyData) => {
      puranaData.data.meetings.push(nyData.payload);
    },
    setMeetings: (puranaData, nyData) => {
      puranaData.data.meetings = nyData.payload;
    },

    addReminder: (puranaData, nyData) => {
      puranaData.data.reminders.push(nyData.payload);
    },
    setReminders: (puranaData, nyData) => {
      puranaData.data.reminders = nyData.payload;
    },
    addAdminstrative: (puranaData, nyData) => {
      puranaData.data.admintrative.push(nyData.payload);
    },
    setAdminstrative: (puranaData, nyData) => {
      puranaData.data.adminstrative = nyData.payload;
    },

    updateCompany: function (puranaData, nyData) {
      puranaData.company = {
        ...puranaData.company,
        ...nyData.payload
      };
    },
    setCompany: function (puranaData, nyData) {
      puranaData.company = nyData.payload;
    },
    hardLoading: function (puranaData, nyData) {
      puranaData.hardLoading = nyData.payload;
    },
    setLoadng: function (puranaData, nyData) {
      puranaData.loading = nyData.payload;
    },
    setUser: function (puranaData, nyData) {
      puranaData.currentUser = nyData.payload;
      // no ID means, its logout
      if (!nyData.payload._id) {
        localStorage.removeItem('token');
      } else {
        puranaData.language = nyData.payload.language;
        puranaData.color = nyData.payload.color;
      }
    },
    loggedOut: () => {
      puranaData.currentUser = {};
    }
  }
});

export let {
  loadCaseGlobal,
  addMeeting,
  setMeetings,
  addReminder,
  setReminders,
  addAdminstrative,
  setAdminstrative,
  updateCompany,
  setCompany,
  addUser,
  removeUser,
  updateUser,
  setUser,
  setLoadng,
  // for interncepting axios requests
  hardLoading,
  changeLanguage,
  changeColor,
  // signals
  loadImbursements,
  loadUpdates,
  loadReminders,
  loadNotes,
  loadMeetings,
  loadWorkTimer
} = authSlice.actions;
export default authSlice;
