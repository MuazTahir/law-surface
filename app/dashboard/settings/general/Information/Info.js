"use client"
import { useState } from "react";
import "./Home.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { useForm } from "react-hook-form";
import axios from "axios";



export default function Information(){





    const [phone, setPhone] = useState('');

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        trigger,
      } = useForm();
      const [phoneNumber, setPhoneNumber] = useState("");
  
      const handlePhoneChange = (value, index) => {
        setValue(`contactNumber${index}`, value);
        trigger(`contactNumber${index}`);
      };
    
      const handleClientPhoneChange = (value) => {
        setPhoneNumber(value);
        setValue("phoneNumber", value);
        trigger("phoneNumber");
      };


      const sendData = (meraData)=>{

  axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/Details",meraData).then((resp)=>{
    console.log(resp.data);
    
  })

      }
  
  


return <div>

<div id="pad" className="bg-white rounded-3 mt-5 me-5 pe-5 ">
  <form onSubmit={handleSubmit(sendData)}>
    <div className="border-bottom p-2">
      <div className="container">
        <div className="row g-3">
         
          <div className="col-12 col-md-6 col-lg-3">
        <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label>Office Name</label>
       <span style={{ color: "red"}}>*</span>
       </div>
       <div className="ms-5 ps-4 fwl-style">
        Arabic
       </div>
        </div>
            <input {...register("Oname", { required: true })} placeholder="Office Name" className="form-control fwl-style" 
            
            />
            {errors.Oname && errors.Oname.type === "required" && <div className="text-danger fwl-style"  >Please Enter Name</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style " >
       <label>Office Address</label>
       <span style={{ color: "red" }}>*</span>
       </div>
       <div className="ms-5 ps-4 fwl-style" 
        
       >
        Arabic
       </div>
        </div>
            <input {...register("Oaddress", { required: true })} placeholder="Office Address" className="form-control fwl-style"  />
            {errors.Oaddress && errors.Oaddress.type === "required" && <div className="text-danger fwl-style"  >Please Enter Address</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label>VAT Percentage(Sales)</label>
       <span style={{ color: "red" }}>*</span>
       </div>
        </div>
            <input {...register("Percentage", { required: true })} placeholder="0" className="form-control fwl-style"   />
            {errors.Percentage && errors.Percentage.type === "required" && <div className="text-danger fwl-style">Please Enter Percentage</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label
      
       >Currency</label>
       <span style={{ color: "red" }}>*</span>
       </div>
     
        </div>
            <select {...register("OMR")} className="form-select fwl-style" >
              <option>OMR</option>
            </select>
          </div>

      
          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style " >
       <label
     
       >Office Name</label>
       <span style={{ color: "red" }}>*</span>
       </div>
       <div className="ms-5 ps-4 fwl-style" 
        
       >
       English
       </div>
        </div>
            <input {...register("OnameEng", { required: true })} placeholder="Office Name (English)" className="form-control fwl-style"   />
            {errors.OnameEng && errors.OnameEng.type === "required" && <div className="text-danger fwl-style">Please Enter Name in English</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label
       
       >Office Name</label>
       <span style={{ color: "red" }}>*</span>
       </div>
       <div className="ms-5 ps-4 fwl-style" 
        
       >
        English
       </div>
        </div>
            <input {...register("OaddressEng", { required: true })} placeholder="Office Address (English)" className="form-control fwl-style"   />
            {errors.OaddressEng && errors.OaddressEng.type === "required" && <div className="text-danger fwl-style" >Please Enter Address in English</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4 fw-style">
            <label
           
            >TRN No.</label>
            <input {...register("TRN", { required: true })} placeholder="TRN NO. example:10000162" className="form-control fwl-style"   />
            {errors.TRN && errors.TRN.type === "required" && <div className="text-danger fwl-style" >Please Enter TRN</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label
      
       >Session Weeks Roll</label>
       <span style={{ color: "red" }}>*</span>
       </div>
        </div>
            <select {...register("Session")} className="form-select fwl-style"   >
              <option>From Sunday To Saturday</option>
            </select>
          </div>

       
          <div className="col-12 col-md-6 col-lg-3 mt-4">
  <label htmlFor="phoneNumber" className="form-label fw-style"
  
  >
    Phone Number <span className="text-danger">*</span>
  </label>
  <div className="d-flex align-items-center">
  <PhoneInput
      {...register("PhoneNumber", { required: true })}
      international
      defaultCountry="RU"
      value={phoneNumber}
      onChange={handlePhoneChange}
      className="form-control  d-md-flex fwl-style"
      id="phoneNumber"
      placeholder="7550000047"
      style={{ flex: "1"}}  
    />
  </div>
  {errors.PhoneNumber && errors.PhoneNumber.type === "required" && (
    <div className="text-danger fwl-style" >Please Enter Phone number</div>
  )}
</div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
            <label htmlFor="faxNumber" className="form-label fw-style"
           
            >
              Fax Number <span className="text-danger">*</span>
            </label>
            <PhoneInput
              {...register("Faxnumber", { required: true })}
              international
              defaultCountry="RU"
              className="form-control d-md-flex fwl-style "
              id="faxNumber"
              placeholder="Enter Fax Number"
             
            />
            {errors.Faxnumber && errors.Faxnumber.type === "required" && <div className="text-danger fwl-style"  >Please Enter Fax number</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style " >
       <label
     
       >Oprating Company</label>
       <span style={{ color: "red" }}>*</span>
       </div>
        </div>
            <select {...register("Ocountry")} className="form-select fwl-style"  >
              <option>Country Name</option>
            </select>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label
      
       >Platform Mode</label>
       <span style={{ color: "red" }}>*</span>
       </div>
        </div>
            <select {...register("Platform")} className="form-select fwl-style"  >
              <option>Law Firm</option>
            </select>
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style" >
       <label
       
       >Email Address</label>
       <span style={{ color: "red" }}>*</span>
       </div>
        </div>
            <input {...register("Email", { required: true })} placeholder="John@gmail.com" className="form-control fwl-style "   />
            {errors.Email && errors.Email.type === "required" && <div className="text-danger fwl-style"  >Please Enter Email</div>}
          </div>

          <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className="d-md-flex gap-2 " >
       <div className="d-md-flex gap-3 fw-style " >
       <label
       
       >Website URL</label>
       <span style={{ color: "red" }}>*</span>
       </div>
        </div>
            <input {...register("Web", { required: true })} placeholder="ziac@lawsurface.com" className="form-control fwl-style"   />
            {errors.Web && errors.Web.type === "required" && <div className="text-danger fwl-style"  >Please Enter Web URL</div>}
          </div>

        </div>
      </div>
    </div>
  <div className="d-flex justify-content-md-end justify-content-center mt-3">
          <button type="submit" className="btn btn-success">
            Save
          </button>
        </div>
  </form>
</div>







</div>


}