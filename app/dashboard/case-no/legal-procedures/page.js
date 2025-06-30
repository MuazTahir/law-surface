'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import { toast } from 'react-toastify';

import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import caseAPI from '@/app/apiBridge/case';
import API from '@/app/apiBridge/api';
import { loadReminders } from '@/store/auth';
export default function FileTable() {
  const dispatch = useDispatch();
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [reminders, setNotes] = useState([]);
  let toolTips = useSelector((store) => {
    return store.authSlice.toolTips;
  });

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
  const [fileData, setFileData] = useState([]);
  useEffect(() => {
    API.getProcecduresForCase({ company, language })
      .then((resp) => {
        debugger;
        setFileData(resp.data.procedures[0].results);
        // TBL will use when needed
        // setTotal(resp.data.procedures[0].count[0]?.total);
      })
      .catch(() => {
        toast.error('Oops, the procedures could not be loaded');
      });
  }, []);

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
        Legal Procedures
        <table className="float-end">
          <tr>
            <td>
              <a
                href="javascript:"
                data-bs-target="#addProcdurenModal"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Procedure</span>
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
          {fileData.map((note, i) => {
            let date = new Date(note.reminderDate);
            return (
              <tr key={i + 1}>
                <td>
                  <div className="row">
                    <div className="col-md-12 col-sm-12 c-row-item">
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
                                onClick={(e) => deleteProcedure(note)}
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
                              <td>
                                <b>Procedures Date</b>
                              </td>
                              <td>{new Date(note.procedures_date).toDateString()}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Procedures Type</b>
                              </td>
                              <td>{note.procedures_type.values['name' + language]}</td>
                            </tr>
                            <tr>
                              <td>
                                <b>Procedures Status</b>
                              </td>
                              <td>{note.procedures_status['name' + language]}</td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-md-3 col-sm-12">
                          <table>
                            <tr>
                              <td>
                                <b>Procedure Details</b>
                              </td>
                            </tr>
                            <tr>
                              <td>{note['procedures_detailsAr']}</td>
                            </tr>
                          </table>
                        </div>
                        <div className="col-md-4 col-sm-12">
                          <table>
                            <tr>
                              <td>
                                <b>
                                  Procedure Details<span class="grey-badge">English</span>
                                </b>
                              </td>
                            </tr>
                            <tr>
                              <td>{note['procedures_detailsEn']}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div className="row">
                        {
                          <div className="col-md-12 col-sm-12">
                            <div className="notify-badge">
                              <span className={color + '-text'}>Follow up Date</span>{' '}
                              <b>{new Date(note.reminderDate).toDateString()}</b>
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
          {!fileData.length && (
            <tr>
              <th
                className="text-center large-error"
                colSpan={5}
              >
                There are no procedures in this case
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
