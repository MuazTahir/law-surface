"use client";

// 'use client'
import React from "react";
import {
  BarChart,
  Bar,

  XAxis,
  YAxis,
  
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const HorizontalBarChart = ({icon, p, data}) => {

let test = 10
  
  
console.log(data);
       

     return (


<div className='bg-white  w-100 rounded-3' style={{ height: 'fit-content', fontSize: '14px' }}>
             <div className='ms-4 '>

                 <div className='w-100 my-3 d-flex align-items-center'>
                     <i class={`fal ${icon || ""} me-3`} style={{ color: "#0392ce" }}></i>
                     <p className='pt-3 head-p '>{p}</p>
                 </div>

             </div>
             <div className=' w-100' style={{height:"400px"}}>
            <ResponsiveContainer width="100%" height="100%">
<BarChart
  layout="vertical" 
  data={data}
  barSize={17}
  margin={{

    top: 20,
    right: 30,
    left: 20,
    bottom: 5,
    
  }}
>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis type="number" />
  <YAxis dataKey="Month" type="category" />
  <Tooltip
  labelStyle={{ fontWeight: "bold", color: "rgb(3, 146, 206)" }}
  />
  <Legend />
  
  <Bar dataKey="Attachments" stackId="a" fill="rgb(255, 87, 34)"  >
    <LabelList dataKey="Attachments" position="center" fill="#FFFFFF" />
  </Bar>
  <Bar dataKey="Requests" stackId="a" fill="rgb(3, 146, 206)">
    <LabelList dataKey="Requests" position="center" fill="#FFFFFF" />
  </Bar>
  <Bar dataKey="WorkTimers" stackId="a" fill="rgb(233 104 13)">
   <LabelList dataKey="WorkTimers" position="center" fill="#FFFFFF" />
  </Bar>
  <Bar dataKey="FollowUps" stackId="a" fill="rgb(167 25 75)">
   <LabelList dataKey="FollowUps" position="center" fill="#FFFFFF" />
  </Bar>
  <Bar dataKey="Meetings" stackId="a" fill="rgb(250 153 2)  ">
    <LabelList dataKey="Meetings" position="inside" fill="#FFFFFF"/>
  </Bar>
  <Bar dataKey="Reminders" stackId="a" fill="#8884d8">
    <LabelList dataKey="Reminders" position="inside" fill="#FFFFFF" />
  </Bar>

</BarChart>
            </ResponsiveContainer>
         
             </div>

         </div>

     )

}

export default HorizontalBarChart;






//   return (
//     <div style={{ width: "100%", height: "500px", background: "#fff" }}>
//       <h4
//         style={{
//           padding: "10px",
//           color: "#333",
//           fontWeight: "bold",
//         }}
//       >
//         Works on claims and files
//       </h4>
     
//     </div>
//   );
// };


