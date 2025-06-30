"use client"
import { useEffect, useState } from "react"
import "./metting.css"
import axios from "axios"

export default function RemanderDetail() {


const[mettings,setMettings]=useState([]);

    useEffect(() => {


        axios.post(process.env.NEXT_PUBLIC_API_SERVER + " /api/dashboard/general", {
            action: 'getMeetings',
            token: localStorage.getItem('token')
        }).then((resp) => {

            // setReminders(resp.data.reminders);
            // setMeetings(resp.data.meetings);
            console.log("========================")
            console.log(resp.data.meetings)
            setMettings(resp.data.meetings)


        })

    }, [])


    const [dateType, setDateType] = useState(false)
    return <div style={{ backgroundColor: "#edf2f9", padding: "1rem" }}>
        <div
            className=" mt-3 p-3"
            style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
        >
            <div className="row align-items-center gy-3">
                {/* Left Column */}
                <div className="col-lg-6">
                    <div className="d-md-flex  gap-2 align-items-center">
                        <div className="d-flex align-items-center justify-content-between gap-2">
                            <b>Advanced Search</b>
                            <span className="material-icons">search</span>
                        </div>
                        <div className="d-flex justify-content-between gap-2">

                            <input
                                type="text"
                                placeholder="Search by File No or Case No"
                                className="form-control"
                                style={{ maxWidth: "300px" }}
                            />
                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="col-lg-6">
                    <div className="d-flex justify-content-evenly text-center">
                        <div>
                            <span className="d-block ">Today Meetings</span>
                        </div>
                        <div>
                            <span className="d-block ">Upcoming Meetings</span>
                        </div>
                        <div>
                            <span className="d-block ">All Meetings</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" d-md-flex     mt-3  p-2" style={{ backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", }}>

            <div>
                <div>
                    <small><b>Sort By Date</b></small>
                </div>
                <div className="d-flex align-items-center gap-1">
                    <span><small>From</small></span>
                    <div className="w-25">
                        <input
                            placeholder="Date"
                            type={dateType ? "date" : "text"}
                            onClick={() => setDateType(true)}
                            className="form-control"
                        />
                    </div>
                    <span><small>To</small></span>
                    <div className="w-25">
                        <input
                            placeholder="Date"
                            type={dateType ? "date" : "text"}
                            onClick={() => setDateType(true)}
                            className="form-control"
                        />
                    </div>
                    <button className=" btn btn-primary">Sort</button>


                </div>
            </div>
            <div>
                <div>
                    <small><b>Table Sort</b></small>
                </div>
                <div className="d-flex align-items-center gap-1">

                    <div className="">
                        <input
                            placeholder="Remander Date"
                            type={dateType ? "date" : "text"}
                            onClick={() => setDateType(true)}
                            className="form-control"
                        />
                    </div>

                    <div className="">
                        <select className="form-select">
                            <option>A To Z</option>
                            <option>Z To A</option>
                        </select>
                    </div>
                    <button className=" btn btn-primary">Sort</button>


                </div>
            </div>

        </div>

        <div className="tableMettingDiv"  > 
            <table className="table mt-4 mettingTable"  >
                <thead>
                    <tr >
                        <th><b>Meetings Time</b></th>
                        <th><b>Case No</b></th>
                        
                        <th><b>Meetings Details</b></th>
                        <th><b>Metting Through</b></th>
                        <th><b>Metting Status</b></th>
                        <th><b>Arrange the meeting</b></th>
                        <th><b>Attended Person</b></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mettings.map((metting,index)=>{
                            return <tr key={index}>
                                <td>{new Date(metting.meetingDate).toLocaleDateString()}</td>
                                <td>{metting.subject}</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tr>
                        })
                    }
                    {/* <tr  >
                        <td>12/34/2023</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>

                    </tr>
                    <tr  >
                        <td>12/34/2023</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr  >
                        <td>12/34/2023</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr>
                    <tr  >
                        <td>12/34/2023</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tr> */}
                </tbody>
            </table>
        </div>

    </div>

}