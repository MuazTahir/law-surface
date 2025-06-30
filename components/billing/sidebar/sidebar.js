'use client';
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';

export default function SideBar({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(true);

  return (
    <>
      {/* <div
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          cursor: 'pointer',
          backgroundColor: '#6f42c1',
          color: 'white',
          position: 'fixed',
          top: '10px',
          left: '10px',
          zIndex: 1000,
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          justifyContent: 'center'
        }}
        onClick={toggleSidebar}
      >
        <FiMenu size={20} />
      </div> */}

      <div
        style={{
          width: '220px',
          height: '100vh',
          backgroundColor: '#f4f4f4',
          padding: '25px 15px',
          borderRight: '2px solid #ccc',
          zIndex: 999,
          overflowY: 'auto'
        }}
      >
        <ul className="list-unstyled mt-5">
          <li style={{ marginBottom: '15px' }}>
            <Link
              href="/billing/pakage"
              className="text-decoration-none"
              style={{ color: '#6f42c1' }}
            >
              <b>Package & Addons Management</b>
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link
              href="/billing/accountDetails"
              className="text-decoration-none"
              style={{ color: '#6f42c1' }}
            >
              <b>Account Details</b>
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link
              href="/billing/payments"
              className="text-decoration-none"
              style={{ color: '#6f42c1' }}
            >
              <b>Invoices & Payments</b>
            </Link>
          </li>
          <li style={{ marginBottom: '15px' }}>
            <Link
              href="/billing/reqHelp"
              className="text-decoration-none"
              style={{ color: '#6f42c1' }}
            >
              <b>Request Help</b>
            </Link>
          </li>
        </ul>
      </div>

      <div
        style={{
          marginLeft: isOpen ? '220px' : '0px',
          transition: 'margin-left 0.3s',
          padding: '20px',
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          boxSizing: 'border-box'
        }}
      >
        {children}
      </div>
    </>
  );
}
