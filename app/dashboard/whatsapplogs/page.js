import React from "react";
import "./page.css";
import PageChanger from "@/components/pageChanger/pageChanger";
const SearchSortBar = () => {
  return (
    <div className="mt-4">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap p-3 border rounded bg-light custom-width">
        <div className="d-flex align-items-center justify-content-start" style={{ gap: "15px" }}>
          <span className="fw-bold">Advanced search</span>
          {/* <button className="btn btn-link text-decoration-none p-0"> */}
          {/* </button> */}
          {/* <span className="fw-bold">Table Sort</span>
          <i className="bi bi-arrow-down-up"></i> */}
        </div>

        <div className="d-flex align-items-center justify-content-between  " style={{ width: "500px", }}>
          <i class="fal fa-magnifying-glass me-3" style={{ color: "#161717", }}></i>
          {/* <textarea name="text-area" id="" cols={200} rows={1}  className="me-2"></textarea> */}
          <input

            type="text"
            className="w-75 me-2 rounded border-1 custom-input "
            placeholder="Search phone number...."
          />
          <button className="btn btn-success ps-2">Search</button>
        </div>

        <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap" style={{ gap: "10px" }}>
          <span className="fw-bold">Table Sort</span>
          <i class="fal fa-sort-alpha-down"></i>
          <select className="form-select" style={{ width: "180px" }}>
            <option>Created Date</option>
            <option>Status</option>
          </select>

          <select className="form-select" style={{ width: "130px" }}>
            <option>A to Z</option>
            <option>Z to A</option>
          </select>

          <button className="btn btn-success">Sort</button>
        </div>
      </div>

        <div className="table-responsive">


      <table className="table  text-center main-table mt-4">
        <thead className="tableHead  bg-success ">
          <tr className="table-row" >

            <th className="table-head head-th " scope="col">Status</th>
            <th className="head-th" scope="col">Last update</th>
            <th className="head-th" scope="col">Sent Date</th>
            <th className="head-th" scope="col">Case File</th>
            <th className="head-th" scope="col">Client's Number</th>
            <th className="head-th" scope="col">Sender</th>
            <th className="head-th" scope="col">WhatsApp Message</th>
            <th className="head-th" scope="col">User</th>

          </tr>
        </thead>
        <tbody className="tableBody ">
          <tr className="body-row bg-light">
            <td><div className="icon-circle">
              <i class="fa-solid fa-check-double"></i></div></td>
            <td>Tuesday 03 <br />December , 2024</td>
            <td>Tuesday 03 <br /> December , 2024</td>
            <td>
              <div className="d-flex justify-content-center">
                <div className=" justify-content-between align-items-center  ">
                  <p className="div-p  ">1248</p>
                  <div className="div-div "><small>In Process</small></div>
                </div>
              </div>
            </td>
            <td><b>+96871112844</b></td>
            <td>+96897015876</td>
            <td>تحية طيبة وبعد, إلى السيد\السادة: جميعة مرزوق</td>
            <td>Haitham Bahri</td>
          </tr>
          <tr className="body-row bg-light">
            <td><div className="icon-circle">
              <i class="fa-solid fa-check"></i></div></td>
            <td>Wednesday 27 <br />November , 2024</td>
            <td>Wednesday 27 <br /> November , 2024</td>
            <td>
              <div className="d-flex justify-content-center">
                <div className=" justify-content-between align-items-center  ">
                  <p className="div-p  ">1247</p>
                  <div className="div-div " style={{ backgroundColor: "#dc3545" }}><small>Finshed</small></div>
                </div>
              </div>
            </td>
            <td><b>+96890478222</b></td>
            <td>+96897015876</td>
            <td>تحية طيبة وبعد, إلى السيد\السادة: جميعة مرزوق</td>
            <td>Marwan Dhuhli</td>
          </tr>
          <tr className="body-row bg-light">
            <td><div className="icon-circle " style={{ backgroundColor: "#28a745" }}>
              <i class="fal fa-hourglass-start" style={{ color: "white;", }}></i></div></td>
            <td>Wednesday 27 <br />November , 2024</td>
            <td>Wednesday 27 <br /> November , 2024</td>
            <td>
              <div className="d-flex justify-content-center">
                <div className=" justify-content-between align-items-center  ">
                  <p className="div-p  ">1247</p>
                  <div className="div-div " style={{ backgroundColor: "#3b7ddd" }}><small>Postponed</small></div>
                </div>
              </div>
            </td>
            <td><b>+96890478222</b></td>
            <td>+96897015876</td>
            <td>تحية طيبة وبعد, إلى السيد\السادة: جميعة مرزوق</td>
            <td>Haitham Bahri</td>
          </tr>
          <tr className="body-row bg-light">
            <td><div className="icon-circle " style={{ backgroundColor: "#28a745" }}>
              <i class="fal fa-hourglass-start" style={{ color: "white;", }}></i></div></td>
            <td>Wednesday 27 <br />November , 2024</td>
            <td>Wednesday 27 <br /> November , 2024</td>
            <td>
              <div className="d-flex justify-content-center">
                <div className=" justify-content-between align-items-center  ">
                  <p className="div-p  ">1247</p>
                  <div className="div-div "><small>In Process</small></div>
                </div>
              </div>
            </td>
            <td><b>+96890478222</b></td>
            <td>+96897015876</td>
            <td>تحية طيبة وبعد, إلى السيد\السادة: جميعة مرزوق</td>
            <td>Haitham Bahri</td>
          </tr>

        </tbody>
      </table>
      </div>

      <PageChanger></PageChanger>
    </div>
  );
};

export default SearchSortBar;