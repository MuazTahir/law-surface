'use client'

import React, { useState } from 'react';
import "./lineChart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const LineChartUser = ({ data , showSelect , p, icon } ) => {
  const [selectedUser, setSelectedUser] = useState("0");

  let [hovered, setHovered] = useState(false)
  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);



  // console.log(data);


  const handleUserChange = (e) => {
    setSelectedUser(e.target.value);
  };

  return (
    <>

    
        <div className='bg-white  w-100 rounded-3' style={{ height: 'fit-content',  fontSize: '14px' }}>
          <div className='ms-4 '>
         
            <div className='w-100 my-3 d-flex align-items-center'>
              <i class={`fal ${icon || ""} me-3`} style={{ color: "#0392ce" }}></i>
              <p className='pt-3 head-p '>{p}</p>
            </div>
            { showSelect?
            <div>
              <select
                className="form-select fs-6 w-50 mt-2 mb-5"
                value={selectedUser}
                onChange={handleUserChange}
              >
                <option value="0">All Users Statistics</option>
                <option value="1">Marwan Dhuhli (Last Login: 2024-12-09 21:02:23 - Windows - Muscat)</option>
                <option value="43">Mahmoud Al-Bouiqi (Last Login: 2024-12-09 16:38:38 - Windows - Muscat)</option>
                <option value="40">Haitham Bahri (Last Login: 2024-12-04 08:58:51 - Windows - Muscat)</option>
                <option value="42">Saifalnaabilaw@gmail.com (Last Login: 2024-12-09 21:16:53 - Windows - Faisalabad)</option>
                <option value="44">Shamsa Habsi (Last Login: 2024-12-05 13:59:33 - Windows - Muscat)</option>
                <option value="41">Lawyeraldhuhli@gmail.com (Last Login: 2024-09-07 18:45:25 - Windows - Muscat)</option>
              </select>
            </div>:""}
          </div>

          <ResponsiveContainer width="100%" height={400}>
            <LineChart
              data={data}

              margin={{
                top: 5,
                right: 30,

                left: 20,
                bottom: 5
              }}

              onMouseEnter={handleMouseEnter}


              onMouseLeave={handleMouseLeave}


            >
              <CartesianGrid strokeDasharray="1" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />

              <Tooltip />

              <Legend iconType='round'  />
            { icon != "fa-chart-pie" ? ( <> <Line yAxisId="left" type="linear" dataKey="AddCase" stroke="rgb(102, 176, 49)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Attachments" stroke="rgb(96, 125, 139)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Meetings" stroke="rgb(155, 82, 243)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Reminders" stroke="rgb(145, 108, 24)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Notes" stroke="rgb(255, 87, 34)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Updates" stroke="rgb(3, 146, 206)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Procedures" stroke="rgb(233, 104, 13)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Sessions" stroke="rgb(167, 25, 75)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Others" stroke="rgb(233, 104, 13)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="WorkTimers" stroke="rgb(167, 25, 75)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Requests" stroke="rgb(250, 153, 2)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Consultations" stroke="rgb(145, 108, 24)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="Signatures" stroke="" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
              <Line yAxisId="left" type="linear" dataKey="EditCase" stroke="rgb(250, 153, 2)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />  </>) : null}
           {icon == "fa-chart-pie" ? ( <>
              <Line yAxisId="left" type="linear" dataKey="Matters" stroke="rgb(59, 125, 221)" strokeWidth={6} activeDot={hovered ? { r: 4 } : false} />
             
              <Line yAxisId="left" type="linear" dataKey="ExecutionFiles" stroke="rgb(40, 167, 69)" strokeWidth={3} activeDot={hovered ? { r: 4 } : false} />
            </>  ) : null  } 
            
            </LineChart>
          </ResponsiveContainer>
        </div>
        
       
     
    </>
  );
};

export default LineChartUser;
