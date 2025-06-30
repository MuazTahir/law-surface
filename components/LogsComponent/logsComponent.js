'use client';
import { useEffect, useState } from "react";
import "./LogsComponent.css"; 

const LogsComponent = () => {
  const logs = [
    { user: "Saifalnaabilaw@gmail.com", activity: "Log in to the platform", time: "14:40:10" },
    { user: "Saifalnaabilaw@gmail.com", activity: "Users Monitoring Room", time: "14:44:10" },
    { user: "Saifalnaabilaw@gmail.com", activity: "Browsing the home page - Home", time: "14:42:39" },
    { user: "Marwan Dhuhli", activity: "All Sessions", time: "14:42:07" },
    { user: "Saifalnaabilaw@gmail.com", activity: "Users Monitoring Room", time: "14:41:00" },
    { user: "Marwan Dhuhli", activity: "All Matters", time: "14:40:17" },
  ];

  const [date, setDate] = useState(new Date());
  const [timer, setTimer] = useState(90);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 90));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logs-container bg-white">
      <div className="d-flex justify-content-between align-items-center flex-wrap log-head mb-3">
        <div className="col-md-6 d-flex align-items-center">
          <label htmlFor="userSelect" className="form-label me-2 fs-6">
            <b>Select user</b>
          </label>
          <select className="form-select selectInput w-75">
            <option value="">Select...</option>
            <option value="1">Marwan Dhuhli</option>
            <option value="2">Haitham Bahri</option>
            <option value="3">Lawyeraldhuhli@gmail.com</option>
            <option value="4">Saifalnaabilaw@gmail.com</option>
            <option value="5">Mahmoud Al-Bouiqi</option>
          </select>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end">
          <span className="me-3">
            Log Date: <b>{date.toISOString().split("T")[0]}</b>
            <p className="date-text">
              <b>A monitoring log is created daily on today's date</b>
            </p>
          </span>
          <button
            className="bg-success text-white refresh-btn me-3"
            onClick={() => setTimer(90)}
          >
            Refresh
          </button>
          <div className="timer-circle d-flex justify-content-center align-items-center fs-3">
            {timer}
          </div>
        </div>
      </div>
      <div className="logs-list table-responsive">
        {logs.map((log, index) => (
          <div
            className="log-item d-flex justify-content-between align-items-center mb-2 px-3 log-div"
            key={index}
          >
            <div>
              <img
                src="https://lawsurface.cloud/app/view/img/default.png"
                className="profile-img me-2"
                alt="profile-img"
              />
              <strong>{log.user}</strong>
              <i
                className={`mx-2 fal ${
                  log.activity === "Log in to the platform"
                    ? "fa-right-to-bracket"
                    : "fa-eye"
                }`}
              ></i>
              <span className="ms-2">{log.activity}</span>
            </div>
            <div>{log.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogsComponent;
