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

  const loadNotesSignal = useSelector((store) => {
    return store.authSlice.signals.loadNotes;
  });

  useEffect(() => {
    caseAPI
      .getMeetings({ caseID })
      .then((resp) => {
        debugger;
        setNotes(resp.data.notes);
      })
      .catch((err) => {
        toast.error('Oops, the meetings could not be loaded');
      });
  }, [loadNotesSignal]);

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
      <h2 className="heading-primary">Meetings</h2>
      <table className="table  cleintTable ">
        {/* <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Status</th>
          </tr>
        </thead> */}
        <tbody>
          {notes.map((note, i) => (
            <tr key={i + 1}>
              <td>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <a
                      onClick={() => deleteNote(note._id)}
                      href="javascript:"
                      data-bs-target="#delete_case_modal"
                      data-bs-toggle="modal"
                      class="delete_case_request text-dark action-link"
                      file_type="0"
                    >
                      {' '}
                      <i class="fal fa-trash"></i> <span>Delete File</span>
                    </a>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="float-end">
                      <div>
                        {
                          <b>
                            {note.userDetails['name' + language]} {note.userDetails.email}
                          </b>
                        }
                      </div>
                      <div>
                        <small>{new Date(note.createdDate).toDateString()}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">{note.notes}</div>
                </div>
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
