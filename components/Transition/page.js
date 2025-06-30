import React from "react";
import "./Transition.css";

const Transition = () => {
  return (
    <div id="transitionContainerhai">
      <div className="text-center my-5">
        <h2 id="h2" className="fw-bold mb-1">
          Simplify your business management and
        </h2>
        <h2 id="h2" className="fw-bold mb-1">
          transition
        </h2>
        <h2 id="h2" className="fw-bold mb-2">
          your law firm to the next level
        </h2>
        <p id="p" className="mb-1">
          Law Surface is the law practice management platform that allows your
          firm to get more done with less traditional
        </p>
        <p id="p" className="mb-4">
          work, letting you focus on what matters: helping clients.
        </p>
        <div id="B" className="d-flex justify-content-center flex-wrap fw-bold">
          <div>
            <div className="m-5 ">
              <b>Civil & Execution Cases</b>
            </div>
            <div className="m-5">
              <b>Cheques Cases</b>
            </div>
          </div>
          <div>
            <div className="m-5">
              <b>Criminal Cases</b>
            </div>
            <div className="m-5">
              <b>Rental Cases</b>
            </div>
          </div>
          <div>
            <div className="m-5">
              <b>Mortgage Cases</b>
            </div>
            <div className="m-5">
              <b>General Practice</b>
            </div>
          </div>
        </div>
        <button id="button" className="btn btn-primary btn-lg mt-4">
          Explore the Platform
        </button>
      </div>
    </div>
  );
};

export default Transition;
