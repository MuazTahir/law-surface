import "./about-plateform.css"
export default function Aboutplateform(){
    return (
       <div>
        <>
  {/* Button trigger modal */}
  {/* <button
    type="button"
    className="btn btn-primary"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Launch demo modal
  </button> */}
  {/* Modal */}
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
    <div className="modal-content ">
          <div className="modal-header d-flex justify-content-between   " >
          <h5 className="modal-title" id="exampleModalLabel">
             About the platform
          <p>The platform every lawyer relies on</p>
          </h5>
          
          <button
            type="button"
            className="btn text-end"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
         
        </div>

          <div className="modal-body">
          <div className="container">
                <div>
                
                    <div className="d-flex justify-content-center mb-4">
                    <img className="w-50" src="https://lawsurface.cloud/app/view/img/ls_logo.svg"/>
                    
                    </div>
                    <div className="d-flex justify-content-center mb-4 txt-size">
                    <a className="text-dark" href="https://lscloudservice.com">LS Cloud Service.</a>
                
                All Rights Reserved. 2024
                    </div>
                  
                    <div>
                    
                       <p> This platform was designed by LS Cloud Service Company, which owns all the rights for the programming and <br></br>designing of this platform without some of the programming tools available on the internet. The platform's software <br></br> has been encrypted, and any tampering with the software may expose you to liability. Copyright protected.</p>
                    </div>
                    <div>
                        <p>
                    Holds ISO 27001 certificate of Information Security, Cybersecurity, Privacy Protection and Information Security Management System </p>
                    </div>
                    <div className="d-flex justify-content-center gap-3">
                    <i class="fa-duotone fa-light fa-globe"></i>   
                    <i class="fab fa-whatsapp"></i>
                    <i class="fa-duotone fa-light fa-envelope"></i>
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-tiktok"></i>
                    </div>
                    </div>
                </div>
            
        </div>

          
              
             
            
             
            
              <div className="modal-footer">
              <button
            type="button"
            className="text text-success close-btn"
            data-bs-dismiss="modal"
          >
            Close
          </button>

              </div>
            
            </div>
        </div>
    </div>

</>

       </div>
      
    )
}