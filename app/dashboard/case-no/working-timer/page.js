'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import { toast } from 'react-toastify';

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

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [notes, setNotes] = useState([]);

  const loadWorkTimer = useSelector((store) => {
    return store.authSlice.signals.loadWorkTimer;
  });

  useEffect(() => {
    caseAPI
      .getWorkTimer({ caseID })
      .then((resp) => {
        debugger;
        setNotes(resp.data.workTime);
      })
      .catch((err) => {
        toast.error('Oops, the meetings could not be loaded');
      });
  }, [loadWorkTimer]);

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

  return (
    <div className="  tableDiv">
      <h2 className="heading-primary">
        Working Timer
        <table className="float-end">
          <tr>
            <td>
              <a
                href="javascript:"
                data-bs-target="#start_new_timer"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Work Time</span>
              </a>
            </td>
          </tr>
        </table>
      </h2>
      <table className="table  cleintTable ">
        <thead className="table-dark">
          <tr>
            <th>User</th>
            <th>Started Timer</th>
            <th>Stopped Timer</th>
            <th>Real Time</th>
            <th>Total Time</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((note, i) => (
            <tr key={i + 1}>
              <td>
                <b>{note.createdByUser['name' + language]}</b>
                <div>{note.createdByUser.email}</div>
              </td>
              <td>{note.manualTime ? '-' : note.startedAt}</td>
              <td>{note.manualTime ? '-' : note.endTime}</td>
              <td>{note.manualTime ? 'Manual Time' : 'Tracked Time'}</td>
              <td>
                {note.manualTime
                  ? utility.formatTimeDifference(note.manualTime)
                  : utility.formatTimeDifference(note.startTime, note.endTime)}
              </td>
              <td>
                <span>
                  <i
                    onClick={() => {
                      if (
                        window.confirm(
                          'Do you want to ' + (note.hideFromReport ? 'show' : 'hide') + ' this worktime in the report?'
                        )
                      ) {
                        caseAPI
                          .toggleWorktimeVisibility({
                            value: !note.hideFromReport,
                            _id: note._id
                          })
                          .then((resp) => {
                            note.hideFromReport = !note.hideFromReport;
                            setNotes([...notes]);
                            toast.success("This worktime's report visibility has been updated");
                          })
                          .catch((err) => {
                            toast.error("This worktime's report visibility could not be updated");
                          });
                      }
                    }}
                    className={'fa fa-eye ml-5 ' + (note.hideFromReport ? 'text-danger' : '')}
                    title="Control Visibility"
                  ></i>
                  <i
                    className="fa fa-circle-info ml-5"
                    title="Show Details"
                  ></i>
                </span>
              </td>
            </tr>
          ))}
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
