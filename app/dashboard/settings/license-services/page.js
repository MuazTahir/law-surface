"use client";
import { useRouter } from "next/navigation";
import "./styles.css";
export default function LicenseServices() {
  const move=useRouter()
  return (
    <div className="container">
      <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
      <h4 className="text-success title-style" ><i class="fal fa-history me-2" />License & Services</h4>
      <p>
      Learn about the current system status and usage license or if any system update is available based on improving and adding new features to the system.
      </p>
      <button className="btn btn-success"  onClick={()=>{move.push('./')}}>All Settings</button>
   
      </div>
        {/* card overall container */}

        <div
          className="bg-white mt-4 container"
          style={{
            borderRadius: "10px",
          }}
        >
          <div className="d-flex " style={{ flexWrap: "wrap" }}>
            {/* License Details Section */}
            <div
              className=""
              style={{
                borderRight: "1px solid #ccc",
                padding: "10px 40px",
                fontSize: "10px",
                minWidth: "435px",
                marginTop: "40px",
              }}
            >
              <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                License Details
              </h1>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#ccc",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              ></div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>License Code</b>
                </span>
                <div className="d-flex text-end" style={{ fontSize: "13px" }}>
                  OV592099718407
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>License Type</b>
                </span>
                <div style={{ fontSize: "13px" }}>Cloud Server</div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Package</b>
                </span>
                <div style={{ fontSize: "13px" }}>5 User</div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Expiration Date</b>
                </span>
                <div style={{ fontSize: "13px" }}>18 February 2025</div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Manage Subscription</b>
                  <img
                    src="https://lawsurface.cloud/app/view/img/ls_icon.svg"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "9px",
                    }}
                  />
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  Account management from LS helps you <br />
                  manage your package such as increasing the <br />
                  number of users or storage space and renewing <br />
                  the software subscription
                </p>
                <div>
                  <button
                    id="visit-website"
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = "rgb(29 103 50)")
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = "rgb(27 128 56)")
                    }
                  >
                    Visit Website
                  </button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b> Technical support</b>
                </span>
                <div style={{ fontSize: "12px" }}>
                  Within the <br />
                  Subscription
                </div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  Contact the support team for any suggestions <br />
                  or issues with the system.
                </p>
              </div>
            </div>

            {/* Software Updates Section */}
            <div
              className=" "
              style={{
                borderRight: "1px solid #ccc",
                padding: "10px 35px",
                minWidth: "435px",
                marginTop: "40px",
              }}
            >
              <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>
                Software Updates
              </h1>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#ccc",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              ></div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Software Updates</b>
                </span>
                <div style={{ fontSize: "13px" }}>Within the Subscription</div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Current Version</b>
                </span>
                <div style={{ fontSize: "13px" }}>4.7.6</div>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Last Check</b>
                </span>
                <div style={{ fontSize: "13px" }}>24 November 2024</div>
              </div>
            </div>
            {/* services section */}

            <div
              className=""
              style={{
                // borderRight: "1px solid #ccc",
                padding: "10px 35px",
                minWidth: "435px",

                // fontSize: "10px"
              }}
            >
              <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Services</h1>
              <div
                style={{
                  height: "1px",
                  backgroundColor: "#ccc",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              ></div>
              <div></div>

              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Diskspace</b>
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  Provides you with secure and reliable storage <br></br>space
                  to save and organize your data with ease <br></br>and
                  efficiency
                </p>
                <div style={{ fontSize: "13px" }}>(25.00 GB / 0.46 GB)</div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>AI Service</b>
                  <img
                    src="https://lawsurface.cloud/app/view/img/chatgpt.svg"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "9px",
                    }}
                  />
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  It helps you translate names and legal entries,<br></br>{" "}
                  review memorandums and contracts, and <br></br>summarize
                  judgments with accuracy and <br></br> professionalism.
                </p>
                <div style={{ fontSize: "13px" }}>22 December 2024</div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Cloud Backup Service</b>
                </span>
              </div>

              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  The cloud backup service allows for securely <br></br> saving
                  data and files in the cloud, with easy <br></br> access and
                  retrieval whenever needed
                </p>
                <div style={{ fontSize: "12px" }}>
                  Within the <br />
                  Subscription
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Translation Service</b>
                  <img
                    src="https://lawsurface.cloud/app/view/img/translate_logo.svg"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "9px",
                    }}
                  />
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  Google Translate service allows you to translate <br></br>{" "}
                  texts, words, and phrases with up to 70% <br></br> accuracy
                </p>
                <div style={{ fontSize: "12px" }}>
                  Within the <br />
                  Subscription
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>Chat Service</b>
                  <img
                    src="https://lawsurface.cloud/app/view/img/firebase.svg"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "9px",
                    }}
                  />
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-justifytx1 tx1">
                  The internal chat service enables users to <br></br>
                  communicate instantly and exchange <br></br> messages easily
                  and securely, enhancing <br></br> collaboration and
                  facilitating information <br></br> sharing within the system
                </p>
                <div style={{ fontSize: "12px" }}>
                  Within the <br />
                  Subscription
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>WhatsApp Service</b>
                  <img
                    src="https://lawsurface.cloud/app/view/img/whatsapp.svg"
                    style={{
                      width: "16px",
                      height: "16px",
                      marginLeft: "9px",
                    }}
                  />
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  The WhatsApp reminders service allows for <br></br> sending
                  updates and notifications to clients <br></br> quickly and
                  efficiently, helping to keep them <br></br> constantly
                  informed of all developments
                </p>
                <div style={{ fontSize: "12px" }}>
                  Within the <br />
                  Subscription
                </div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span style={{ fontSize: "13px", fontWeight: "semibold" }}>
                  <b>User Replacement Service</b>
                </span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <p className="text-justify tx1">
                  The user switching service allows for the <br></br> removal of
                  old users and the addition of new <br></br>ones without
                  needing to change accounts,<br></br> enabling flexible and
                  efficient user management
                </p>
                <div style={{ fontSize: "12px" }}>
                  Within the <br />
                  Subscription
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          
  
  );
}
