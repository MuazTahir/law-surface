"use client";
import axios from "axios"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import './show-clients.css';

// import { useForm } from "react-hook-form";




export default function ShowClients(){

  // let {handleSubmit,register} = useForm();


let sar = useRef();
let cas = useRef();
let number = useRef();
let file = useRef();


    let [currentFiles,setCurrentFiles] = useState([]);
    let [currentFiles2,setCurrentFiles2] = useState([]);

    useEffect(()=>{
axios.get( process.env.NEXT_PUBLIC_API_SERVER+"/api/Get").then((resp)=>{
  console.log(resp.data.users);
  setCurrentFiles(resp.data.users);
  
})
    },[])

    const search = () => {
      let data = currentFiles.filter((cas) => {
        if (sar.current.value === "") {
          return true;
        } else {
          return cas.clientNameEn.includes(sar.current.value);
        }
      });
  
      setCurrentFiles2(data);
    };


    // const start = (meraData)=>{
    //   axios.post('/api/client',meraData).then((resp)=>{
    //     console.log(resp.data);
        
    //   })
    // }


const saveData = ()=>{

 let data =   currentFiles.filter((file)=>{
    if(cas.current.value === file.legalForm){
    return true;
  }
    if(cas.current.value === "All Legal Forms"){
    return true;
  }
 })

 if(data){
  let saraMila = data.filter((dat)=>{
    return number.current.value === "Client Code";
  })
  let saraMila2 = data.filter((dat)=>{
    return number.current.value === "Legal Form";
  })
  let saraMila3 = data.filter((dat)=>{
    return number.current.value === "Total Matters";
  })

  

  if(saraMila.length >=1){
    if(file.current.value == "Z To A"){
    
        saraMila.sort((a, b) => b.idNumber.localeCompare(a.idNumber));
        setCurrentFiles2(saraMila);
   
    }else{
      saraMila.sort((a, b) => a.code.localeCompare(b.code));
      setCurrentFiles2(saraMila);

    }
  }else if(saraMila2.length >=1){
    if(file.current.value == "Z To A"){
    
      saraMila2.sort((a, b) => b.legalForm.localeCompare(a.legalForm));
      setCurrentFiles2(saraMila2);
 
  }else{
    saraMila2.sort((a, b) => a.legalForm.localeCompare(b.legalForm));
    setCurrentFiles2(saraMila2);
  }
  }else if(saraMila3.length >=1){
    if(file.current.value == "Z To A"){
    
      saraMila3.sort((a, b) => b.totalCases.localeCompare(a.totalCases));
      setCurrentFiles2(saraMila3);
 
  }else{
    saraMila3.sort((a, b) => a.totalCases.localeCompare(b.totalCases));
    setCurrentFiles2(saraMila3);
  }

  }
 } 
      }

      // const start = (meraData)=>{
      //   axios.post('/api/client',meraData).then((resp)=>{

      //   })
      // }


      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 3;
    
    
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentFiles3 = currentFiles.slice(indexOfFirstItem, indexOfLastItem);
      const currentFiles4 = currentFiles2.slice(indexOfFirstItem, indexOfLastItem);
      const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
      };
      const totalPages = Math.ceil(currentFiles.length / itemsPerPage);    
      const totalPages2 = Math.ceil(currentFiles2.length / itemsPerPage);   


return <div>



