import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import caseAPI from '@/app/apiBridge/case';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { loadUpdates } from '@/store/auth';

const Form3 = ({ caseId }) => {
  const [isVisible, setIsVisible] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  // Form submit handler
  const onSubmit = (data) => {
    data.updateDate = moment().startOf('day').valueOf();
    data.case = caseId;
    // TBC token removal
    data.createdBy = user._id;
    caseAPI
      .addUpdate({ ...data })
      .then((resp) => {
        if (resp.data.success) {
          toast.success('The update added successfully!');
          dispatch(loadUpdates());
        }
      })
      .catch(() => {
        toast.error('Oops, the update could not be added');
      });
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const fileInputRef = useRef(null);
  const item = useRef();

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap').then(({ Tab }) => {
      let triggerTabList = item.current.querySelectorAll('[data-bs-toggle="tab"]');

      triggerTabList.forEach((triggerEl) => {
        const tabTrigger = new Tab(triggerEl);

        triggerEl.addEventListener('click', (event) => {
          event.preventDefault();
          tabTrigger.show();
        });
      });
    });
  }, []);

  // Handle button click to trigger the file input click
  const handleAddAttachmentClick = () => {
    fileInputRef.current.click(); // This triggers the file input dialog
  };
  return (
    <div
      className="modal fade"
      id="addUpdateModal"
      tabIndex={-1}
      aria-labelledby="addUpdateModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered ">
        <div
          className="modal-content rounded"
          style={{ border: 'none' }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Modal Header */}
            <div className="modal-header">
              <div></div>
              <h5 className="modal-title">
                Add Update
                <p className="mb-0 text-muted bold">The update to the case file is not a procedure</p>
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
                {/* Update Details Input */}
                <div className="col-12 mb-3">
                  <label
                    htmlFor="updateDate"
                    className="form-label"
                  >
                    Update Details
                    <span className="text-muted ms-2">(Update the date to share with the client)</span>
                  </label>
                  <input
                    {...register('updateDate', { required: true })}
                    type="date"
                    className="form-control"
                    id="updateDate"
                    maxLength={11}
                    style={{ maxWidth: '600px' }}
                    placeholder="Select Update Date"
                  />
                  {errors.updateDate && <div className="form-error">This field is required</div>}
                </div>

                {/* Multilingual Update Switcher */}
                <div className="col-12 mb-3">
                  <div className="mb-2">
                    <h6 className="mb-1">Update Details</h6>
                    <ul
                      className="nav nav-tabs"
                      role="tablist"
                      ref={item}
                    >
                      <li
                        className="nav-item"
                        role="presentation"
                      >
                        <button
                          className="nav-link active"
                          data-bs-toggle="tab"
                          data-bs-target="#arabicTab"
                          type="button"
                          role="tab"
                          aria-controls="arabicTab"
                        >
                          اللغة العربية
                        </button>
                      </li>
                      <li
                        className="nav-item"
                        role="presentation"
                      >
                        <button
                          className="nav-link"
                          data-bs-toggle="tab"
                          data-bs-target="#englishTab"
                          type="button"
                          role="tab"
                          aria-controls="englishTab"
                        >
                          English Language
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    {/* Arabic Tab Content */}
                    <div
                      className="tab-pane active"
                      id="arabicTab"
                      role="tabpanel"
                    >
                      <textarea
                        {...register('updateNotesAr')}
                        className="form-control full-width"
                        maxLength={2000}
                        placeholder="Please write an update for this case باللغة العربية"
                      ></textarea>
                    </div>
                    {/* English Tab Content */}
                    <div
                      className="tab-pane"
                      id="englishTab"
                      role="tabpanel"
                    >
                      <textarea
                        {...register('updateNotesEn')}
                        className="form-control full-width"
                        maxLength={2000}
                        placeholder="Please write an update for this case in English"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-3">
                  <div>
                    {/* Button to trigger file input */}
                    <button
                      className="btn btn-outline-success"
                      onClick={handleAddAttachmentClick}
                    >
                      <span
                        className="in_same_line_input select_pop_up_file_to_upload"
                        call_input="pops_procdure"
                      >
                        <i className="fas fa-plus"></i> Add Attachment
                      </span>
                    </button>

                    {/* Hidden file input */}
                    <input
                      type="file"
                      className="form-control"
                      ref={fileInputRef} // Attach the reference
                      style={{ display: 'none' }} // Hide the input
                      onChange={(e) => {
                        // Handle file selection here if needed
                        const selectedFile = e.target.files[0];
                        if (selectedFile) {
                          console.log(selectedFile.name); // Log file name for demo
                        }
                      }}
                    />
                  </div>
                  <select className="form-select w-auto">
                    <option>Main Directory</option>
                    <option value="fres">Fres</option>
                    <option value="الاثباتات">الاثباتات</option>
                    <option value="الاحكام">الاحكام</option>
                  </select>
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
                type="sumbit"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form3;
