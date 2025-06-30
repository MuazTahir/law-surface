import Image from 'next/image';
import styles from './LawFirmOfficeOrganized.module.css';

const LawFirmOfficeOrganized = () => {
  return (
    <div className="container my-5 pt-5 white-bk">
      <div className="row">
        {/* Text Content */}
        <div className="col-lg-6 d-flex flex-column justify-content-center">
          <h2 className="fw-bold">Get your law firm office organized and professional for 14-day of a free trial</h2>
          <p className="my-4">
            The best choice for new and old law firms, with the ease of integrating the current work method and the 
            professional work method provided by the program through more than 100 features and characteristics that 
            contribute and define the goal of obtaining the program, which is professionalism, organization, and speeding 
            up procedures, while ensuring that there is no damage or loss of data.
          </p>
          <ul className="list-unstyled">
            <li><i className="fa fa-check-circle me-2"></i> Lawyers Best Friend Platform</li>
            <li><i className="fa fa-lock me-2"></i> High-Level of Security</li>
            <li><i className="fa fa-user-lock  me-2"></i> Restricted Privacy Policy</li>
            <li><i className="fa fa-cloud me-2"></i> Reliable cloud-based software</li>
          </ul>
        </div>
        {/* Image */}
        <div className="col-lg-6 d-flex justify-content-center">
          <Image src="/Asset-1.png" alt="Law Firm Office Organized" width={400} height={400} />
        </div>
      </div>
      {/* Bottom Icons and Text */}
      <div className={`row text-center ${styles.iconTextRow}`}>
        <div className="col-6 col-sm-4 col-lg-2">
          <i className="fa fa-briefcase fs-1"></i>
          <p>Management</p>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <i className="fa fa-users fs-1"></i>
          <p>Clients Management</p>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <i className="fa fa-business-time fs-1"></i>
          <p>Sessions & Reminders</p>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <i className="fa fa-receipt fs-1"></i>
          <p>Legal Accountant & Invoicing</p>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <i className="fa fa-file-export fs-1"></i>
          <p>Export Reports</p>
        </div>
        <div className="col-6 col-sm-4 col-lg-2">
          <i className="fab fa-whatsapp fs-1"></i>
          <p>Ready Mails & WhatsApp Msg</p>
        </div>
      </div>
    </div>
  );
};

export default LawFirmOfficeOrganized;
