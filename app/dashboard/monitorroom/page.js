import React from 'react';
import './page.css';
import LogsComponent from '@/components/LogsComponent/logsComponent';

function Header() {
  return (
    <>
    <div className='m-auto main-div'>

    <div className='d-flex align-items-center mt-4'>
    <div className="">
      <h1 className='fs-div'>
        <i className="fas fa-display fs-5 mx-2"></i>
        <b>Users Monitoring Room</b>
      </h1>
      <p className='p-margin'> You can monitor all users' movements directly and daily</p>
    </div>
    
    </div>
    <LogsComponent></LogsComponent>

{/* <div className='m-auto'>  */}

    <p className='text-center my-4 footer-text' >Total moves 158</p>
{/* </div> */}
    </div>
    </>
  );
}

export default Header;
