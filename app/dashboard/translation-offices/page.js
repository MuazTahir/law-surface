import "./style.css"
import React from 'react'

const Translation= () => {
  return (
    <div>
      <div className="m-5" >
        <div className="d-flex flex-md-wrap justify-content-start gap-3" >
          <div className="d-flex align-items-center ">

            {/* <div  > */}
            <i id="heading2" class="fal fa-language"></i>
            {/* </div> */}
            {/* <div> */}
            <h4 style={{ color: "black" }} className="mb-0 fs-4 lh-lg ">
            Legal Translation Services</h4>
            {/* </div> */}
          </div>

        </div>
        <div id='translationheader'>
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
        className="widthclass2 p-2 " id="boxwidth2">
     <div  className=" h-20  w-10">
     <img id="icongroup" src="https://lawsurface.cloud/app/view/img/translators/team_legal_translation.jpeg"></img>
        </div>
        <div className="bold2"></div>

        <div id="bold2" className="centerwriten d-flex align-items-center flex-column ">

        <b className="fs-6 mb-0 mt--3" >
        Team Legal Translation </b>
        
       {/* <h1 className="fs-6"> Legal Consultants
        </h1> */}
        </div>
        <div className="flex-column">
          <p>Team Legal Translation provides its services in the field of legal and technical translation in various sectors, depending on the human creativity and the latest scientific technologies to provide our clients with harmonious translation corresponding to the highest quality in a timely manner. We are pleased to provide our services to our clients through the website to optimally meet their...</p>
        </div>

        <div >
        <h1  className="highlightpart2 ">
        Use the code <b> "LS2023"</b> on requesting the service to get the best price
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

export default Translation