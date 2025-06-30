"use client"
import React from 'react';
import "./style.css"
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  Legend
} from 'recharts';

const ThickBarChart = ({data,icon,p}) => {
  
console.log(data);

  return (
<div className='bg-white m-0 w-100 rounded-3' style={{ height: 'fit-content', fontSize: '14px' }}>
            <div className='ms-4 '>

                <div className='w-100  d-flex align-items-center'>
                    <i class={`fal ${icon || ""} me-3`} style={{ color: "#0392ce" }}></i>
                    <p className='pt-3 head-p '>{p}</p>
                </div>

            </div>
            <div className=' w-100' style={{height:"400px"}}>
            <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barCategoryGap="20%">
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" iconType="circle" />
          <Bar dataKey="value" name="Data">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
            
            </div>

        </div>

   
  );
};

export default ThickBarChart;
