import React from 'react'
export default function Page() {

  return <div>
<div className="container my-4 d-flex flex-column align-items-center mt-10 justify-content-center">
  <div
    className="bg-white rounded p-3 shadow-sm mb-2 w-100"
    style={{ fontSize: "13px", maxWidth: "95%" }}
  >
    <h6 className="ms-1 text-center text-md-start">Pakage & Addons Managment</h6>
    <p className="ms-1 text-center text-md-start">
      All the pakage details and some important information
    </p>

    <div className="row p-3 justify-content-center">
      <div className="border p-3 col-12 col-md-8 row text-center text-md-start">
        <p className="col-12 col-sm-6">
          <b> Account type:</b> Premium
        </p>
        <p className="col-12 col-sm-6">
          <b>Number of Pakage Users :</b> 7
        </p>
        <p className="col-12 col-sm-6">
          <b> Operating type : </b>Online
        </p>
        <p className="col-12 col-sm-6">
          <b>Pakage storage Space :</b> 35GB
        </p>
        <p className="col-12 col-sm-6">
          <b>Subsription start date :</b> 16-04-2024
        </p>
        <p className="col-12 col-sm-6">
          <b>Subsription Expiration date :</b> 18-05-025
        </p>
        <p className="col-12 col-sm-6">
          <b>Subsription Type: </b> Annual
        </p>
        <p className="col-12 col-sm-6">
          <b>Payment Term :</b> Quarterly
        </p>
        <p className="col-12 col-sm-6">
          <b>Currency :</b> OMR
        </p>
      </div>

      <div className="col-12 col-md-4 mt-4 d-flex flex-column align-items-center text-center">
        <h6>Subsription Managment</h6>
        <p style={{ maxWidth: "200px" }}>
          You can upgrade a pakage such as adding more users, space or renewing
          the subscription
        </p>
        <button
          className="btn btn-primary p-1"
          style={{
            width: "170px",
            backgroundColor: "#6f42c1",
            border: "none",
            overflow: "hidden",
          }}
        >
          Edit Subsription
        </button>
      </div>
    </div>
  </div>

  <div className="bg-white rounded p-3 shadow-sm w-100" style={{ fontSize: "13px", maxWidth: "95%" }}>
    <h6 className="ms-1 text-center text-md-start">Additional Services</h6>
    <p className="ms-1 text-center text-md-start">
      All Services that work on your account
    </p>
    <ul className="list-unstyled d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
      <li>
        <i className="bi bi-check-circle-fill text-success me-2"></i>Software Updates
      </li>
      <li>
        <i className="bi bi-check-circle-fill text-success me-2"></i>WhatsApp Services
      </li>
      <li>
        <i className="bi bi-check-circle-fill text-success me-2"></i>Translation Service
      </li>
      <li>
        <i className="bi bi-check-circle-fill text-success me-2"></i>Backup Service
      </li>
      <li>
        <i className="bi bi-check-circle-fill text-success me-2"></i>Internal Chat Service
      </li>
      <li>
        <i className="bi bi-check-circle-fill text-success me-2"></i>User Switching Service
      </li>
    </ul>
  </div>
</div>

  </div>
  


}