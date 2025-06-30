import React from "react";
import "./style.css"; 
import PageChanger from "@/components/pageChanger/pageChanger";
// import PageChanger from "../../../components/pageChanger"

const Emaillogs = () => {
  return (
    <div className="mt-4 background">
      <div className="d-flex align-items-center justify-content-center justify-content-md-between flex-wrap p-3 border rounded bg-light custom-width">
        <div className="d-flex align-items-center justify-content-start" style={{ gap: "15px" }}>
          <span className="fw-bold">Advanced search</span>
          {/* <button className="btn btn-link text-decoration-none p-0"> */}
          {/* </button> */}
          {/* <span className="fw-bold">Table Sort</span>
          <i className="bi bi-arrow-down-up"></i> */}
        </div>

        <div className="d-flex align-items-center justify-content-between  "  style={{ width: "500px",  }}>
          <i class="fal fa-magnifying-glass me-3" style={{color: "#161717",}}></i>
          {/* <textarea name="text-area" id="" cols={200} rows={1}  className="me-2"></textarea> */}
          <input
          
            type="text"
            className="w-75 me-2 rounded border-1 custom-input " 
            placeholder="Search phone number...."
          />
          <button className="btn btn-success ps-2">Search</button>
        </div>

        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
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


      <table className="table table-striped text-center  main-table mt-4">
  <thead className="tableHead  ">
    <tr className="table-row " >
      
      <th className="table-head " scope="col">Send Date</th>
      <th scope="col">Send Time</th>
      <th scope="col">Email Address</th>
      <th scope="col"></th>
      <th scope="col">Email Subject</th>
      
    </tr>
  </thead>
  <tbody className="tableBody ">
    <tr >
      <td>03-12-2024</td>
      <td>14:09:07</td>
      <td>d.marwanaldhuhli@gmail.com</td>
      <td></td>
      <td>-</td>
    </tr>
    <tr >
      <td>03-12-2024</td>
      <td>14:09:07</td>
      <td>d.marwanaldhuhli@gmail.com</td>
      <td></td>
      <td>-</td>
    </tr>
    <tr >
      <td>03-12-2024</td>
      <td>14:09:07</td>
      <td>d.marwanaldhuhli@gmail.com</td>
      <td></td>
      <td>You have a reminder</td>
    </tr>
    <tr >
      <td>03-12-2024</td>
      <td>14:09:07</td>
      <td>d.marwanaldhuhli@gmail.com</td>
      <td></td>
      <td>-</td>
    </tr>
    <tr >
      <td>03-12-2024</td>
      <td>14:09:07</td>
      <td>d.marwanaldhuhli@gmail.com</td>
      <td></td>
      <td>-</td>
    </tr>

  </tbody>
</table>
<PageChanger></PageChanger>
{/* <ThickBarChart></ThickBarChart> */}
    </div>
    
  );
};

export default Emaillogs;