    'use client';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles
import './date-range-selector.css'; // Import custom CSS for additional styling

const DateRangeSelector = ( {showRight}) => {
  return (
    <div className=" my-4 p-3 rounded bg-white  main-container m-auto ">
      <div className="row align-items-center">
        {/* Date Range Selector */}
        <div className=" col-md-6 mb-2 fw-bold  d-flex  align-items-center">
          <label className="form-label fs-6 me-2 pt-2">Select Date Range</label>
          <input
            type="text"
            className=" date-range-input"
            value="01/01/2024 - 31/12/2024"
            readOnly
            />
        </div>
 
        {/* Work Report Section */}
{ showRight ?(
        <div className='col-md-6 row  right-side-nav'>

          {/* <i className="bi bi-file-earmark-text text-danger fs-5 me-2"></i> */}
        {/* {  showRight ? ( */}
          <div className="col-md-6 mb-2 pe-0  d-flex align-items-center justify-content-end ">
          <i class="fal fa-suitcase fs-6 me-3 pb-1" style={{color:"#a7194b"}}></i>
          <p className="fw-bold m-0 ">Work Report</p>
          <select className=" select ms-3   rounded " style={{border: "1px solid #ced4da"}}>
            <option>Select...</option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>
        </div>
        {/* // ):""} */}
        {/* {  showRight ? ( */}

        <div className="col-md-6  mb-2 p-0 select-container d-flex align-items-center justify-content-end">
          <select className="select me-2 rounded " style={{border: "1px solid #ced4da"}}>
            <option>Actions Report</option>
            <option>Action 1</option>
            <option>Action 2</option>
          </select>
          <button className="py-1 px-4 border-0 rounded btn-success">Download</button>
        </div>
        {/* ):""} */}
      

        </div>):""}
        {/* Actions and Download */}
      </div>
    </div>
  );
};

export default DateRangeSelector;
