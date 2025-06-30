'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PieCharrt = ({ matterData, fileExecutionData, p, icon, iconCol }) => {
  // let data = data1
  let [data, setData] = useState(matterData || []);
  console.log(data);

  let colorBox = {
    Finished: 'red',
    'In Process': 'green',
    Postponed: '#3b7ddd',
    'Stop Temporarily': 'darkred'
  };

  let [activeBTN, setActiveBTN] = useState('matters');

  useEffect(() => {
    setData(matterData);
  }, [matterData]);

  let handleMatters = () => {
    setActiveBTN('matters');
    debugger;
  };
  let handleFileExecution = () => {
    // setActiveBTN('fileExecution');
    // setData(fileExecutionData);
  };

  //  legend renderer

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const renderLegend = () => {
    return (
      <ul className="list-unstyled mt-3">
        {data.map((entry, index) => {
          debugger;
          return (
            <li
              key={`item-${index}`}
              className="d-flex justify-content-between align-items-center"
            >
              <Link
                className="legend-link"
                href={`/dashboard/ClientSorting?c=${entry._id}`}
              >
                <span className="d-flex align-items-center">
                  <span
                    style={{
                      backgroundColor: colorBox[entry.nameEn],
                      width: '12px',
                      height: '12px',
                      display: 'inline-block',
                      borderRadius: '50%',
                      marginRight: '8px'
                    }}
                  ></span>
                  {entry['name' + language]}
                </span>
                <span>{entry.value > 0 ? entry.value : '-'}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div
      className=" p-3 rounded-3 bg-white"
      style={{ width: '100%' }}
    >
      <div className="d-flex align-items-center mb-3">
        <i
          className={`fal ${icon} me-3`}
          style={{ color: `${iconCol || '#fa9902'}` }}
        ></i>
        <h6 className="mb-0">{p}</h6>
      </div>
      <div className="d-flex justify-content-between">
        <button
          onClick={handleMatters}
          className={`btn btn-link p-0 border-0 text-decoration-none ${
            activeBTN == 'matters' ? 'text-dark fw-bold fs-5' : 'text-secondary'
          }`}
        >
          Files Status
        </button>
        {/* <button
          onClick={handleFileExecution}
          className={`btn btn-link p-0 border-0 text-decoration-none ${
            activeBTN == 'fileExecution' ? 'text-dark fw-bold fs-5' : 'text-secondary'
          }`}
        >
          Execution Files
        </button> */}
      </div>
      <hr className="mt-0 mb-3" />
      <div className="w-100 h-auto">
        <ResponsiveContainer
          width="100%"
          height={200}
        >
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={90}
              fill="#8884d8"
              labelLine={false}
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colorBox[entry.nameEn]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      {renderLegend()}
    </div>
  );
};

export default PieCharrt;
