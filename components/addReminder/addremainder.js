'use client';
import './style.css';
import { useEffect, useRef, useState } from 'react';
// import Modal from 'bootstrap/js/dist/modal';
import { useForm } from 'react-hook-form';
import '../modals.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addReminder, loadReminders } from '@/store/auth';

import Select from 'react-select';
let modalRem;

export default function AddRemainder({ remainderingStatus, setShowRemainder, caseId }) {
  const item = useRef();
  const [selectedUsers, setSelectedUsers] = useState([]); // Selected users
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  //   let users = useSelector(store=>{
  //     return store.authSlice.currentUser.company?.users || [];
  // })

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  let createdBy = useSelector((store) => {
    return store.authSlice.currentUser._id;
  });

  // Array for reminder options
  const reminderOptions = [
    'Remind Me On The Date',
    'Additional Reminder On Half Time',
    'Additional Reminder One Day Earlier'
  ];

  let companyID = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  });
  useEffect(() => {
    // Fetch users on component mount
    axios
      .post(`${process.env.NEXT_PUBLIC_API_SERVER}/api/settings/user`, {
        action: 'getUsers',
        company: companyID,
        role: ['ATTORNEY', 'ADMIN_ASSISTANT']
      })
      .then((resp) => {
        setUsers(
          resp.data.users.map((user) => ({
            value: user._id,
            label: user.fullName
          }))
        );
      });
  }, [companyID]);

  useEffect(() => {
    if (remainderingStatus) {
      if (!modalRem) {
        import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {
          modalRem = new Modal(item.current);

          item.current.addEventListener('hidden.bs.modal', () => {
            setShowRemainder(false);
          });

          modalRem.show();
        });
      } else {
        modalRem.show();
      }
    } else {
      modalRem && modalRem.hide();
    }
  }, [remainderingStatus]);

  const onSubmit = (data) => {
    data.case = caseId;
    debugger;

    // TBC why attachments
    data.attachments = {
      caseId: caseId || ''
    };
    data.action = 'addReminder';
    data.createdBy = createdBy;
    data.owner = company;
    data.user = selectedUsers.map((user) => user.value);
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general', data)
      .then((resp) => {
        console.log(resp.data);

        if (resp.data.success) {
          reset({
            subject: '',
            reminderDate: '',
            reminderSchedule: '',
            reminderNote: '',
            reminderOption: '',
            reminderWhatsApp: '',
            reminderEmail: ''
          });
          toast.success('Reminder added successfully');
          setShowRemainder(false);
          dispatch(loadReminders());
          dispatch(addReminder(resp.data.reminder));
        }
      })
      .catch((e) => {
        toast.error('Oops, the reminder cannot be added');
      });

    console.log(data);

    // toast.success(" Meeting Data are saved")
  };

  return (
    <div
      id="new1"
      ref={item}
      className="modal fade  "
      tabIndex={-1}
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Add Remainder
              <p className="text-muted">
                The reminder helps the user not to forget any appointments or follow-up procedures with the ability to
                remind via WhatsApp or e-mail.
              </p>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            {/* <p>The reminder helps the user not to forget any appointments or follow-up procedures with the ability to remind via WhatsApp or e-mail.</p> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="d-md-flex pb-3">
                <div className="fssubjectka leftItem w-25">
                  <b>
                    Subject<b className="text-danger"> * </b>
                  </b>
                </div>
                <div className="rightItem w-75">
                  <input
                    type="text"
                    placeholder="Please enter the subject"
                    className="petcsubject textinput w-100"
                    {...register('subject', { required: true })}
                  />
                  {errors.subject && <div className="form-error">This field is required</div>}
                </div>
              </div>
              <div className="d-md-flex pb-3">
                <div className=" leftItem">
                  <b className="reminderdsize">
                    Remainder Date <b className="text-danger"> * </b>
                  </b>
                </div>
                <div className="d-flex rightItem w-100">
                  <div className="me-2 flex-fill">
                    <input
                      type="date"
                      className="form-control"
                      {...register('reminderDate', { required: true })}
                    />
                    {errors.remainderDate && <div className="form-error">This field is required</div>}
                  </div>
                  <div className="flex-fill">
                    <select
                      className=" form-select"
                      {...register('reminderSchedule', { required: true })}
                    >
                      <option value="">Select Reminder Option</option>
                      {reminderOptions.map((option, index) => (
                        <option
                          key={index}
                          value={option}
                        >
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.reminderOption && <div className="form-error">This field is required</div>}
                  </div>
                </div>
              </div>
              <div className="d-flex pb-3">
                <div className="leftItem">
                  <b className="sizeremaindernka">Remainder Note</b>
                </div>
                <div className="rightItem w-100">
                  <textarea
                    cols={100}
                    rows={4}
                    className="metsnot textinput w-100  rounded"
                    placeholder="Please Enter Reminder Notes "
                    {...register('reminderNote')}
                  ></textarea>
                </div>
              </div>
              <div className="d-md-flex pb-3">
                <div className="leftItem"></div>
                <div className="rightItem w-100">
                  <div
                    className="d-flex"
                    style={{ gap: '15px' }}
                  >
                    <div
                      className="flex-grow-1 d-flex border p-3 align-items-center rounded"
                      style={{ height: '33px' }}
                    >
                      <div>
                        <i className="fa-regular fa-envelope me-2"></i>
                        <b className="sizeemail">Email</b>
                      </div>
                      <div className="ms-auto">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          {...register('reminderEmail')}
                        />
                      </div>
                    </div>
                    <div
                      className="flex-grow-1 d-flex border p-3 align-items-center rounded"
                      style={{ height: '33px' }}
                    >
                      <div>
                        <i className="fa-brands fa-whatsapp me-2 w-max"></i>
                        <b className="sizewhatsapp">WhatsApp</b>
                      </div>
                      <div className="ms-auto">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          {...register('reminderWhatsApp')}
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="forborder mt-3 d-flex  "
                    style={{ gap: '15px' }}
                  >
                    <div className="remindalsom flex-grow-1 ">
                      <label className="form-label ">
                        <b>Remind Also *</b>
                      </label>
                    </div>
                    <div className="flex-grow-1">
                      <Select
                        className="form-select"
                        isMulti
                        options={users}
                        value={selectedUsers}
                        onChange={setSelectedUsers}
                        placeholder="Select Users"
                        styles={{
                          control: (base) => ({
                            ...base,
                            border: 'none',
                            borderColor: 'gray', // Adjust border color
                            boxShadow: 'none', // Remove shadow
                            minHeight: '30px', // Ensure height consistency
                            display: 'flex', // Proper flex alignment
                            flexWrap: 'wrap', // Allow wrapping of selected items
                            justifyContent: 'flex-start',
                            alignItems: 'start',
                            flexDirection: 'column'
                            // height:"48px"
                          }),
                          valueContainer: (base) => ({
                            ...base,
                            padding: '0 0px', // Adjust padding
                            flexWrap: 'wrap', // Ensure selected users wrap onto the next line
                            flexDirection: 'column',
                            alignItems: 'start'
                          }),
                          multiValue: (base) => ({
                            ...base,
                            margin: '2px' // Add margin between selected items
                          }),
                          multiValueLabel: (base) => ({
                            ...base,
                            fontSize: '14px' // Adjust font size if needed
                          }),
                          indicatorsContainer: (base) => ({
                            ...base,
                            display: 'none' // Hide the divider and arrow
                          })
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary border-0"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="addsizeb btn btn-primary bg-success border-0"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
         
    </div>
  );
}
