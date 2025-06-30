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
          <i class="fal fa-file-export me-2"></i>
          {/* </div> */}
          {/* <div> */}
          <h4 style={{ color: "#0d6efd" }} className="mb-0 lh-lg" >Report Opponents</h4>
          {/* </div> */}
        </div>

      </div>
      <h6 className="mt-2" >Create a report by selecting the type of data you want to expcit in the report and classification
        <br></br>
        when chossing filter options
      </h6>
       <button id="btn" className="bg-whte border-0  mt-4 " >
        <p className="mt-2" style={{ color: "#0d6efd" }} >All Settings</p>
      </button>
    </div>

    <div className="d-md-flex flex-wrap align-items-md-center justify-content-center gap-5 mt-5 flex-lg-nowrap  mt-lg-0 align-items-lg-start" >

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
                <h6 className="mx-5 ms-3 ps-3">opponent Data</h6>
                {/* <i className="fa-solid fa-user mx-5 ms-3 ps-3"></i> */}
                <i class="fal fa-user-slash"></i>
              </div>

              {/* Draggable Elements */}
              {currentFiles.map((file, index) => (
                <div id="drop-area" key={index} className=" mt-3" style={{ minHeight: '200px', padding: '10px' }}>
                  <div key={index} className="text-start me-5 pe-5">
                    <h6 className="small ms-4 ps-4 draggable" style={{ cursor: 'pointer' }}> {file.name}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.form}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.email}</h6>
                    {/* <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.file}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.no}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.id}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.nation}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.card}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.card2}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.payment}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.fee}</h6>
                    <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.balance}</h6> */}
                  </div>
                </div>
              ))
              }

              {/* Drop Area */}
              {/* <div>
          Drop here
        </div> */}

              {/* Public Data Section */}
              <div className="d-md-flex justify-content-center gap-5  mt-4">
                {/* <h6 className="mx-5 ms-3 ps-3">Public Data</h6> */}
                {/* <i className="fa-solid fa-user mx-5 ms-3 ps-3"></i> */}
                {/* <i class="fal fa-clipboard-user me-4"></i> */}
              </div>

              {/* Public Data Mapping */}
              {/* {currentFiles.map((file, index) => (
                <div key={index} className="text-start me-5 pe-5 mt-3">
                  <h6 className="small ms-5 ps-4">{file.Snumber}</h6>
                </div>
              ))} */}
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
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.name2}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.form2}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.address}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.Url}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.nation2}</h6>
                  <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.Pno}</h6>
                  {/* <h6 className="small ms-4 ps-4 mt-3 draggable" style={{ cursor: 'pointer' }}>{file.Tmatters}</h6>
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
      <div id="main" className=" bg-white p-4 " >
        <h6 className="border-bottom" >Filtering Options</h6>

        <div className="mt-5  " >
          <hr id="main2" />
          <div className="ms-5 ps-3" >
            <div className="ms-5 ps-5" >
              <button className="bg-primary ms-5 ps-4 rounded " >
                <h6 style={{ color: "white" }} className="mt-2 me-4  " >Download</h6>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>


}
