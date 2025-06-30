"use client"

import { useRouter } from "next/navigation";
import "./styles.css";

export default function Autolm() {
  
  let router=useRouter()
  let move=router;
  return (
    <div className="container">
      <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2">
      <h4 className="text-success title-style"><i className="fal fa-mail-bulk  me-2"/>Automated letters and mailing templates (10)</h4>
      <p>
      Designing and adding WhatsApp messages or mailing templates to facilitate and speed up the process of sending updates to clients on their claims


      </p>


      <button className="btn btn-success me-2"  onClick={()=>{router.push('../newMail')}}>Add</button>
      <button className="btn btn-success"  onClick={()=>{move.push('./')}}>All Settings</button>
   
      </div>
         {/*div for all cards  */}
         <div
          className="d-flex flex-wrap justify-content-center mt-5 gap-3"
          >
            {/* User Card 1 */}
          <div
            className="bg-white p-3"
            style={{
              borderRadius: "10px",
              width: "310px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>تحديث جديد - جدول</b>
                </span>
                <div>
                  <span>
                    <b>
                    New Update-Table
                    </b>
                  </span>
                  <div>
                    <small>Update</small>
                  </div>
                  <div>
                    <small>Arabic and English</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "16px",fontWeight:"lighter" }}
              >
                <div className="text-center d-flex ">
                  <span><i class="fal fa-edit"></i></span>
                  <div>
                  <span><i class="fal fa-eye-slash ms-2"></i>
                  </span>
                  </div>
                </div>
                </div> 
              </div>
            </div>

            <div
            className="bg-white p-3"
            style={{
              borderRadius: "10px",
              width: "310px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>تحديث جديد - جدول</b>
                </span>
                <div>
                  <span>
                    <b>
                    New Update-Table
                    </b>
                  </span>
                  <div>
                    <small>Update</small>
                  </div>
                  <div>
                    <small>Arabic and English</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "16px",fontWeight:"lighter" }}
              >
                <div className="text-center d-flex ">
                  <span><i class="fal fa-edit"></i></span>
                  <div>
                  <span><i class="fal fa-eye-slash ms-2"></i>
                  </span>
                  </div>
                </div>
                </div> 
              </div>
            </div>


            <div
            className="bg-white p-3"
            style={{
              borderRadius: "10px",
              width: "310px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>تحديث جديد - جدول</b>
                </span>
                <div>
                  <span>
                    <b>
                    New Update-Table
                    </b>
                  </span>
                  <div>
                    <small>Update</small>
                  </div>
                  <div>
                    <small>Arabic and English</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "16px",fontWeight:"lighter" }}
              >
                <div className="text-center d-flex ">
                  <span><i class="fal fa-edit"></i></span>
                  <div>
                  <span><i class="fal fa-eye-slash ms-2"></i>
                  </span>
                  </div>
                </div>
                </div> 
              </div>
            </div>

            <div
            className="bg-white p-3"
            style={{
              borderRadius: "10px",
              width: "310px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>تحديث جديد - جدول</b>
                </span>
                <div>
                  <span>
                    <b>
                    New Update-Table
                    </b>
                  </span>
                  <div>
                    <small>Update</small>
                  </div>
                  <div>
                    <small>Arabic and English</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "16px",fontWeight:"lighter" }}
              >
                <div className="text-center d-flex ">
                  <span><i class="fal fa-edit"></i></span>
                  <div>
                  <span><i class="fal fa-eye-slash ms-2"></i>
                  </span>
                  </div>
                </div>
                </div> 
              </div>
            </div>

           

            </div>
            
          </div>




         

         


         









           
            
     
  );
}