<div id="show-clients-page"  className="d-md-flex bg-white pt-2 pb-2 ps-3 rounded  " >
            <h5 className="mt-1" >Advance</h5>
            <img id="id" className="ms-3 mt-2 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl1OXPLr6KwFJR3zwGBDgvi5n6A4dUUa3Thw&s" ></img>
           <div className="d-flex" >
        
           </div>
            <div className="ms-3" >
                <div class="input-group">
                    <input ref={sar}  className="form-control" id="sar" type="search" placeholder="Search by client name,client code" aria-label="Search " aria-describedby="search-addon" />
                    <button  onClick={search} style={{width:"79px",height:"35px"}}  type="button" class=" ms-3 bg-primary text-white rounded-1 " data-mdb-ripple-init>search</button>
                    <Link href="/dashboard/add-client">
                    <i  id="cli" class="fa-solid fa-user"></i>
                    <span className="small mt-1 pt-1 " >+New Client</span>
                    </Link>
                </div>
            </div>

        </div>

        <div class="d-md-flex flex-wrap bg-white pt-2 pb-2 ps-3 rounded mt-3">
        <div class="row">
  <div class="col d-md-flex ">
  <h5 class="pt-2">Legal Form</h5>
    <i class="fa-solid fa-arrow-down-a-z pt-2 mt-1 mx-3"></i>
    <select ref={cas} class="ms-2 rounded-1 mt-1 ps-2 form-select small " style={{width: "168px", height: "35px"}}>
      <option>All Legal Forms</option>
      <option>International Bank</option>
      <option>Semi-Government</option>
      <option>Company</option>
      <option>Individual</option>
      <option>Local Bank</option>
      <option>Government</option>
    </select>
  </div>
  <div class="col d-md-flex ">
  <h5 style={{width:"97px"}}  class="pt-2">Table Sort</h5>
    <i class="fa-solid fa-arrow-down-a-z pt-2 mt-1 mx-3"></i>
    <select ref={number} class="ms-2 rounded-1 mt-1 ps-2 form-select small " style={{width: "140px", height: "35px"}}>
      <option>Client Code</option>
      <option>Total Matters</option>
      <option>Legal Form</option>
    </select>
    <select ref={file} class="ms-2 rounded-1 mt-1 ps-2 form-select small " style={{width: "97px", height: "35px"}}>
      <option>A To Z</option>
      <option>Z To A</option>
    </select>
    <button onClick={saveData}  type="button" style={{height:"35px"}} class=" mt-1 ms-1 bg-primary text-white rounded-1 " data-mdb-ripple-init>search</button>
  </div>
 
</div>

 
</div>

<div className="mt-3" >
<div class=" me-5 ms-2 text-center  ">
  <div class="d-flex flex-wrap gap-5  ">
    <div class="p-2 flex-fill col-lg-1 ">Client code</div>
    <div class="p-2 flex-fill col-lg-1 ">Client Name</div>
    <div class="p-2 flex-fill col-lg-1 ">Legal Form</div>
    <div class="p-2 flex-fill col-lg-1 ">Address</div>
    <div class="p-2 flex-fill col-lg-1 ">Total Contacts</div>
    <div class="p-2 flex-fill col-lg-3 ">Total Cases And Execution Files</div>
  </div>
</div>
</div>

{
  currentFiles4.length == 0 ?
    currentFiles3.map((file, i)=>{
        return <div key={i} className="mt-3" >
        <div id="main" class=" me-5 ms-2 bg-white text-center pt-3  ">
          <div class="d-flex flex-wrap gap-5  ">
            <div class="p-2 flex-fill col-lg-1 ">{file.idNumber}</div>
            <div class="p-2 flex-fill col-lg-1 ">{file.clientNameEn}</div>
            <div class="p-2 flex-fill col-lg-1 ">{file.legalForm}</div>
            <div class="p-2 flex-fill col-lg-1 ">{file.address}</div>
            <div class="p-2 flex-fill col-lg-1 ">{file.totalContacts}</div>
            <div class="p-2 flex-fill col-lg-3 ">{file.totalCases}</div>
          </div>
        </div>
        </div>

    
    })

    : currentFiles4.map((file, i)=>{
      return <div className="mt-3" key={i}>
      <div id="main" class=" me-5 ms-2 bg-white text-center pt-3  ">
        <div class="d-flex flex-wrap gap-5  ">
          <div class="p-2 flex-fill col-lg-1 ">{file.idNumber}</div>
          <div class="p-2 flex-fill col-lg-1 ">{file.clientNameEn}</div>
          <div class="p-2 flex-fill col-lg-1 ">{file.legalForm}</div>
          <div class="p-2 flex-fill col-lg-1 ">{file.address}</div>
          <div class="p-2 flex-fill col-lg-1 ">{file.totalContacts}</div>
          <div class="p-2 flex-fill col-lg-3 ">{file.totalCases}</div>
        </div>
      </div>
      </div>

    })
    
}


 <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
          </li>
          {[...Array(totalPages || totalPages2 ).keys()].map((number) => (
            <li key={number + 1} className={`page-item ${currentPage === number + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(number + 1)}>
                {number + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages||totalPages2 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </li>
        </ul>
      </nav> 


{/* 
<form onSubmit={handleSubmit(start)} >
  <input {...register("clientNameEn")}  ></input>
  <input {...register("legalForm")}  ></input>
  <input {...register("address")}  ></input>

  <button type="submit" >start</button>
</form> */}






</div>



}
