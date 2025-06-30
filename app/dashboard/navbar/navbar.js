'use client';
import Link from 'next/link';
import './navbar.css';
import { useEffect, useState } from 'react';
import { FaRetweet } from "react-icons/fa6";
import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';

import { useDispatch, useSelector } from 'react-redux';
export default function NavbarRedux({
  setShowRemainder,
  setShowMeeting,
  setShowLanguageModal,
  setShowColorModal,
  setShowAdminstrative
}) {
  return (
    <ReduxProvider>
      <Navbar
        setShowRemainder={setShowRemainder}
        setShowMeeting={setShowMeeting}
        setShowLanguageModal={setShowLanguageModal}
        setShowColorModal={setShowColorModal}
        setShowAdminstrative={setShowAdminstrative}
      ></Navbar>
    </ReduxProvider>
  );
}

function Navbar({
  showReminder,
  setShowRemainder,
  showMeeting,
  setShowMeeting,
  showLanguageModal,
  setShowLanguageModal,
  showColorModal,
  setShowColorModal,
  adminstrativeStatus,
  setShowAdminstrative
}) {
  let dispatch = useDispatch();

  let color = useSelector((store) => {
    return store.authSlice.color;
  });


  const dropdownRef = useRef(null);
  let searchPopOver = useRef();

  const searchItem = () => {
    alert(20);
  };

  let navItem = useRef();

  useEffect(() => {
    if (showMeeting || showColorModal || showLanguageModal || adminstrativeStatus) {
      import('bootstrap/dist/js/bootstrap.bundle').then(({ Modal, Dropdown }) => { });
    }
  }, [showMeeting, showReminder, showColorModal, showLanguageModal, adminstrativeStatus]);

  return (
    <>
      <nav
        ref={navItem}
        className="navbar navbar-expand-sm navbar-light bg-light position-relative bg-white"
      >
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
          style={{ lineHeight: '15px', padding: '0px 20px' }}
        >
          <div className="d-flex logoSection gap-3 ms-3 svgcss">
            <img
              src="download.svg"
              className="logoimage iconed_logo"
              style={{ width: '55px' }}
            ></img>

            <div className="ps-2 nameSection">
              <span
                className={'p-0 ' + color + '-text'}
                style={{ color: 'green', fontSize: '13px' }}
              >
                <b> Said Al-Dhuhli Law Firm and Legal Consultations Office</b>
              </span>
              <div
                className="align-middle align-items-center"
                style={{ backgroundColor: '#edf2f9', borderRadius: '5px', width: '150px', marginTop: '5px' }}
              >
                <span
                  className=""
                  style={{ fontSize: '10px' , width: '100%', padding: '5px', color: 'green' }}
                >
                  Cases Department
                </span>
                <FaRetweet style={{ fontSize: "1rem", marginLeft: "20px" }} />

              </div>
            </div>
          </div>

          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{border: 'none', backgroundColor: 'white', color: 'green'}}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menuSection"
            id="navbarNav"
          >

            <ul
              class="navbar-nav full-width j-spa d justify-content-end"
              style={{ flexWrap: 'wrap', fontSize: '14px' }}
            >
              <li
                id="searchBox"
                class="nav-item"
                ref={searchPopOver}
              >                <div className="dropdown">
                  <a
                    href="javascript:"
                    data-bs-toggle="dropdown"
                    className="dropdown-toggle a1"
                    id="dropdownMenuButton"
                  >
                    <i class="fal myicon fa-search"></i>
                    <p>Search</p>
                  </a>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <div>Quick Search</div>
                    <input
                      className="form-control"
                      placeholder="Search by Case No., File No., Client No."
                    />
                    <br />
                    <select className="form-control">
                      <option>File No.</option>
                      <option>All</option>
                      <option>Case No.</option>
                      <option>Client No.</option>
                      <option>Opponent</option>
                    </select>
                    <button
                      onClick={searchItem}
                      className="btn btn-primary form-control myicon"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </li>
              <li class="nav-item">
                <Link
                  href="/dashboard"
                  className="texted_header_menu a1"
                >
                  <i className="fal fa-home-alt myicon "></i> <p>Homepage</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/dashboard/ClientSorting"
                  className="texted_header_menu cases_top_menu_tour a1 "
                  id="tour_4"
                >
                  <i className="fal myicon fa-suitcase"></i>
                  <p>Matters</p>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/dashboard/sessions"
                  className="texted_header_menu sessions_top_menu_tour a1 "
                  id="tour_5"
                >
                  <i className="fal fa-calendar-alt myicon"></i>
                  <p>Sessions</p>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="followDropButton"
                >
                  <i class="fa-regular fa-calendar myicon"></i>

                  <p>Follow-Ups</p>
                </a>

                <ul
                  className="dropdown-menu followups-dropdown"
                  aria-labelledby="followDropButton"

                  style={{ width: '250px', padding: '30px' }}
                >
                  <div className="dropdown-header fw-bold">Follow-Ups</div>
                  <hr className="dropdown-divider" style={{ margin: '0.5rem 0' }} />
                  <div className="d-flex flex-column justify-content-start gap-4 ">
                    <Link
                      href="/dashboard/follows/judgments"
                      className="nuetral-a d-flex align-items-center followup-item"
                    >
                      <i
                        className="fal fa-scale-balanced"
                        style={{ color: '#1d6732', fontSize: '1rem', marginRight: '12px' }}
                      ></i>
                      <div>
                        <span className="fw-bold smallhead"  >Judgments Follow-up</span>
                        <p className="small1 mb-0">Follow the latest session judgments</p>
                      </div>
                    </Link>
                    <Link
                      href="/dashboard/civil-department/follows"
                      className="nuetral-a d-flex align-items-center followup-item"
                    >
                      <i
                        className="fal fa-calendar"
                        style={{ color: '#00BCD4', fontSize: '1rem', marginRight: '12px' }}
                      ></i>
                      <div>
                        <span className="fw-bold smallhead">Procedures Follow-up</span>
                        <p className="small1 mb-0">List of procedures to follow</p>
                      </div>
                    </Link>
                  </div>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  id="accountant_drop"
                  data-bs-toggle="dropdown"
                  href="#"
                  className="texted_header_menu accountant_drop a1"
                >
                  <i className="fal fa-handshake myicon"></i>
                  <p>Services</p>
                </a>
              </li>


              <li className="nav-item">
                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="accountsDropButton"
                >
                  <i className="fal fa-usd-square myicon"></i>
                  <p>Accountant</p>
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="accountsDropButton"
                >
                  <div>Accounts & Invoices</div>
                  <div className="row">
                    <div className="col-md-6">
                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center flex-start "
                            href="/dashboard/add-case"
                          >
                            <i
                              className="fal fa-suitcase myicon "
                              style={{ color: 'green', width: '40px' }}
                            ></i>
                            <div>
                              <span className="text-style">Matters</span>
                              <p className="small">Case Fees Statement</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center"
                            href="/dashboard/add-case"
                          >
                            <i
                              className="fal fa-usd-square "
                              style={{ color: 'purple', width: '40px' }}
                            ></i>
                            <div>
                              <span className="text-style">Fees</span>

                              <p className="small">Display the fees table</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center"
                            href="/dashboard/add-case"
                          >
                            <i
                              className="fal fa-file-invoice-dollar "
                              style={{ color: 'blue', width: '40px' }}
                            ></i>
                            <div>
                              <span className="text-style">Statements</span>
                              <p className="small">Cients Statements</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center"
                            href="/dashboard/add-case"
                          >
                            <i
                              className="fal fa-calculator "
                              style={{ color: 'red', width: '40px' }}
                            ></i>
                            <div>
                              <span className="text-style">Accounting Report</span>

                              <p className="small">Entity Account Summary</p>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>

                    <div className="col-md-6">
                      <ol className="no-ls-type internal-list">
                        <li className="w-100">
                          <Link
                            className="nuetral-a d-flex align-items-center flex-start"
                            href="/dashboard/settings"
                          >
                            <i
                              className="fal fa-file-invoice  "
                              style={{ color: '#FF1493', width: '40px' }}
                            ></i>
                            <div className="w-100">
                              <span className="text-style">Invoices</span>
                              <p className="small">All Issued Invoices</p>
                            </div>
                          </Link>
                        </li>
                        <li className="w-100">
                          <Link
                            className="nuetral-a d-flex align-items-center"
                            href="/dashboard/add-case"
                          >
                            <i
                              className="fal fa-money-check-edit-alt "
                              style={{ color: '#8B008B', width: '40px' }}
                            ></i>
                            <div className="w-100">
                              <span className="text-style">Payments</span>
                              <p className="small">Received Payments</p>
                            </div>
                          </Link>
                        </li>
                        <li className="w-100">
                          <Link
                            className="nuetral-a d-flex align-items-center"
                            href="/dashboard/expenses-management"
                          >
                            <i
                              className="fal fa-coins myicon"
                              style={{ color: 'orange', width: '40px' }}
                            ></i>
                            <div className="w-100">
                              <span className="text-style">Expenses</span>
                              <p className="small">All expenses in detail</p>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </ul>
              </li>

              <li className="nav-item">
                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="clientsDropButon"
                >
                  <i class="fa-solid fa-users myicon"></i>
                  <p>Clients</p>
                </a>

                <ul
                  className="dropdown-menu "
                  aria-labelledby="clientsDropButon"
                  style={{ width: '500px', padding: '10px', marginRight: '200px !important' }}
                >
                  <div className="row">
                    <div className="col-md-12">
                      <b >Clients & Documents</b>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">

                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            href="/dashboard/clients"
                            className="nuetral-a d-flex align-items-center flex-start"
                          >
                            <i
                              className="fal fa-users "
                              style={{ color: 'green', width: '40px' }}
                            ></i>
                            <div>
                              <span  className='smallhead'>Clients</span>
                              <p className="small1">Client list and details</p>
                            </div>
                          </Link>
                        </li>
                       
                        <li>
                          <Link
                            href="/dashboard/add-client"
                            className="nuetral-a d-flex align-items-center flex-start"
                          >
                            <i
                              className="fal fa-user-plus light-green-t"
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span  className='smallhead'>Add</span>
                              <p className="small1">Add New Client</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/dashboard/contracts"
                            className="nuetral-a d-flex align-items-center flex-start "
                          >
                            <i
                              class="fal fa-file-contract blue-t "
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>Contracts</span>
                              <p className="small1">Contract Management</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center flex-start"
                            href="/dashboard/opponents"
                          >
                            <i
                              class="fal fa-users blue-t "
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>Opponents List</span>
                              <p className="small1">View all opponents</p>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>
                    <div className="col-md-6">

                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center flex-start"
                            href="/dashboard/add-case"
                          >
                            <i
                              class="fal fa-file-certificate blue-t"
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>POA</span>
                              <p className="small1">POA Management</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex align-items-center flex-start"
                            href="/dashboard/add-case"
                          >
                            <i
                              class="fal fa-user red-t"
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>Reference Contacts</span>
                              <p className="small1">Reference Contacts Management</p>
                            </div>
                          </Link>
                        </li>
                        <li className="w-100">
                          <Link
                            className="nuetral-a d-flex align-items-center flex-start"
                            href="/dashboard/add-counselling"
                          >
                            <i
                              class="fal fa-user-group  orange-t"
                              style={{ width: '40px' }}
                            ></i>
                            <div className="w-100">
                              <span  className='smallhead'>Disputing Parties</span>
                              <p className="small1 w-100">View all disputing parties</p>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </ul>

              </li>
              <li style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          // height: '56px', // match your nav height
                          // minWidth: '24px', // ensures some space
                          padding: 0,
                          margin: 0
                        }}>
                          <div
                            style={{
                              background: '#2e7d32', // green color
                              width: '1.5px',
                              height: '12px',
                              borderRadius: '2px',
                              opacity: 0.8
                            }}
                          ></div>
                        </li>
              <li className="nav-item">
                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="addDropButon"
                >
                  <i class="fa-regular myicon fa-square-plus"></i>
                  <p>Add</p>
                </a>

                <ul
                  ref={dropdownRef}
                  className="dropdown-menu"
                  aria-labelledby="addDropButon"
                >
                  <div>Quick Add</div>
                  <ol className="no-ls-type internal-list">
                    <li>
                      <a
                        onClick={() => {
                          setShowRemainder(true);
                        }}
                        className="nuetral-a d-flex justify-content-start align-items-center"
                      >
                        <i
                          className="fal fa-bell-plus orange-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>Reminder</span>
                          <p className="small">Add a general reminder</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        className="nuetral-a d-flex justify-content-start align-items-center"
                        onClick={() => setShowMeeting(true)}
                      >
                        <i
                          className="fal fa-video-plus sky-blue-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>Meeting</span>
                          <p className="small">Add a general meeting</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <Link
                        className="nuetral-a d-flex justify-content-start align-items-center"
                        href="/dashboard/add-case"
                      >
                        <i
                          className="fal fa-alarm-plus magenta-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>Working Timer</span>
                          <p className="small">Start the working timer</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nuetral-a d-flex justify-content-start align-items-center"
                        href="/dashboard/add-case"
                      >
                        <i
                          className="fal fa-folder-plus orange-red-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>New Claim</span>
                          <p className="small">Add a new case</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={() => {
                          setShowAdminstrative(true);
                        }}
                        className="nuetral-a d-flex justify-content-start align-items-center"
                      >
                        <i
                          className="fal fa-folder-plus orange-red-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>Adminstrative Announcement</span>
                          <p className="small">Announcement to reach all users</p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <Link
                        className="nuetral-a d-flex justify-content-start align-items-center"
                        href="/dashboard/add-client"
                      >
                        <i
                          className="fal fa-user-plus light-green-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>Client</span>
                          <p className="small">Add New Client</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="nuetral-a d-flex justify-content-start align-items-center"
                        href="/dashboard/add-counselling"
                      >
                        <i
                          className="fal fa-calendar purple-t"
                          style={{ width: '40px' }}
                        ></i>
                        <div>
                          <span>Consultation</span>
                          <p className="small">Add New Consultation</p>
                        </div>
                      </Link>
                    </li>
                  </ol>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  href="javascript:"
                  onClick={() => alert('bbbb')}
                  id="alertsDropdown"
                  data-bs-toggle="dropdown"
                  class="texted_header_menu smaller_version_top_menu noti_tour a1"
                >
                  {' '}
                  <i class="fal fa-bell myicon"></i> <p>Notifications</p> <span class="indicator"></span>{' '}
                </a>
              </li>


              <li class="nav-item">
                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="reportDropButton"
                >
                  <i class="fal fa-toolbox myicon"></i>
                  <p>Utilities</p>
                </a>

                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="reportDropButton"
                  style={{ width: '780px' }}
                >
                  <div className="row p-0">
                    <div
                      className="col-md-4"
                      style={{ backgroundColor: '#f2f2f2' }}
                    >
                      <div
                        className=" inner_box_title m-0 p-0 lh-lg"
                        style={{ backgroundColor: '#f2f2f2', color: 'black' }}
                      >
                        <div className="heading-item">Ancillary Services</div>

                        <ol className="no-ls-type utilities list2 text-dark">
                          <li>
                            <Link
                              className="nuetral-a"
                              href="/settings"
                            >
                              <i class="fal fa-mug-hot"></i> <span className="text-dark ms-2">Layers Chamber</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nuetral-a"
                              href="/dashboard/add-case"
                            >
                              <i class="fal fa-language"></i>
                              <span className="text-dark ms-2">Translation Offices</span>
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="nuetral-a"
                              href="/access"
                            >
                              <i class="fal fa-user-tie"></i>
                              <span className="text-dark ms-2">Notary</span>
                            </Link>
                          </li>

                          <li>
                            <Link
                              className="nuetral-a"
                              href="/access"
                            >
                              <i class="fal fa-user-headset"></i>{' '}
                              <span className="text-dark ms-2">Technical Support</span>
                            </Link>
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="heading-item lh-lg">Utilities</div>
                          <ol className="no-ls-type list2">
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-video-plus  me-2"
                                    style={{ color: '#1d6732' }}
                                  >
                                    {' '}
                                  </i>
                                  <div>
                                    <span className="text-style">Meetings</span>
                                    <p className="small">Browser all metting</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/reports/clients"
                              >
                                <div className="d-flex align-items-center">

                                  <i
                                    class="fal fa-user-clock me-2"
                                    style={{ color: '#0984ff' }}
                                  ></i>
                                  <div>
                                    <span className="text-style">Jobs Tasks</span>
                                    <p className="small">Jobs Task Management</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-clipboard-list-check me-2"
                                    style={{ color: '#3F51B5' }}
                                  ></i>

                                  <div className="ms-2">
                                    <span className="text-style">Requests</span>
                                    <p className="small">Signature and approval Requests</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-bell me-2"
                                    style={{ color: '#f1501d' }}
                                  ></i>

                                  <div className="ms-2">
                                    <span className="text-style">Notifications</span>
                                    <p className="small">general Notifications</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-clock me-2"
                                    style={{ color: '#669ae5' }}
                                  ></i>

                                  <div className="ms-2">
                                    <span className="text-style">Work Timers</span>
                                    <p className="small">Change Font Size</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ol>
                        </div>

                        <div className="col-md-6">
                          <div className="heading-item white-text lh-lg">Utilities</div>

                          <ol className="no-ls-type list2">
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/settings"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-bell-plus me-2"
                                    style={{ color: '#00BCD4' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">Reminders</span>
                                    <p className="small">Users reminder List</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-exclamation-circle me-2"
                                    style={{ color: '#E91E63' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">Automatic Alerts</span>
                                    <p className="small">Necessary Alerts on the plateform</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/access"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-external-link-alt me-2"
                                    style={{ color: '#FF9800' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">Shared Link</span>
                                    <p className="small">Manage Shared link</p>
                                  </div>
                                </div>
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="nuetral-a"
                                href="/access"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-file-invoice me-2"
                                    style={{ color: '#4CAF50' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">Auto Forms</span>
                                    <p className="small">Automatic form management</p>
                                  </div>
                                </div>
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="nuetral-a"
                                href="/access"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-bell me-2"
                                    style={{ color: '#a32934' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">All remanders</span>
                                    <p className="small">View all users reminder</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ol>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="heading-item lh-lg">Quick Tools</div>
                          <ol className="no-ls-type list2">
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-user me-3"
                                    style={{ color: '#1d6732' }}
                                  ></i>
                                  <div>
                                    <span className="text-style">Search Names</span>
                                    <p className="small">Search for the name of a client...</p>
                                  </div>
                                </div>
                              </Link>
                            </li>

                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/reports/clients"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-signature me-2"
                                    style={{ color: '#0984ff' }}
                                  ></i>
                                  <div>
                                    <span className="text-style">Varify Signature</span>
                                    <p className="small">Signature varification</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ol>
                        </div>

                        <div className="col-md-6">
                          <div className="heading-item white-text lh-lg">Utilities</div>

                          <ol className="no-ls-type list2">
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/settings"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-hashtag"
                                    style={{ color: '#00BCD4' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">Convert Numbers</span>
                                    <p className="small">Convert numberss into words</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                            <li>
                              <Link
                                className="nuetral-a"
                                href="/dashboard/add-case"
                              >
                                <div className="d-flex align-items-center">
                                  <i
                                    class="fal fa-phone-office"
                                    style={{ color: '#E91E63' }}
                                  ></i>
                                  <div className="ms-2">
                                    <span className="text-style">Office Extensions</span>
                                    <p className="small">Necessary Alerts on the plateform</p>
                                  </div>
                                </div>
                              </Link>
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="nav-item ">

                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="reportDropButton"
                >
                  <i class="fal fa-file-chart-line myicon"></i>
                  <p>Reports</p>
                </a>

                <ul
                  className="dropdown-menu p-0"
                  aria-labelledby="reportDropButton"
                >
                  <div className="row p-0">
                    <div className="col-md-4 inner_box_title  p-0 lh-lg">
                      <div className="heading-item ps-2">Statistics & Logs</div>

                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/settings"
                          >
                            <i class="fal fa-chart-pie orange-t text-style"></i> <span>Email Logs</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/add-case"
                          >
                            <i class="fab fa-whatsapp sky-blue-t text-style"></i> <span>Whatsapp Log</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/access"
                          >
                            <i class="fal fa-user-chart sky-blue-t text-style"></i> <span>Users</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="nuetral-a"
                            href="/access"
                          >
                            <i
                              class="fal fa-chart-bar text-style"
                              style={{ color: 'white' }}
                            ></i>{' '}
                            <span>Office Statistics</span>
                          </Link>
                        </li>

                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/monitoring"
                          >
                            <i
                              class="fal fa-tv me-1 text-style"
                              style={{ color: 'white' }}
                            ></i>
                            <span>Monitor Room</span>
                          </Link>
                        </li>
                      </ol>
                    </div>

                    <div className="col-md-4">
                      <div className="heading-item lh-lg">Business Reports</div>

                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/matters"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-suitcase me-2"
                                style={{ color: 'green' }}
                              ></i>
                              <div>
                                <span className="text-style">Matters</span>
                                <p className="small">Export Matters report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/clients"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-users me-2 "
                                style={{ color: 'blue' }}
                              ></i>
                              <div>
                                <span className="text-style">Clients</span>
                                <p className="small">Export Clients report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/procedures"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-file-signature me-2"
                                style={{ color: 'purple' }}
                              ></i>
                              <div>
                                <span className="text-style">Procedures</span>
                                <p className="small">Export Procedures report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/contracts"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-file-contract me-2"
                                style={{ color: 'orange' }}
                              ></i>
                              <div>
                                <span className="text-style">Contracts</span>
                                <p className="small">Export Contracts report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/statements"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-file-invoice-dollar me-2"
                                style={{ color: 'blue' }}
                              ></i>
                              <div>
                                <span className="text-style">Statements</span>
                                <p className="small">Export Statement report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/invoices"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-file-invoice me-2"
                                style={{ color: '#FF1493' }}
                              ></i>
                              <div>
                                <span className="text-style">Invoices</span>
                                <p className="small">Export Invoices report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/notes"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-comment-alt me-2"
                                style={{ color: 'blue' }}
                              ></i>
                              <div>
                                <span className="text-style">Notes</span>
                                <p className="small">Export Notes report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/worktimers"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-clock  me-2"
                                style={{ color: '#CC9900' }}
                              ></i>
                              <div>
                                <span className="text-style">Work Timers</span>
                                <p className="small">Export Work Timers report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/"
                          >
                            <div
                              className="d-flex align-items-center "
                              id="cursornone"
                            >
                              <i
                                class="fal fa-university me-2"
                                style={{ color: 'grey' }}
                              ></i>{' '}
                              <div>
                                <span className="text-style ">Reimbursement Status</span>
                                <p className="small"></p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>

                    <div className="col-md-4">
                      <div className="heading-item white-text lh-lg">DUMY</div>

                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/sessions"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-calendar-alt me-2"
                                style={{ color: 'blue' }}
                              ></i>
                              <div>
                                <span className="text-style">Sessions</span>
                                <p className="small">Export Sessions report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/updates"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-copy me-2"
                                style={{ color: '#C71585' }}
                              ></i>
                              <div>
                                <span className="text-style">updates</span>
                                <p className="small">Export Updates report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/poa"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-file-certificate me-2"
                                style={{ color: 'orange' }}
                              ></i>
                              <div>
                                <span className="text-style">POA</span>
                                <p className="small">Export POA report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/fees"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-usd-square me-2"
                                style={{ color: 'green' }}
                              ></i>
                              <div>
                                <span className="text-style">Fees</span>
                                <p className="small">Export Fees report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/payments"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-money-check-edit-alt me-2"
                                style={{ color: '#8B008B' }}
                              ></i>
                              <div>
                                <span className="text-style">Payments</span>
                                <p className="small">Export Payments report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/expenses"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-coins me-2"
                                style={{ color: 'orange' }}
                              ></i>
                              <div>
                                <span className="text-style">Expenses</span>
                                <p className="small">Export Expenses report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/opponents"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-user-slash me-2"
                                style={{ color: 'purple' }}
                              ></i>
                              <div>
                                <span className="text-style">Opponents</span>
                                <p className="small">Export Opponents report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a"
                            href="/dashboard/reports/disputingparties"
                          >
                            <div className="d-flex align-items-center">
                              <i
                                class="fal fa-users me-2"
                                style={{ color: 'grey' }}
                              ></i>
                              <div>
                                <span className="text-style">Disputing Parties</span>
                                <p className="small">Export Disputing Parties report</p>
                              </div>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </ul>
              </li>

              <li class="nav-item">

                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle a1"
                  id="contrlDropButon"
                >
                  <i class="fal fa-grip-horizontal myicon"></i>
                  <p>Control</p>
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="contrlDropButon"
                >
                  <div className='fw-bold bb'>Other Options</div>
                  <div className="row">
                    <div className="col-md-6">
                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a d-flex justify-content-start align-items-center"
                            href="/dashboard/my-account"
                          >
                            <i
                              class="fal fa-user-cog  dropicon"
                              style={{ color: "green", width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>My Account</span>
                              <p className="small1">Manage your personal account</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={(e) => setShowColorModal(true)}
                            className="nuetral-a d-flex justify-content-start align-items-center"
                            href="#"
                          >
                            <i
                              class="fal fa-palette sky-blue-t dropicon"
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>Style</span>
                              <p className="small1">Change Display Color</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex justify-content-start align-items-center"
                            href="/dashboard/add-case"
                          >
                            <i
                              class="fal fa-text-size purple-t dropicon"
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>Font size</span>
                              <p className="small1">Change Font Size</p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="nuetral-a d-flex justify-content-start align-items-center"
                            href="/billing"
                          >
                            {/* <i class="fal fa-exit sky-blue-t"></i> */}
                            <i
                              class="fal fa-address-card dropicon "
                              style={{ width: '40px' }}
                            ></i>

                            <div>
                              <span className='smallhead'>Manage Subscriptions</span>
                              <p className="small1">Upgrade or renew your package</p>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>

                    <div className="col-md-6">
                      <ol className="no-ls-type internal-list">
                        <li>
                          <Link
                            className="nuetral-a d-flex justify-content-start align-items-center"
                            href="/dashboard/settings"
                          >
                            <i
                              class="fa fa-cogs sky-blue-t dropicon"
                              style={{ width: '40px' }}
                            ></i>
                            <div>
                              <span className='smallhead'>Settings</span>
                              <p className="small1">Add a general reminder</p>
                              <p></p>
                            </div>
                          </Link>
                        </li>
                        <li>
                          <a
                            onClick={() => {
                              setShowLanguageModal(true);
                            }}
                            className="d-flex justify-content-start align-items-center"
                          >
                            <i
                              class="fal fa-globe-asia  green-t text-start dropicon"
                              style={{ color: "#E91E63", width: '40px' }}
                            ></i>
                            <div className="text-start">
                              <span className='smallhead'>Language</span>
                              <p className="small1">Change Display Language</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <Link
                            onClick={() => {
                              dispatch(setUser({}));
                            }}
                            className="nuetral-a d-flex justify-content-start align-items-center"
                            href="/access"
                          >
                            <i
                              class="fa-solid orange-t fa-right-from-bracket"
                              style={{ width: '40px' }}
                            ></i>

                            <div>
                              <span className='smallhead'>Signout</span>
                              <p className="small1">Logout of your account</p>
                            </div>
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
