
import "./style.css"

export default  function AncillaryModel(){
    return <div>
        <>
  <div
    className="modal "
    id="exampleModalToggle"
    aria-hidden="true"
    aria-labelledby="exampleModalToggleLabel"
    tabIndex={-1}
  >
    <div className="modal-dialog modal-dialog-centered bg-none bg-transparent">
      <div className="modalcontentha modal-content " id="contactModal">
        <div className="headermodelha modal-header ">
         <div className= "d-flex flex-column align-items ">
             <h1 className="modal-title fs-6  " id="exampleModalToggleLabel">
        <b>  Contact Developers</b>
          </h1>
          <h1 id="size" className="">Always here to help and take care of all opinions and suggestions</h1></div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body ">
          <div className="d-flex justify-content" >
           
           <div className="d-flex align-items-center">

            <input type="radio" className="mb-2 me-2 s-4" name="shahzaib"/>
            <h5 className="fs-6">Submit suggestion</h5>
           </div>
           <div className="d-flex align-items-center " id="radiobutton">

            <input type="radio" className="mb-2 me-2" name="shahzaib"/>
          <h1 className="fs-6" >Report Problem</h1></div>
           </div>
          <div className="d-flex m-auto w-100">
          <textarea id="longText" name="longText" rows="6" cols="50" className="rInput " placeholder="What is your suggestion or problem you have encountered?"></textarea>
            {/* <input type="" className="rInput " placeholder="What is your suggestion or problem you have encountered?" /> */}
          </div>
          <p className="mt-2 " id="fsize">
          A copy of the Error Log will be attached to this form
          </p>
        </div>
        <div className="d-flex justify-content-end border-top modal-footer" id="padding">
          <button className="close">
            Close
          </button>
          {/* <button */}
            {/* className="border-0 me-2 bg-white "
            id="cbound"
            // data-bs-target="#exampleModalToggle2"
            data-bs-toggle="modal"
            
            >
            Close
          </button> */}
          <button 
          className="btn btn-primary   align-item-center" 
          id="fbounds"
          
            //    data-bs-target="#exampleModalToggle2"
             data-bs-toggle="modal">
            Send
            
          </button>
          
        </div>
      </div>
    </div>
  </div>
 
  {/* <button
    className="btn btn-primary"
    data-bs-target="#exampleModalToggle"
    data-bs-toggle="modal"
  >
    Open first modal
  </button> */}
</>

    </div>
}