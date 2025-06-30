'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import { toast } from 'react-toastify';
import './styles.css';
import moment from 'moment';

// import './client.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import caseAPI from '@/app/apiBridge/case';
import { loadNotes } from '@/store/auth';
export default function FileTable({ fileData }) {
  const dispatch = useDispatch();
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  let color = useSelector((store) => {
    return store.authSlice.color;
  });

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [notes, setNotes] = useState([]);

  const loadMeetingsSignal = useSelector((store) => {
    return store.authSlice.signals.loadMeetings;
  });

  useEffect(() => {
    caseAPI
      .getMeetings({ caseID })
      .then((resp) => {
        debugger;
        setNotes(resp.data.meetings);
      })
      .catch((err) => {
        toast.error('Oops, the meetings could not be loaded');
      });
  }, [loadMeetingsSignal]);

  const deleteNote = (noteId) => {
    // TBC should have a separate modal for this
    if (window.confirm('Are yo u sure you want to delete this meeting?')) {
      caseAPI
        .deleteNotes({ noteId })
        .then((resp) => {
          dispatch(loadNotes());
        })
        .catch((err) => {
          toast.error('Oops, the meeting could not be deleted');
        });
    }
  };

  const controlMeeting = (note, flag) => {
    caseAPI
      .controlMeeting({ noteId: note._id, flag })
      .then((resp) => {
        if (resp.data.success) {
          note.meetingStarted = flag;
          if (resp.data.meeting) {
            note.duration = resp.data.meeting.duration;
            note.completed = true;
          }
          setNotes([...notes]);
          if (flag) {
            toast.success('Meeting started');
          } else {
            toast.success('Meeting stopped');
          }
        }
      })
      .catch((err) => {
        toast.error('Oops, the meeting could not be deleted');
      });
  };

  return (
    <div
      id="case-meetings-box"
      className="tableDiv"
    >
      <h2 className="heading-primary">
        Reminders
        <table className="float-end">
          <tr>
            <td>
              <a
                href="javascript:"
                data-bs-target="#add_meeting_pop"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Meeting</span>
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
          {notes.map((note, i) => {
            let date = new Date(note.meetingDate);
            return (
              <tr key={i + 1}>
                <td className="meeting-item">
                  <div className="row">
                    <div className="col-md-2 col-sm-12">
                      <h1 className={`${color}-text`}>{date.getDate()}</h1>
                      <div>{date.toDateString()}</div>
                    </div>
                    <div className="col-md-4 col-sm-12 text-left">
                      <h5>Meeting Topic</h5>
                      <div>{note.subject}</div>
                      <h5>Meeting Notes</h5>
                      <div>{note.meetingNotes}</div>
                      {note.completed && (
                        <div className="meeting-noty">
                          <b>Meeting duration:</b> <span>{note.duration}</span>
                        </div>
                      )}
                    </div>
                    <div className="col-md-4 col-sm-12 text-left">
                      <div className="float-end">
                        <div>
                          <b>Created By</b>
                        </div>
                        <div>
                          <small>{note.createdBy['name' + language]}</small>
                          <div>{utility.formatDate(note.createdAt)}</div>
                        </div>
                        {!note.completed && (
                          <div>
                            {note.meetingStarted ? (
                              <a
                                href="javascript:"
                                onClick={(e) => controlMeeting(note, false)}
                                class="btn btn-danger action-link"
                                file_type="0"
                              >
                                {' '}
                                <i class="fal fa-delete"></i> <span>End Meetings</span>
                              </a>
                            ) : (
                              <a
                                href="javascript:"
                                onClick={(e) => controlMeeting(note, true)}
                                class="btn btn-success action-link"
                                file_type="0"
                              >
                                {' '}
                                <i class="fal fa-delete"></i> <span>Start Meetings</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
          {!notes.length && (
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
