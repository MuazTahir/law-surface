import React from 'react';
import utility from '@/app/apiBridge/utility';

import './client.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import SortedHeader from '@/components/sortedHeader/sortedHeader';
import moment from 'moment';

export default function FileTable({ fileData, onHeaderClicked, unFollowProcedure }) {
  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  return (
    <div className="tableDiv">
      <table className="table  cleintTable ">
        {/* <thead className="table-dark"> */}
        <SortedHeader onHeaderClicked={onHeaderClicked}>
          <tr>
            <th>Reminder Date</th>
            <th>File</th>
            <th>Case No.</th>
            <th>Court</th>
            <th>Opponent Name</th>
            <th>Procedure Details</th>
            <th>Options</th>
          </tr>
        </SortedHeader>
        {/* </thead> */}
        <tbody>
          {fileData.map((file) => {
            let today = moment();
            let reminder = moment(file.reminderDate);
            let expression = '';
            let expired = false;
            let diff = Math.abs(reminder.diff(today, 'days'));

            if (!today.isBefore(reminder)) {
              expired = true;
            }

            return (
              <tr key={file.fileNumber}>
                <td>
                  <div className="form-error">{new Date(file.reminderDate).toDateString()}</div>
                  {expired ? (
                    <div>
                      <div>Expired Since</div>
                      <div>({diff}) Days</div>
                    </div>
                  ) : (
                    <div>
                      <div>To be reminded</div>
                      <div>({diff}) Days</div>
                    </div>
                  )}
                </td>
                <td>
                  <Link
                    href={`/dashboard/case-no?id=${file.case._id}`}
                    className="file-status-box text-dark hover:underline !hover:underline"
                  >
                    {file.case.caseFileNo}
                    <br />
                    <span className={`badge cs-` + file.case.caseStatus['nameEn'].replace(' ', '')}>
                      {file.case.caseStatus['name' + language]}
                    </span>
                  </Link>
                </td>
                <td>
                  <a
                    href={`/dashboard/case-no?id=${file.case._id}`}
                    className="text-dark hover:underline !hover:underline"
                  >
                    {file.case.caseNo}
                    <br />
                    <b>{file.case.fileNo['name' + language]}</b>
                  </a>
                </td>
                <td>{file.case.court['name' + language]}</td>
                <td>
                  <ul className="list-unstyled">
                    {file.case.opponents
                      .filter((client) => client && client.opponentName)
                      .map((client, index) => (
                        <li key={index}>
                          <div>{client.opponentName}</div>
                          <div>
                            <b>{client.adjective}</b>
                          </div>
                        </li>
                      ))}
                  </ul>
                </td>
                <td class="relative">
                  <div>{file.procedures_date}</div>
                  <b>{file.procedures_type.values['name' + language]}</b>
                </td>
                <td>
                  {/* This will add procedure for the concerned-case */}
                  <a className="btn btn-primary">Add Procedure</a>
                  <div>
                    {!expired && (
                      <a
                        href="#"
                        onClick={(e) => unFollowProcedure(file._id)}
                      >
                        Unfollow
                      </a>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
          {!fileData.length && (
            <tr>
              <th
                className="text-center form-error"
                colSpan={7}
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
