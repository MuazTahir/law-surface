import Image from 'next/image';
import "./OrganizedAndIntegratedManagement.css";

const OrganizedAndIntegratedManagement = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Right Side Text and Icons */}
        <div className="col-lg-6">
        <p className="my-1 text-primary">Organized & Integrated Management</p>
          <h2 className="fw-bold text-primary">Manage all cases in your office with the utmost professionalism and efficiency</h2>
          <p className="my-4"><a href="#" className="text-primary">Learn more about Law Surface Features</a></p>
          <div className="row">
            {/* Icons and Text */}
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-tablet-landscape fs-1 text-primary"></i>
              <p>Ready-To-Go</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-calendar2-event fs-1 text-primary"></i>
              <p>Support Hijri Date</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-list-task fs-1 text-primary"></i>
              <p>Up-To-Date</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-person-check fs-1 text-primary"></i>
              <p>Premium Support</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-chat-dots fs-1 text-primary"></i>
              <p>WhatsApp Notifications</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-award fs-1 text-primary"></i>
              <p>ISO Certificated</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-bell fs-1 text-primary"></i>
              <p>Smart Alerts</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-clock fs-1 text-primary"></i>
              <p>Time Saver</p>
            </div>
            <div className="col-6 col-sm-4 mb-3">
              <i className="bi bi-person-badge fs-1 text-primary"></i>
              <p>Friendly Design</p>
            </div>
          </div>
        </div>
          {/* Left Side Image */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
          <Image src="/Screenshot 2024-08-23 105927.png" alt="Organized and Integrated Management" width={555} height={537} />
        </div>
      </div>



      
    </div>
  );
};

export default OrganizedAndIntegratedManagement;
