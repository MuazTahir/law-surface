import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import caseAPI from '../../app/apiBridge/case';
import { toast } from 'react-toastify';
import moment from 'moment';

const Form1 = ({ id }) => {
  const [isActive, setIsActive] = useState(false);

  const [companyFolders, setCompanyFolders] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch
  } = useForm();

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    document.querySelectorAll('.reminder-field').forEach((field) => (field.disabled = !isChecked));
  };

  const sessionTypes = useSelector((store) => {
    return store.authSlice.generalTerms.sessionType;
  });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });
  const companyID = user.company._id;
  const handleToggle = () => {
    setIsActive(!isActive);
    // Set form values when checkbox is toggled
    if (!isActive) {
      setValue('meeting_subject', '');
      setValue('meeting_date', '');
      setValue('meeting_time', '');
      setValue('meeting_link', '');
      setValue('meeting_note', '');
    }
  };
  const onSubmit = (data) => {
    const sessionFiles = [...data.sessionFiles].map((file) => file);
    delete data.sessionFiles;
    data.createdBy = user._id;
    data.sessionDate = moment(data.sessionDate).startOf('day').valueOf();
    // data.reminderDate = new Date(data.reminderDate).getTime();

    data.nextSessionDate = moment(data.nextSessionDate).startOf('day').valueOf();
    // data.nextSessionTime = new Date(data.nextSessionTime).getTime();

    data.meeting_date = moment(data.meeting_date).startOf('day').valueOf();
    // data.meeting_time = new Date(data.meeting_time).getTime();

    data.case = id;
    data.owner = companyID;
    data.createdBy = user._id;

    if (!data.selected_user) {
      delete data.selected_user;
    }

    if (!data.remindUser) {
      delete data.remindUser;
    }

    let wholeData = JSON.stringify(data);

    let sessionData = new FormData();
    sessionData.append('action', 'addSession');
    sessionData.append('token', localStorage.getItem('token'));
    sessionData.append('form', wholeData);
    sessionData.append('files', sessionFiles);

    caseAPI
      .addSession(sessionData)
      .then((resp) => {
        toast.success('Session added for this case');
      })
      .catch(() => {
        toast.error('Oops, the session could not be added for this case');
      });
  };

  const addMeeting = watch('addMeeting');
  const addReminder = watch('addReminder');
  const reminderSubject = watch('reminderSubject');
  const firstSession = watch('firstSession');

  // addReminder session
  const reminderDate = watch('reminderDate');

  // upcoiming session reminder
  const reminder_date = watch('reminder_date');

  return (
    <div
      class="modal fade align-items-center"
      id="addSessionModal"
      tabindex="-1"
      aria-labelledby="addSessionModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <h5 class="modal-title">
                Add Session
                <p class="text-muted">
                  Organizing court sessions, preparation, and experience in a professional manner
                </p>
              </h5>
            </div>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="modal-body">
              <div className="row">
                <div className="col-md-5">
                  <div className="row">
                    <div class="col-md-9">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="mb-3">
                            <label
                              htmlFor="sessionType"
                              className="form-label"
                            >
                              Session Type <span className="text-danger">*</span>
                            </label>
                            <select
                              id="sessionType"
                              className={`form-select ${errors.sessionType ? 'is-invalid' : ''}`}
                              {...register('sessionType', {
                                required: 'Session Type is required.'
                              })}
                            >
                              <option value="">Select...</option>
                              {sessionTypes.map((item, i) => {
                                return (
                                  <option
                                    key={i}
                                    value={item._id}
                                  >
                                    {item['name' + language]}
                                  </option>
                                );
                              })}
                            </select>
                            {errors.sessionType && <div className="invalid-feedback">{errors.sessionType.message}</div>}
                          </div>
                        </div>

                        <div class="col-md-4">
                          <div className="mb-3">
                            <label
                              htmlFor="firstSession"
                              className="form-label"
                            >
                              First Session{' '}
                              <span>
                                <input
                                  {...register('firstSession')}
                                  type="checkbox"
                                  className="form-check-input"
                                />
                              </span>
                            </label>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-12">
                            <label
                              htmlFor="sessionDate"
                              className="form-label"
                            >
                              Date of this session<span className="text-danger">*</span>
                            </label>
                            <div>
                              <span>
                                <input
                                  id="sessionDate"
                                  className={`form-control ${errors.sessionDate ? 'is-invalid' : ''}`}
                                  {...register('sessionDate', { required: true })}
                                  type="date"
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label
                        htmlFor="sessionType"
                        className="form-label"
                      >
                        This session decision<span className="text-danger">*</span>
                      </label>
                      <div>
                        <span>
                          <textarea
                            className={`form-control ${errors.courseDecision ? 'is-invalid' : ''}`}
                            {...register('courseDecision', { required: true })}
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label
                        className="btn btn-outline-success"
                        for="sessionFilesUpload"
                      >
                        <span
                          className="in_same_line_input select_pop_up_file_to_upload"
                          call_input="pops_procdure"
                        >
                          <i className="fas fa-plus"></i> Add Attachment
                        </span>
                      </label>
                      <input
                        {...register('sessionFiles')}
                        multiple
                        hidden
                        id="sessionFilesUpload"
                        type="file"
                      />
                    </div>
                    <div className="col-md-6">
                      <select
                        {...register('selectedSessionFolder')}
                        className="form-control"
                      >
                        <option>Select Folder</option>
                        {companyFolders.map((folder, i) => {
                          return (
                            <option
                              key={i}
                              value={folder._id}
                            >
                              {folder.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div class="col-md-7">
                  {!firstSession && (
                    <div>
                      <h6
                        class="fw-bold text-primary hover-effect text-black"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#upcomingSessionDetails"
                        aria-expanded="false"
                        aria-controls="upcomingSessionDetails"
                        title="Click to view details"
                      >
                        Upcoming Session
                      </h6>

                      {/* modal 1 */}

                      <div
                        className="collapse show"
                        id="upcomingSessionDetails"
                      >
                        {/* Next Session Date */}
                        <div>
                          <div className="d-flex justify-content-between align-items-center gap-3">
                            {/* Next Session Date */}
                            <div className="d-flex align-items-center">
                              <label
                                htmlFor="nextSessionDate"
                                className="form-label me-2 mb-0"
                                style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
                              >
                                Next session date
                              </label>
                              <input
                                type="date"
                                id="nextSessionDate"
                                style={{ width: '150px', height: '30px' }}
                                className={`form-control ${errors.nextSessionDate ? 'is-invalid' : ''}`}
                                {...register('nextSessionDate', {
                                  required: 'Next session date is required.'
                                })}
                              />
                            </div>

                            {/* Next Session Time */}
                            <div className="d-flex align-items-center">
                              <label
                                htmlFor="nextSessionTime"
                                className="form-label me-2 mb-0"
                                style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
                              >
                                Session Time
                              </label>
                              <input
                                type="time"
                                id="nextSessionTime"
                                style={{ width: '150px', height: '30px' }}
                                className={`form-control ${errors.nextSessionTime ? 'is-invalid' : ''}`}
                                {...register('nextSessionTime', {
                                  required: 'Session time is required.'
                                })}
                              />
                            </div>
                          </div>

                          {/* Hall Number */}
                          <div className="row align-items-center">
                            {/* Hall Number */}
                            <div className="col-6 d-flex align-items-center mb-3 gap-3">
                              <label
                                htmlFor="hallNumber"
                                className="form-label mb-0"
                                style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
                              >
                                Hall Number
                              </label>
                              <select
                                id="hallNumber"
                                className={`form-select ${errors.hallNumber ? 'is-invalid' : ''}`}
                                style={{ width: '150px', height: '35px' }}
                                {...register('hallNumber', {
                                  required: 'Hall number is required.'
                                })}
                              >
                                <option value="">Hall Number...</option>
                                <option value="1">Hall 1</option>
                                <option value="2">Hall 2</option>
                              </select>
                            </div>

                            {/* Floor */}
                            <div className="col-6 d-flex align-items-center mb-3 gap-3">
                              <label
                                htmlFor="floor"
                                className="form-label mb-0"
                                style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
                              >
                                Floor
                              </label>
                              <select
                                id="floor"
                                className={`form-select ${errors.floor ? 'is-invalid' : ''}`}
                                style={{ width: '150px', height: '35px' }}
                                {...register('floor', {
                                  required: 'Floor is required.'
                                })}
                              >
                                <option value="">Floor...</option>
                                <option value="1">1st Floor</option>
                                <option value="2">2nd Floor</option>
                              </select>
                            </div>
                          </div>

                          {/* Next Session Requests */}
                          <div
                            className="mt-3 d-flex "
                            style={{ height: '100px' }}
                          >
                            <label
                              htmlFor="nextSessionRequests"
                              className="form-label"
                              style={{ fontSize: '14px', whiteSpace: 'nowrap' }}
                            >
                              Next Session Requests
                            </label>
                            <textarea
                              id="nextSessionRequests"
                              style={{ marginLeft: '49px', maxWidth: '367px' }}
                              className={`form-control ${errors.nextSessionRequests ? 'is-invalid' : ''}`}
                              placeholder="Next Session Requests"
                              {...register('nextSessionRequests', {
                                required: 'Please provide next session requests.',
                                maxLength: {
                                  value: 500,
                                  message: 'Requests cannot exceed 500 characters.'
                                }
                              })}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* modal 2 */}
                  <h6
                    class="fw-bold text-primary hover-effect text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#addSeesin"
                    aria-expanded="false"
                    aria-controls="addSeesin"
                    title="Click to view details"
                  >
                    <span className="resp-arrow" />
                    Add Session / Meeting Link
                  </h6>
                  {/* modal 2 */}

                  <div
                    className="collapse"
                    id="addSeesin"
                  >
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="row">
                        <div className="col-12">
                          <div className="form-check form-switch">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="active_meeting_subject"
                              {...register('addMeeting', {
                                onChange: (evt) => {
                                  setValue('addMeeting', evt.target.checked);
                                }
                              })}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="active_meeting_subject"
                            >
                              Active this option
                            </label>
                          </div>

                          {addMeeting && (
                            <table className="  mt-3">
                              <tbody>
                                <tr>
                                  <td className="fw-bold">Subject</td>
                                  <td>
                                    <input
                                      type="text"
                                      style={{ maxWidth: '1000px' }}
                                      className={`form-control ${errors.meeting_subject ? 'is-invalid' : ''}`}
                                      id="meeting_subject"
                                      placeholder="Please Enter Meeting Subject"
                                      disabled={!addMeeting}
                                      {...register('meeting_subject', {
                                        required: addMeeting && 'Subject is required'
                                      })}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="fw-bold">Meeting Timing</td>
                                  <td>
                                    <div className="d-flex">
                                      <input
                                        type="date"
                                        className={`form-control me-2 ${errors.meeting_date ? 'is-invalid' : ''}`}
                                        id="meeting_date"
                                        placeholder="Meeting Date"
                                        disabled={!addMeeting}
                                        {...register('meeting_date', {
                                          required: addMeeting && 'Meeting date is required'
                                        })}
                                      />
                                      <input
                                        type="time"
                                        className={`form-control ${errors.meeting_time ? 'is-invalid' : ''}`}
                                        id="meeting_time"
                                        placeholder="Meeting Time"
                                        disabled={!addMeeting}
                                        {...register('meeting_time', {
                                          required: addMeeting && 'Meeting time is required'
                                        })}
                                      />
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td className="fw-bold">Meeting Link</td>
                                  <td>
                                    <input
                                      type="text"
                                      style={{ maxWidth: '1000px' }}
                                      className={`form-control ${errors.meeting_link ? 'is-invalid' : ''}`}
                                      id="meeting_link"
                                      placeholder="Please Enter Meeting Link"
                                      disabled={!addMeeting}
                                      {...register('meeting_link', {
                                        required: addMeeting && 'Meeting link is required',
                                        pattern: {
                                          value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                                          message: 'Please enter a valid URL'
                                        }
                                      })}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td className="fw-bold">Notes</td>
                                  <td>
                                    <textarea
                                      style={{
                                        maxWidth: '1000px',
                                        height: '100px'
                                      }}
                                      className={`form-control ${errors.meeting_note ? 'is-invalid' : ''}`}
                                      id="meeting_note"
                                      placeholder="Please Enter Meeting Notes"
                                      disabled={!addMeeting}
                                      {...register('meeting_note', {
                                        required: addMeeting && 'Notes are required'
                                      })}
                                    />
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan={2}>
                                    {/* Reminder options */}
                                    <div className="d-flex justify-align-content-end ">
                                      <div>
                                        <label>
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="session_email_meeting"
                                            {...register('email_reminder')}
                                          />
                                          Email Reminder
                                        </label>
                                      </div>
                                      <div>
                                        <label>
                                          <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="session_whatsapp_meeting"
                                            {...register('whatsapp_reminder')}
                                          />
                                          WhatsApp Reminder
                                        </label>
                                      </div>
                                    </div>
                                    <div
                                      className="mt-3 d-flex"
                                      style={{ float: 'right' }}
                                    >
                                      <label>Remind Also</label>
                                      <select
                                        style={{ width: '320px' }}
                                        className="form-select"
                                        id="session_meeting_selected_another_user"
                                        disabled={!addMeeting}
                                        {...register('selected_user')}
                                      >
                                        <option value="">Select user</option>
                                        <option value="user1">User 1</option>
                                        <option value="user2">User 2</option>
                                        <option value="user3">User 3</option>
                                      </select>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>

                  {/* modal 3 */}
                  <h6
                    class="fw-bold text-primary hover-effect text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#AddReminder"
                    aria-expanded="false"
                    aria-controls="AddReminder"
                    title="Click to view details"
                  >
                    Add Reminder
                  </h6>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div
                      className="collapse"
                      id="AddReminder"
                    >
                      <div className="row">
                        <div className="col-12">
                          <div className="form-check form-switch">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="active_reminder_subject"
                              {...register('addReminder', {})}
                              onChange={(evt) => {
                                setValue('addReminder', evt.target.checked);
                              }}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="active_reminder_subject"
                            >
                              Active this option
                            </label>
                            {errors.activeReminder && <p className="text-danger">Please activate this option</p>}
                          </div>

                          {addReminder && (
                            <table className="table mt-3">
                              <tbody>
                                {/* Reminder Subject */}
                                <tr>
                                  <td className="fw-bold">Subject</td>
                                  <td>
                                    <input
                                      type="text"
                                      value={reminderSubject}
                                      className={`form-control reminder-field ${
                                        errors.reminderSubject ? 'is-invalid' : ''
                                      }`}
                                      maxLength={100}
                                      autoComplete="off"
                                      placeholder="Please Enter Reminder Subject"
                                      id="reminder_subject_new"
                                      {...register('reminderSubject', {
                                        onChange: (evt) => {
                                          setValue('reminderSubject', evt.target.value);
                                        },
                                        required: 'Subject is required'
                                      })}
                                    />
                                  </td>
                                </tr>

                                {/* Reminder Date */}
                                <tr>
                                  <td className="fw-bold">Reminder Date</td>
                                  <td>
                                    <div className="d-flex align-items-center gap-2 mb-2">
                                      {[7, 14, 21, 30].map((days) => (
                                        <button
                                          key={days}
                                          type="button"
                                          className="btn btn-outline-primary btn-sm reminder-field"
                                          onClick={() => {
                                            setValue('reminderDate', `${days} Days`);
                                          }}
                                        >
                                          {days} Days
                                        </button>
                                      ))}
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                      <input
                                        type="text"
                                        className="form-control reminder-field"
                                        maxLength={11}
                                        autoComplete="off"
                                        value={reminderDate}
                                        readOnly
                                        placeholder="Please choose Reminder Date"
                                        id="reminder_date"
                                        {...register('reminderDate', {
                                          required: 'Reminder Date is required'
                                        })}
                                      />
                                      {errors.reminderDate && (
                                        <p className="text-danger">{errors.reminderDate.message}</p>
                                      )}
                                    </div>
                                  </td>
                                </tr>

                                {/* Reminder Note */}
                                <tr>
                                  <td className="fw-bold">Reminder Note</td>
                                  <td>
                                    <textarea
                                      className="form-control reminder-field"
                                      placeholder="Please Enter Reminder Note"
                                      maxLength={500}
                                      autoComplete="off"
                                      id="reminder_note"
                                      {...register('reminderNote', {
                                        required: 'Reminder Note is required'
                                      })}
                                    />
                                  </td>
                                </tr>

                                {/* Notification Methods */}
                                <tr>
                                  <td />
                                  <td>
                                    <div className="d-flex flex-wrap gap-3">
                                      <div>
                                        <label className="d-flex align-items-center">
                                          <i className="bi bi-envelope me-2"></i>
                                          Email
                                        </label>
                                        <input
                                          type="checkbox"
                                          className="form-check-input reminder-field"
                                          {...register('emailReminder')}
                                        />
                                      </div>
                                      <div>
                                        <label className="d-flex align-items-center">
                                          <i className="bi bi-whatsapp me-2"></i>
                                          WhatsApp
                                        </label>
                                        <input
                                          type="checkbox"
                                          className="form-check-input reminder-field"
                                          {...register('whatsappReminder')}
                                        />
                                      </div>
                                      <div>
                                        <label className="d-flex align-items-center">
                                          <i className="bi bi-person-plus me-2"></i>
                                          Remind Also
                                        </label>
                                        <select
                                          className="form-select reminder-field"
                                          {...register('remindUser')}
                                        >
                                          <option value="">Select user</option>
                                          <option value="1">Marwan Dhuhli</option>
                                          <option value="2">Haitham Bahri</option>
                                          <option value="3">Mahmoud Al-Bouiqi</option>
                                          <option value="4">Shamsa Habsi</option>
                                        </select>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          )}
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* {modal 4} */}

                  <h2
                    class="fw-bold fs-6 text-primary hover-effect text-black"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#formCollapse"
                    aria-expanded="false"
                    aria-controls="AddReminder"
                    title="Click to view details"
                  >
                    Previous session decision
                  </h2>

                  {/* <!-- Dropdown Menu --> */}
                  <div
                    className="collapse"
                    id="formCollapse"
                  >
                    <div className="card card-body mt-3">
                      {/* <!-- Form content goes here --> */}
                      <div className="multi_lang_view_only arabic_flow">
                        <label>Arabic Language</label>
                        <p>
                          قررت المحكمة ضم الاستئناف رقم 52/7135/2024 الى الاستئناف رقم 50/7135/2024 للارتباط وليصدر
                          فيهما حكم واحد
                        </p>
                      </div>
                      <div className="multi_lang_view_only english_flow">
                        <label>English Language</label>
                        <p>-</p>
                      </div>
                    </div>
                  </div>

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
        </div>
      </div>
    </div>
  );
};

export default Form1;
