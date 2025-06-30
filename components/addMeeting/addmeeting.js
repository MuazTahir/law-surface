'use client';
import './style.css';
import { useEffect, useRef, useState } from 'react';
// import Modal from 'bootstrap/js/dist/modal';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../modals.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMeeting as aMeeting, loadMeetings } from '@/store/auth';
import Select from 'react-select';

let modal;

export default function AddMeeting({ meetingStatus, setShowMeeting, caseId }) {
  const [selectedUsers, setSelectedUsers] = useState([]); // Selected users

  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  // let users = useSelector(store=>{
  //     return store.authSlice.currentUser.company?.users || [];
  // })

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  let currentUser = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  let companyID = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  });
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/user', {
        action: 'getUsers',
        company: companyID,
        role: ['ATTORNEY', 'ADMIN_ASSISTANT']
      })
      .then((resp) => {
        console.log('bbbbbbbbbbbbbbbbbbbbb');
        console.log(resp.data.users);
        setUsers(
          resp.data.users.map((user) => ({
            value: user._id,
            label: user.fullName
          }))
        );
      });
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const item = useRef();

  let modalRem;
  let meetingModalInstance = useRef(null);

  useEffect(() => {
    if (meetingStatus) {
      if (!meetingModalInstance.current) {
        import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {
          meetingModalInstance.current = new Modal(item.current);

          // Hide modal when it's closed
          item.current.addEventListener('hidden.bs.modal', () => {
            setShowMeeting(false);
          });

          // Show modal
          meetingModalInstance.current.show();
        });
      } else {
        meetingModalInstance.current.show();
      }
    } else {
      meetingModalInstance.current && meetingModalInstance.current.hide();
    }
  }, [meetingStatus]);
  const onSubmit = (data) => {
    data.attachments = {
      caseId: caseId || ''
    };

    data.action = 'addMeeting';
    data.owner = company;
    data.createdBy = currentUser._id;
    data.user = selectedUsers.map((user) => user.value);

    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general', data)
      .then((resp) => {
        if (resp.data.success) {
          dispatch(loadMeetings());
          toast.success('Meeting added successfully');
          setShowMeeting(false);
          dispatch(aMeeting(resp.data.meeting));
        }
      })
      .catch((e) => {
        toast.error('Oops, the meeting cannot be added');
      });

    console.log(data);

    // toast.success(" Meeting Data are saved")
  };

  return (
    <div>
      <div
        id="add_meeting_pop"
        ref={item}
        className="modal"
        tabIndex={-1}
      >
        <div className="modal-dialog-centered modal-dialog modal-md">
          <div className=" modal-content ">
            <div className="modal-header">
              <div>
                <h5
                  class="modal-title"
                  id="timerModalLabel"
                >
                  Add Meeting
                  <p id="widthsize2">
                    Organizing meetings and links of court sessions and expert discussions with the feature of reminder
                    via mail or WhatsApp
                  </p>
                </h5>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {/* <p>Organizing meetings and links of court sessions and expert discussions with the feature of <br/>reminder via mail or WhatsApp</p> */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-md-flex pb-3">
                  <div className="subjectfs leftItem w-25">
                    <b>
                      Subject <b className="text-danger"> * </b>
                    </b>
                  </div>
                  <div className="rightItem w-75">
                    <input
                      type="text"
                      placeholder="Please Enter Meeting Subject"
                      className="cnsize textinput w-100"
                      {...register('subject', { required: true })}
                    />
                    {errors.subject && <div className="form-error">This field is required</div>}
                  </div>
                </div>
                <div className="d-md-flex pb-3">
                  <div className="mtfs leftItem">
                    <b>
                      Meeting Timing <b className="text-danger"> * </b>
                    </b>
                  </div>
                  <div className="d-flex rightItem w-100">
                    <div className="me-2 flex-fill">
                      <input
                        type="date"
                        className="fontsize form-control"
                        {...register('meetingDate', { required: true })}
                      />
                      {errors.meetingDate && <div className="form-error">This field is required</div>}
                    </div>
                    <div className="flex-fill">
                      <input
                        type="text"
                        placeholder="Meeting Link"
                        className="sizemtli form-control"
                        {...register('meetingLink', { required: true })}
                      />
                      {errors.meetingLink && <div className="form-error">This field is required</div>}
                    </div>
                  </div>
                </div>
                <div className="d-flex pb-3">
                  <div className="fsnotes leftItem">
                    <b>Notes</b>
                  </div>
                  <div className=" rightItem w-100">
                    <textarea
                      cols={100}
                      rows={4}
                      //   className=" w-100 rounded"
                      className="metnot w-100 rounded"
                      placeholder="Please Enter Meeting Notes"
                      {...register('meetingNotes')}
                    ></textarea>
                  </div>
                </div>
                <div className="d-md-flex pb-3">
                  <div className="fsremainder leftItem">
                    <b>Add Reminder via</b>
                  </div>
                  <div className="rightItem w-100">
                    <div
                      className="d-flex"
                      style={{ gap: '15px' }}
                    >
                      <div
                        className="styyle flex-grow-1 d-flex border p-3 align-items-center rounded"
                        style={{ height: '33px' }}
                      >
                        <div>
                          <i className="fa-regular fs-5 fa-envelope me-2"></i>
                          <b className="styleemail">Email</b>
                        </div>
                        <div className="ms-auto">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            {...register('meetingEmail')}
                          />
                        </div>
                      </div>
                      <div
                        className="flex-grow-1 d-flex border p-3 align-items-center rounded"
                        style={{ height: '33px' }}
                      >
                        <div>
                          <i className="fa-brands fa-whatsapp fs-5 me-2"></i>
                          <b className="fswhatsapp">WhatsApp</b>
                        </div>
                        <div className="ms-auto">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            {...register('meetingWhatsApp')}
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      className="mubeengujjar2 d-flex mt-3"
                      style={{ gap: '15px' }}
                    >
                      <div className="flex-grow-1 d-flex border p-3 align-items-center ">
                        <div>
                          <i className="fa-solid fa-user-group me-1"></i>
                          <b className="remindsize">Remind Also</b>
                        </div>
                        <div className="ms-auto"></div>
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
                <div
                  id="footerkasize"
                  className="modal-footer"
                >
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="addwidth btn btn-primary bg-success"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
