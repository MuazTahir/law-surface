"use client"
import "./styles.css";
import { useRouter } from "next/navigation";

export default function SystemUser() {
  const router=useRouter()
  const move=router;
  return (
    <>
     <div className="container">
    <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
    <h4 className="text-success title-style" ><i class="fal fa-users me-2" />Users List (5)</h4>
    <p>
    This page enables you to view all users of the system with options to view the user file, modify it, or add a new user
    </p>
            <div className="d-flex justify-content-center ">
              <div className="me-2">
                <button
                  className="btn btn-success"
                  onClick={()=>{move.push('../newUser')}}
                  
                >
                  New user
                </button>
              </div>
              <div>
                <button className="btn-success btn" onClick={()=>{move.push('./')}} >
                  All Setting
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          className="d-flex flex-wrap justify-content-center mt-5 gap-3"
          style={{ width: "94%", margin: "auto" }}
        >
          {/* User Card 1 */}
          <div
            className="bg-white p-4"
            style={{
              borderRadius: "10px",
              width: "420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              <img src="/images/default-profile.png" width={60} height={60} style={{ borderRadius: "10px" }} />
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>Marwan Dhuli</b>
                </span>
                <div>
                  <small>Law firms administrator</small>
                  <div>
                    <small>d.marwanldhul@gmail.com</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "12px" }}
              >
                <div className="text-center">
                  <span>1</span>
                  <div>
                    <small>Level</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fas fa-badge-check" style={{ color: "green" }}></i>
                  <div>
                    <small>Active</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fal fa-user-shield"></i>
                  <div>
                    <small>Account</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fal fa-edit"></i>
                  <div>
                    <small>Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center p-3">
              <button
                className="btn text-success"
                style={{ borderRadius: "20px", padding: "3px 30px", border: "2px solid" }}
              >
                Accountant
              </button>
            </div>
          </div>

          {/* User Card 2 */}
          <div
            className="bg-white p-4"
            style={{
              borderRadius: "10px",
              width: "420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              <img src="/images/default-profile.png" width={60} height={60} style={{ borderRadius: "10px" }} />
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>Marwan Dhuli</b>
                </span>
                <div>
                  <small>Law firms administrator</small>
                  <div>
                    <small>d.marwanldhul@gmail.com</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "12px" }}
              >
                <div className="text-center">
                  <span>1</span>
                  <div>
                    <small>Level</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fas fa-badge-check" style={{ color: "green" }}></i>
                  <div>
                    <small>Active</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fal fa-user-shield"></i>
                  <div>
                    <small>Account</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fal fa-edit"></i>
                  <div>
                    <small>Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center p-3">
              <button
                className="btn text-success"
                style={{ borderRadius: "20px", padding: "3px 30px", border: "2px solid" }}
              >
                Accountant
              </button>
            </div>
          </div>

          {/* User Card 3 */}
          <div
            className="bg-white p-4"
            style={{
              borderRadius: "10px",
              width: "420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="d-flex w-100">
              <img src="/images/default-profile.png" width={60} height={60} style={{ borderRadius: "10px" }} />
              <div className="ms-2" style={{ fontSize: "13px" }}>
                <span>
                  <b>Marwan Dhuli</b>
                </span>
                <div>
                  <small>Law firms administrator</small>
                  <div>
                    <small>d.marwanldhul@gmail.com</small>
                  </div>
                </div>
              </div>
              <div
                className="ms-auto mb-3 d-flex align-items-end"
                style={{ fontSize: "12px" }}
              >
                <div className="text-center">
                  <span>1</span>
                  <div>
                    <small>Level</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fas fa-badge-check" style={{ color: "green" }}></i>
                  <div>
                    <small>Active</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fal fa-user-shield"></i>
                  <div>
                    <small>Account</small>
                  </div>
                </div>
                <div className="text-center ms-1">
                  <i className="fal fa-edit"></i>
                  <div>
                    <small>Edit</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center p-3">
              <button
                className="btn text-success"
                style={{ borderRadius: "20px", padding: "3px 30px", border: "2px solid" }}
              >
                Accountant
              </button>
            </div>
          </div>
        </div>
    
    </>
  );
}









// export default function systemUser() {
//   return (
//     <>
//       <div className="container-fluid" style={{ backgroundColor: "#edf2f9" }}>
//         <div className="divprt1 p-2 mt-4">
//           <div className="text-center">
//             <div className="d-flex justify-content-center text-success align-items-center">
//               <i className="fal fa-cogs"></i>
//               <h4 className="ms-2 mb-0">User List (5)</h4>
//             </div>
//             <span>
//               <small>
//                 This page enables you to view all users of the system with options to view the user file, modify it, or
//                 <br /> add a new user
//               </small>
//             </span>
//             <div className="d-flex justify-content-center p-3 mt-3">
//               <div className="me-2">
//                 <button
//                   className="btn btn-success"
//                   style={{ borderRadius: "7px", padding: "7px 20px", border: "none" }}
//                 >
//                   New user
//                 </button>
//               </div>
//               <div>
//                 <button className="text-success btn" style={{ borderRadius: "none", border: "none" }}>
//                   All Setting
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div
//           className="d-flex flex-wrap justify-content-center mt-5 gap-3"
//           style={{ width: "94%", margin: "auto" }}
//         >
//           {Array.from({ length: 6 }).map((_, index) => (
//             <div
//               key={index}
//               className="bg-white p-4"
//               style={{
//                 borderRadius: "10px",
//                 width: "420px",
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//               }}
//             >
//               <div className="d-flex w-100">
//                 <img src="/images/default-profile.png" width={60} height={60} style={{ borderRadius: "10px" }} />
//                 <div className="ms-2" style={{ fontSize: "13px" }}>
//                   <span>
//                     <b>Marwan Dhuli</b>
//                   </span>
//                   <div>
//                     <small>Law firms administrator</small>
//                     <div>
//                       <small>d.marwanldhul@gmail.com</small>
//                     </div>
//                   </div>
//                 </div>
//                 <div
//                   className="ms-auto mb-3 d-flex align-items-end"
//                   style={{ fontSize: "12px" }}
//                 >
//                   <div className="text-center">
//                     <span>1</span>
//                     <div>
//                       <small>Level</small>
//                     </div>
//                   </div>
//                   <div className="text-center ms-1">
//                     <i className="fas fa-badge-check" style={{ color: "green" }}></i>
//                     <div>
//                       <small>Active</small>
//                     </div>
//                   </div>
//                   <div className="text-center ms-1">
//                     <i className="fal fa-user-shield"></i>
//                     <div>
//                       <small>Account</small>
//                     </div>
//                   </div>
//                   <div className="text-center ms-1">
//                     <i className="fal fa-edit"></i>
//                     <div>
//                       <small>Edit</small>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 text-center p-3">
//                 <button
//                   className="btn text-success"
//                   style={{ borderRadius: "20px", padding: "3px 30px", border: "2px solid" }}
//                 >
//                   Accountant
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }
