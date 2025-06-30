'use client';
import React from 'react';
import './edit-profile.css'; // Add a CSS file for styling

export default function EditProfile() {
  return (
    <div className="edit-profile-container">
      <div className="profile-header">
        <div className="profile-info">
          <img src="/default-avatar.png" alt="Profile" className="profile-avatar" />
          <div>
            <h3>Saifalnaabilaw@gmail.com</h3>
            <p>Attorney</p>
          </div>
        </div>
        <button className="edit-photo-btn">Edit Photo</button>
      </div>

      <div className="profile-details">
        <div className="contact-info">
          <h4>Contact Information</h4>
          <p><strong>Phone Number:</strong> +96892206479</p>
          <p><strong>Email Address:</strong> saifalnaabilaw@gmail.com</p>
          <p><strong>Last Login:</strong> Thursday - 01 May, 2025 at 6:10 PM</p>
          <p><strong>Extensions No.:</strong> 92206479</p>
          <p><strong>Address:</strong> ولاية نخل</p>
        </div>

        <div className="options">
          <h4>Options</h4>
          <div className="options-grid">
            <button>Change Password</button>
            <button>Two-factor Authentication</button>
            <button>Electronic Signature</button>
            <button>Quick Links</button>
            <button>Permissions</button>
            <button>Edit Log</button>
            <button>Login Log</button>
            <button>Performance</button>
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <ul className="tabs">
          <li className="active">Matters (2)</li>
          <li>Sessions (93)</li>
          <li>Updates (2)</li>
          <li>Notes (1)</li>
          <li>Procedures (2)</li>
          <li>Job Tasks (0)</li>
          <li>Contracts (1)</li>
          <li>POA (0)</li>
          <li>Clients (3)</li>
        </ul>
        <div className="tab-content">
          <table>
            <thead>
              <tr>
                <th>File No.</th>
                <th>Case No.</th>
                <th>Court</th>
                <th>Department</th>
                <th>Case Type</th>
                <th>Entry Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1407</td>
                <td>Dumy-998</td>
                <td>The Court Of First Instance In Al Musanna</td>
                <td>Commercial Appeal Circuit</td>
                <td>-</td>
                <td>26-04-2025</td>
              </tr>
              <tr>
                <td>1367</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>11-02-2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}