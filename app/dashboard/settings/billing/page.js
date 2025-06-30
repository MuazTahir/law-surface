"use client"

import { useRouter } from "next/navigation";
import "./styles.css";
export default function Autoforms() {

  const router=useRouter()
  const move=router;
  return (
    <div>
        <div className="container">
        <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
      <h4 className="text-success title-style" ><i className="fal fa-file-invoice-dollar me-2" />Invoices Templates (1)</h4>
      <p>
      You can add, modify or hide invoice templates, which in turn provide different designs according to the client for the issued invoices.
      </p>
      <button className="btn btn-success me-2"  onClick={()=>{router.push('../invoiceDesign')}}>Add</button>
      <button className="btn btn-success"  onClick={()=>{move.push('./')}}>All Settings</button>
   
      </div>
          <div></div>
          {/* div for all cards */}
          <div className="d-flex flex-wrap justify-content-center mt-5 gap-3"
>
            {/* div 1 card */}
            <div
              className="bg-white p-3"
              style={{
                borderRadius: "10px",
                width: "300px",
                display: "flex",
                
  
              }}
            >
              <div
                className="d-flex"
                style={{
                  fontSize: "13px",
                }}
              >
                <div>
                  <span>
                    <b>فاتورة عامة</b>
                  </span>
                  <div>
                    <span>
                      <b>General Invoice</b>
                    </span>
                  </div>
                  <div>
                    <span>
                      <small>Last Edit: 2024-08-15</small>
                    </span>
                  </div>
                 
                </div>
              </div>
              <div
                className="ms-auto mb-4 d-flex align-items-end"
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
