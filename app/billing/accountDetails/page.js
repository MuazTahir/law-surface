import React from 'react';
import './account.css';

export default function Account() {
  return (
    <div className="d-flex " style={{ gap: '50px',   }}>

    
      <div className="p-3 bg-white rounded shadow-sm mt-10 justify-content-center align-items-center " style={{ maxWidth: '95%', margin: 'auto', fontSize: '13px' ,borderRadius: '12px', }}>
        <h6 className="ms-2">Account Details</h6>
        <p className="ms-2 mb-4" style={{ color: 'gray' }}>Contract Details and Contacts</p>

        <h6 className="ms-2" style={{color :"#6f42c1"}}>Customer Details</h6>
        <hr style={{ margin: '20px 0' }} /> 

        <div className="ms-2 mb-3" style={{ display: 'flex',justifyContent: 'flex-start', gap: '150px' }}>

          <p><strong>Client Code:</strong> 0V592099718407</p>
          
          <p style={{ maxWidth: '250px', marginLeft: '30px', whiteSpace: 'normal' }}>
            <strong>Customer Name:</strong><br />
            Said Al-Dhuhli Law Firm and Legal Consultations Office
          </p>
        </div>

        <div className="ms-2 mb-3" style={{ display: 'flex', justifyContent: 'flex-start', gap: '105px' }}>
          <p><strong>Account Registration Date:</strong> 16-04-2024</p>
          <p className='ms-3'><strong>Country:</strong> Oman</p>
        </div>

        <h6 className="ms-2 " style={{color :"#6f42c1"}}>Authorized Person</h6>
        <hr style={{ margin: '20px 0' }} /> 
        <div className="ms-2 mb-3" style={{ display: 'flex', justifyContent: 'flex-start', gap: '90px' }}>
          <p><strong>Person Name:</strong> مروان بن سعيد بن خالد الذهلي</p>
          <p><strong>Email:</strong> d.marwanaldhuhli@gmail.com</p>
        </div>

        <div className="ms-2" style={{ display: 'flex', justifyContent: 'flex-start', gap: '150px' }}>
          <p><strong>Phone Number:</strong> +968799000047</p>
          <p><strong>Job Title:</strong> مدير تنفيذي</p>
        </div>
      </div>

    
      <div className='mt-2' style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        fontSize: '13px',
        flexGrow: 1,
      }}>
        <h6>Legal Documents</h6>
        <p style={{ color: 'gray' }}>Contract copy and some documents</p>
        <p>Copy   of the <br/> contract: <a href="#" className='text-decoration-none'>Download</a></p>
        <p>Commercial  <br/> License: <a href="#" className='text-decoration-none'>Download</a></p>
      </div>

    </div>
  );
}
