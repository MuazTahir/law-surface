
import "./syst.css";
import Footer from "./Footer/page";
import Link from "next/link";


export default function Sysettings() {
  
  
  return (
    <div>
      <div className="mainBox">
        <div className="text-center mt-5">
          <h4 className=" text-success fw-bold fs-5">
            <i class="fa-solid fa-gears"></i> System settings
          </h4>
          <p className=" ">
            All general settings related to the system, such as office
            letterhead, company name, company <br /> logo and available office
            information.
          </p>
        </div>

        <div class="col-sm-12 sysettings mt-5 p-4 ">
          <div>
            <i class="fa-solid fa-globe"></i>
            <br />
            <b className="h6 fw-bold">General Settings</b>
            <p className="my-3">
              All settings related to the system, such as office letterhead,
              office name, office logo and grneral office information.
            </p>
            <Link className="Amajor"  href="/dashboard/settings/general">
              Settings
            </Link>
          </div>

          <div>
            <i class="fa-solid fa-users"></i>
            <br />
            <b className="h6 fw-bold">System Users</b>
            <p className="my-3">
              Registering and controlling all user accounts in the system, such
              as defining which sections they are authorized to enter and change
              the user’s password, username, and permissions for each category
              of user accounts.
            </p>
            <a className="Aminor" href="#######">
              Permissions
            </a>
           <Link href="/dashboard/settings/system-user">Settings</Link> 
          </div>

          <div>
            <i class="fa-brands fa-autoprefixer"></i>
            <br />
            <b className="h6 fw-bold">System Values</b>
            <p className="my-3">
              The fixed system values that are used by all types of operations
              and functions on the system, such as court names and case status.
            </p>
            <Link href="/dashboard/settings/system-values" className="Amajor">
              Settings
            </Link>
          </div>

          <div>
            <i class="fa-solid fa-envelopes-bulk"></i>
            <br />
            <b className="h6 fw-bold">
              Automated letters and mailing templates
            </b>
            <p className="my-3">
              Designing and adding WhatsApp messages or mailing templates to
              facilitate and speed up the process of sending updates to clients
              on their claims.
            </p>
            <a className="Amajor" href="/dashboard/settings/automated-lm">
              Settings
            </a>
          </div>

          <div>
            <i class="fa-solid fa-folder"></i>
            <br />
            <b className="h6 fw-bold">Files Settings</b>
            <p className="my-3">
              You can change the link to upload and view files on the local
              server or allow access to files for different sections. Also,
              setting the serial number for new files with the ability to link
              files.
            </p>
         
            <Link className="Aminored" href="/dashboard/settings/files">
              Settings
            </Link>
          </div>

          <div>
            <i class="fa-solid fa-file-invoice-dollar"></i>
            <br />
            <b className="h6 fw-bold">Billing Settings</b>
            <p className="my-3">
              Control the invoice design settings and the details included in
              the invoice when exporting fees and set office letterhead with
              payment details.
            </p>
            <Link className="Amajor" href="/dashboard/settings/billing">
              Settings
            </Link>
          </div>

          <div>
            <i class="fa-solid fa-file-signature"></i>
            <br />
            <b className="h6 fw-bold">Auto Forms</b>
            <p className="my-3">
              Design contract, POA, or any type of fixed or regular forms.
            </p>
            <Link className="Amajor" href="/dashboard/settings/auto-forms">
              Settings
            </Link>
          </div>

          <div>
            <i class="fa-solid fa-database"></i>
            <br />
            <b className="h6 fw-bold">Backup Services</b>
            <p className="my-3">
              The backup service provides you with peace of mind and not to
              worry about losing your data by backing up all your data to your
              local server, which can be deleted manually at any time.
            </p>
            <a className="Amajor" href="/dashboard/settings/backup-service">
              Settings
            </a>
          </div>

          <div>
            <i class="fa-solid fa-code-branch"></i>
            <br />
            <b className="h6 fw-bold">Manage Branches</b>
            <p className="my-3">
              You can add branches to your account so that you can switch
              between branches faster without having to log in every time.
            </p>
            <Link className="Amajor" href="/dashboard/settings/ManageBranches">
              Settings
            </Link>
          </div>

          <div>
            <i class="fa-solid fa-server"></i>
            <br />
            <b className="h6 fw-bold">License and Services</b>
            <p className="my-3">
              Learn about the current system status and usage license or if any
              system update is available based on improving and adding new
              features to the system.
            </p>
            <a className="Amajor" href="/dashboard/settings/license-services">
              Settings
            </a>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
