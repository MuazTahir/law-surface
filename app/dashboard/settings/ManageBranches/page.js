"use client";

import { useState } from "react";
import "./branch.css";

import ContractModal from "../models2/page";
import ContractModal2 from "../models3/page";
import { useRouter } from "next/navigation";



export default function Branches(){
 


let [branch,setBranch] = useState([]);

let [addContract, setAddContract]  = useState()
let [addContract2, setAddContract2]  = useState()

// let [color,setCOlor] = useState("off");


const open = ()=>{

  setAddContract(true)
}
const open2 = ()=>{

  setAddContract2(true)
}

let move = useRouter();

return <div className="container">
      <ContractModal addContract={addContract} setAddContract={setAddContract}></ContractModal>
      <ContractModal2 addContract={addContract2} setAddContract={setAddContract2}></ContractModal2>


<div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
    <h4 className="text-success title-style" ><i className="fal fa-diagram-project me-2" />Manage Branches (0)</h4>
    <p>
    You can add branches to your account so that you can switch between branches faster without  having  to log in every time
    </p>
    <button className="btn btn-success me-2"  onClick={open}  >Add branch</button>
    <button className="btn btn-success me-2"  onClick={open2} >Branch code</button>
    <button className="btn btn-success"  onClick={()=>{move.push('./')}}>All Settings</button>
</div>
<div>
<div>
<div
  className="container mt-5 white-bg p-4 rounded-4 mb-5 py-2"
  style={{ maxWidth: '1270px' }} // Increase the width as needed
>
  <div className="table-responsive">
    <table className="table text-center mt-4 custom-table">
      <thead style={{ fontSize: '1.2rem' }}>
        <tr id="border">
          <th>Status</th>
          <th>Country</th>
          <th>License Code</th>
          <th>Branch Name (Arabic)</th>
          <th>Branch Name (English)</th>
          <th>Link Date</th>
          <th>Users</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody className="mt-4" style={{ fontSize: '0.8rem' }}>
        {branch.length === 0 ? (
          <tr>
            <td
              colSpan="8"
              className="text-center"
              style={{ borderBottom: '1px solid #dee2e6' }}
            >
              No branch or branch requests found
            </td>
          </tr>
        ) : (
          branch.map((b, index) => (
            <tr key={index}>
              <td>{b.status}</td>
              <td>{b.country}</td>
              <td>{b.licenseCode}</td>
              <td>{b.branchNameArabic}</td>
              <td>{b.branchNameEnglish}</td>
              <td>{b.linkDate}</td>
              <td>{b.users}</td>
              <td>{b.options}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
</div>





</div>
</div>




</div>




}







