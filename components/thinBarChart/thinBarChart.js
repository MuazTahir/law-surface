'use client'
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer , Rectangle} from 'recharts';


const ThinBarChart = ({data,icon,p}) => {
    // console.log(data);
       

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
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Signatures" fill="#20c997" activeBar={<Rectangle stroke="blue" />} />
          <Bar dataKey="Notes" fill="#dc3545" activeBar={<Rectangle      stroke="purple" />} />
          <Bar dataKey="Updates" fill="#fd7e14" activeBar={<Rectangle     stroke="purple" />} />
          <Bar dataKey="Procedures" fill="#28a745" activeBar={<Rectangle  stroke="purple" />} />
          <Bar dataKey="Sressions" fill="#3b7ddd" activeBar={<Rectangle   stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
            </div>

        </div>

    )

}

export default ThinBarChart