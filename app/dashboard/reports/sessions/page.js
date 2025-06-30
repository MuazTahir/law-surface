"use client";
import { useEffect } from "react";
// import "./styles.css";
import $ from 'jquery';
// import 'jquery-ui/ui/widgets/draggable'; 
// import 'jquery-ui/ui/widgets/droppable'; 






export default function Home(){

useEffect(()=>{

  require('jquery-ui/ui/widgets/draggable');
  require('jquery-ui/ui/widgets/droppable');

}, []);

//   document.addEventListener('DOMContentLoaded', function() {
//     var picker = new Pikaday({
//         field: document.getElementById('calendar'),
//         format: 'MM/DD/YYYY',  // Customize date format
//         minDate: new Date('1900-01-01'), // Set minimum date
//         maxDate: new Date('2099-12-31')  // Set maximum date
//     });
// });

// $(document).ready(function() {
//   $("#calendar").datepicker({
//       dateFormat: 'mm/dd/yy',  // Customize date format
//       showAnim: 'slideDown',   // Animation for showing the calendar
//       changeMonth: true,       // Allow month selection
//       changeYear: true,        // Allow year selection
//       yearRange: 'c-100:c+10'  // Set year range
//   });
// });


    let currentFiles=[
        {
            name:"Client Name(English)",
            form:"Client Legal Form(English)",
            name2:"Client Name(Arabic)",
            email:"Clients Email",
            file:"Total FIles",
            no:"Clients TRN NO.",
            id:"ID Number",
            nation:"Clients Nationality",
            card:"Cradit limit",
            card2:"Cradit balance",
            payment:"Total Payments",
            fee:"Total Fees",
            balance:"Balance",
            Snumber:"Serial Number",
            code:"Client Code",
            form2:"Client Legal Form",
            address:"Client Address",
            Url:"Website Url",
            Pno:"Passport Number",
            Pnumber:"Phone Number",
            Tmatters:"Total Matters",
            contracts:"Total Contracts",
            attorney:"Total Power of Attorney",
            comtact:"Contacts",
            nation2:"Client Nationality(English)"

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





return <div>

<div id="reports-sessions"
className="m-5" >
      <div className="d-flex justify-content-start gap-2 align-items-center " >
        <div  >
        <i class="fal fa-calendar-alt "></i>
        </div>
       <div>
       <h4  style={{color:"#0d6efd"}}  className="pt-1 mt-2   " >Report Session</h4>
       </div>
        
        </div>
        <h6 className="mt-2" >Create a report by selecting the type of data you want to export in the report and classification
            <br></br>
            when chossing filter options 
        </h6>
     
      </div>

      <div className="d-md-flex flex-wrap align-items-md-center justify-content-center gap-5 mt-5 flex-lg-nowrap  mt-lg-0 align-items-lg-start" >

      <div id="main" className="bg-white p-4">
  <h6 className="border-bottom">Sort Report</h6>

  <div className="d-flex flex-column flex-md-row justify-content-center gap-5">
    <div className="flex-grow-1 border p-3 rounded">
      <h5>Available Data</h5>
      <p className="small  ">You can drag and drop from this list to include in the report list</p>

      <div className="mb-3">
        <div className="input-group">
          <span className="input-group-text">
          <i class="fal fa-search" id="icon2"></i>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Search"
          />
        </div>
      </div>

      {/* Client Data Section */}
      <div className="border-bottom mb-4">
        <div className="d-flex align-items-center">
          <h6 className="flex-grow-1">Client Data</h6>
          <i className="fal fa-user"></i>
        </div>

        {/* Draggable Elements */}
        {currentFiles.map((file, index) => (
          <div key={index} id="drop-area" className="mt-3 p-2" style={{ minHeight: '200px' }}>
            <div className="text-start">
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.name}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.form}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.email}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.file}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.no}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.id}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.nation}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.card}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.card2}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.payment}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.fee}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.balance}</h6>
            </div>
          </div>
        ))}

        {/* Public Data Section */}
        <div className="border-bottom mt-4">
          <div className="d-flex align-items-center">
            <h6 className="flex-grow-1">File Data</h6>
            <i className="fal fa-suitcase"></i>
          </div>

          {/* Public Data Mapping */}
          {currentFiles.map((file, index) => (
            <div key={index} className="text-start mt-3">
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.Snumber}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.name2}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.form2}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.address}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.Url}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.nation2}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.Pno}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.Tmatters}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.contracts}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.attorney}</h6>
              <h6 className="small draggable" style={{ cursor: 'pointer' }}>{file.contracts}</h6>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="flex-grow-1 border p-3 rounded">
      <h5>Include in the report</h5>
      <p className="small">Include this data in the same order</p>
      <div >
        <div className="input-group mb-3">
          <span className="input-group-text">
          <i class="fal fa-search" id="icon2"></i>
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Search"
          />
        </div>

        {/* Include in Report Section */}
        {currentFiles.map((file, index) => (
          <div key={index} id="drop-area2" className="mt-3 p-2" style={{ minHeight: '200px' }}>
            <div className="text-start">
              {/* Assuming this section is for additional data */}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>


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
          <h6 style={{width:"250px"}}  className="small">Export results only when the entered search  word is available</h6>
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
          <h6 className="pt-2 pb-4 ps-2 small">Select the client(s)</h6>
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
          <h6 className="small">Define search categories</h6>
          <div className="d-flex align-items-center">
            <input type="checkbox" className="form-check-input" />
            <p className="small pt-3 ms-2">All Clients</p>
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
      <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
        <div>
          <h6 className="small">Session type</h6>
          <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
            <option>Select...</option>
            <option>Court Session</option>
            <option>Expertise Session</option>
            <option>Preparatory Session</option>
          </select>
        </div>
        <div>
          <h6 className="small">City/Governorate</h6>
          <select className="form-select mt-2" style={{ width: "200px", maxHeight: "100px", overflowY: "scroll" }}>
            <option>Select...</option>
            <option>Court Session</option>
            <option>Expertise Session</option>
            <option>Preparatory Session</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
        <div>
          <h6 className="small">Category</h6>
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
          <h6 className="small">Status</h6>
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
      </div>

      <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
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
        <div>
          <h6 className="small">All Users</h6>
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
      </div>
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

