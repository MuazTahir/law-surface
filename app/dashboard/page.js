// "use client";

// export default function Page(){
//     return <div>aldasdlasd</div>
// }

'use client';
import moment from 'moment';
import RenderCasesSummary from '@/components/RenderCasesSummary/renderCasesSummary';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
// import ReduxProvider from "@/components/reduxProvider/reduxProvider";
// import useSWR from 'swr';
import axios from 'axios';
import DonutChart from '@/components/dashboard/donutChart/donutChart';
import Link from 'next/link';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import { setMeetings, setReminders } from '@/store/auth';
import { toast } from 'react-toastify';
import AncillaryModel from '@/components/mymodel/ancillaryModel';
import PieCharrt from '@/components/pieChart/pieChart';
import Aboutplateform from '@/components/plateform-modal/about-plateform';
// import SessionCheck from "@/components/session-check/session-check";
import sessionsAPI from '../apiBridge/session';

export default function DashboardE() {
  return <Dashboard></Dashboard>;
}

// const fetcher = (args) => {
//     return axios.post(args, {}, {
//         headers: {
//             'Authorization': localStorage.getItem('token')
//         }
//     })
// }

function Dashboard() {
  let dispatchWrapper = {
    setMeetings,
    setReminders
  };

  // let cardData = [
  //     {
  //         day: "Sunday",
  //         date: "15-12-2024",
  //         session: {
  //             num: 3,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },
  //     {
  //         day: "Monday",
  //         date: "16-12-2024",
  //         session: {
  //             num: 4,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },
  //     {
  //         day: "Tuesday",
  //         date: "17-12-2024",
  //         session: {
  //             num: 11,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },
  //     {
  //         day: "Wednesday",
  //         date: "18-12-2024",
  //         session: {
  //             num: 9,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },
  //     {
  //         day: "Thursday",
  //         date: "19-12-2024",
  //         session: {
  //             num: 2,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },
  //     {
  //         day: "Friday",
  //         date: "20-12-2024",
  //         session: {
  //             num: 0,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },
  //     {
  //         day: "Friday",
  //         date: "21-12-2024",
  //         session: {
  //             num: 0,
  //             text: "Session"
  //         },
  //         border: {
  //             text: "3 syncronous ",
  //             session: "Session"
  //         }
  //     },

  // ]

  // const generateWeekData = () =>  {
  //     let weekData = [];
  //     for (let i = 0; i < 7; i++) {
  //       // Add 'i' days to the current date and set time to start of the day (midnight)
  //       let currentDate = moment().add(i, 'days').startOf('day');
  //       weekData.push({
  //         session:{num:0, text:"Session"},
  //         border:{},
  //         date: currentDate.format('D/M/YYYY'),
  //         day: currentDate.format('dddd'),
  //         timestamp: currentDate.valueOf() // milliseconds since epoch, time is 00:00:00
  //       });
  //     }
  //     return weekData;
  //   }

  const generateWeekData = () => {
    const today = moment().startOf('day');
    const dayOfWeek = today.day(); // 0 = Sunday, ..., 6 = Saturday

    // If today is Sunday, start from today; otherwise, go back to the most recent Sunday
    const startSunday = moment(today).subtract(dayOfWeek, 'days');

    let weekData = [];
    for (let i = 0; i < 7; i++) {
      let currentDate = moment(startSunday).add(i, 'days').startOf('day');
      weekData.push({
        session: { num: 0, text: 'Session' },
        border: {},
        date: currentDate.format('D/M/YYYY'),
        day: currentDate.format('dddd'),
        timestamp: currentDate.valueOf()
      });
    }
    return weekData;
  };

  let today = moment().startOf('day').valueOf();

  useEffect(() => {
    let summaryData = generateWeekData();

    sessionsAPI
      .fetchSessionSummary({ dates: summaryData })
      .then((resp) => {
        setCardData(resp.data.resultObject);
      })
      .catch((err) => {
        console.log(err);
        toast.error('Oops, we cannot load sessions schedule');
      });
  }, []);

  let [cardData, setCardData] = useState([]);

  let dispatch = useDispatch();

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  // let { data, isLoading, error } = useSWR('/api/user/expenses', fetcher);
  // let alertData = useSWR('/api/general/alerts', fetcher);

  let alerts = [
    // {
    //     status: "pending",
    //     title: "POA Number 51100-04-3192-22 without updating",
    //     date: new Date().toDateString()
    // },
    // {
    //     status: "pending",
    //     title: "POA Number 51100-04-3192-22 without updating",
    //     date: new Date().toDateString()
    // },
    // {
    //     status: "pending",
    //     title: "POA Number 51100-04-3192-22 without updating",
    //     date: new Date().toDateString()
    // },
    // {
    //     status: "pending",
    //     title: "POA Number 51100-04-3192-22 without updating",
    //     date: new Date().toDateString()
    // },
    // {
    //     // status: "working",
    //     // title: "POA Number 51100-04-3192-22 without updating",
    //     // date: new Date().toDateString(),
    //     // status: "working",
    // }
  ];

  let [cases, setCases] = useState({});

  let reminders = useSelector((store) => {
    return store.authSlice.data.reminders;
  });

  let meetings = useSelector((store) => {
    return store.authSlice.data.meetings;
  });

  // let [reminders, setReminders] = useState([]);

  // let [meetings, setMeetings] = useState([]);

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  const [mattersData, setMatters] = useState([]);

  // let caseStats = {};

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case', {
        action: 'caseStatus',
        group: language,
        company: user.company._id,
        token: localStorage.getItem('token')
      })
      .then((resp) => {
        // debugger;
        setMatters(
          resp.data.cases.map((item) => {
            return {
              ...item,
              // ['name'+language]:item.caseStatus,
              value: item.cases.length,
              color: '#28a745'
            };
          })
        );
        // setMeetings(resp.data.meetings);
      });
    // .catch(()=>{
    //     toast.error("Oops, the reminders could not be loaded");
    // });

    let promiseWait = [];

    promiseWait.push(
      axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general', {
        action: 'getReminders',
        summary: true,
        limit: 6,
        token: localStorage.getItem('token')
      })
    );

    promiseWait.push(
      axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general', {
        action: 'getMeetings',
        summary: true,
        limit: 6,
        token: localStorage.getItem('token')
      })
    );
    Promise.all(promiseWait)
      .then((resp) => {
        resp.forEach((item) => {
          let targetKey = Object.keys(item.data)[1];
          dispatch(dispatchWrapper['set' + targetKey.capitalize()](item.data[targetKey]));
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // .then((resp) => {

    //     dispatch(setMeetings(resp.data.meetings));
    //     dispatch(setReminders(resp.data.reminders));

    // })
    // .catch(()=>{
    //     toast.error("Oops, the reminders could not be loaded");
    // });

    document.title = 'My Dashboard';
  }, []);

  let date = new Date();

  // const mattersData = [
  //     { nameEn: 'In Process', value: 94, color: '#28a745' },
  //     { nameEn: 'Finished', value: 41, color: '#dc3545' },
  //     { nameEn: 'Postponed', value: 4, color: '#007bff' },
  //     { nameEn: 'Stop Temporarily', value: 0, color: '#ffc107' },
  //     { nameEn: 'Separated', value: 0, color: '#fd7e14' },
  //     { nameEn: 'Draft', value: 0, color: '#6f42c1' },
  // ];
  const fileExecutionData = [
    { name: 'In Process', value: 20, color: '#28a745' },
    { name: 'Finished', value: 41, color: '#dc3545' },
    { name: 'Postponed', value: 90, color: '#007bff' },
    { name: 'Stop Temporarily', value: 20, color: '#ffc107' },
    { name: 'Separated', value: 30, color: '#fd7e14' },
    { name: 'Draft', value: 50, color: '#6f42c1' }
  ];

  return (
    <div
      id="main-dashboard"
      className="d-flex flex-wrap"
      style={{ display: 'flex', gap: '0.5rem' }}
    >
      <AncillaryModel></AncillaryModel>
      <Aboutplateform></Aboutplateform>
      <div
        className="col left-sidebar"
        style={{
          flex: '0 0 20%',
          //   backgroundColor: '#f8f9fa',
          //   padding: '1rem',
          borderRadius: '8px'
        }}
      >
        <div className="profile-box">
          <div className="d-md-flex gap-2">
            <div>
              <Image
                src="/images/default-profile.png"
                width={60}
                height={60}
                style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="col-md-8 col-sm-6">
              <div className="text-primary">{user.email}</div>
              <div>{user.responsible}</div>
              {/* <small className="text-danger">{new Date().toDateString()}</small> */}
            </div>
          </div>
        </div>
        <div className="p-3">
          {/* <i class="fa-light fa-grid-2 "></i> */}
          <i class="fa fa-plus i-m me-1"></i>
          <small> Try the new Icon menu</small>
        </div>
        <div
          className="expenses-box profile-box p-3"
          style={{ lineHeight: '35px' }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <h5>Quick Links</h5>
            </div>
            <div>Edit</div>
          </div>
          <div>
            <div className="text-success">
              <i class="fa fa-external-link-alt me-2"></i>
              المجلس الأعلى للقضاء
            </div>
            <div className="text-success">
              <i class="fa fa-external-link-alt me-2"></i>
              المجلس الأعلى للقضاء
            </div>
            <div className="text-success">
              <i class="fa fa-external-link-alt me-2"></i>
              المجلس الأعلى للقضاء
            </div>
            <div className="text-success">
              <i class="fa fa-external-link-alt me-2"></i>
              المجلس الأعلى للقضاء
            </div>
          </div>
        </div>
        <div
          className="expenses-box profile-box p-3"
          style={{ lineHeight: '35px' }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <h5>Ancillary Services</h5>
            </div>
          </div>
          <div className="text-success">
            <div>
              <i class="fal fa-language me-3"></i>
              <Link href={'/dashboard/translation-offices'}>
                <button
                  className="bg-white border-0 text-success p-0"
                  data-bs-target="#codesModal"
                  data-bs-toggle="modal"
                >
                  Translation Offices
                </button>
              </Link>
            </div>
            <div>
              <i class="fal fa-user-tie me-4"></i>
              <Link href={'/dashboard/notary'}>
                <button
                  className="bg-white border-0 text-success p-0"
                  data-bs-target="#codeModal"
                  data-bs-toggle="modal"
                >
                  Notary
                </button>
              </Link>
            </div>

            <div>
              <i class="fal fa-envelope me-4 "></i>
              <button
                className="bg-white border-0 text-success p-0"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Submit suggestions
              </button>
            </div>

            {/* <div> <i class="far fa-calendar-alt"></i> abcd ad</div> */}
          </div>
        </div>
        <div
          className="expenses-box profile-box text-success p-3"
          style={{ lineHeight: '35px' }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <b className="text-dark">What will you do today?</b>
            </div>
            {/* <div>more</div> */}
          </div>
          <div>
            <div>
              <i class="fal fa-calendar-alt "></i>
              <span className="ms-3"> Review today's sessions</span>
            </div>
            <div>
              <i class="fal fa-folder-plus "></i>
              <span className="ms-3"> Add a New Case</span>
            </div>

            <div>
              <i class="fal fa-user-plus "></i>
              <span className="ms-3">Add New Client</span>
            </div>
          </div>
        </div>
        <div
          className="expenses-box profile-box p-3"
          style={{ lineHeight: '35px' }}
        >
          <div className="d-flex justify-content-between">
            <div className="">
              <h5>Support Links</h5>
            </div>
            {/* <div>more</div> */}
          </div>
          <div className="text-success">
            <div>
              <i class="fal fa-sparkles"></i>
              <span className="ms-3 "> what's New?</span>
            </div>
            <div>
              <img
                src="download.svg"
                style={{ width: '18px' }}
              ></img>
              <button
                type="button"
                className="bg-white border-0 text-success p-0 ms-3"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                About the plateform
              </button>
            </div>

            <div>
              <i class="fal fa-user-headset"></i>
              <button
                className="bg-white border-0 text-success p-0 ms-3"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Contact Developer
              </button>
            </div>

            <div>
              <i class="fal fa-dice-d6"></i>
              <span className="ms-3"> Release-4.7.4</span>
            </div>
          </div>
        </div>
        <div
          className="expenses-box profile-box p-3"
          style={{ lineHeight: '35px' }}
        >
          <div className="d-flex justify-content-between  pb-3">
            <div className="">
              <h5>Processing Information </h5>
            </div>
            {/* <div>more</div> */}
          </div>

          <div className="text-dark">
            <div className="d-flex  align-items-center">
              <i
                style={{ width: '40px', color: '#198754' }}
                class="  fal fa-laptop"
              ></i>

              <div className=" pf-linehight">
                <small>
                  <b>Plateform Mode</b>
                </small>
                <div>
                  {' '}
                  <small>Law Firm</small>
                </div>
              </div>
            </div>
            <div className="d-flex pt-2 align-items-center">
              {/* <i class="fa fa-cloud"></i> */}
              <i
                style={{ width: '40px', color: '#198754' }}
                class=" fal fa-database"
              ></i>

              <div className="  pf-linehight ">
                {/* <b></b> */}
                <small>
                  <b>Last BackUp</b>
                </small>

                <div>
                  <small>
                    <p> saturday 10 August,2024</p>
                  </small>
                </div>
              </div>
            </div>
            <div className="d-flex pt-2 align-items-center">
              {/* <i class="fa fa-cloud"></i> */}
              <i
                style={{ width: '40px', color: '#198754' }}
                class="fal fa-envelope-open"
              ></i>

              <div className="  pf-linehight">
                <small>
                  <b>Last Mail Check</b>
                </small>

                <div>
                  {' '}
                  <small>
                    <p> Monday 2 December,2024</p>
                  </small>
                </div>
              </div>
            </div>

            <div className="d-flex pt-2 align-items-center">
              <i
                style={{ width: '40px', color: '#198754' }}
                class="fal fa-cloud"
              ></i>
              <div className=" pf-linehight ">
                <small>
                  <b>Last Online Backup</b>{' '}
                </small>

                <div>
                  {' '}
                  <small>
                    <p> Wednesday 21 August,2024</p>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col middle-content"
        style={{
          // flex: '1 1 auto',
          // backgroundColor: '#ffffff',
          // padding: '1rem',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* <div className="profile-box">

            </div> */}

        {/* TBC the below bar was not in new version */}
        {/* #10 */}
       
        <div className="profile-box2 p-3">
          <div className="d-flex flex-wrap align-items-center gap-1">
            {/* <!-- Quick Search Title --> */}
            <div className="me-1">
              <span>
                <b>Quick Search</b>
              </span>
            </div>

            {/* <!-- Search Input Field --> */}
            <div className="flex-grow-1">
              <input
                type="text"
                className="form-control p-2"
                id="quick_search_input"
                placeholder="Search by Case No., File No., Client Name, Reference No., Cheque No., Contract No. etc..."
              />
            </div>

            {/* <!-- Dropdown Filter --> */}
            <div className="flex-shrink-1">
              <select
                className="form-select"
                id="quick_search_select"
              >
                <option value="file_number">File No.</option>
                <option value="all">All</option>
                <option value="case_no">Case No.</option>
                <option value="client">Client</option>
                <option value="opp">Opponent</option>
              </select>
            </div>

            {/* <!-- Search Button --> */}
            <div>
              <button className="btn btn-success d-flex align-items-center">
                <i className="fa fa-search me-2"></i> Search
              </button>
            </div>
          </div>
        </div>
        <div
          className="p-2"
          style={{ height: '200px', backgroundColor: 'white', borderRadius: '10px' }}
        >
          <div>
            <div>
              <i
                class="fal fa-calendar-alt me-3"
                style={{ color: '#fa9902' }}
              ></i>
              <b>This week's sessions</b>
              {/* <span >37</span> */}

              <div className="d-flex gap-2 justify-content-between align-items-center mb-3 ">
                {cardData.map((card) => {
                  return (
                    <>
                      <div className="row">
                        <div className="col-auto">
                          <div
                            className={'pe-2 me-1 pt-3 text-center ' + (card.timestamp == today ? 'today-card' : '')}
                          >
                            <div
                              className="fw-bold "
                              style={{ fontSize: '13px' }}
                            >
                              {card.day}
                            </div>
                            <h6
                              className="text-primary fw-bold"
                              style={{ fontSize: '13px' }}
                            >
                              {card.date}
                            </h6>
                            <Link href={'/dashboard/sessions?f=' + card.timestamp + '&t=' + card.timestamp}>
                              <h3 className="text-">{card.session.num}</h3>
                              <span className="">{card.session.text}</span>
                              <div>
                                <a
                                  href="#"
                                  className="text-danger border border-danger fw-bold"
                                  style={{
                                    fontSize: '9px',
                                    padding: '5px 10px',
                                    display: 'inline-block',
                                    textAlign: 'center',
                                    lineHeight: '1',
                                    borderRadius: '5px'
                                  }}
                                >
                                  {card.border.text} <br />
                                  Synchronous Sessions
                                </a>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>

            {cardData.map((card) => {
              return <></>;
            })}
          </div>
        </div>
        <div className="row dash-btn-container">
          <div className="col-md-12 col-sm-12 flex full-width">
            <div className="flex-grow-1 d-btn">
              <Link href="/dashboard/add-case">
                {/* <div> */}
                <i class="fa fa-plus i-m"></i>
                <p className="small i-m">Add Case</p>
                {/* </div> */}
              </Link>
            </div>

            <div className="flex-grow-1 d-btn">
              <Link href="/add-case">
                <i class="fa fa-search i-m"></i>
                <p className="small i-m">Search Names</p>
              </Link>
            </div>

            <div className="flex-grow-1 d-btn">
              <Link href="/add-case">
                <i class="fa fa-hashtag i-m"></i>
                <p className="small i-m">Add Case</p>
              </Link>
            </div>

            <div className="flex-grow-1 d-btn">
              <Link href="/add-case">
                <i class="fa fa-home i-m"></i>
                <p className="small i-m">Lawers Chambers</p>
              </Link>
            </div>

            <div className="flex-grow-1 d-btn">
              <Link href="/add-case">
                <i class="fa fa-people-carry i-m"></i>
                <p className="small i-m">Opponents List</p>
              </Link>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ padding: '0px' }}
        >
          <div className="col-md-4 p-0">
            <div className="profile-box center-item-box new-task">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="">New Files</h6>
                </div>
                <div className="col-md-6">
                  <p className="small text-end">More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-box center-item-box">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="">Reminders (1)</h6>
                </div>
                <div className="col-md-6 ">
                  <a
                    href="./dashboard/remander-detail"
                    lassName="small  text-end"
                  >
                    More
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <ol className="no-ls-type">
                    {reminders.map((alert, i) => {
                      return (
                        <li key={i}>
                          <Link href="/">
                            <div className="row">
                              <reminder_tag className="col-md-1 relative">
                                {/* {alert} */}
                                <i class="fal fa-stopwatch centered-icon"></i>
                              </reminder_tag>
                              <p className="small text-success col-md-10">
                                {alert.subject.length > 30 ? `${alert.subject.slice(0, 25)}....` : alert.subject}

                                <div>
                                  <p className="small text-danger">{new Date(alert.reminderDate).toDateString()}</p>
                                </div>
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="profile-box center-item-box">
              <div className="row">
                <div className="col-md-8">
                  <h6 className="">Automatic Alerts (5)</h6>
                </div>
                <div className="col-md-4">
                  <p className="small  text-end">More</p>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <ol className="no-ls-type">
                    {alerts.map((alert, i) => {
                      return (
                        <li key={i}>
                          <Link href="/">
                            <div className="row alert-row">
                              <p className="small text-success col-md-10">
                                {alert.title}
                                <div>
                                  <p className="small text-danger">{alert.date}</p>
                                </div>
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="profile-box center-item-box">
              <div className="row">
                <div className="col-md-12">
                  <h6 className="">Requests (0)</h6>
                </div>
                <div className="col-md-6 ">
                  <p className="small  text-end">More</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-box center-item-box">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="">Job tasks (1)</h6>
                </div>
                <div className="col-md-6">
                  <p className="small  text-end">More</p>
                </div>
              </div>

              <div className="row">
                <ol className="col-md-12">
                  <ol className="no-ls-type">
                    {alerts.map((alert, i) => {
                      return (
                        <li key={i}>
                          <Link href="/">
                            <div className="row alert-row">
                              {/* <expired_tag className="small col-md-1 relative">
                                                            <i class="fa fa-bell centered-icon"></i>

                                                        </expired_tag> */}
                              <p className="small text-success col-md-8">
                                {alert.title}
                                <div>
                                  <p className="small text-danger">{alert.date}</p>
                                </div>
                              </p>
                              <p className="small col-md-2 col-sm-12">
                                <div className={'status-box status-box-' + alert.status}>
                                  <span>{alert.status}</span>
                                </div>
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </ol>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-box center-item-box">
              <div className="row">
                <div className="col-md-6">
                  <h6 className="">Meetings (0)</h6>
                </div>
                <div className="col-md-6">
                  <a
                    href="./dashboard/metting-detail"
                    className="small text-end"
                  >
                    More
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <ol className="no-ls-type">
                    {meetings.map((alert, i) => {
                      return (
                        <li key={i}>
                          <Link href="/">
                            <div className="row">
                              <reminder_tag className="col-md-1 relative">
                                {/* {alert} */}
                                <i class="fal fa-stopwatch centered-icon"></i>
                              </reminder_tag>
                              <p className="small col-md-10">
                                {alert.subject.length > 30 ? `${alert.subject.slice(0, 25)}...` : alert.subject}
                                <div>
                                  <p className="small text-danger">{new Date(alert.meetingDate).toDateString()}</p>
                                </div>
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col right-sideba"
        style={{
          flex: '0 0 20%',

          // backgroundColor: '#f8f9fa',
          // padding: '1rem',
          borderRadius: '8px'
        }}
      >
        <div className="profile-box negligent-cases w-100">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex gap-2">
                <i
                  class="fal fa-calendar-alt"
                  style={{ color: '#fa9902' }}
                ></i>
                <div>
                  <h6 className="text-danger">Negligent Cases</h6>

                  <span className="small">
                    You have ( {75}) a case file or execution file that you are assigned to and you have not made any
                    update to these files.
                  </span>
                  <button className="btn btn-danger">
                    <p className="small">View All Files</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-box w-100 h-auto">
          <PieCharrt
            matterData={mattersData}
            fileExecutionData={fileExecutionData}
          ></PieCharrt>
        </div>
        <div className="profile-box negligent-cases">
          <div className="p-3">
            <div className="d-flex justify-content-between">
              <button className="btn btn-link p-0 border-0 text-decoration-none text-dark fw-bold fs-5">
                Files Status
              </button>
            </div>
            <hr className="mt-0 mb-3"></hr>
            <RenderCasesSummary></RenderCasesSummary>
            {/* <DonutChart caseStats={cases}></DonutChart> */}
          </div>
        </div>
        {/* <div className="profile-box negligent-cases">
          <div className="row">
            <div className="col-md-12">
              <div className="d-flex">
                <i
                  class="fal fa-rss me-2"
                  style={{ color: '#3f82ee' }}
                ></i>
                <h6 className="text-dark">Oman News Agency</h6>
              </div>
              <DonutChart caseStats={cases}></DonutChart>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

//             </div>

//             <div className="profile-box negligent-cases">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h6 className="text-primary">Files Status</h6>
//                         {/* <DonutChart></DonutChart> */}
//                     </div>
//                 </div>

//             </div>

//         </div>

//     </div>

// }       </div>

//             </div>

//             <div className="profile-box negligent-cases">
//                 <div className="row">
//                     <div className="col-md-12">
//                         <h6 className="text-primary">Files Status</h6>
//                         {/* <DonutChart></DonutChart> */}
//                     </div>
//                 </div>

//             </div>

//         </div>

//     </div>

// }
