import Lawsuits from '@/components/lawsuits/lawsuits'
import React from 'react';
import './page.css';
import DateRangeSelector from '@/components/date-range-selector/date-range-selector';
import LineChartUser from '@/components/user-line-chart/lineChart';

const Page = () => {
  const data = [
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

  return (
    <div>


      <DateRangeSelector showRight="true"></DateRangeSelector>

      <section className='mx-auto mt-5 d-flex align-items-start justify-content-between gap-3 flex-md-nowrap flex-wrap ' style={{ width: '95%' }}>


        <LineChartUser data={data} showSelect = {true} p="User actions on the platform" icon="fa-file-certificate" ></LineChartUser>


        <div className=' rounded-3' style={{ height: 'fit-content', width: '17%', backgroundColor: "#edf2f9" }}>
          <div className='bg-white border rounded-3 ' style={{ height: 'fit-content', width: '100%' }}>

            <div className='w-50 d-flex align-items-center justify-content-around ' >

              <i class="fal fa-users " style={{ color: "#e9680d" }}></i>

              <p className='mt-3 fw-bold '>Users</p>
            </div>

            <div className='w-50 d-flex align-items-end justify-content-aound '>

              <span className='fw-bold fs-2 ms-3'>5</span>
              <p className='ps-2' style={{ fontSize: "15px" }} >User</p>
            </div>

          </div>
          <div className='bg-white border rounded-3 mt-3' style={{ height: 'fit-content', width: '100%' }}>

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
          <div className='bg-white border rounded-3 mt-3' style={{ height: 'fit-content', width: '100%' }}>

            <div className='w-75 d-flex align-items-center justify-content-around ' >

              <i class="fal fa-file-contract " style={{ color: "#0392ce" }}></i>

              <p className='mt-3 fw-bold pe-3 '>Total Actions</p>
            </div>

            <div className='w-50 d-flex align-items-end justify-content-aound '>

              <span className='fw-bold fs-2 ms-3'>3402</span>
              <p className='ps-2' style={{ fontSize: "15px" }} >Procedures</p>
            </div>

          </div>
          <div className='bg-white border rounded-3 mt-3' style={{ height: 'fit-content', width: '100%' }}>

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
      </section>
<section>
<Lawsuits></Lawsuits>
</section>

    </div>

  );
};

export default Page;
