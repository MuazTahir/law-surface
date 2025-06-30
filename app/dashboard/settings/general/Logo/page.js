"use client"
import { useState } from "react";
 import "./Logo.css"

import { useForm } from "react-hook-form";
import axios from "axios";



export default function Headlatter(){

  let {register,handleSubmit} = useForm();



  let pics = []
let pics2 = [];
const send = (meriPic)=>{


  let formData = new FormData();
  formData.append("img",meriPic.img[0]);

axios.post( process.env.NEXT_PUBLIC_API_SERVER+"/api/Logo",formData).then((resp)=>{
  console.log(resp.data);
  
})


  


}
const send2 = (meraData2)=>{
  let formData = new FormData();
  formData.append("pic2",meraData2.pic2[0]);

axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/Logo",formData).then((resp)=>{
  console.log(resp.data);
  
})
  


}

let [img,setImg] = useState([]);
let [img2,setImg2] = useState([]);


return <div>
  <div id="pad" className="bg-white rounded-3 p-3">
  <div className="border-bottom pb-3">
    <div className="row">
      <form className="col-12 col-md-6" onSubmit={handleSubmit(send)}>
        <div>
          <div className="d-flex gap-2 fw-style">
            <label
            
            >Office Logo</label>
            <span style={{ color: "red" }}>*</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <input {...register("img")} className="border form-control fwl-style" type="file" style={{ maxWidth: "60%"}} />
            <button type="submit" className="btn btn-success ms-3">
              Save
            </button>
          </div>
        </div>
      </form>

      <form className="col-12 col-md-6 mt-3 mt-md-0" onSubmit={handleSubmit(send2)}>
        <div>
          <div className="d-flex gap-2 fw-style">
            <label>Office Stamp</label>
            <span style={{ color: "red" }}>*</span>
          </div>
          <div className="d-flex align-items-center mt-3">
            <input {...register("pic2")} className="border form-control fwl-style" type="file" style={{ maxWidth: "60%"}} />
            <button type="submit" className="btn btn-success ms-3">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>

    <div className="row mt-4">
      <div className="col-12 col-md-6 mb-3 mb-md-0">
        <div className="border" style={{ width: "100%", height: "150px" }}>
          {img.map((file, i) => (
            <div key={i} className="d-flex justify-content-center">
              <img src={"/" + file.img} alt="Logo" style={{ width: "100px" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-12 col-md-6">
        <div className="border" style={{ width: "100%", height: "150px" }}>
          {img2.map((file, i) => (
            <div key={i} className="d-flex justify-content-center">
              <img src={"/" + file.pic2} alt="Stamp" style={{ width: "100px" }} />
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-3">
      <div className="d-flex align-items-center">
        <input id="check1" className="mt-1 me-2" type="checkbox" />
        <p className="small mb-0">Display the logo in the main menu</p>
      </div>
      <div className="d-flex align-items-center">
        <input id="check2" className="mt-1 me-2" type="checkbox" />
        <p className="small mb-0">Display the logo on the login page</p>
      </div>
      <div className="d-flex align-items-center">
        <input id="check3" className="mt-1 me-2" type="checkbox" />
        <p className="small mb-0">Display the logo in the weeks roll/Agenda</p>
      </div>
    </div>
  </div>

  <div className="d-flex justify-content-md-end justify-content-center mt-3">
    <button className="btn btn-success">Save</button>
  </div>
</div>


</div>


}
