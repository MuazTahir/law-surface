
import DateRangeSelector from '@/components/date-range-selector/date-range-selector'
import LineChartUser from '@/components/user-line-chart/lineChart'
import "./style.css"
import React from 'react'
import PieCharrt from '@/components/pieChart/pieChart'
import ThinBarChart from '@/components/thinBarChart/thinBarChart'
import ThickBarChart from '@/components/simpleBarCHat/simpleBarChat'
import HorizontalBarChart from '@/components/horizontalBarChart/horizontalBarChart'
import Breadcrumb from '@/components/breadCrumb/breadCrumb'

const OfficeStatistics = () => {
  const data = [
    { name: 'January 2024', Matters: 3, ExecutionFiles: 1 },
    { name: 'February 2024', Matters: 10, ExecutionFiles: 5 },
    { name: 'March 2024', Matters: 11, ExecutionFiles: 10 },
    { name: 'April 2024', Matters: 10, ExecutionFiles: 15 },
    { name: 'May 2024', Matters: 13, ExecutionFiles: 17 },
    { name: 'June 2024', Matters: 10, ExecutionFiles: 16 },
    { name: 'July 2024', Matters: 19, ExecutionFiles: 18 },
    { name: 'August 2024', Matters: 17, ExecutionFiles: 11 },
    { name: 'September 2024', Matters: 4, ExecutionFiles: 12 },
    { name: 'October 2024', Matters: 1, ExecutionFiles: 20 },
    { name: 'November 2024', Matters: 14, ExecutionFiles: 18 },
    { name: 'December 2024', Matters: 12, ExecutionFiles: 25 },
  ];
  const lineChartData = [
    { name: 'January 2024', AddCase: 147, EditCase: 38, Sessions: 119, Procedures: 26, Updates: 0, Notes: 30, Signatures: 0, Reminders: 19, Meetings: 20, Attachments: 600, Consultations: 0, Requests: 0, WorkTimers: 0, Others: 106 },
    { name: 'February 2024', AddCase: 120, EditCase: 35, Sessions: 110, Procedures: 22, Updates: 5, Notes: 28, Signatures: 0, Reminders: 16, Meetings: 0, Attachments: 550, Consultations: 0, Requests: 10, WorkTimers: 0, Others: 100 },
    { name: 'March 2024', AddCase: 130, EditCase: 40, Sessions: 115, Procedures: 24, Updates: 0, Notes: 29, Signatures: 5, Reminders: 18, Meetings: 0, Attachments: 560, Consultations: 0, Requests: 12, WorkTimers: 0, Others: 105 },
    { name: 'April 2024', AddCase: 140, EditCase: 45, Sessions: 120, Procedures: 25, Updates: 3, Notes: 32, Signatures: 0, Reminders: 20, Meetings: 0, Attachments: 590, Consultations: 0, Requests: 14, WorkTimers: 0, Others: 110 },
    { name: 'May 2024', AddCase: 150, EditCase: 50, Sessions: 125, Procedures: 30, Updates: 10, Notes: 35, Signatures: 0, Reminders: 22, Meetings: 0, Attachments: 600, Consultations: 0, Requests: 16, WorkTimers: 0, Others: 115 },
    { name: 'June 2024', AddCase: 160, EditCase: 55, Sessions: 130, Procedures: 35, Updates: 15, Notes: 38, Signatures: 0, Reminders: 24, Meetings: 50, Attachments: 610, Consultations: 0, Requests: 18, WorkTimers: 500, Others: 120 },
    { name: 'July 2024', AddCase: 170, EditCase: 60, Sessions: 135, Procedures: 40, Updates: 20, Notes: 40, Signatures: 0, Reminders: 26, Meetings: 0, Attachments: 620, Consultations: 0, Requests: 20, WorkTimers: 300, Others: 125 },
    { name: 'August 2024', AddCase: 180, EditCase: 65, Sessions: 140, Procedures: 45, Updates: 25, Notes: 42, Signatures: 0, Reminders: 28, Meetings: 0, Attachments: 630, Consultations: 0, Requests: 22, WorkTimers: 0, Others: 130 },
    { name: 'September 2024', AddCase: 190, EditCase: 70, Sessions: 145, Procedures: 50, Updates: 30, Notes: 45, Signatures: 0, Reminders: 30, Meetings: 0, Attachments: 640, Consultations: 0, Requests: 24, WorkTimers: 0, Others: 135 },
    { name: 'October 2024', AddCase: 200, EditCase: 75, Sessions: 150, Procedures: 55, Updates: 35, Notes: 48, Signatures: 0, Reminders: 32, Meetings: 0, Attachments: 650, Consultations: 0, Requests: 26, WorkTimers: 150, Others: 140 },
    { name: 'November 2024', AddCase: 210, EditCase: 80, Sessions: 155, Procedures: 60, Updates: 40, Notes: 50, Signatures: 0, Reminders: 34, Meetings: 0, Attachments: 660, Consultations: 0, Requests: 28, WorkTimers: 400, Others: 145 },
    { name: 'December 2024', AddCase: 220, EditCase: 85, Sessions: 160, Procedures: 65, Updates: 45, Notes: 53, Signatures: 0, Reminders: 36, Meetings: 4, Attachments: 670, Consultations: 0, Requests: 30, WorkTimers: 0, Others: 150 },
  ];
  const mattersData = [
    { name: 'In Process', value: 94, color: '#28a745' },
    { name: 'Finished', value: 41, color: '#dc3545' },
    { name: 'Postponed', value: 4, color: '#007bff' },
    { name: 'Stop Temporarily', value: 0, color: '#ffc107' },
    { name: 'Separated', value: 0, color: '#fd7e14' },
    { name: 'Draft', value: 0, color: '#6f42c1' },
  ];
const fileExecutionData = [
    { name: 'In Process', value: 20, color: '#28a745' },
    { name: 'Finished', value: 41, color: '#dc3545' },
    { name: 'Postponed', value: 90, color: '#007bff' },
    { name: 'Stop Temporarily', value: 20, color: '#ffc107' },
    { name: 'Separated', value: 30, color: '#fd7e14' },
    { name: 'Draft', value:50, color: '#6f42c1' },
  ];
  const mattersData2 = [
    { name: 'Civil Cases', value: 33, color: '#28a745' },
    { name: 'Criminal Cases', value: 40, color: '#dc3545' },
    { name: 'Rental Cases', value: 7, color: '#007bff' },
    { name: 'Cheques Cases', value: 38, color: '#ffc107' },
    { name: 'Mortgage Cases', value: 0, color: '#fd7e14' },
    { name: 'Sales & Seizures', value: 0, color: '#6f42c1' },
    { name: 'Personal Affairs', value: 9, color: '#17a2b8' },
    { name: 'Legal Notices', value: 1, color: '#e83e8c' },
    { name: 'Order for Payment', value: 0, color: '#20c997' },
    { name: 'General Cases', value: 15, color: '#6610f2' }
  ];
  const fileExecutionData2 = [
    { name: 'Civil Cases', value: 13, color: '#28a745' },
    { name: 'Criminal Cases', value: 80, color: '#dc3545' },
    { name: 'Rental Cases', value: 70, color: '#007bff' },
    { name: 'Cheques Cases', value: 38, color: '#ffc107' },
    { name: 'Mortgage Cases', value: 30, color: '#fd7e14' },
    { name: 'Sales & Seizures', value: 90, color: '#6f42c1' },
    { name: 'Personal Affairs', value: 9, color: '#17a2b8' },
    { name: 'Legal Notices', value: 1, color: '#e83e8c' },
    { name: 'Order for Payment', value: 20, color: '#20c997' },
    { name: 'General Cases', value: 15, color: '#6610f2' }
  ];
  
  

  const thickChartData = [
    { name: 'January 01-2024', Signatures: 5, Notes: 10, Updates: 2, Procedures: 3, Sessions: 0 },
    { name: 'February 02-2024', Signatures: 0, Notes: 0, Updates: 1, Procedures: 0, Sessions: 0 },
    { name: 'March 03-2024', Signatures: 0, Notes: 0, Updates: 0, Procedures: 0, Sessions: 0 },
    { name: 'April 04-2024', Signatures: 2, Notes: 5, Updates: 1, Procedures: 2, Sessions: 0 },
    { name: 'May 05-2024', Signatures: 20, Notes: 25, Updates: 5, Procedures: 15, Sessions: 120 },
    { name: 'June 06-2024', Signatures: 10, Notes: 15, Updates: 3, Procedures: 5, Sessions: 70 },
    { name: 'July 07-2024', Signatures: 2, Notes: 10, Updates: 1, Procedures: 0, Sessions: 40 },
    { name: 'August 08-2024', Signatures: 0, Notes: 5, Updates: 0, Procedures: 2, Sessions: 20 },
    { name: 'September 09-2024', Signatures: 0, Notes: 0, Updates: 2, Procedures: 3, Sessions: 35 },
    { name: 'October 10-2024', Signatures: 0, Notes: 0, Updates: 0, Procedures: 5, Sessions: 160 },
    { name: 'November 11-2024', Signatures: 20, Notes: 10, Updates: 5, Procedures: 0, Sessions: 140 },
    { name: 'December 12-2024', Signatures: 5, Notes: 5, Updates: 1, Procedures: 0, Sessions: 80 },
  ];
  const HorizontalBarChartData = [
    { Month: "05-2024", Attachments: 19, Requests: 22, WorkTimers: 40, FollowUps: 50, Meetings: 60, Reminders: 70 },
    { Month: "06-2024", Attachments: 19, Requests: 77, WorkTimers: 20, FollowUps: 40, Meetings: 10, Reminders: 10 },
    { Month: "07-2024", Attachments: 71, Requests: 108, WorkTimers: 10, FollowUps: 50, Meetings: 20, Reminders: 20 },
    { Month: "08-2024", Attachments: 26, Requests: 13, WorkTimers: 40, FollowUps: 30, Meetings: 10, Reminders: 30 },
    { Month: "09-2024", Attachments: 28, Requests: 80, WorkTimers: 40, FollowUps: 20, Meetings: 50, Reminders: 50 },
    { Month: "10-2024", Attachments: 109, Requests: 35, WorkTimers: 50, FollowUps: 20, Meetings: 40, Reminders: 80 },
    { Month: "11-2024", Attachments: 89, Requests: 59, WorkTimers: 20, FollowUps: 10, Meetings: 40, Reminders: 90 },
    { Month: "12-2024", Attachments: 57, Requests: 50, WorkTimers: 30, FollowUps: 70, Meetings: 20, Reminders: 10 }
  ];

  const simpleBarChartData = [
    { name: 'Consultations', value: 0, color: '#d72828' }, // Red
    { name: 'Contracts', value: 1, color: '#f7941d' },     // Orange
    { name: 'POA', value: 120, color: '#2ca02c' },         // Green
    { name: 'Clients', value: 320, color: '#3383ff' },     // Blue
  ];
  const simpleBarChartData2 = [
    { name: 'Consultations', value: 0, color: '#d72828' }, // Red
    { name: 'Contracts', value: 1, color: '#f7941d' },     // Orange
    { name: 'POA', value: 120, color: '#2ca02c' },         // Green
    { name: 'Clients', value: 320, color: '#3383ff' },     // Blue
  ];

  return (
    <>

      <div className='h-100 main-frame'>
        <Breadcrumb></Breadcrumb>

        <div className='border rounded-3 shadow-sm dateRangeWrap w-100 my-3 bg-white d-flex align-items-center' >

          <DateRangeSelector></DateRangeSelector>
        </div>
        <div className='w-100 d-flex gap-2 align-items-start justify-content-center flex-wrap flex-lg-nowrap '>

          {/* left-div */}
          <div className=' h-auto  d-flex flex-column left-div'>
          {/* LineChartUser */}
            <div>

            <LineChartUser p="New law suits and files" icon="fa-chart-pie" data={data}></LineChartUser>

            <div className='d-flex w-100 align-items-lg-start align-items-center justify-content-lg-start justify-content-center gap-2 flex-wrap flex-lg-nowrap'>

              <div className='h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-calendar-alt " style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold pe-3 '>Sessions</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>707</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Session</p>
                </div>

              </div>

              <div className='h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-file-signature" style={{ color: "#e9680d" }}></i>

                  <p className='mt-3 fw-bold '>procedures</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>73</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Procedure</p>
                </div>

              </div>
              <div className=' h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-copy " style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold pe-3 '>Updates</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>4</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Updte</p>
                </div>

              </div>

              <div className=' h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-comment-alt" style={{ color: "#e9680d" }}></i>

                  <p className='mt-3 fw-bold '>Notes</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>92</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Note</p>
                </div>

              </div>

              <div className='bg-white border rounded-3 mt-3  h-auto' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-signature" style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold pe-3 '>Signature</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>0</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Document</p>
                </div>

              </div>



            </div>
            </div>

            {/* ThinBarChart */}
            <div className='w-100 h-auto my-2'>
              <ThinBarChart data={thickChartData} icon={"fa-chart-bar"} p={"Works on claims and files"} ></ThinBarChart>
            </div>

            {/* after 2nd chart */}
            <div className='d-flex w-100 align-items-lg-start align-items-center justify-content-lg-start justify-content-center gap-2 flex-wrap flex-lg-nowrap'>

              <div className='h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-calendar-alt " style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold pe-3 '>Reminder</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>707</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Reminder</p>
                </div>

              </div>

              <div className='h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-file-signature" style={{ color: "#e9680d" }}></i>

                  <p className='mt-3 fw-bold '>Meetings</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>73</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Meetings</p>
                </div>

              </div>
              <div className=' h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-copy " style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold pe-3 '>Follow-Ups</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>4</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >FollowUp</p>
                </div>

              </div>

              <div className=' h-auto bg-white border rounded-3 mt-3' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-comment-alt" style={{ color: "#e9680d" }}></i>

                  <p className='mt-3 fw-bold '>Work Timers</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>92</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Timers</p>
                </div>

              </div>

              <div className='bg-white border rounded-3 mt-3  h-auto' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-signature ps-2" style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold ps-3 '>Approval Requests</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>0</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Requests</p>
                </div>

              </div>
              <div className='bg-white border rounded-3 mt-3  h-auto' style={{ width: "170px" }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-cabinet-filing" style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold ps-2 '>Attachments</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>942</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >File</p>
                </div>

              </div>



            </div>
            {/* Horizontal bar chart */}
            <div>
              <HorizontalBarChart data={HorizontalBarChartData} icon={"fa-chart-bar"} p={"Works on claims and files"}></HorizontalBarChart>
            </div>

            {/* ThickBarChart */}
            <div className='my-2 d-flex gap-3'>
              {/* clients */}
              <div className='w-25'>

                <div className='w-100 h-auto bg-light  '>
                  <div className='bg-white  rounded-3 ' style={{ height: 'fit-content', width: '100%' }}>

                    <div className=' d-flex align-items-center justify-content-around  ps-2' style={{width:"42%"}} >

                      <i class="fal fa-users" style={{ color: "#fbaf3a" }}></i>

                      <p className='mt-3 fw-bold '>Clients</p>
                    </div>

                    <div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

                      <span className='fw-bold fs-2 ms-3'>144</span>
                      <p className='ps-2 ' style={{ fontSize: "15px" }} >Clients</p>
                    </div>


                  </div>

                </div>
                <div className='w-100 h-auto bg-light my-2'>        <div className='bg-white  rounded-3 ' style={{ height: 'fit-content', width: '100%' }}>

                  <div className=' d-flex align-items-center justify-content-around  ps-2' style={{width:"34%"}} >

                    <i class="fal fa-file-certificate" style={{ color: "#0392ce" }}></i>

                    <p className='mt-3 fw-bold '>POA    </p>
                  </div>

                  <div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

                    <span className='fw-bold fs-2 ms-3'>123</span>
                    <p className='ps-2 ' style={{ fontSize: "15px" }} >POA</p>
                  </div>


                </div>

                </div>
                <div className='w-100 h-auto bg-light my-2'>        <div className='bg-white  rounded-3 ' style={{ height: 'fit-content', width: '100%' }}>

                  <div className=' d-flex align-items-center justify-content-around ps-2 'style={{width:"48%"}} >

                    <i class="fal fa-file-contract" style={{ color: "#b33863" }}></i>

                    <p className='mt-3 fw-bold  '>Contracts</p>
                  </div>

                  <div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

                    <span className='fw-bold fs-2 ms-3'>1</span>
                    <p className='ps-2 ' style={{ fontSize: "15px" }} >Contracts</p>
                  </div>


                </div>

                </div>
                <div className='w-100 h-auto bg-light my-2'>        <div className='bg-white  rounded-3 ' style={{ height: 'fit-content', width: '100%' }}>

                  <div className=' d-flex align-items-center justify-content-around ps-2 ' style={{width:"56%"}} >

                    <i class="fal fa-calendar-days" style={{ color: "#849aa5" }}></i>

                    <p className='mt-3 fw-bold '>Consultations</p>
                  </div>

                  <div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

                    <span className='fw-bold fs-2 ms-3'>0</span>
                    <p className='ps-2 ' style={{ fontSize: "15px" }} >Consultations</p>
                  </div>


                </div>

                </div>

              </div>
              {/* simpleBarChartData */}
              <div className='w-75 bg-white rounded-3'>

                <ThickBarChart data={simpleBarChartData} p={"Clients & Documents"} icon={"fa-file-certificate"}></ThickBarChart>
              </div>

            </div>
            {/* LineChartUser */}
            <div>
              <div>
                <LineChartUser data={lineChartData} p={"User actions on the platform"} icon={"fa-file-certificate"} ></LineChartUser>
              </div>
              <div>

                <div className=' rounded-3 d-flex w-100 gap-2 my-2 ' style={{ height: 'fit-content', backgroundColor: "#edf2f9" }}>
                    <div className='bg-white  rounded-3 mt-3 h-auto w-25' >

                      <div className='w-50 d-flex align-items-center justify-content-around ' >

                        <i class="fal fa-users" style={{ color: "#e9680d" }}></i>

                        <p className='mt-3 fw-bold '>Users</p>
                      </div>

                      <div className='w-50 d-flex align-items-end justify-content-aound '>

                        <span className='fw-bold fs-2 ms-3'>5</span>
                        <p className='ps-2' style={{ fontSize: "15px" }} >Users</p>
                      </div>

                    </div>

                  <div className='bg-white  rounded-3 mt-3 h-auto w-25 '>

                    <div className='w-75 d-flex align-items-center justify-content-around ' >

                      {/* <i class="fal fa-users " style={{ color: "#fa9902" }}></i> */}
                      <i class="fal fa-star " style={{ color: "#fa9902" }}></i>
                      <p className='mt-3 fw-bold pe-3'>Most Active</p>
                    </div>

                    <div className='w-100  d-flex align-items-end justify-content-aound '>

                      {/* <span className='fw-bold fs-2 ms-3'>5</span> */}
                      <p className='ps-2' style={{ fontSize: "15px" }} >Marwaan Dhuhli</p>
                    </div>

                  </div>
                  <div className='bg-white  rounded-3 mt-3 h-auto w-25' >

                    <div className='w-75 d-flex align-items-center justify-content-around ' >

                      <i class="fal fa-file-contract " style={{ color: "#0392ce" }}></i>

                      <p className='mt-3 fw-bold pe-3 '>Total Actions</p>
                    </div>

                    <div className='w-50 d-flex align-items-end justify-content-aound '>

                      <span className='fw-bold fs-2 ms-3'>3402</span>
                      <p className='ps-2' style={{ fontSize: "15px" }} >Procedures</p>
                    </div>

                  </div>
                  <div className='bg-white  rounded-3 mt-3 h-auto w-25' >

                    <div className='w-50 d-flex align-items-center justify-content-around ' >

                      <i class="fa fa-sign-out-alt" style={{ color: "#e9680d" }}></i>

                      <p className='mt-3 fw-bold '>Logins</p>
                    </div>

                    <div className='w-50 d-flex align-items-end justify-content-aound '>

                      <span className='fw-bold fs-2 ms-3'>1965</span>
                      <p className='ps-2' style={{ fontSize: "15px" }} >Logins</p>
                    </div>

                  </div>

                </div>

              </div>
            </div>


          </div>
          {/* right-div */}
          <div className=' h-auto   rightdiv'>

            <div className='gap-2 d-flex '>


              <div className='bg-white border rounded-3 mt-3' style={{ height: 'fit-content', width: '100%' }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-suitcase " style={{ color: "#0392ce" }}></i>

                  <p className='mt-3 fw-bold pe-3 '>Matters</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-aound '>

                  <span className='fw-bold fs-2 ms-3'>144</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Case</p>
                </div>


              </div>
              {/* 2nd */}
              <div className='bg-white border rounded-3 mt-3 ' style={{ height: 'fit-content', width: '100%' }}>

                <div className='w-75 d-flex align-items-center justify-content-around ' >

                  <i class="fal fa-suitcase ps-2 " style={{ color: "#a7194b" }}></i>

                  <p className='mt-3 fw-bold  ps-4 '>Execution Files</p>
                </div>

                <div className='w-50 d-flex align-items-end justify-content-around '>

                  <span className='fw-bold fs-2 ms-3'>82</span>
                  <p className='ps-2' style={{ fontSize: "15px" }} >Files</p>
                </div>

              </div>


            </div>

            <div className='my-2'>
              <PieCharrt matterData={mattersData} fileExecutionData={fileExecutionData} icon="fa-chart-bar" p="Files Status"></PieCharrt>

            </div>
            <div className='my-2'>
              <PieCharrt matterData={mattersData2} fileExecutionData={fileExecutionData2}icon="fa-chart-pie" iconCol={"#66b031"} p="Files Distribution"></PieCharrt>

            </div>
            {/* whatsapp reminder */}
<div>
<div className='gap-2'>
<div className='w-100 h-auto    rightdiv'>     
           <div className='bg-white border rounded-3 my-2' style={{ height: 'fit-content', width: '100%' }}>

        <div className='w-75 d-flex align-items-center justify-content-around  ' >

          <i class="fa-brands fa-whatsapp" style={{ color: "#0392ce" }}></i>

          <p className='mt-3 fw-bold pe-3 '>WhatsApp reminder message</p>
        </div>

        <div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

          <span className='fw-bold fs-2 ms-3'>144</span>
          <p className='ps-2 ' style={{ fontSize: "15px" }} >Messages</p>
        </div>


      </div>

      </div>
      {/* 2nd */}
      <div className='w-100 h-auto   rightdiv'>        <div className='bg-white border rounded-3 my-2 ' style={{ height: 'fit-content', width: '100%' }}>

<div className='w-50 d-flex align-items-center justify-content-around  ' >

  <i class="fal fa-mail-bulk" style={{ color: "#a7194b" }}></i>

  <p className='mt-3 fw-bold pe-3 '>Reminder Email</p>
</div>

<div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

  <span className='fw-bold fs-2 ms-3'>865</span>
  <p className='ps-2' style={{ fontSize: "15px" }} >mail_2</p>
</div>


</div>

</div>
      {/* 3rd */}
      <div className='w-100 h-auto   rightdiv'>        <div className='bg-white border rounded-3 ' style={{ height: 'fit-content', width: '100%' }}>

<div className='w-75 d-flex align-items-center justify-content-around ' >

  <i class="fa-brands fa-whatsapp" style={{ color: "#fa9902" }}></i>

  <p className='mt-3 fw-bold pe-3 '>WhatsApp message to clients</p>
</div>

<div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

  <span className='fw-bold fs-2 ms-3'>104</span>
  <p className='ps-2' style={{ fontSize: "15px" }} >Mesages</p>
</div>

</div>
</div>

</div>
</div>
<div className='my-2'>
<ThickBarChart data={simpleBarChartData2}></ThickBarChart>
{/* thickchartkijgah */}
</div>
<div>
<div className='w-100 h-auto   rightdiv'>        <div className='bg-white border rounded-3  my-2' style={{ height: 'fit-content', width: '100%' }}>

<div className='w-50 d-flex align-items-center justify-content-around  ' >

  <i class="fal fa-mail-bulk ps-2" style={{ color: "#0392ce" }}></i>

  <p className='mt-3 fw-bold ps-2 '>Messages Forms</p>
</div>

<div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

  <span className='fw-bold fs-2 ms-3'>10</span>
  <p className='ps-2 ' style={{ fontSize: "15px" }} >Forms</p>
</div>


</div>

</div>
<div className='w-100 h-auto  rightdiv'>        <div className='bg-white border rounded-3 my-2 ' style={{ height: 'fit-content', width: '100%' }}>

<div className=' d-flex align-items-center justify-content-around  ' style={{width:"41%"}}>

  <i class="fal fa-file-signature ps-2 " style={{ color: "#b33863" }}></i>

  <p className='mt-3 fw-bold  '>Auto Forms</p>
</div>

<div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

  <span className='fw-bold fs-2 ms-3'>13</span>
  <p className='ps-2 ' style={{ fontSize: "15px" }} >Forms</p>
</div>


</div>

</div>
<div className='w-100 h-auto   rightdiv'>        <div className='bg-white border rounded-3 my-2 ' style={{ height: 'fit-content', width: '100%' }}>

<div className=' d-flex align-items-center justify-content-around  'style={{width:"43%"}} >

  <i class="fal fa-file-invoice ps-3" style={{ color: "#708a96" }}></i>

  <p className='mt-3 fw-bold  ps-4'>Invoice Forms</p>
</div>

<div className='w-50 h-auto d-flex align-items-end justify-content-aound '>

  <span className='fw-bold fs-2 ms-3'>12</span>
  <p className='ps-2 ' style={{ fontSize: "15px" }} >Forms</p>
</div>


</div>

</div>
</div>
          </div>


        </div>


      </div>
    </>
  )
}

export default OfficeStatistics
