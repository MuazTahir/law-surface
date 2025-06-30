'use client';
import { useForm } from 'react-hook-form';
import './case.css';
import React, { useRef, useState } from 'react';
import Session from '../../../components/SessionModal/Session';
import Procedure from '../../../components/ProcedureModal/Procedure';
import Update from '../../../components/Updatemodal/Update';
import Rembursement from '../../../components/Rimbursmentmodal/Rembursement';
import Job from '../../../components/JobModal/Job';
import Payment from '../../../components/PaymentModal/Payment';
import Print from '../../../components/PrintModal/Print';
import Save from '../../../components/SaveModal/Save';
import Fees from '../../../components/FeesModal/Fees';
import Link from 'next/link';
import { loadCaseGlobal } from '@/store/auth';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { FaLanguage } from 'react-icons/fa6';
import { useDispatch, useSelector } from 'react-redux';
import AddMeeting from '@/components/addMeeting/addmeeting';
import AddRemainder from '@/components/addReminder/addremainder';
import { useSearchParams, usePathname } from 'next/navigation';
import Casedetail from './case-details/page';
import CreateInvoice from '@/components/createInvoice/createInvoice';
import AddNotes from '@/components/addNotes/addNotes';
import AddWorkTimer from '@/components/addWorkTimer/addWorkTimer';
export default function CaseManagement({ children }) {
  let [showMeeting, setShowMeeting] = useState(false);
  let [showReminder, setShowRemainder] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm();

  const path = usePathname();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Reimbursement details added successfully!');
  };

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const [casedetail, setCasedetail] = useState({ caseType: {}, caseStage: {}, department: {} });
  const [clientdetail, setClientdetail] = useState([]);
  const [opponent, setOpponent] = useState([]);
  const [dispute, setDispute] = useState([]);

  const params = useSearchParams();
  const caseID = params.get('id');

  const [currentCase, setCurrentCase] = useState(null);

  let router = useRouter();

  let sessionTypes = useSelector((store) => {
    return store.authSlice.generalTerms.sessionType;
  });

  const [sessionType, setSessionType] = useState({});
  const [noUpcoming, setNoUpcoming] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    // TBL, we are seprately loading case, not seems good
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case ', {
        action: 'getCase',
        caseId: caseID,
        token: localStorage.getItem('token')
      })
      .then((resp) => {
        console.log(resp.data.case[0]);
        if (resp.data && resp.data.case && resp.data.case.length > 0) {
          setCurrentCase(resp.data.case[0]);

          if (resp.data.case[0].nextSession.length) {
            // // sort by date
            // throw in the Redux store
            dispatch(loadCaseGlobal(resp.data.case[0]));
            let latestSession = resp.data.case[0].nextSession[0];
            setSessionType(sessionTypes.find((i) => i._id == latestSession.sessionType));
            setNoUpcoming(false);
          } else {
            setNoUpcoming(true);
          }
        }
      });

    if (path == '/dashboard/case-no') {
      router.push(`/dashboard/case-no/case-details?id=${caseID}`);
    }
  }, []);

  useEffect(() => {
    if (showMeeting || showReminder) {
      // Dynamically import Bootstrap Modal for JavaScript control
      import('bootstrap/dist/js/bootstrap.bundle').then(({ Modal, Dropdown }) => {});
    }
  }, [showMeeting, showReminder]);
  const handleEdit = () => {
    router.push(`/dashboard/add-case?_id=${caseID}`);
    // ./case-no?id=${file._id}`
  };

  // useEffect(() => {
  //   axios
  //     .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case ', {
  //       action: 'getCase',
  //       caseId: caseID
  //     })
  //     .then((resp) => {
  //       console.log('case nooooooooooooooooo data');
  //       console.log(resp.data.case[0]);
  //       if (resp.data && resp.data.case && resp.data.case.length > 0) {
  //         setCasedetail(resp.data.case[0]); // Set the first element of the array

  //         setClientdetail(resp.data.case[0].clients);
  //         console.log('oppooooooooooooooo');
  //         setOpponent(resp.data.case[0].opponents);
  //         setDispute(resp.data.case[0].disputes);
  //       }
  //     });
  // }, []);

  return (
    // style={{ backgroundColor: '#f8f9fa', width: '100%', height: '100%' }}
    <div>
      <div className="custom-breadcumb">
        <div className="menu-1 mt-3">Homepage &gt; Cases Department &gt; Matters &gt; Case No. 625/7102/2024</div>
      </div>

      {/* {Timer} */}

      <AddWorkTimer caseId={caseID}></AddWorkTimer>

      <div
        className="modal fade "
        id="case_flow_pop"
        tabIndex={-1}
        style={{}}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header ">
              <h5 className="modal-title">
                Workflow
                <p
                  className="mb-0 "
                  style={{ fontSize: '14px' }}
                >
                  Track the progress of work on this file
                </p>
              </h5>
              <button
                type="button"
                className="btn-close text-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body workflow_timeline_modal bg-light">
              {/* Timeline Items */}
              <div className="timeline-item border-bottom py-3">
                <div className="d-flex align-items-start">
                  <div
                    className="date text-muted me-3"
                    style={{ width: '120px' }}
                  >
                    03-12-2024
                  </div>
                  <div className="content">
                    <i className="icon fal fa-calendar text-success me- 2" />
                    <p className="text_in_diagram mb-1">
                      <b>A session has been added</b>
                      <br />
                      <span className="text-muted">Court Session - Next session on 2025-01-07</span>
                    </p>
                    <div className="actions_in_diagram_box">
                      <button
                        type="button"
                        className="btn btn-link p-0 text-primary"
                        data-bs-dismiss="modal"
                      >
                        View
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="timeline-item border-bottom py-3">
                <div className="d-flex align-items-start">
                  <div
                    className="date text-muted me-3"
                    style={{ width: '120px' }}
                  >
                    26-11-2024
                  </div>
                  <div className="content">
                    <i className="icon fal fa-folder-tree text-success me-2" />
                    <p className="text_in_diagram mb-0">
                      <b>Related Case</b>
                      <br />
                      <span className="text-muted">Case No. 52/7135/2024</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-item border-bottom py-3">
                <div className="d-flex align-items-start">
                  <div
                    className="date text-muted me-3"
                    style={{ width: '120px' }}
                  >
                    21-05-2024
                  </div>
                  <div className="content">
                    <i className="icon fal fa-folder-tree text-success me-2" />
                    <p className="text_in_diagram mb-0">
                      <b>Related Case</b>
                      <br />
                      <span className="text-muted">Case No. 26/1308/2023</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="timeline-item py-3">
                <div className="d-flex align-items-start">
                  <div
                    className="date text-muted me-3"
                    style={{ width: '120px' }}
                  >
                    15-05-2023
                  </div>
                  <div className="content">
                    <i className="icon fal fa-hands-helping text-success me-2" />
                    <p className="text_in_diagram mb-0">
                      <b>Commissioning Date</b>
                      <br />
                      <span className="text-muted">The date of assignment of the case</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer bg-light">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {Attachment} */}

      <div
        className="modal fade "
        id="attachements_map"
        tabIndex={-1}
        style={{ height: '270px', top: '200px' }}
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h5 className="modal-title">
                Attached Files
                <p className="text-muted">All files that have been attached to this file</p>
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="attachements_map_in_modal">
                <div className="mb-3">
                  <h6 className="fw-bold mb-2">Main Directory</h6>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="menu-2 mt-1">
        <div className="d-flex justify-content-between align-items-center my-2 px-2">
          <div className="d-flex gap-4 flex-wrap ">
            {/* Action Links hai */}
            <a
              href="#"
              id="tour_36"
              className="hide_if_this_execution_file text-dark action-link"
              onClick={handleEdit}
            >
              <i className="fal fa-edit"></i> <span>Edit File</span>
            </a>
            <a
              href="javascript:"
              data-bs-toggle="modal"
              id="transfer_btn_ribbon"
              data-bs-target="#transfer_case_modal"
              class="hide_if_this_execution_file text-dark action-link"
            >
              <i class="fal fa-share-square"></i> <span> Transfer Case</span>{' '}
            </a>
            <a
              href="javascript:"
              data-bs-toggle="modal"
              id="transfer_btn_ribbon"
              data-bs-target="#transfer_case_modal"
              class="hide_if_this_execution_file text-dark action-link action-link"
            >
              <i class="fal fa-share-square"></i> <span> Transfer Case</span>{' '}
            </a>
            <a
              href="javascript:"
              data-bs-toggle="modal"
              data-bs-target="#sorry_not_available"
              class="text-dark action-link"
            >
              <i class="fa-light fa-folder-grid"></i> <span>Joinder</span>{' '}
            </a>
            <a
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

          <button className="btn btn-success">Related Case</button>
        </div>
      </div>
      {/* ye menu 3 hai  */}
      <div className="menu-3 p-2 mt-2">
        <div className="d-flex flex-wrap  ">
          <div>
            <div className="text-center action-link2">
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addSessionModal"
              >
                <i className="fal fa-calendar-plus"></i>
                <div>
                  <span>Session</span>
                </div>
              </a>
            </div>

            {/* Include the Form1 modal */}
            <Session id={caseID} />
          </div>
          <div>
            <div className="text-center action-link2">
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addProcdurenModal"
              >
                <i className="fal fa-file-signature"></i>
                <div>
                  <span>Procedure</span>
                </div>
              </a>
            </div>

            {/* Include the Form1 modal */}
            <Procedure caseId={caseID} />
          </div>
          <div>
            <div className="text-center action-link2">
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#addUpdateModal"
              >
                <i className="fal fa-file-plus" />{' '}
                <div>
                  <span> Update</span>
                </div>{' '}
              </a>
            </div>

            {/* Include the Form1 modal */}
            <Update caseId={caseID} />
          </div>
          <div className="text-center action-link2">
            <a
              type="button"
              id="tour_44"
              data-bs-toggle="modal"
              data-bs-target="#add_note_pop"
            >
              <i class="fal fa-comment-alt-plus"></i>{' '}
              <div>
                {' '}
                <span> Note</span>
              </div>{' '}
            </a>
          </div>
          <div>
            <div
              className="text-center  action-link2"
              style={{ borderRight: '1px solid #E0E0E0', borderLeft: '0' }}
            >
              <a
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#add_reimbursement"
                id="add_reimbursement_pop"
              >
                <i class="fal fa-university"></i>
                <div>
                  {' '}
                  <span>Reimbursement</span>
                </div>{' '}
              </a>
            </div>
            {/* Include the Form1 modal */}
            <AddNotes caseId={caseID}></AddNotes>
            <Rembursement caseId={caseID} />
          </div>
          <div
            className="text-center  action-link2"
            style={{ paddingLeft: '5px' }}
          >
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#start_new_timer"
            >
              {' '}
              <i class="fal fa-clock"></i>
              <div>
                <span>Timer</span>
              </div>{' '}
            </a>
          </div>{' '}
          <div>
            <div className="text-center  action-link2">
              <a
                data-bs-toggle="modal"
                data-bs-target="#add_job_pop"
                id="add_title_to_job_task"
              >
                <i class="fal fa-users-medical"></i>
                <div>
                  {' '}
                  <span> Job Task</span>
                </div>{' '}
              </a>
            </div>{' '}
            {/* Include the Form1 modal */}
            <Job />
          </div>
          {
            <AddMeeting
              meetingStatus={showMeeting}
              setShowMeeting={setShowMeeting}
              caseId={caseID}
            />
          }
          <div className="text-center action-link2">
            <a
              // data-bs-toggle="modal"
              // data-bs-target="#add_meeting_pop"
              id="add_meeting_btn_pop"
            >
              <i class="fal fa-video-plus"></i>{' '}
              <div onClick={() => setShowMeeting(true)}>
                {' '}
                <span class="button-qtitle">Add Meeting</span>
              </div>
            </a>
          </div>
          {
            <AddRemainder
              setShowRemainder={setShowRemainder}
              remainderingStatus={showReminder}
              caseId={caseID}
            ></AddRemainder>
          }
          <div
            onClick={() => setShowRemainder(true)}
            className="text-center action-link2"
          >
            <a
              data-bs-toggle="modal"
              data-bs-target="#add_reminder_pop"
              id="reminder_title_generator"
            >
              <i class="fal fa-bell-plus"></i>{' '}
              <div>
                {' '}
                <span> Reminder</span>
              </div>{' '}
            </a>
          </div>{' '}
          <div
            className="text-center action-link2"
            style={{ borderRight: '1px solid #E0E0E0', borderLeft: '0' }}
          >
            <Link
              href={'/dashboard/add-case?rel=' + caseID}
              id="reminder_title_generator"
            >
              <i class="fal fa-folder-plus"></i>{' '}
              <div>
                {' '}
                <span> Related case</span>
              </div>{' '}
            </Link>
          </div>{' '}
          <div>
            <div className="text-center  action-link2">
              <a
                type="button"
                data-bs-target="#add_new_fee_pop"
                id="add_new_fee_pop_call_folders"
                data-bs-toggle="modal"
              >
                {' '}
                <i class="fal fa-file-invoice-dollar"></i>
                <div>
                  {' '}
                  <span>Fees</span>
                </div>
              </a>
            </div>

            {/* Include the Form1 modal */}
            <Fees id={caseID} />
          </div>
          <div>
            <div
              className="text-center action-link2"
              style={{ borderRight: '1px solid #E0E0E0', borderLeft: '0' }}
            >
              <a
                data-bs-target="#add_new_payment"
                type="button"
                id="add_new_payment_call_folders"
                data-bs-toggle="modal"
              >
                {' '}
                <i class="fal fa-money-check-alt"></i>
                <div>
                  <span>Payment</span>
                </div>{' '}
              </a>
            </div>{' '}
            {/* Include the Form1 modal */}
            <Payment id={caseID} />
            <CreateInvoice id={caseID} />
          </div>
          <div className="text-center action-link2">
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#case_flow_pop
              "
              id="hide_if_this_execution_file "
            >
              <i class="fal fa-network-wired"></i>
              <div>
                {' '}
                <span class="button-qtitle">Workflow</span>
              </div>
            </a>
          </div>
          <div
            className="text-center action-link2"
            style={{ borderRight: '1px solid #E0E0E0', borderLeft: '0' }}
          >
            <a
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#attachements_map"
              id="hide_if_this_execution_file   "
            >
              <i class="fal fa-cabinet-filing"></i>
              <div>
                <span class="button-qtitle">Attachments</span>
              </div>{' '}
            </a>
          </div>{' '}
          <div>
            <div className="text-center action-link2">
              <a
                data-bs-target="#print_case_pop"
                type="button"
                id="tour_54"
                data-bs-toggle="modal"
              >
                {' '}
                <i class="fal fa-print"></i>
                <div>
                  {' '}
                  <span>Print</span>
                </div>
              </a>
            </div>
            {/* Include the Form1 modal */}
            <Print />
          </div>
          <div>
            <div className="text-center action-link2">
              <a
                type="button"
                data-bs-target="#export_pdf_pop"
                id="tour_55"
                data-bs-toggle="modal"
              >
                <i class="fal fa-file-pdf"></i>
                <div>
                  <span>Save</span>
                </div>{' '}
              </a>
            </div>{' '}
            {/* Include the Form1 modal */}
            <Save />
          </div>
        </div>
      </div>

      {/* TBC, We again need to fetch case-details in here to update this HTML
      basically this HTML is above the router
      */}
      <div className="case-header mt-2  ">
        {noUpcoming == true && (
          <div className="p-2 px-2">
            <h6 className="no-margin">No Upcoming Sessions</h6>
            <p className="no-margin">
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#addSessionModal"
              >
                <i className="fal fa-add"></i>
                Add Session
              </a>
            </p>
          </div>
        )}
        {sessionType?._id && (
          <div className="p-2 px-2">
            <h5>Upcoming Session - {sessionType['name' + language]}</h5>
            <p>Next session on: {new Date(currentCase.nextSession[0].nextSessionDate).toDateString()}</p>
          </div>
        )}
      </div>

      <div className=" mt-2 px-3">
        <div className="d-flex gap-4">
          <div className="d-flex align-items-center">
            <small>
              <b>File NO:</b>
            </small>
            <div className="ms-1">
              <small>{currentCase?.fileNo?.no}</small>
            </div>
          </div>

          <div className="d-flex align-items-center ">
            <small>
              <b>Case No:</b>
            </small>
            <div className="ms-1">
              <small> {currentCase?.caseNo}</small>
            </div>
          </div>
          <div className="d-flex align-items-center ">
            <small>
              <b>Case Type:</b>
            </small>
            <div className="ms-1">
              <small>{currentCase?.caseType['name' + language]}</small>
            </div>
          </div>
        </div>
      </div>
      {/* over all display data here okay */}
      <div className="mt-3 main-section p-4">
        <div className="row ">
          {/* ye left side hai  */}
          <div className="col-md-3 py-3 px-5">
            <div className="sidebar">
              <h5>Main Information</h5>
              <ul className="list-unstyled">
                <Link href={'/dashboard/case-no/case-details?id=' + caseID}>Case Details</Link>
                <li>
                  <Link href={'/dashboard/case-no/updates?id=' + caseID}>Attached Files</Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/workflow?id=' + caseID}>Workflow</Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/related-cases?id=' + caseID}>
                    Related Matters{' '}
                    {currentCase?.relative?.length > 0 && (
                      <b className="bubble-badge"> {currentCase.relative.length}</b>
                    )}
                  </Link>
                </li>
              </ul>
              <h5>Procedure Management</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href={'/dashboard/case-no/case-sessions?id=' + caseID}>
                    Sessions &nbsp;
                    {currentCase?.nextSession?.length > 0 && (
                      <b className="bubble-badge"> {currentCase.nextSession.length}</b>
                    )}
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/legal-procedures?id=' + caseID}>
                    Legal Procedures &nbsp;
                    {currentCase?.legalProcedures?.length > 0 && (
                      <b className="bubble-badge">{currentCase.legalProcedures.length}</b>
                    )}
                  </Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/updates?id=' + caseID}>Updates</Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/notes?id=' + caseID}>Notes</Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/working-timer?id=' + caseID}>Working Timer</Link>
                </li>
                <Link href={'/dashboard/case-no/payment-plan?id=' + caseID}>Payment Plan</Link>
              </ul>
              <h5>Administrative Work</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href={'/dashboard/case-no/reminders?id=' + caseID}>Reminders</Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/meetings?id=' + caseID}>Meetings</Link>
                </li>
                {/* <li>Signature Requests</li> */}
                <li>
                  <Link href={'/dashboard/case-no/meetings?id=' + caseID}>Approval Requests</Link>
                </li>
              </ul>
              <h5>Financial Section</h5>
              <ul className="list-unstyled">
                <li>
                  <Link href={'/dashboard/case-no/claim-statement?id=' + caseID}>Claim Statement</Link>
                </li>
                <li>
                  <Link href={'/dashboard/case-no/issued-invoices?id=' + caseID}>Issued invoices</Link>
                </li>
              </ul>
            </div>
          </div>

          {/*  ye right side form detail hai  */}
          <div className="col-md-9 py-3 ">
            {children}
            {/* <Casedetail
              dispute={dispute}
              opponent={opponent}
              language={language}
              casedetail={casedetail}
              clientdetail={clientdetail}
            ></Casedetail> */}
          </div>

          {/* yahan yeh close hota */}
        </div>
      </div>
    </div>
  );
}
