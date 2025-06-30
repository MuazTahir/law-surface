'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import { toast } from 'react-toastify';

// import './client.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import caseAPI from '@/app/apiBridge/case';
import { loadReminders } from '@/store/auth';
export default function FileTable({ fileData }) {
  const dispatch = useDispatch();
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [reminders, setNotes] = useState([]);

  const loadRemindersSignal = useSelector((store) => {
    return store.authSlice.signals.loadReminders;
  });

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  let color = useSelector((store) => {
    return store.authSlice.color;
  });

  // TBC extra code, should be removed when token activated
  let createdBy = useSelector((store) => {
    return store.authSlice.currentUser._id;
  });

  useEffect(() => {
    caseAPI
      .getReminders({ caseID, company, createdBy })
      .then((resp) => {
        debugger;
        setNotes(resp.data.reminders);
      })
      .catch((err) => {
        toast.error('Oops, the notes could not be loaded');
      });
  }, [loadRemindersSignal]);

  const deleteNote = (reminderId) => {
    // TBC should have a separate modal for this
    if (window.confirm('Are yo u sure you want to delete this reminder')) {
      caseAPI
        .deleteReminder({ reminderId })
        .then((resp) => {
          dispatch(loadReminders());
        })
        .catch((err) => {
          toast.error('Oops, the notes could not be deleted');
        });
    }
  };

  return (
    <div className="tableDiv">
      <h2 className="heading-primary">
        Reminders
        <table className="float-end">
          <tr>
            <td>
              <a
                href="javascript:"
                data-bs-target="#new1"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Reminder</span>
              </a>
            </td>
          </tr>
        </table>
      </h2>
      <table className="table  cleintTable ">
        {/* <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Status</th>
          </tr>
        </thead> */}
        <tbody>
          {reminders.map((note, i) => {
            let date = new Date(note.reminderDate);
            return (
              <tr key={i + 1}>
                <td>
                  <div className="row">
                    <div className="col-md-2 col-sm-12">
                      <h1 className={`${color}-text`}>{date.getDate()}</h1>
                      <div>{date.toDateString()}</div>
                    </div>
                    <div className="col-md-10 col-sm-12">
                      <div className="float-end">
                        <div>
                          <b>Created At</b>
                        </div>
                        <div>
                          <small>{new Date(note.createdDate).toDateString()}</small>
                        </div>
                        <div>
                          <a
                            href="javascript:"
                            onClick={(e) => deleteNote(note._id)}
                            class="delete_case_request text-dark action-link"
                            file_type="0"
                          >
                            {' '}
                            <i class="fal fa-delete"></i> <span>End</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-md-12 col-sm-12 text-left">
                      <b>{note.subject}</b>
                      <div>{note.reminderNote}</div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
          {!reminders.length && (
            <tr>
              <th
                className="text-center form-error"
                colSpan={5}
              >
                NO DATA FOUND
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
