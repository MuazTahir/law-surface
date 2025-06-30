
import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const assignmentsData = [
  {
    name: "Marwan Dhuhli",
    role: "Law Firm Administrator",
    inProcess: { count: 19, type: "Lawyer" },
    finished: { count: 7, type: "Lawyer" },
    postponed: { count: 0 },
    stopTemporarily: { count: 0 },
    separated: { count: 0 },
    draft: { count: 0 },
    negligentCases: 6,
    totalAssignments: 26,
  },
  {
    name: "Haitham Bahri",
    role: "Attorney",
    inProcess: { count: 117, type: "Lawyer" 
        , count2: 117, type2: "Pleading"
    },
    finished: { count: 6, type: "Lawyer" },
    postponed: { count: 0, type: "Pleading" },
    stopTemporarily: { count: 1, type: "Lawyer" },
    separated: { count: 0 },
    draft: { count: 0 },
    negligentCases: 17,
    totalAssignments: 37,
  },
  {
    name: "Lawyeraldhuhli@gmail.com",
    role: "Legal Counsel",
    inProcess: { count: 117, type: "Lawyer" 
        , count2: 117, type2: "Counsel"
    },
    finished: { count: 2, type: "Lawyer",
        count2: 52, type2: "Counsel"
     },
    postponed: { count: 134, type: "Counsel" },
    stopTemporarily: { count: 0, },
    separated: { count: 0, type: "Counsel" },
    draft: { count: 0 },
    negligentCases: 133,
    totalAssignments: 208,
  },
  {
    name: "Saifalnaabilaw@gmail.com",
    role: "Attorney",
    inProcess: { count: 19, type: "Lawyer" },
    finished: { count: 36, type: "Lawyer" },
    postponed: { count: 0 ,type: "Lawyer"},
    stopTemporarily: { count: 0,  },
    separated: { count: 0 },
    draft: { count: 0 },
    negligentCases: 88,
    totalAssignments: 154,
  },
  {
    name: "Mahmoud Al-Bouiqi",
    role: "Attorney",
    inProcess: { count: 19, type: "Lawyer" },
    finished: { count: 34, type: "Lawyer" },
    postponed: { count: 0 , type: "Lawyer"},
    stopTemporarily: { count: 0,  },
    separated: { count: 0 },
    draft: { count: 0 },
    negligentCases: 64,
    totalAssignments: 121,
  },
];

const AssignmentsTable = () => {
  return (
    <div className="mt-4 width-main bg-white py-4 px-3">
      <h4 className="mb-4 icon-head" > <i class=" fal fa-star me-2 ms-2 fs-6   " style={{color:"orange"}}></i>Assignments of Lawsuits and Files</h4>
      
      <div className="table-responsive">

      <table className="table width-main text-center">
        <thead className="table-light text-align-center-">
          <tr className="head-size">
            <th >User</th>
            <th  className="" style={{color:"green"}}>In Process</th>
            <th className="" style={{color:"#ff5b5b"}} >Finished</th>
            <th className="" style={{color:"#645d3b"}}>Postponed</th>
            <th className="" style={{color:"#ad0000"}}>Stop Temporarily</th>
            <th className="" style={{color:"#8a520c"}}>Separated</th>
            <th className="" style={{color:"#9093ee"}}>Draft</th>
            <th >Negligent Cases</th>
            <th >Total Assignments</th>
          </tr>
        </thead>
        <tbody>
          {assignmentsData.map((data, index) => (
            <tr key={index}  style={{height:"80px"}}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://lawsurface.cloud/app/view/img/default.png"
                    alt="Avatar"
                    className="rounded me-3"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="text-start">
                    <strong>{data.name}</strong>
                    <br />
                    <small className="text-muted">{data.role}</small>
                  </div>
                </div>
              </td>
              <td>

              <span className="number-style">  ({data.inProcess.count}) </span><span className="font-style text-black px-3" style={{backgroundColor:"#edf2f9"}}>{data.inProcess.type}</span>
        {/* ({data.inProcess.count2}) <span className="badge text-black px-3 fw-light" style={{backgroundColor:"#edf2f9"}}>{data.inProcess.type2}</span> */}
        {data.inProcess.count2 ? <div className="number-style">({data.inProcess.count2}) <span className="font-style text-black px-3" style={{backgroundColor:"#edf2f9"}}>{data.inProcess.type2}</span> </div> :""}
              </td>
              <td >
               <span className="number-style">({data.finished.count})</span >  <span className=" font-style text-black px-3 " style={{backgroundColor:"#edf2f9",}}>{data.finished.type}</span>
                {data.finished.count2 ? <div className="finished-two">({data.finished.count2}) <span className=" font-style text-black px-3" style={{backgroundColor:"#edf2f9"}}>{data.finished.type2}</span> </div> :""}             
              </td>
            <td>
          { data.postponed.count ? (    <span className="number-style">  ({data.postponed.count})</span>): ""} { data.postponed.type ?(<span className="font-style text-black px-3" style={{backgroundColor:"#edf2f9"}}>{data.postponed.type}</span>) : ""}</td>
              <td>
            {data.stopTemporarily.count ?`(${data.stopTemporarily.count})` : "" }
             { data.stopTemporarily.type ? (   <span className="font-style text-black px-3"style={{backgroundColor:"#edf2f9"}}>
                  {data.stopTemporarily.type || ""}
                </span>) : ""}
              </td>
              <td>{data.separated.count || ""}</td>
              <td>{data.draft.count || ""}</td>
              <td>
                <span className="font-style text-white px-3 py-2 d-flex flex-row align-items-center justify-content-center " style={{backgroundColor:"#ff2b2b"}}>
                  {data.negligentCases} Case
                </span>
              </td>
              <td>{data.totalAssignments}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </div>
  );
};

export default AssignmentsTable;
