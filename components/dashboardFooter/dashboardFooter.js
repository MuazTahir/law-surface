import React from 'react';
import './styles.css';

export default function dashboardFooter() {
  return (
    <div className="dashboardFooter">
      <footer class="footer">
        <div class="container-fluid wrapper">
          <div class="row text-muted footer_row">
            <div class="col-6 text-right">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a
                    class="text-muted"
                    href="javascript:"
                    data-bs-toggle="modal"
                    data-bs-target="#submit_suggestion"
                  >
                    Technical support
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="text-muted"
                    href="javascript:"
                    data-bs-toggle="modal"
                    data-bs-target="#downloads"
                  >
                    Downloads
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="text-muted"
                    href="javascript:"
                    data-bs-toggle="modal"
                    data-bs-target="#submit_suggestion"
                  >
                    Report a malfunction
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="text-muted"
                    href="https://lawsurface.cloud/app/dashboard/developers"
                  >
                    Developers
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="text-muted"
                    href="javascript:"
                    id="call_privacy_policy"
                    data-bs-toggle="modal"
                    data-bs-target="#privacy_policy_modal"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li class="list-inline-item">
                  <a
                    class="text-muted"
                    href="https://lawsurface.com?lang=en"
                    target="_blank"
                  >
                    Visit Website
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-6 text-left">
              <p class="mb-0">
                <span class="footer_text">
                  <span class="copyright_text">
                    2025 © .Law Surface.All Rights Reserved to LS Cloud Service Company
                  </span>
                  <font>
                    Holds ISO 27001 certificate of Information Security, Cybersecurity, Privacy Protection and
                    Information Security Management System
                  </font>
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
