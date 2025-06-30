"use client";

import { useEffect, useState } from "react";
import "./user.css";
import axios from "axios";
import { useSelector } from "react-redux";
let moment = require('moment')

export default function UserContent() {

  const users = useSelector((store) => {
    return store.authSlice.currentUser.company?.users || [];
  })

  const [logs, setLogs] = useState([]);

  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {

    if (selectedUser) {

      axios
        .post("/api/dashboard/logs", {
          user:selectedUser._id,
          action: "getLogs"
        })
        .then((res) => {
          console.log(res.data);
          setLogs(res.data.logs);
        })
        .catch((error) => {
          console.error("Oops, we could not fetch the logs right");
        });

    }

  }, [selectedUser]);

  const handleUserChange = (e) => {
    const selected = users.find(
      (user) => user._id === e.target.value
    );
    setSelectedUser(selected || null);
  };

  return (
    <>
      <div id="user-monitor-room">
        <div className="d-flex align-items-center justify-content-center mt-5">
          <h3 className="text-primary" ><i class="fa-solid fa-desktop" /> Users Monitoring Room</h3>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-5 text-muted">
          <small className="h6">You can monitor all users movements directly and daily</small>
        </div>
      </div>

      <div className="container d-flex justify-content-between align-items-center my-5">
        <div className="d-flex align-items-center">
          <span className="col-5 fw-bold text-muted">Select user</span>
          <select
            className="form-select col-lg-1"
            onChange={handleUserChange}
            // defaultValue=""
          >
            <option value="">
              Select a user
            </option>
            {users.map((user, index) => (
              <option key={index} value={user._id}>
                {user.fullName}
              </option>
            ))}
          </select>
        </div>

        <div className="d-flex align-items-center">
          <div className="me-2">
            <span className="fw-bold text-muted">
              Log Date: <small>{new Date().toLocaleDateString()}</small>
            </span>
            <div>
              <small>
                A monitoring log is created on a daily basis and on today's
                date.
              </small>
            </div>
          </div>
          <button
            className="btn rounded-5 btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh
          </button>
        </div>
      </div>

      {selectedUser && (
        <div className="container">
          {logs.map((log,index) => {
            return <div className="d-flex justify-content-between mb-4" key={index}>
              <div className="d-flex align-items-center">
                <img width="20" height="20" src={selectedUser.dp} alt="User" />
                <small className="fw-bold ms-2">
                  {selectedUser.fullName}
                </small>
                <small className="mx-2">
                  <i className={`fa-solid ${getIcon(log.log.icon)}`}></i>
                </small>
                <small className="me-2">{log.log.content}</small>
                {log.case && <small className="bg-primary text-white px-1 rounded-2">
                  {log.case.fileNo}
                </small> }
              </div>
              <div className="border-end d-flex align-items-center border-primary pe-1">
                <small>
                  {moment(log.time).format('hh:mm A')}
                </small>
              </div>
            </div>
          })}
        </div>
      )}
    </>
  );

  function getIcon(logType) {
    const icons = {
      reminder: "fa-calendar-check",
      session: "fa-calendar-plus",
      caseFile: "fa-eye",
      opening: "fa-suitcase",
      logIn: "fa-right-to-bracket",
    };
    return icons[logType] || "fa-question-circle";
  }
}
