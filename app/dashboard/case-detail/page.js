'use client';
import './case-detail.css';
import React from 'react';

export default function CaseManagement() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', width: '100%' }}>
      <div className="container ">
        {/* <div className="menu-1 mt-3">
                    Homepage &gt; Cases Department &gt; Matters &gt; Case No. 625/7102/2024
                </div> */}

        <div className="menu-2 mt-1">
          <div className="d-flex justify-content-between align-items-center my-2 px-2">
            <div className="d-flex gap-4 flex-wrap ">
              {/* Action Links hai */}
              <a
                href="#"
                className="action-link"
              >
                Edit File
              </a>
              <a
                href="#"
                className="action-link"
              >
                Transfer Case
              </a>
              <a
                href="#"
                className="action-link"
              >
                Share Link
              </a>
              <a
                href="#"
                className="action-link"
              >
                Joinder
              </a>
              <a
                href="#"
                className="action-link"
              >
                Log
              </a>
              <a
                href="#"
                className="action-link"
              >
                Delete File
              </a>
            </div>

            <button className="btn btn-success">Related Case</button>
          </div>
        </div>

        <div className="menu-3 p-2 mt-2">
          <div className="d-flex gap-3 flex-wrap ">
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>

            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>

            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>

            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>

            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
            <div className="text-center">
              <span>1</span>
              <div>Session</div>
            </div>
          </div>
        </div>

        <div className="case-header mt-3  ">
          <div className="p-2 px-2">
            <h5>Upcoming Session - Court Session</h5>
            <p>Next session on: 2025-01-05</p>
          </div>
        </div>

        <div className="mt-3 main-section p-4">
          <div className="row ">
            <div className="col-md-3 py-3 px-5">
              <div className="sidebar">
                <h5>Main Information</h5>
                <ul className="list-unstyled">
                  <li>Case Details</li>
                  <li>Attached Files</li>
                  <li>Workflow</li>
                  <li>Related Matters</li>
                </ul>
                <h5>Procedure Management</h5>
                <ul className="list-unstyled">
                  <li>Sessions</li>
                  <li>Legal Procedures</li>
                  <li>Updates</li>
                  <li>Notes</li>
                  <li>Working Timer</li>
                </ul>
              </div>
            </div>

            <div className="col-md-9 py-3 ">
              <div className="content-section">
                <div
                  className="d-flex justify-content-around align-items-center flex-wrap py-2"
                  style={{ borderBottom: '1px solid black' }}
                >
                  <div>
                    <span>
                      <b>Case Details</b>
                    </span>
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
                      style={{ width: '45px', height: '45px', objectFit: 'cover' }}
                    />
                    <div>
                      <span>altafhussainkt2033@gmail.com</span>
                      <div>
                        <small>Designeted Attorney</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <div className="row gap-4 p-2 py-3 d-flex justify-content-start flex-wrap  ">
                    <div className="d-flex justify-content-center flex-wrap">
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10001</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10002</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10003</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10004</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10005</small>
                        </div>
                      </div>
                    </div>

                    {/* <!-- Second Row --> */}

                    <div className="d-flex justify-content-center flex-wrap">
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10001</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10002</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10003</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10004</small>
                        </div>
                      </div>
                      <div className="col-md-2 p-3">
                        <span>
                          <b>File No.</b>
                        </span>
                        <div>
                          <small>10005</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
