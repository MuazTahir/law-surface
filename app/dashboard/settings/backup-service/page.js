"use client";
import { useRouter } from "next/navigation";
import "./styles.css";
export default function Backupservice() {
  const move = useRouter();
  return (
    <div className="container">
      <div className="container col-12 col-lg-6 text-center my-5 rounded-4 py-2 ">
        <h4 className="text-success title-style">
          <i class="fal fa-server me-2" /> Backup Service
        </h4>
        <p>
          The backup service provides you with peace of mind and not to worry
          about losing your data by backing up all your data to your local
          server, which can be deleted manually at any time.
        </p>
        <button
          className="btn btn-success"
          onClick={() => {
            move.push("./");
          }}
        >
          All Settings
        </button>
      </div>
      {/* card 1 and 2 container */}
      <div className="d-flex flex-row justify-content-center flex-wrap mt-4 gap-3">
        {/* card 1 */}
        <div
          className="d-flex flex-wrap bg-white"
          style={{
            padding: "15px",
            borderRadius: "10px",
            width: "48%",
            minWidth: "400px",
            minHeight: "500px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>
            <span className="d-flex  mt-0">
              <b className="tsv">Scheduled backups</b>
            </span>
            <div className="d-flex flex-wrap flex-column">
              <hr
                style={{
                  border: "1px solid #444444",
                }}
              />
            </div>
          </div>
          <div
            className="d-flex w-100 gap-3"
            style={{
              marginTop: "0",
            }}
          >
            {/* left side of card */}
            <div
              className="d-flex flex-column"
              style={{
                fontSize: "13px",
                flex: 1,
              }}
            >
              <div>
                <span>
                  <strong>Daily Backup</strong>
                </span>
              </div>
              <div>
                <span>
                  <small>Tuesday 19 November , 2024</small>
                </span>
              </div>
              <br></br>
              <div>
                <span>
                  <strong>Monthly Backup</strong>
                </span>
              </div>
              <div>
                <span>
                  <small>Wednesday 06 November , 2024</small>
                </span>
              </div>
            </div>

            {/* right side of card */}
            <div
              className="d-flex flex-column"
              style={{
                fontSize: "13px",
                flex: 1,
              }}
            >
              <span>
                <strong>Weekly Backup</strong>
              </span>
              <div>
                <span>
                  <small>Monday 18 November , 2024</small>
                </span>
              </div>
              <br></br>
              <div>
                <span>
                  <strong>Last Online Backup</strong>
                </span>
              </div>
              <div>
                <span>
                  <small>Within the Subscription</small>
                </span>
              </div>
              <div>
                <span>
                  <small>Wednesday 21 August , 2024</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div
          className="d-flex  flex-wrap  bg-white"
          style={{
            padding: "15px",
            borderRadius: "10px",
            width: "48%",
            minWidth: "400px",
            minHeight: "500px",
            flexDirection: "column",
          }}
        >
          <div>
            <span className="d-flex mt-0">
              <b className="tsv">Manual backups and before updates</b>
            </span>
            <div className="d-flex flex-column">
              <hr
                style={{
                  border: "1px solid #444444",
                }}
              />
            </div>
          </div>
          <div
            className="d-flex w-100 gap-3"
            style={{
              marginTop: "0",
}}
          >
            {/* left side of card */}
            <div
              className="d-flex flex-column "
              style={{
                fontSize: "13px",
                flex: 1 ,
              }}
            >
              <div>
                <span>
                  <strong>Last backup</strong>
                </span>
              </div>
              <div>
                <span>
                  <small>Saturday 10 August , 2024</small>
                </span>
              </div>
              <br></br>
            </div>

            {/* right side of card */}
            <div
              className="d-flex flex-column "
              style={{
                fontSize: "13px",
                flex: 1,
              }}
            >
              <span>
                <strong>Create New Backup</strong>
              </span>
              <div>
                <span>
                  <button className=" btn btn-success" id="btn-green">
                    Backup now
                  </button>
                </span>
              </div>
              <br></br>
            </div>
          </div>
          {/* table div */}
          <div className="table-wrapper table-responsive mt-3">
            <table
              className="table  table-bordered"
              style={{
                fontSize: "18px",

                tableLayout: "fixed",
              }}
            >
              <thead>
                <tr className="text-dark">
                  <th className="text-center tx1 px-1 py-1 ">Backup Name</th>
                  <th className="text-center tx1 px-1 py-1 ">Backup Date</th>
                  <th className="text-center tx1 px-1 py-1 ">Backup Time</th>
                  <th className="text-center tx1 px-1 py-1 ">Backup Type</th>
                </tr>
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
