import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

const Form4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Reimbursement details added successfully!');
  };
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

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const fileInputRef = useRef(null);

  // Handle button click to trigger the file input click
  const handleAddAttachmentClick = () => {
    fileInputRef.current.click(); // This triggers the file input dialog
  };
  return (
    <div
      className="modal fade"
      id="add_job_pop"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-titlefs-6">
              Add Job Task
              <p className="text-muted">
                Delegate a job task to system users with the ability to track the completion status.
              </p>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Modal Body */}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <div className="row">
                {/* Left Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="task_title"
                      className="form-label fw-semibold"
                    >
                      Task Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className={`form-control ${errors.task_title ? 'is-invalid' : ''}`}
                      id="task_title"
                      style={{ width: '370px', maxWidth: '1000px' }}
                      placeholder="Please write the task title"
                      maxLength={100}
                      {...register('task_title', { required: true })}
                    />
                    {errors.task_title && <div className="invalid-feedback">Task title is required.</div>}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="task_type"
                      className="form-label fw-semibold"
                    >
                      Task Type <span className="text-danger">*</span>
                    </label>
                    <select
                      className={`form-select ${errors.task_type ? 'is-invalid' : ''}`}
                      id="task_type"
                      {...register('task_type', { required: true })}
                    >
                      <option value="">Select...</option>
                      <option value="apply_documents">Apply Documents</option>
                      <option value="accountant">Accountant</option>
                      <option value="procedures">In the procedures</option>
                      <option value="normal">Normal</option>
                      <option value="print_memo">Print memo</option>
                      <option value="special_mission">Special mission</option>
                      <option value="outside_work">Outside Work</option>
                      <option value="case_registration">Case Registration</option>
                    </select>
                    {errors.task_type && <div className="invalid-feedback">Task type is required.</div>}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="task_deadline"
                      className="form-label fw-semibold"
                    >
                      Task Deadline <span className="text-danger">*</span>
                    </label>
                    <input
                      type="date"
                      style={{ width: '370px', maxWidth: '1000px' }}
                      className={`form-control ${errors.task_deadline ? 'is-invalid' : ''}`}
                      id="task_deadline"
                      {...register('task_deadline', { required: true })}
                    />
                    {errors.task_deadline && <div className="invalid-feedback">Task deadline is required.</div>}
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="task_priority"
                      className="form-label fw-semibold"
                    >
                      Task Priority <span className="text-danger">*</span>
                    </label>
                    <select
                      className={`form-select ${errors.task_priority ? 'is-invalid' : ''}`}
                      id="task_priority"
                      {...register('task_priority', { required: true })}
                    >
                      <option value="">Select...</option>
                      <option value="urgent">Urgent</option>
                      <option value="normal">Normal</option>
                    </select>
                    {errors.task_priority && <div className="invalid-feedback">Task priority is required.</div>}
                  </div>
                </div>

                {/* Right Column */}
                <div className="col-md-6">
                  <div className="mb-3">
                    <label
                      htmlFor="job_statement"
                      className="form-label fw-semibold"
                    >
                      Assignment Details <span className="text-danger">*</span>
                    </label>
                    <textarea
                      className={`form-control ${errors.job_statement ? 'is-invalid' : ''}`}
                      id="job_statement"
                      rows={5}
                      style={{ maxWidth: '1000px' }}
                      maxLength={2000}
                      placeholder="Please write the assignment details"
                      {...register('job_statement', { required: true })}
                    ></textarea>
                    {errors.job_statement && <div className="invalid-feedback">Assignment details are required.</div>}
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Send the task to</label>
                    <ul className="list-unstyled">
                      <li>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value="user1"
                          {...register('task_users')}
                        />
                        <label className="form-check-label ms-2">Marwan Dhuhli</label>
                      </li>
                      <li>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value="user2"
                          {...register('task_users')}
                        />
                        <label className="form-check-label ms-2">Haitham Bahri</label>
                      </li>
                      {/* Add more users as needed */}
                    </ul>
                    <small className="text-muted">Users will be notified via email and platform notifications.</small>
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
                type="submit"
                className="btn btn-success"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form4;
