"use client";
import { useForm } from "react-hook-form";
import "./office.css";
import axios from "axios";



export default function Office(){


  let {register,handleSubmit} = useForm();

  const send = (meraData)=>{
 
    let formData = new FormData();
    formData.append("image",meraData.image[0]);
    axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/Office",formData).then((resp)=>{
      console.log(resp.data);
      
    })
    
  }



return <div>
    <div id="pad" className="bg-white rounded-3  " >
<div className="border-bottom p-2" >

  <div className="d-md-flex" >
  <form onSubmit={handleSubmit(send)}>
  <div className="container">
    <div className="row mt-5">
      <div className="col-12 col-md-6 fw-style">
        <label  
        >Office Letterhead</label>
      </div>
    </div>
    
    <div className="row align-items-center mt-3">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <input 
          {...register("image")} 
          className="form-control border fwl-style" 
          type="file"
          style={{ maxWidth: "100%" }} 
        />
      </div>
      <div className="col-12 col-md-6 text-center text-md-end">
        <button 
          type="submit" 
          className="btn btn-success">
          Upload
        </button>
      </div>
    </div>

    <div className="mt-4">
      <label className="fw-style">Content Organization</label>
      <input className="form-range" type="range" />
    </div>

    <div className="mt-4">
      <label className="fw-style">11% Top Padding</label>
      <input className="form-range" type="range" />
    </div>

    <div className="mt-4">
      <label className="fsw-style">8% Bottom Padding</label>
    </div>
  </div>
</form>

      <div style={{width:"100%"}} className="border mt-4 ms-3 " >

      </div>

  </div>
   

    </div>
  
    <div className="d-flex justify-content-md-end justify-content-center mt-3">
  <button style={{ color: "white" }} className="btn btn-success">
    Save
  </button>
</div>
   </div>
</div>


}
