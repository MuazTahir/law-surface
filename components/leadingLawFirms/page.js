"use client";
import { useSelector } from "react-redux";
import ReduxProvider from "../reduxProvider/reduxProvider";
import "./page.css";
import Link from "next/link";
import SessionCheck from "../session-check/session-check";
import { useRouter } from "next/router";

export default function Leading() {

  // let router = useRouter();

  return <ReduxProvider>
    <SessionCheck dontRedirect={true}>
      <Component></Component>
    </SessionCheck>
  </ReduxProvider>

}

function Component() {

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  return (<>
    <div className="bg-primary d-flex justify-content-center text-white text-center py-5">
      <div className="w-50">
        <div className="container">
          <p className="lead">We promise to save 60% of lawyers time</p>
          <h1 className="display-4 fw-bold">
            The Leading Law Firms Management Platform in the Middle East
          </h1>
          <p className="mt-4 ">
            Law Surface platform was developed by lawyers for lawyers to manage,
            organize and grow their law firms with ease, professionalism and
            integration.
          </p>
          <div className="d-flex justify-content-center mt-4">
            {user._id ? <Link className="btn btn-info me-3 rounded-5" href="/dashboard">My Dashboard </Link>
              :

              <>
                <Link href="/request-trial" className="btn btn-info me-3 rounded-5">
                  Free Start
                </Link>
                <a href="#" className="btn btn-primary rounded-5">
                  See Features
                </a>
              </>
            }


          </div>
        </div>
      </div>
    </div >
    <div className="bg-primary d-flex justify-content-center text-center p-3">
      <img
        className="rounded-5 w-75"
        src="lawsurface-1.gif" />
    </div>
    <h6 className="bg-primary d-flex justify-content-center text-center pt-1 pb-5 text-white" >Holds ISO 27001 certificate of Information Security, Cybersecurity, Privacy Protection and Information Security Management System</h6>


  </>
  );
}
