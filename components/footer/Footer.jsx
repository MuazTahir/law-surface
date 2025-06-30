"use client";
import { useSelector } from "react-redux";
import { list } from "../../constants/footer"
import FooterSocial from "./FooterSocial"
import './footer.css'

const Footer = () => {
  let color = useSelector((store) => {
    return store.authSlice.color;
  });
  return (
    <div>
      <FooterSocial></FooterSocial>
      <div className={'footer '+color} >
        <div className='container container-fluid py-4' >
          <div className="row text-white">
            {
              list.map((item , ind)=>{
                return(
                <div key={ind} className="mt-5 mt-lg-0 col-6 col-md-4 col-lg-2 text-md-start text-center">
                  <div className='text-capitalize fw-bold mb-1'  >{item.heading}</div>
                  <div className="pd-block-15">{item.link.map((elem , indx) => <div key={indx} >{elem}</div>)}</div>
                </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div className="footer_bottom bg-primary" >
        <div className="container container-fluid row mx-auto py-1">
                <div className="col-12 col-md-6 footer_text text-center pb-3 pb-md-0 text-md-start fw-light text-white " >
                Copyright © 2024 Law Surface by LS Cloud Service & Datacenters Providers Dubai,
                United Arab Emirates. All Rights Reserved

                </div>
                <div className="fw-lighter footer_end_text  col-12 col-md-6 text-center text-md-start  text-white" >
                Some of the logos displayed on this site are not owned or reserved and belong to the owners or companies that own the rights to these logos. It has been used on this site for clarification and has not been used in any way that harms its property. Holds ISO 27001 certificate of Information Security, Cybersecurity, Privacy Protection and Information Security Management System
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer