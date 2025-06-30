import React from 'react';
import utility from '@/app/apiBridge/utility';

import './client.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import SortedHeader from '../sortedHeader/sortedHeader';

export default function FileTable({ fileData, onHeaderClicked }) {
  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  return (
    <div className="tableDiv">
      <table className="table  cleintTable ">
        {/* <thead className="table-dark"> */}
        <SortedHeader onHeaderClicked={onHeaderClicked}>
          <tr>
            <th>File</th>
            <th>Case No.</th>
            <th>Courts</th>
            <th>Client</th>
            <th>Opponents</th>
            <th>Session Details</th>
          </tr>
        </SortedHeader>
        {/* </thead> */}
        <tbody>
          {fileData.map((file) => (
            <tr key={file.fileNumber}>
              <td>
                <Link
                  href={`./case-no?id=${file._id}`}
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
                  href={`./case-no?id=${file._id}`}
                  className="text-dark hover:underline !hover:underline"
                >
                  {file.case.caseNo}
                  <br />
                  {file.case.fileNo['name' + language]}
                </a>
              </td>
              <td>{file.case.court['name' + language]}</td>
              <td>
                <ul className="list-unstyled">
                  {file.case.clients.map((client, index) => {
                    file.case;
                    debugger;
                    return (
                      <li key={index}>
                        <div>{client.clientNameEn}</div>
                        <b>{client.adjective['name' + language]}</b>
                      </li>
                    );
                  })}
                </ul>
              </td>
              <td>
                <ul className="list-unstyled">
                  {file.case.opponents
                    .filter((client) => client && client.opponentName)
                    .map((client, index) => (
                      <li key={index}>
                        <div>{client.opponentName}</div>
                        <b>{client.adjective['name' + language]}</b>
                      </li>
                    ))}
                </ul>
              </td>
              <td class="relative">
                {file.nextSessionDate ? (
                  <div>
                    <span>{new Date(file.nextSessionDate).toDateString()}</span> At{' '}
                    <b>{utility.convertTo12Hour(file.nextSessionTime)}</b>
                  </div>
                ) : (
                  <b>Not available</b>
                )}
                {file.previousSession && (
                  <i
                    title="Show previous session"
                    class="fa fa-circle-info default-blue-row-icon"
                    onClick={(evt) => {
                      let target = evt.target.nextElementSibling;
                      if (!target.showed) {
                        target.showed = true;
                        target.hidden = false;
                      } else {
                        target.showed = false;
                        target.hidden = true;
                      }
                    }}
                  ></i>
                )}
                <div
                  className="previous-session-info"
                  hidden
                >
                  {file.previousSession && (
                    <div>
                      <b>Previous session decision</b>{' '}
                      <small>{new Date(file.previousSession.sessionDate).toDateString()}</small>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
          {!fileData.length && (
            <tr>
              <th
                className="text-center form-error"
                colSpan={6}
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
