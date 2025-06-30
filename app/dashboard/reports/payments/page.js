"use client";
import "./styles.css";
import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
// import 'jquery-ui/ui/widgets/draggable'; 
// import 'jquery-ui/ui/widgets/droppable'; 

export default function Home() {

  let sar = useRef();


  useEffect(() => {

    require('jquery-ui/ui/widgets/draggable');
    require('jquery-ui/ui/widgets/droppable');

  }, [])

  let currentFiles = [
    {
      name: "Client Name(English)",
      form: "Client Legal Form(English)",
      name2: "Client Name(Arabic)",
      email: "Clients Email",
      file: "Total FIles",
      no: "Clients TRN NO.",
      id: "ID Number",
      nation: "Clients Nationality",
      card: "Cradit limit",
      card2: "Cradit balance",
      payment: "Total Payments",
      fee: "Total Fees",
      balance: "Balance",
      Snumber: "Serial Number",
      code: "Client Code",
      form2: "Client Legal Form",
      address: "Client Address",
      Url: "Website Url",
      Pno: "Passport Number",
      Pnumber: "Phone Number",
      Tmatters: "Total Matters",
      contracts: "Total Contracts",
      attorney: "Total Power of Attorney",
      comtact: "Contacts",
      nation2: "Client Nationality(English)"

    }
  ]

  useEffect(() => {
    // Make the h6 elements draggable
    $('h6.draggable').draggable({
      revert: "invalid", // If not dropped in the drop area, revert to original position
      containment: "document" // Keeps the draggable within the document bounds
    });

    // Define the drop area
    $('#drop-area').droppable({
      accept: 'h6.draggable', // Only accept h6 elements with the draggable class
      drop: function (event, ui) {
        // When dropped, append the element to the drop area
        $(this).append(ui.helper);
        ui.helper.css({ top: 'auto', left: 'auto' }); // Reset the position to fit inside the drop area
      }
    });
    $('#drop-area2').droppable({
      accept: 'h6.draggable', // Only accept h6 elements with the draggable class
      drop: function (event, ui) {
        // When dropped, append the element to the drop area
        $(this).append(ui.helper);
        ui.helper.css({ top: 'auto', left: 'auto' }); // Reset the position to fit inside the drop area
      }
    });
  }, [currentFiles]);

  let [currentFiles2, setCurrentFiles2] = useState([]);






  return <div  >

<div className="m-5" >
<div className="d-flex flex-md-wrap justify-content-start gap-3" >
        <div className="d-flex align-items-center ">

          {/* <div  > */}
          <i class="fal fa-money-check-edit-alt m-2"></i>
          {/* </div> */}
          {/* <div> */}
          <h4 style={{ color: "#0d6efd" }} className="mb-0 lh-lg" >Report Payments</h4>
          {/* </div> */}
        </div>

      </div>
      <h6 className="mt-2" >Create a report by selecting the type of data you want to expcit in the report and classification
        <br></br>
        when chossing filter options
      </h6>
      {/* <button id="btn" className="bg-whte border-0  mt-4 " >
        <p className="mt-2" style={{ color: "#0d6efd" }} >All Settings</p>
      </button> */}
    </div>

    <div className="d-md-flex flex-wrap align-items-md-center justify-content-center gap-5 mt-5 flex-lg-nowrap  mt-lg-0 align-items-lg-start">

      <div id="main" className="bg-white p-4">
        <h6 className="border-bottom">Sort Report</h6>

        <div className="d-md-flex justify-content-center gap-5">
          <div className="border rounded p-2">
            <h5>Available Data</h5>
            <p className="smal">You can drag and drop from this list to include in the report list</p>

            <div >
              <div className="input-group mb-3">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">
                    {/* <i id="icon2" className="fas fa-magnifying-glass"></i> */}
                    <i class="fal fa-search" id="icon2"></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"

                />
              </div>

              {/* Client Data Section */}
              <div className="d-md-flex justify-content-space-between mt-4 gap-5 border-bottom">
                <h6 className="mx-5 ms-3 ps-3">Client Data</h6>
                {/* <i className="fa-solid fa-user mx-5 ms-3 ps-3"></i> */}
                <i class="fal fa-user"></i>
              </div>

              {/* Draggable Elements */}
              {currentFiles.map((file, index) => (
                <div id="drop-area" key={index} className=" mt-3" style={{ minHeight: '200px', padding: '10px' }}>
                  <div key={index} className="text-start me-5 pe-5">
                    <h6 className="small ms-4 ps-4 draggable" style={{ cursor: 'pointer' }}> {file.name}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.form}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.email}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.file}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.no}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.id}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.nation}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.card}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.card2}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.payment}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.fee}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.balance}</h6>
                  </div>
                </div>
              ))
              }

              {/* Drop Area */}
              {/* <div>
          Drop here
        </div> */}

              {/* Public Data Section */}
              <div className="d-md-flex justify-content-start gap-5 border-bottom mt-4">
                <h6 className="mx-5 ms-3 ps-3" style={{ width: "95px" }}>File Data</h6>
                {/* <i className=xx"fa-solid fa-user mx-5 ms-3 ps-3"></i> */}
                <i class="fal fa-suitcase me-4"></i>
              </div>

              {/* Public Data Mapping */}
              {currentFiles.map((file, index) => (
                <div key={index} className="text-start me-5 pe-5 mt-3">
                  {/* <h6 className="small ms-5 ps-4">{file.Snumber}</h6> */}
                </div>
              ))}
            </div>
          </div>

          <div className="h-auto border rounded p-2 ">
            <h5>Include in the report</h5>
            <p className="smal">Include this data in the same order</p>

            <div className="input-group mb-3 rounded-3 ">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  {/* <i id="icon2" className="fa-solid fa-magnifying-glass"></i> */}
                  <i class="fal fa-search" id="icon2"></i>

                </span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            {/* Include in Report Section */}
            {currentFiles.map((file, index) => (
              <div id="drop-area2" key={index} className=" mt-3 h-100" style={{ minHeight: '200px', padding: '10px' }}>
                <div key={index} className="text-start me-5 pe-5 mt-3">
                  {/* <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.name2}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.form2}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.address}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.Url}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.nation2}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.Pno}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.Tmatters}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.contracts}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.attorney}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.contracts}</h6> */}
                </div>
              </div>
            ))}

            {/* Drop Area */}
            {/* <div>
                        Drop here
                                   </div> */}
          </div>
        </div>
      </div>
      {/* <div id="main" className=" bg-white p-4 " > */}
      {/* <h6 className="border-bottom" >Filtering Options</h6>

        <div className="mt-5  " >
          <hr id="main2" />
          <div className="ms-5 ps-3" >
            <div className="ms-5 ps-5" >
              <button className="bg-primary ms-5 ps-4 rounded " >
                <h6 style={{ color: "white" }} className="mt-2 me-4  " >Download</h6>
              </button>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <div id="main" className="bg-white p-4">
        <h6 className="border-bottom">Filtering Options</h6>

        <div className="mt-5">
          <div>
            <div className="ms-3">
              <div style={{ background: "#e9ecef", height: "30px" }} className="me-5 pe-5">
                <h6 className="pt-2 ps-2 small">Define the search word</h6>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
              <div>
                <h6 style={{ width: "250px" }} className="small">Export results only when the entered search  word is available</h6>
                <input className="form-control" />
              </div>
              <div>
                <h6 className="small">Define search categories</h6>
                <select className="form-select ">
                  <option>File No.</option>
                  <option>Case No.</option>
                  <option>Reference Number</option>
                  <option>Opponent</option>
                  <option>All</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="ms-3 mt-5">
              <div style={{ background: "#e9ecef", height: "30px" }} className="me-5 pe-5">
                <h6 className="pt-2 pb-4 ps-2 small">Clients</h6>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
              <div>
                <h6 className="small">Class Name</h6>
                <select className="form-select mt-4 pt-2" style={{ width: "240px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Mohammad Alhatami - محمد الحطامي</option>
                  <option>Moaz Abdel Rehman Abboud - معاذ عبد الرحمن عبود</option>
                  <option>Lahn Al-Ramal Trading - لحن الرمال للتجارة</option>
                  <option>Faisal Yahya Muhammad Youssef - فيصل يحيى محمد يوسف</option>
                  <option>Ahmed Al-Mansour - أحمد المنصور</option>
                  <option>Nour Al-Din Al-Shamari - نور الدين الشمري</option>
                </select>
              </div>
              <div>
                <h6 className="small">Select all clients</h6>
                <div className="d-flex align-items-center mt-4">
                  <input type="checkbox" className="form-check-input" />
                  <p className="small pt-1 ms-2">All Clients</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="ms-3 mt-5 pb-3">
              <div style={{ background: "#e9ecef", height: "30px" }} className="me-5 pe-5">
                <h6 className="pt-2 ps-2 small">Other Options</h6>
              </div>
            </div>
            {/* <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
              <div>
                <h6 className="small">File type</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Select...</option>
                  <option>All Cases Type</option>
                  <option>Cases only</option>
                  <option>Execution file only</option>
                </select>
              </div>
              <div>
                <h6 className="small">File Category</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Select...</option>
                  <option>Court Session</option>
                  <option>Expertise Session</option>
                  <option>Preparatory Session</option>
                </select>
              </div>
            </div> */}

            {/* <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
              <div>
                <h6 className="small">Case Type</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option value="All Categories">All Categories</option>
                  <option value="Civil Cases">Civil Cases</option>
                  <option value="Criminal Cases">Criminal Cases</option>
                  <option value="Rental Cases">Rental Cases</option>
                  <option value="Cheques Cases">Cheques Cases</option>
                  <option value="Mortgage Cases">Mortgage Cases</option>
                  <option value="Sales & Seizures">Sales & Seizures</option>
                  <option value="Personal Affairs">Personal Affairs</option>
                  <option value="Legal Notices">Legal Notices</option>
                  <option value="Order For Payments">Order For Payments</option>
                  <option value="General Cases">General Cases</option>
                </select>
              </div>
              <div>
                <h6 className="small">Case Status</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Select Status...</option>
                  <option>In Process</option>
                  <option>Postponed</option>
                  <option>Finished</option>
                  <option>Stop Temporarily</option>
                  <option>Separated</option>
                  <option>Draft</option>
                </select>
              </div>
            </div> */}

            {/* <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">

              <div>
                <h6 className="small">Case Stage</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Select Status...</option>
                  <option>All Users</option>
                  <option>Marwan Said Al Dhuhli</option>
                  <option>Muhammad Zayid Al-Hatmi</option>
                  <option>Lawyeraldhuhli@Gmail.com</option>
                  <option>Saifalnaabilaw@Gmail.com</option>
                  <option>Mahmoud Al-Bouiqi</option>
                </select>
              </div>

              <div>
                <h6 className="small">Court</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option value="All Categories">Choose the court .....</option>
                  <option value="Civil Cases">Muscat Appeal Court</option>
                  <option value="Criminal Cases">Nizwa Appeal Court</option>
                  <option value="Rental Cases">Salalah Appeal Court</option>
                  <option value="Cheques Cases">Sohar Appeal Court</option>
                  <option value="Mortgage Cases">Barka Appeal Court</option>
                  <option value="Sales & Seizures">Rustaq Appeal Court</option>
                  <option value="Personal Affairs">Ibri Appeal Court</option>
                  <option value="Legal Notices">Al Buraimi Appeal Court</option>
                  <option value="Order For Payments">Khasab Appeal Court</option>
                  <option value="General Cases">Al Suwaiq Appeal Court</option>
                </select>
              </div>

            </div>
            <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">

              <div>
                <h6 className="small">City/Governrate</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option value="All Categories">Choose the court .....</option>
                  <option value="Civil Cases">Muscat Appeal Court</option>
                  <option value="Criminal Cases">Nizwa Appeal Court</option>
                  <option value="Rental Cases">Salalah Appeal Court</option>
                  <option value="Cheques Cases">Sohar Appeal Court</option>
                  <option value="Mortgage Cases">Barka Appeal Court</option>
                  <option value="Sales & Seizures">Rustaq Appeal Court</option>
                  <option value="Personal Affairs">Ibri Appeal Court</option>
                  <option value="Legal Notices">Al Buraimi Appeal Court</option>
                  <option value="Order For Payments">Khasab Appeal Court</option>
                  <option value="General Cases">Al Suwaiq Appeal Court</option>
                </select>
              </div>

              <div>
                <h6 className="small">Select User</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Select...</option>
                  <option>All Users</option>
                  <option>Marwan Said Al Dhuhli</option>
                  <option>Muhammad Zayid Al-Hatmi</option>
                  <option>Lawyeraldhuhli@Gmail.com</option>
                  <option>Saifalnaabilaw@Gmail.com</option>
                  <option>Mahmoud Al-Bouiqi</option>
                </select>
              </div>



            </div>
            <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">

              <div>
                <h6 className="small">Related Matters</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option value="All Categories">All Matters</option>
                  <option value="Civil Cases">Main Matters Only</option>
                  <option value="Criminal Cases">Related cases only</option>
                </select>
              </div>

              <div>
                <h6 className="small">Client Legal Form</h6>
                <select disabled className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Select...</option>
                  <option>All Users</option>
                  <option>Marwan Said Al Dhuhli</option>
                  <option>Muhammad Zayid Al-Hatmi</option>
                  <option>Lawyeraldhuhli@Gmail.com</option>
                  <option>Saifalnaabilaw@Gmail.com</option>
                  <option>Mahmoud Al-Bouiqi</option>
                </select>
              </div>



            </div> */}
            <div className="d-flex  flex-md-column justify-content-around align-items-start gap-2 pe-3 mb-0 mt-3">

              <h6 className="small">Payment Type</h6>

              <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option value="All Categories">Select..</option>
                  <option value="Civil Cases">Cheque</option>
                  <option value="Criminal Cases">Bank Transfer</option>
                  <option value="Criminal Cases">Cash</option>
                  
                </select>
            </div>

            {/* <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">

              <div>
                <h6 className="small">Commissioning Date</h6>
                <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Month...</option>
                  <option value="All Categories">1-January</option>
                  <option value="Civil Cases">2-Februay</option>
                  <option value="Criminal Cases">3-March</option>
                  <option value="Criminal Cases">4-April</option>
                  <option value="Criminal Cases">5-May</option>
                  <option value="Criminal Cases">6-June</option>
                  <option value="Criminal Cases">7-July</option>
                  <option value="Criminal Cases">8-August</option>
                  <option value="Criminal Cases">9-september</option>
                  <option value="Criminal Cases">10-October</option>
                  <option value="Criminal Cases">11-November</option>
                  <option value="Criminal Cases">12-December</option>
                </select>
              </div>

              <div>
                <h6 className="small">Commissioning Date</h6>
                <select  className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
                  <option>Year...</option>
                  <option>2005</option>
                  <option>2006</option>
                  <option>2007</option>
                  <option>2008</option>
                  <option>2009</option>
                  <option>2010</option>
                  <option>2011</option>
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                  <option>2022</option>
                  <option>2023</option>
                  <option>2024</option>
                  <option>2025</option>
                </select>
              </div>



            </div> */}
          </div>

           <div>
            <div className="ms-3 mt-5">
              <div style={{ background: "#e9ecef", height: "30px" }} className="me-5 pe-5">
                <h6 className="pt-2 ps-2 small">Determine the period</h6>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
              <div>
                <h6 className="small">From</h6>
                <input type="date" className="form-control" />
              </div>
              <div>
                <h6 className="small">To</h6>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div> 
        </div>

        <div className="d-flex justify-content-end">
          <div className="mt-4">
            <div>
              <button className="btn btn-primary">
                <h6 className="text-white my-2 mx-4">Download</h6>
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>


  </div>


}
