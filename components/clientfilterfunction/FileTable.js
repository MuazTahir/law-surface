'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import Link from 'next/link';
import './client.css';
import { useSelector } from 'react-redux';
import SortedHeader from '../sortedHeader/sortedHeader';

export default function FileTable({ fileData, onHeaderClicked }) {
  const [data, setData] = useState([]);

  function formatToDayMonthYear(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  useEffect(() => {

    setData(fileData)
    console.log("fileData:", fileData[0]);
  }, [fileData]);

  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  let color = useSelector((store) => {
    return store.authSlice.color;
  });
  return (
    <div className="tableDiv">
      <table className="table  cleintTable ">
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
        <tbody>
          {fileData.map((file) => (
            <tr key={file.fileNumber}>
              <td>
                <Link
                  href={`./case-no?id=${file._id}`}
                  className="file-status-box text-dark hover:underline !hover:underline"
                >
                  {file.caseFileNo}
                  <br />
                  <span className={`badge cs-` + file.caseStatus['nameEn'].replace(' ', '')}>
                    {file.caseStatus['name' + language]}
                  </span>
                </Link>
              </td>
              <td>
                <a
                  href={`./case-no?id=${file._id}`}
                  className="text-dark hover:underline !hover:underline"
                >
                  {file.caseNo}{' '}
                  {file.relative.length > 0 && (
                    <i className={'fa fa-link related_icon_in_list ' + (color + '-text')}></i>
                  )}
                  <br />
                  {file.fileNo['name' + language]}
                </a>
              </td>
              <td>{file.court['name' + language]}</td>
              <td>
                <ul className="list-unstyled">
                  {file.clients.map((client, index) => {
                    // debugger;
                    return (
                      <li key={index}>
                        <div>{client['clientName' + language]}</div>
                        <b>{client.adjective['name' + language]}</b>
                      </li>
                    );
                  })}
                </ul>
              </td>
              <td>
                <ul className="list-unstyled">
                  {file.opponents
                    .filter((client) => client && client.opponentName)
                    .map((client, index) => (
                      <li key={index}>
                        <div>{client.opponentName}</div>
                        <b>{client.adjective['name' + language]}</b>
                      </li>
                    ))}
                </ul>
              </td>
              <td className="sessionrelative">


                {file?.comissioningDate
                  ? (
                    <>
                      <b>First Session</b>
                      <p>
                        {formatToDayMonthYear(file.comissioningDate)}
                      </p>
                    </>
                  )
                  : <b>-</b>
                }


              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
