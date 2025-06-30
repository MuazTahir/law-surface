import React from 'react';
import './payments.css'

export default function Page() {

  const payments = [
    { id: 1127, date: "18-02-2025", amount: "151.20OMR", service: 'Renewal', status: "Paid" ,option : "Download" },
    { id: 1119, date: '04-01-2025', amount: '24.03 OMR', service: 'Upgrade', status: 'Paid' ,option : "Download"},
    { id: 1106, date: '17-11-2024', amount: '141.00 OMR', service: 'Renewal', status: 'Paid',option : "Download" },
    { id: 1013, date: '09-08-2024', amount: '108.00 OMR', service: 'Renewal', status: 'Paid',option : "Download" },
    { id: 1012, date: '09-05-2024', amount: '108.00 OMR', service: 'New Account', status: 'Paid' ,option : "Download"},
  ]
  return (
    <div className="p-3 bg-white rounded shadow-sm mt-10 justify-content-center align-items-center" style={{ maxWidth: '95%', margin: 'auto', fontSize: '13px' }}>
      <h6 className='ms-3 '>Invoice & Payments</h6>
      <p className='ms-3 mb-4'>All Payments you have made</p>

      <div className='table-responsive'>
      <table className='table' >

        <thead className='p-3 ' >

          <tr>
            <th> No. </th>
            <th>Date</th>
            <th>Amount</th>
            <th>Service</th>
            <th>Status</th>
            <th>Options</th>
          </tr>

        </thead>

        <tbody>
          {payments.map((payment , index)=>{
           return <tr key={index}>
           <td> {payment.id}</td>
           <td>{payment.date}</td>
           <td>{payment.amount}</td>
           <td>{payment.service}</td>
           <td className='text-success'>{payment.status}</td>
           <td> <button className='btn-sm'>{payment.option}</button></td>
          </tr>
            })}


        </tbody>
      </table>
    </div>
    </div>
  )
}
