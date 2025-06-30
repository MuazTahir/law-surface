'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import { toast } from 'react-toastify';

// import './client.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import caseAPI from '@/app/apiBridge/case';
import { loadUpdates } from '@/store/auth';
export default function FileTable({ fileData }) {
  const dispatch = useDispatch();
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [notes, setNotes] = useState([]);

  const loadNotesSignal = useSelector((store) => {
    return store.authSlice.signals.loadUpdates;
  });

  useEffect(() => {
    caseAPI
      .getUpdates({ caseID })
      .then((resp) => {
        setNotes(resp.data.notes);
      })
      .catch((err) => {
        toast.error('Oops, the updates could not be loaded');
      });
  }, [loadNotesSignal]);

  let toolTips = useSelector((store) => {
    return store.authSlice.toolTips;
  });

  const deleteUpdate = (noteId) => {
    // TBC should have a separate modal for this
    if (window.confirm('Are yo u sure you want to delete this update?')) {
      caseAPI
        .deleteUpdate({ noteId })
        .then((resp) => {
          dispatch(loadUpdates());
        })
        .catch((err) => {
          toast.error('Oops, the meeting could not be deleted');
        });
    }
  };

  return (
    <div className="  tableDiv">
      <h2 className="heading-primary">
        Updates
        <table className="float-end">
          <tr>
            <td>
              <a
                href="javascript:"
                data-bs-target="#addUpdateModal"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Update</span>
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
            let date = new Date(note.reminderDate);
            return (
              <tr key={i + 1}>
                <td>
                  <div className="row">
                    <div className="c-row-item">
                      <div className="row">
                        <div className="col-md-12 col-sm-12 ">
                          <div className="border-bottom">
                            <table className="def-btn-table">
                              <tr>
                                <td>
                                  <i
                                    title={toolTips.edit['name' + language]}
                                    class="fa fa-light fa-edit"
                                  ></i>
                                </td>
                                <td>
                                  <i
                                    title={toolTips.email['name' + language]}
                                    class="fa fa-light fa-envelope"
                                  ></i>
                                </td>
                                <td>
                                  <i
                                    title={toolTips.whatsapp['name' + language]}
                                    class="fa fa-whatsapp whatsapp_img_in_rows"
                                  ></i>
                                </td>
                                <td>
                                  <i
                                    title={toolTips.qr['name' + language]}
                                    class="fa fa-light fa-qrcode"
                                  ></i>
                                </td>
                                <td>
                                  <i
                                    title={toolTips.print['name' + language]}
                                    class="fa fa-light fa-print"
                                  ></i>
                                </td>
                                <td>
                                  <i
                                    onClick={(e) => deleteUpdate(note)}
                                    title={toolTips.delete['name' + language]}
                                    class="fa fa-light fa-trash"
                                  ></i>
                                </td>
                              </tr>
                            </table>
                          </div>
                          <div className="row">
                            <div className="col-md-5 col-sm-12">
                              <table
                                className="full-width text-left"
                                border="0"
                              >
                                <tr>
                                  <td colSpan={2}>
                                    <b>Update Date</b>
                                  </td>
                                  <td>{new Date(note.updateDate).toDateString()}</td>
                                </tr>
                                <tr>
                                  <td></td>
                                </tr>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row text-left">
                        <div className="col-md-6 col-sm-12">
                          {' '}
                          <b>Update Details</b>
                          <div>{note.updateNotesAr}</div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                          <b>Update Details English</b>
                          <div>{note.updateNotesEn}</div>
                        </div>
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
                className="text-center large-error"
                colSpan={5}
              >
                No Data Found
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
