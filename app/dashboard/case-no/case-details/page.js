'use client';

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import clientsAPI from '../../../apiBridge/clients';
import caseAPI from '../../../apiBridge/case';

export default function Casedetail() {
  const [clientdetail, setClientdetail] = useState([]);
  const [opponent, setOpponent] = useState([]);
  const [dispute, setDispute] = useState([]);
  const [casedetail, setCasedetail] = useState({ caseType: {}, caseStage: {}, department: {} });
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  //   const [participants, setParticipants] = useState([]);

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  useEffect(() => {
    // let items = [
    //   clientsAPI.clients({ action: 'getClients', case: caseID }),
    //   caseAPI.cases({ action: 'getOpponentsByCase', case: caseID })
    // ];

    // Promise.all(items).then((resp) => {
    //   setParticipants([...resp[0].data.values, ...resp[0].data.values]);
    // });

    caseAPI.getCase({ caseId: caseID }).then((resp) => {
      console.log('case nooooooooooooooooo data');
      console.log(resp.data.case[0]);
      if (resp.data && resp.data.case && resp.data.case.length > 0) {
        setCasedetail(resp.data.case[0]); // Set the first element of the array

        setClientdetail(resp.data.case[0].clients);
        console.log('oppooooooooooooooo');
        setOpponent(resp.data.case[0].opponents);
        setDispute(resp.data.case[0].disputes);
      }
    });
  }, []);

  return (
    <div id="case-details-component">
      <div className="content-section">
        <h2 className="heading-primary">
          Case Details
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

        {/* <div
          className="d-flex justify-content-around align-items-center flex-wrap py-2"
          style={{ borderBottom: '1px solid black' }}
        >
          <div>
            <h5>Case Details</h5>
            <div>
              <small className="text-muted">
                Last updated: Tuesday, 19 November 2024, at 12:40 PM by Marwan Dhuhli
              </small>
            </div>
          </div>

          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Attorney"
              className="rounded-circle me-2"
              style={{
                width: '45px',
                height: '45px',
                objectFit: 'cover'
              }}
            />
            <div>
              <span>altafhussainkt2033@gmail.com</span>
              <div>
                <small>Designeted Attorney</small>
              </div>
            </div>
          </div>
        </div> */}

        {/* display case detail here  */}
        <div className="container mt-2">
          <div className="row">
            <div className="col-12 p-2">
              <div className="d-flex flex-wrap justify-content-start text-center">
                {/* File No */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">File No.</span>
                  <div>
                    <small>{casedetail.fileNo?.no || 'N/A'}</small>
                  </div>
                </div>
                {/* Case No */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Case No.</span>
                  <div>
                    <small>{casedetail.caseNo || 'N/A'}</small>
                  </div>
                </div>
                {/* Case Type */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Case Type</span>
                  <div>
                    <small>{casedetail.caseType['name' + language] || 'N/A'}</small>
                  </div>
                </div>
                {/* Case Stage */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Case Stage</span>
                  <div>
                    <small>{casedetail.caseStage['name' + language] || 'N/A'}</small>
                  </div>
                </div>
                {/* Case Status */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Case Status</span>
                  <div>
                    <small>{casedetail.caseStatus?.nameEn || 'N/A'}</small>
                  </div>
                </div>
                {/* Reference */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Reference</span>
                  <div>
                    <small>{casedetail.refNo || 'N/A'}</small>
                  </div>
                </div>
                {/* Court */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Court</span>
                  <div>
                    <small>{casedetail.court?.nameEn || 'N/A'}</small>
                  </div>
                </div>
                {/* Department */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Department</span>
                  <div>
                    <small>{casedetail.department['name' + language] || 'N/A'}</small>
                  </div>
                </div>
                {/* City/Governorate */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">City/Governorate</span>
                  <div>
                    <small>{casedetail.governing?.nameEn || 'N/A'}</small>
                  </div>
                </div>
                {/* Claim Amount */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Claim Amount</span>
                  <div>
                    <small>{casedetail.claimAmount || 'N/A'}</small>
                  </div>
                </div>
                {/* Commissioning Date */}
                <div
                  className="p-2 m-2"
                  style={{ width: '150px' }}
                >
                  <span className="fw-bold">Commissioning Date</span>
                  <div>
                    <small>
                      {casedetail.comissioningDate ? new Date(casedetail.comissioningDate).toLocaleDateString() : 'N/A'}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="table-responsive">
            <h2 className="heading-primary">Dispute Parties Details</h2>
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Party</th>
                  <th>Arabic Name</th>
                  <th>English Name</th>
                  <th>Adjective</th>
                  <th>Nationality</th>
                  <th>Legal Status</th>
                  <th>Contract Details</th>
                </tr>
              </thead>
              <tbody>
                {clientdetail.map((client, index) => {
                  return (
                    <tr key={client.id || index}>
                      <td>Client</td>
                      <td>{client.clientNameAr}</td>
                      <td>{client.clientNameEn}</td>
                      <td>{client.adjective['name' + language]}</td>
                      <td>{client.nationality}</td>
                      <td>{client.legalForm['name' + language]}</td>
                      <td>{client.phoneNumber}</td>
                    </tr>
                  );
                })}

                {opponent.map((opponent, index) => {
                  return (
                    <tr key={index}>
                      <td>Opponent</td>
                      <td>{opponent.opponentName}</td>
                      <td>{opponent.opponentName}</td>
                      <td>{opponent.adjective['name' + language]}</td>
                      <td>{opponent.opponentNationality}</td>
                      <td>{opponent.opponentLegalStatus['name' + language]}</td>
                      <td>{opponent.opponentContact}</td>
                    </tr>
                  );
                })}

                {dispute
                  // TBC a dirty check
                  .filter((i) => Object.keys(i).length)
                  .map((disputy, index) => {
                    return (
                      <tr key={index}>
                        <td>{disputy.type}</td>
                        <td>{disputy.disputingPartyName}</td>
                        <td>{disputy.disputingPartyName}</td>
                        <td>{disputy.adjective['name' + language]}</td>
                        <td>{disputy.nationality || 'N/A'}</td>
                        <td>{disputy.disputingPartyLegalStatus['name' + language]}</td>
                        <td>{disputy.disputingPartyContact}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
