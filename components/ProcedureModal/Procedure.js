import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import systemAPI from '@/app/apiBridge/system';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { toast } from 'react-toastify';
import caseAPI from '@/app/apiBridge/case';

const Form2 = ({ caseId }) => {
  const [isVisible, setIsVisible] = useState(false);
  let [procedureTypes, setProcedureTypes] = useState([]);
  let [procedureStatus, setProcedureStatus] = useState([]);

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });
  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue
  } = useForm();

  const reminderDate = watch('reminderDate');

  useEffect(() => {
    systemAPI
      .getValuesByTitle({ groupTitle: 'Procedures Type' })
      .then((resp) => {
        setProcedureTypes(resp.data.values);
      })
      .catch(() => {
        toast.error('Oops, we could not load procedure types!');
      });

    systemAPI
      .getValuesByTitle({ groupTitle: 'Procedures Status' })
      .then((resp) => {
        setProcedureStatus(resp.data.values);
      })
      .catch(() => {
        toast.error('Oops, we could not load procedure types!');
      });
  }, []);

  // Form submit handler
  const onSubmit = (data) => {
    // TBC, should be removed after token activated on server
    data.createdBy = user._id;
    data.owner = company;
    data.case = caseId;
    data.reminderDate = moment(data.reminderDate).startOf('day').valueOf();

    // TBC, setup add to followup
    caseAPI
      .addProcedure(data)
      .then((resp) => {
        if (resp.data.success) {
          toast.success('The procedure added successfully!');
        }
      })
      .catch((error) => {
        toast.error('Oops, the procedure could not be added');
      });

    console.log('Form Data:', data);
    // alert('Reimbursement details added successfully!');
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const fileInputRef = useRef(null);

  // Handle button click to trigger the file input click
  const handleAddAttachmentClick = () => {
    fileInputRef.current.click(); // This triggers the file input dialog
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        class="modal fade"
        id="addProcdurenModal"
        tabindex="-1"
        aria-labelledby="addProcedureModalLabel"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            <div
              className="modal-header"
              style={{ width: '1000px', justifyContent: 'space-between' }}
            >
              <h5 className="modal-title">
                Add Procedure
                <p style={{ fontSize: '14px' }}>Governmental and practical procedures that occurred in this case</p>
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
                style={{ float: 'inline-end' }}
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>{' '}
            <div
              className="modal-body"
              id="add_new_procedures_form"
              style={{ width: '1000px' }}
            >
              {' '}
              <div className="row add_row_gap">
                {' '}
                <div className="flex">
                  <div className="col-6-5">
                    <table className="modal_selecting_table">
                      <tbody>
                        {/* Procedures Date */}
                        <tr>
                          <td className="modal_selecting_table_title required_icon">Procedures Date</td>
                          <td className="modal_selecting_table_content">
                            <input
                              type="date"
                              style={{ maxWidth: '410px', float: 'right' }}
                              className="form-control date_picker required"
                              maxLength={11}
                              autoComplete="off"
                              placeholder="Please choose Procedures Date"
                              id="procedures_date"
                              {...register('procedures_date', { required: 'This field is required' })}
                            />
                            {errors.procedures_date && (
                              <span className="error-message">{errors.procedures_date.message}</span>
                            )}
                          </td>
                        </tr>

                        {/* Procedures Type */}
                        <tr>
                          <td className="modal_selecting_table_title required_icon">Procedures Type</td>
                          <td className="modal_selecting_table_content">
                            <div className="position-relative">
                              <select
                                id="procedures_type"
                                style={{ maxWidth: '410px' }}
                                className="form-control select2 required select2-hidden-accessible"
                                data-toggle="select2"
                                tabIndex={-1}
                                aria-hidden="true"
                                data-select2-id="procedures_type"
                                {...register('procedures_type', { required: 'Please select a procedure type' })}
                              >
                                <option value="">Select...</option>
                                {procedureTypes.map((option, i) => {
                                  return (
                                    <option
                                      key={i}
                                      value={option._id}
                                    >
                                      {option['name' + language]}
                                    </option>
                                  );
                                })}
                                {/* More options... */}
                              </select>
                              {errors.procedures_type && (
                                <span className="error-message">{errors.procedures_type.message}</span>
                              )}
                            </div>
                          </td>
                        </tr>

                        {/* Procedures Status */}
                        <tr>
                          <td className="modal_selecting_table_title required_icon">Procedures Status</td>
                          <td className="modal_selecting_table_content">
                            <div className="position-relative">
                              <select
                                className="select2 form-select required select2-hidden-accessible"
                                id="procedures_status"
                                data-toggle="select2"
                                style={{ maxWidth: '410px' }}
                                tabIndex={-1}
                                aria-hidden="true"
                                data-select2-id="procedures_status"
                                {...register('procedures_status', { required: 'Please select a procedure status' })}
                              >
                                {procedureStatus.map((option, i) => {
                                  return (
                                    <option
                                      key={i}
                                      value={option._id}
                                    >
                                      {option['name' + language]}
                                    </option>
                                  );
                                })}
                                {/* More options... */}
                              </select>
                              {errors.procedures_status && (
                                <span className="error-message">{errors.procedures_status.message}</span>
                              )}
                            </div>
                          </td>
                        </tr>

                        {/* Procedures Details Arabic */}
                        <tr>
                          <td className="modal_selecting_table_title is_top_padding">Procedures Details</td>
                          <td>
                            <div
                              className="mutli_lang_switcher in_table"
                              style={{ display: 'block', width: '100%' }}
                            >
                              <div className="mutli_lang_switcher_header full_width_header"></div>
                              <div
                                className="resp-tabs-container s1"
                                style={{ borderColor: 'rgb(219, 219, 219)' }}
                              >
                                <div className="container">
                                  <div className="row">
                                    <div className="col-12">
                                      <ul
                                        className="nav nav-tabs"
                                        role="tablist"
                                      >
                                        <li className="nav-item">
                                          <button
                                            className="nav-link active"
                                            id="arabic-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#arabic"
                                            type="button"
                                            role="tab"
                                            aria-controls="arabic"
                                            aria-selected="true"
                                          >
                                            اللغة العربية
                                          </button>
                                        </li>
                                        <li className="nav-item">
                                          <button
                                            className="nav-link"
                                            id="english-tab"
                                            data-bs-toggle="tab"
                                            data-bs-target="#english"
                                            type="button"
                                            role="tab"
                                            aria-controls="english"
                                            aria-selected="false"
                                          >
                                            English Language
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-12">
                                      <div
                                        className="tab-content"
                                        id="languageTabContent"
                                      >
                                        {/* Arabic Tab */}
                                        <div
                                          className="tab-pane fade show active"
                                          id="arabic"
                                          role="tabpanel"
                                          aria-labelledby="arabic-tab"
                                        >
                                          <textarea
                                            className="form-control my-3"
                                            maxLength={2000}
                                            style={{ height: '109px', maxWidth: '1000px' }}
                                            autoComplete="off"
                                            id="procedures_details"
                                            placeholder="Please write details here باللغة العربية"
                                            {...register('procedures_detailsAr', {
                                              required: 'Arabic details are required'
                                            })}
                                          ></textarea>
                                          {errors.procedures_detailsAr && (
                                            <span className="error-message">{errors.procedures_detailsAr.message}</span>
                                          )}
                                        </div>
                                        {/* English Tab */}
                                        <div
                                          className="tab-pane fade"
                                          id="english"
                                          role="tabpanel"
                                          aria-labelledby="english-tab"
                                        >
                                          <textarea
                                            className="form-control my-3"
                                            maxLength={2000}
                                            autoComplete="off"
                                            id="procedures_details_en"
                                            placeholder="Please write details here in English Language"
                                            {...register('procedures_detailsEn', {
                                              required: 'English details are required'
                                            })}
                                          ></textarea>
                                          {errors.procedures_detailsEn && (
                                            <span className="error-message">{errors.procedures_detailsEn.message}</span>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="col-5">
                    {' '}
                    <h3 className="modal_inner_title_for_rows change_first_session_title">
                      Reminder &amp; Follow up
                    </h3>{' '}
                    <div className="container mt-4">
                      <table className="table table-bordered modal_selecting_table">
                        <tbody>
                          {/* Toggle Switch Row */}
                          <tr className="reminder_for_procedures">
                            <td
                              colSpan={2}
                              className="text-start"
                            >
                              <div className="form-check form-switch">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  id="activeReminder"
                                  {...register('addToFollowUp')}
                                  onChange={toggleVisibility}
                                />
                                <label
                                  className="form-check-label fw-bold"
                                  htmlFor="activeReminder"
                                >
                                  Send Reminder and Add to Follow Page
                                </label>
                              </div>
                            </td>
                          </tr>

                          {/* Conditionally Rendered Table Row */}
                          {isVisible && (
                            <tr className="extra_content">
                              <td colSpan={2}>
                                <div className="p-3 bg-light rounded">
                                  {/* Quick Dates Section */}
                                  <h5 className="mb-3">Select Quick Reminder Dates:</h5>
                                  <div className="d-flex gap-3 text-black">
                                    {[7, 14, 21, 30].map((days, i) => {
                                      return (
                                        <button
                                          key={i}
                                          type="button"
                                          onClick={() => {
                                            const newDate = moment().add(days, 'days');
                                            setValue('reminderDate', newDate.format('YYYY-MM-DD'));
                                          }}
                                          className="btn text-black  border-black"
                                        >
                                          ${days} Days
                                        </button>
                                      );
                                    })}
                                  </div>

                                  {/* Reminder Date Input */}
                                  <div className="mt-4">
                                    <label
                                      htmlFor="reminderDate"
                                      className="form-label"
                                    >
                                      Select a Reminder Date:
                                    </label>
                                    <input
                                      value={reminderDate}
                                      type="date"
                                      className="form-control"
                                      id="reminderDate"
                                    />
                                  </div>

                                  {/* Notification Options */}
                                  <div className="mt-4">
                                    <h6>Notification Options:</h6>
                                    <div className="d-flex gap-3">
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="emailNotification"
                                          {...register('emailReminder')}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="emailNotification"
                                        >
                                          <i className="fas fa-envelope me-2" />
                                          Email
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="whatsappNotification"
                                          {...register('whatsAppReminder')}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="whatsappNotification"
                                        >
                                          <i className="fab fa-whatsapp me-2" />
                                          WhatsApp
                                        </label>
                                      </div>
                                      <div className="form-check">
                                        <input
                                          className="form-check-input"
                                          type="checkbox"
                                          id="showToAll"
                                          {...register('showToAllUsers')}
                                        />
                                        <label
                                          className="form-check-label"
                                          htmlFor="showToAll"
                                        >
                                          <i className="fas fa-users me-2" />
                                          Show to All Users
                                        </label>
                                      </div>
                                    </div>
                                  </div>

                                  {/* File Upload Section */}
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-4">
                      <h6>Attach Files:</h6>
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
                  </div>{' '}
                </div>
              </div>
            </div>{' '}
            <div className="modal-footer">
              {' '}
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>{' '}
              <button
                type="submit"
                className="btn btn-success add_procedures"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form2;
