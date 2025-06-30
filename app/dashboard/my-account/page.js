'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ChangePasswordModal from '../change-password/changePassword';
import AccountPass from '../accountPass/accountPass';
import LinkManager from '../linkManager/linkManager';

import { Link } from 'react-router-dom';

// import "node_modules\bootstrap\dist\css\bootstrap.css"
// import profile from "@/component/Profile/profile";
// import Contpage from "./contact/page";
// import Options from "./options/page";
const Home = () => {
  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  useEffect(() => {
    const triggerTabList = document.querySelectorAll('#myTab button');
    triggerTabList.forEach((triggerEl) => {
      const tabTrigger = new bootstrap.Tab(triggerEl);

      triggerEl.addEventListener('click', (event) => {
        event.preventDefault();
        tabTrigger.show();
      });
    });
  }, []);

  return (
    <div className="container-fluid">
      <ChangePasswordModal></ChangePasswordModal>
      <AccountPass></AccountPass>
      <LinkManager></LinkManager>
      <div className="row">
        <div className="col-5 ">
          <div className="card ">
            <div className="card-body">
              <div className="">
                <i class="bi bi-camera-fill fs-3"></i>
              </div>

              <div className="idee">
                <div>
                  <img
                    src="/images/default-profile.png"
                    class="rounded-circle"
                    width="200"
                    height="200"
                  ></img>
                </div>
                <div className="d-flex align-items-center justify-content-center full-width">
                  <div>
                    <h4>{user['name' + language]}</h4>
                    <div>{user.type}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* {cases Department} */}

          <div
            class="card"
            id="deprt"
          >
            <div
              class="card-body"
              id="depr"
            >
              <div className="cas">
                <i class="bi bi-house fs-3 text-black"></i>
                <p id="ico">cases Department</p>
              </div>
              <div className="cas ml-5">
                <i class="bi bi-hand-thumbs-up fs-3"></i>
                <p id="ico">excution Department</p>
              </div>
            </div>
          </div>

          <div
            class="card"
            id="deprt"
          >
            <div
              class="card-body"
              id="depr"
            >
              <div className="cas">
                <i class="bi bi-check-circle fs-2 text-success"></i>
                <p
                  className="text-success"
                  id="ico"
                >
                  cases Department
                </p>
              </div>
              <div className="cas ml-5">
                <i class="bi bi-check-circle fs-2 text-success"></i>
                <p
                  className="text-success"
                  id="ico"
                >
                  excution Department
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}

        <div className="col-3 card cont ">
          <div className="card-body">
            <h5 className="card-title pl-2">Conatact INformation </h5>

            <div>
              <ul className="pl-0">
                <li className="mt-3">
                  <strong>Phone Number:</strong>
                  <br></br>
                  {user.contact}
                </li>
                <li className="mt-3">
                  <strong>Email Address:</strong>
                  <br></br>
                  {user.email}
                </li>
                <li className="mt-3">
                  <strong>Last Login:</strong>
                  <br></br>
                  {new Date(user.lastLogin).toString()}
                </li>

                <li className="mt-3">
                  <strong>Extensions No.:</strong>
                  <br></br>
                  {user.extensionsNo}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* OPtionS */}
        <div className="col-4">
          <div className="card ">
            <div className="card-body">
              <div className="mb-4">
                <h5>Options</h5>
              </div>
              <div
                className="row"
                id="icons"
              >
                <div className="col-3">
                  {' '}
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#changePasswordModal"
                  >
                    <i class="bi bi-shield-check fs-2 text-success"></i>
                    <span className="flex-wrap">Change Password</span>
                  </a>
                </div>

                <div className="col-3">
                  {' '}
                  <i class="bi bi-broadcast-pin fs-2 text-success"></i> <p className="flex-wrap"> Two factor authen</p>
                </div>
                <div className="col-3">
                  {' '}
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#quickLinksModal"
                  >
                    <i class="bi bi-link-45deg fs-2 text-success"></i> <p className="flex-wrap"> Quick Links</p>
                  </a>
                </div>
                <div className="col-3">
                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#accountPassModal"
                  >
                    <i class="fa-light fa-bolt fs-2 text-success"></i> <p className="flex-wrap"> Electronic</p>
                  </a>
                </div>
                <div className="col-3">
                  {' '}
                  <i class="bi bi-substack fs-2 text-success"></i> <p className="flex-wrap"> Permission</p>{' '}
                </div>
                <div className="col-3">
                  {' '}
                  <i class="bi bi-bookmark-star-fill fs-2 text-success"></i> <p className="flex-wrap"> Edit Log</p>
                </div>
                <div className="col-3">
                  {' '}
                  <i class="bi bi-lightbulb fs-3 text-success"></i> <p className="flex-wrap"> Login</p>
                </div>
                <div className="col-3">
                  {' '}
                  <i class="bi bi-calendar-fill fs-3 text-success"></i> <p className="flex-wrap"> Performanc</p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="card"
            id="deprt"
          >
            <div class="card-body">
              <div className="cas">
                <i class="bi bi-key fs-2 text-black"></i>
                <h5 id="ico">cases Department</h5>
              </div>
              <div className="cas">
                <i class="bi bi-person fs-2 text-black"></i>
                <h5 id="ico">excution Department</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAbs */}

      <div className="mt-12 mb-3.5">
        {/* <!-- Nav tabs --> */}
        <ul
          class="nav nav-tabs"
          id="myTab"
          role="tablist"
        >
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              class="nav-link "
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Profile
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              class="nav-link"
              id="messages-tab"
              data-bs-toggle="tab"
              data-bs-target="#messages"
              type="button"
              role="tab"
              aria-controls="messages"
              aria-selected="false"
            >
              Messages
            </button>
          </li>
          <li
            class="nav-item"
            role="presentation"
          >
            <button
              class="nav-link"
              id="settings-tab"
              data-bs-toggle="tab"
              data-bs-target="#settings"
              type="button"
              role="tab"
              aria-controls="settings"
              aria-selected="false"
            >
              Settings
            </button>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div class="tab-content">
          <div
            class="tab-pane active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            {' '}
            <div className="card ">
              <div className="card-body">
                <div className="">
                  <i class="bi bi-camera-fill fs-3"></i>
                </div>

                <div className="idee">
                  <img
                    src="\profile.png"
                    class="rounded-circle"
                    width="200"
                    height="200"
                  ></img>

                  <h4 className="gmal">{user['name' + language]}</h4>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            {' '}
            <div className="col-3 card cont ">
              <div className="card-body">
                <h5 className="card-title pl-2">Conatact INformation </h5>

                <div>
                  <ul className="pl-0">
                    <li className="mt-3">
                      <strong>Phone Number:</strong>
                      <br></br>
                      {user.phoneNumbr}
                    </li>
                    <li className="mt-3">
                      <strong>Email Address:</strong>
                      <br></br>
                      {user.email}
                    </li>
                    <li className="mt-3">
                      <strong>Last Login:</strong>
                      <br></br>
                      {user.lastLogin}
                    </li>

                    <li className="mt-3">
                      <strong>Extensions No.:</strong>
                      <br></br>
                      {user.extensionsNo}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
            tabindex="0"
          >
            <div className="card ">
              <div className="card-body">
                <div className="mb-4">
                  <h5>Messages</h5>
                </div>
                <div
                  className="row"
                  id="icons"
                >
                  <div className="col-3">
                    {' '}
                    <i class="bi bi-shield-check fs-2 text-success"></i> <p className="flex-wrap"> Change Password</p>
                  </div>

                  <div className="col-3">
                    {' '}
                    <i class="bi bi-broadcast-pin fs-2 text-success"></i>{' '}
                    <p className="flex-wrap"> Two factor authen</p>
                  </div>
                  <div className="col-3">
                    {' '}
                    <i class="bi bi-link-45deg fs-2 text-success"></i> <p className="flex-wrap"> Quick Links</p>
                  </div>
                  <div className="col-3">
                    {' '}
                    <i class="fa-light fa-bolt fs-2 text-success"></i> <p className="flex-wrap"> Electronic</p>
                  </div>
                  <div className="col-3">
                    {' '}
                    <i class="bi bi-substack fs-2 text-success"></i> <p className="flex-wrap"> Permission</p>{' '}
                  </div>
                  <div className="col-3">
                    {' '}
                    <i class="bi bi-bookmark-star-fill fs-2 text-success"></i> <p className="flex-wrap"> Edit Log</p>
                  </div>
                  <div className="col-3">
                    {' '}
                    <i class="bi bi-lightbulb fs-3 text-success"></i> <p className="flex-wrap"> Login</p>
                  </div>
                  <div className="col-3">
                    {' '}
                    <i class="bi bi-calendar-fill fs-3 text-success"></i> <p className="flex-wrap"> Performanc</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane"
              id="settings"
              role="tabpanel"
              aria-labelledby="settings-tab"
              tabindex="0"
            >
              Settings
            </div>
          </div>
        </div>

        {/* {NavCard} */}

        <div class="card">
          <div class="card-body">
            <div className="card-title">
              <div className="row text-center mt-3">
                <div className="col-2">
                  <h5>File NO</h5>
                  <p class="card-text  mt-6">135</p>
                </div>
                <div className="col-2">
                  <h5>Case No</h5>
                  <p class="card-text  mt-6">Dummy-1</p>
                </div>
                <div className="col-2">
                  <h5>Court </h5>
                  <p class="card-text  mt-6">The Court Of First Instance in dhank</p>
                </div>
                <div className="col-2">
                  <h5>Department</h5>
                  <p class="card-text mt-6">Commercial planery Centre</p>
                </div>
                <div className="col-2">
                  <h5>Case Type</h5>
                  <p class="card-text mt-6">Real Estate Apeal</p>
                </div>
                <div className="col-2">
                  <h5>Entry Date</h5>
                  <p class="card-text mt-6">20-3-2025</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-header">
            <div className="row text-center">
              <div className="col-2">1367</div>
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-2"></div>
              <div className="col-2">11-2-2025</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
