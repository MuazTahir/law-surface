import "./style.css"
import React from 'react'

const Notary = () => {
  return (
    <div>
      <div className="m-5" >
        <div className="d-flex flex-md-wrap justify-content-start gap-3" >
          <div className="d-flex align-items-center ">

            {/* <div  > */}
            <i id="heading" class="fal fa-user-tie fs-5"></i>
            {/* </div> */}
            {/* <div> */}
            <h4 style={{ color: "black" }} className="mb-0 fs-4 lh-lg ">
              Private Notary Services</h4>
            {/* </div> */}
          </div>

        </div>
        <div id='notaryheader'>
          <p className=" mt-0" id="mtt" > The Law Surface platform provides easy access to private notary services, which promises
            <br></br>
            the best prices to platform users
          </p>
        </div>
        {/* <button id="btn" className="bg-whte border-0  mt-4 " >
        <p className="mt-2" style={{ color: "#0d6efd" }} >All Settings</p>
      </button> */}
      </div>
      <div
        className="widthclass p-2 " id="boxwidth">
     <div id="borderbottom" className=  " h-auto">
      <img src="https://lawsurface.cloud/app/view/img/translators/aldhaen_law_firm.png"></img>
        </div>
        <div id="bold" className="centerwriten d-flex align-items-center flex-column ">

        <h1 className="fs-6 mb-0" >
        Ahmed Al Dhaen Advocates & </h1>
        
       <h1 className="fs-6"> Legal Consultants
        </h1>
        </div>
        <div className="flex-column">
          <p>Ahmed bin Dhaen is a seasoned lawyer and private notary with a master’s degree in public law and over 15 years of experience in the legal field. His tenure as a legal advisor at one of the country’s largest banks has equipped him with the expertise necessary to excel in the legal profession. Ahmed is a licensed lawyer registered with the courts of the Emirates of Abu Dhabi and Dubai, the...</p>
        </div>

        <div >
        <h1  className="highlightpart ">
        Use the code <b> "LS2023" </b> on requesting the service to get the best price
        </h1>
      </div>
      <div d-flex align-items-center className="text-center">
      <i class="fal fa-globe me-1"></i>Website URL
      <a href="tel:0097126666556 " className=" text-black"><i class="fal fa-phone-alt ms-3 text-black"></i>-</a>

      </div>
      <div className="text-center mt-1">
        <p> <img id="imgsrc" src="https://lawsurface.cloud/app/view/img/countries/uae.png" alt="" />
        United Arab Emirates
        
        </p>
      </div>

      </div>
        
    


    </div>
  )
}

export default Notary