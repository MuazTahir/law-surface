import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Save = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  const fileInputRef = useRef(null);

  return (
    <div
      className="modal fade "
      id="export_pdf_pop"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title">
              Save
              <p className="text-muted">Export the case file with the ability to specify the contents</p>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <div className="modal-body">
            <div className="row">
              {/* Language Selection */}
              <div className="col-12 mb-4">
                <h3
                  className="border-start border-3 ps-3"
                  style={{ fontSize: 'inherit', fontWeight: 700 }}
                >
                  Please choose the language of the content for exporting
                </h3>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="print_lang"
                    defaultValue="ar"
                    defaultChecked
                  />
                  <label className="form-check-label">اللغة العربية</label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="print_lang"
                    defaultValue="en"
                  />
                  <label className="form-check-label">English Language</label>
                </div>
              </div>

              {/* Data Selection */}
              <div className="col-12 mb-4">
                <h3
                  className="border-start border-3 ps-3"
                  style={{ fontSize: 'inherit', fontWeight: 700 }}
                >
                  Please choose the data you want to save along with the case file
                </h3>
                <p className="small">
                  <a
                    href="#"
                    className="text-decoration-none"
                  >
                    Mark All
                  </a>
                </p>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue="associated_cases"
                  />
                  <label className="form-check-label">Related Matters</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue="fees_title"
                  />
                  <label className="form-check-label">Fees</label>
                </div>
              </div>

              {/* Other Options */}
              <div className="col-12">
                <h3
                  className="border-start border-3 ps-3"
                  style={{ fontSize: 'inherit', fontWeight: 700 }}
                >
                  Other options
                </h3>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue="show_number"
                  />
                  <label className="form-check-label">Include File Number</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue="no_letter"
                  />
                  <label className="form-check-label">Without letterhead</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue="ref"
                  />
                  <label className="form-check-label">Add Reference Contact</label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    defaultValue="j"
                  />
                  <label className="form-check-label">Add Judge's name</label>
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Save;
