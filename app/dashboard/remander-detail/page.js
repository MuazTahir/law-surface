'use client';
import { useEffect, useState } from 'react';
import './remander.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import authSlice from '@/store/auth';
export default function RemanderDetail() {
  const [dateType, setDateType] = useState(false);
  const [reminders, setReminders] = useState([]);

  // let reminders = useSelector((store) => {
  //     return store.authSlice.data.reminders;
  // });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general', {
        action: 'getReminders',
        token: localStorage.getItem('token')
      })
      .then((resp) => {
        debugger;

        setReminders(resp.data.reminders);
      });
  }, []);

  return (
    <div style={{ backgroundColor: '#edf2f9', padding: '1rem' }}>
      <div
        className=" mt-3 p-3"
        style={{
          backgroundColor: 'white',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <div className="row align-items-center gy-3">
          {/* Left Column */}
          <div className="col-lg-6">
            <div className="d-md-flex  gap-2 align-items-center">
              <div className="d-flex align-items-center justify-content-between gap-2">
                <b>Advanced Search</b>
                <span className="material-icons">search</span>
              </div>
              <div className="d-flex justify-content-between gap-2">
                <input
                  type="text"
                  placeholder="Search by File No or Case No"
                  className="form-control"
                  style={{ maxWidth: '300px' }}
                />
                <button className="btn btn-primary">Search</button>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-lg-6">
            <div className="d-flex justify-content-evenly text-center">
              <div>
                <span className="d-block ">Today Reminders</span>
              </div>
              <div>
                <span className="d-block ">Upcoming Reminders</span>
              </div>
              <div>
                <span className="d-block ">All Reminders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" d-md-flex     mt-3  p-2"
        style={{ backgroundColor: 'white', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}
      >
        <div>
          <div>
            <small>
              <b>Sort By Date</b>
            </small>
          </div>
          <div className="d-flex align-items-center gap-1">
            <span>
              <small>From</small>
            </span>
            <div className="w-25">
              <input
                placeholder="Date"
                type={dateType ? 'date' : 'text'}
                onClick={() => setDateType(true)}
                className="form-control"
              />
            </div>
            <span>
              <small>To</small>
            </span>
            <div className="w-25">
              <input
                placeholder="Date"
                type={dateType ? 'date' : 'text'}
                onClick={() => setDateType(true)}
                className="form-control"
              />
            </div>
            <button className=" btn btn-primary">Sort</button>
          </div>
        </div>
        <div>
          <div>
            <small>
              <b>Table Sort</b>
            </small>
          </div>
          <div className="d-flex align-items-center gap-1">
            <div className="">
              <input
                placeholder="Remander Date"
                type={dateType ? 'date' : 'text'}
                onClick={() => setDateType(true)}
                className="form-control"
              />
            </div>

            <div className="">
              <select className="form-select">
                <option>A To Z</option>
                <option>Z To A</option>
              </select>
            </div>
            <button className=" btn btn-primary">Sort</button>
          </div>
        </div>
      </div>

      <div className="tableDiv">
        <table className="table mt-4 remanderTable">
          <thead>
            <tr>
              <th>
                <b>Reminder Date</b>
              </th>
              <th>
                <b>File</b>
              </th>
              <th>
                <b>Case No.</b>
              </th>
              <th>
                <b>The Reminder</b>
              </th>
              <th>
                <b>Reminder Settings</b>
              </th>
              <th>
                <b>View Reminder</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {reminders.map((reminder, index) => {
              return (
                <tr key={index}>
                  <td>
                    {new Date(reminder.reminderDate).toLocaleDateString()}

                    {/* {new Date(remi.remanderTable trnder.reminderDate).toLocaleDateString()} */}
                  </td>
                  <td className="text-center">
                    <a class="file-status-box text-dark" href={`/dashboard/case-no?id=${reminder.case?._id}`}>
                      {reminder.case?.caseFileNo}
                      <span class={'m-auto badge cs-' + reminder.case?.caseStatus['name' + language]}>
                        {reminder.case?.caseStatus['name' + language]}
                      </span>
                    </a>
                  </td>
                  <td>{reminder.case?.caseNo}</td>
                  <td>{reminder.subject}</td>
                  <td
                    className="d-flex flex-wrap align-items-center gap-1"
                    style={{ maxWidth: 'px' }}
                  >
                    {reminder.reminderEmail === 'true' && (
                      <span
                        className="p-1"
                        style={{
                          border: '1px solid gray',
                          borderRadius: '3px',
                          fontSize: '13px',
                          lineHeight: '13px'
                        }}
                      >
                        <i className="fa-regular fa-envelope me-1"></i>
                        Reminder Via Email
                      </span>
                    )}

                    {(reminder.reminderWhatsApp === 'true' || reminder.reminderWhatsApp === true) && (
                      <span
                        className="p-1"
                        style={{
                          border: '1px solid gray',
                          borderRadius: '3px',
                          fontSize: '13px',
                          lineHeight: '13px'
                        }}
                      >
                        <i className="fa-brands fa-whatsapp me-1"></i>
                        WhatsApp Reminder
                      </span>
                    )}
                  </td>

                  <td>
                    <div className="d-flex gap-3">
                      <span className="  mybtninreminder">Edit</span>
                      <span
                        className="   mybtninreminder"
                        id="endbtn"
                      >
                        End
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
