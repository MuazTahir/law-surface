"use client";
import { useEffect, useRef, useState } from 'react';
// import Modal from 'bootstrap/js/dist/modal';
import { useForm } from 'react-hook-form';
import "./styles.css"
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { addReminder, setReminders } from '@/store/auth';
import { addAdminstrative,setAdminstrative } from '@/store/auth';

import Select from 'react-select';
let modalRem;

export default function AddAdminstrative({ adminstrativeStatus, setShowAdminstrative}) {
  const item = useRef();
  const [selectedUsers, setSelectedUsers] = useState([]); // Selected users
  const dispatch = useDispatch();
  const [users, setUsers] = useState([])
  const { register, handleSubmit, formState: { errors } } = useForm();

  //   let users = useSelector(store=>{
  //     return store.authSlice.currentUser.company?.users || [];
  // })

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  })

  // Array for reminder options
  const adminstrativeOptions = [

    "Remind Me On The Date",
    "Additional Reminder On Half Time",
    "Additional Reminder One Day Earlier"
  ];

  let companyID = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  })
  useEffect(() => {
    // Fetch users on component mount
    axios
      .post(`${process.env.NEXT_PUBLIC_API_SERVER}/api/settings/user`, {
        action: "getUsers",
        company: companyID,
        role: ["ATTORNEY", "ADMIN_ASSISTANT"],
      })
      .then((resp) => {
        setUsers(
          resp.data.users.map((user) => ({
            value: user._id,
            label: user.fullName,
          }))
        );
      });
  }, [companyID]);

  useEffect(() => {
    if (adminstrativeStatus) {
      if (!modalRem) {


        import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {

          modalRem = new Modal(item.current);

          item.current.addEventListener('hidden.bs.modal', () => {
            setShowAdminstrative(false);
          });

          modalRem.show();


        });



      } else {
        modalRem.show();
      }
    } else {
      modalRem && modalRem.hide();
    }
  }, [adminstrativeStatus]);

  const onSubmit = (data) => {

    data.action = 'addAdminstrative';
    data.owner = company;
    data.user = selectedUsers.map((user) => user.value);
    axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/general', data).then((resp) => {
      console.log(resp.data)

      if (resp.data.success) {
        toast.success("Reminder added successfully");
        setShowAdminstrative(false);
        dispatch(addAdminstrative(resp.data.adminstrative));
      }

    }).catch(e => {
      toast.error("Oops, the reminder cannot be added");
    });

    console.log(data);

    // toast.success(" Meeting Data are saved")
  };

  return (
    <div ref={item} className="modal fade" tabIndex={-1}>
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <div> 
              <h4 className="modal-title title-style">Add Administrative Announcement</h4>
              <p>Delivering administrative announcements to users has become easier and more accurate</p>
            </div>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body">
            
            <form onSubmit={handleSubmit(onSubmit)}>
              
              <div className="d-md-flex pb-2 justify-content-between">
                <div className="leftItem "
               
                >
                  <div className='d-flex'>
                  <h4 className='title-style'>Announcement Title</h4>
                  <b className="star-style">*</b>

                  </div>
                  
                  <div>
                  <input
                    type="text"
                    placeholder="Enter Announcement Title"
                    className="form-control fwl-style "
                   
                    {...register('subject', { required: true })}
                  />
                  {errors.subject && <div className='form-error fwl-style'>This field is required</div>}
                </div>
                </div>
                <div className="rightItem">
                  <div className='d-flex'>
                  <h4 className='title-style'>Display Method</h4>
                  <b className='star-style'>*</b>

                  </div>
                  
                  <div>
                  <select id="ann_display_method" className="form-select required fwl-style"> 
                    <option value="1">Fixed Top of Page</option> 
                    <option value="2">Display as a modal</option> 
                    <option value="3">Do not display it in the program</option>
                    {errors.subject && <div className='form-error fwl-style'>This field is required</div>} 
                    </select>
                </div>
                </div>
                
                
                
              </div>
              <div className="d-md-flex pb-2 justify-content-between">
                <div className="leftItem">
                  <div className='d-flex'>
                  <h4 className='title-style'>Announcement Details</h4>
                  <b className='star-style'>*</b>

                  </div>
                 
                  <div >
                  <textarea class="form-control update_textarea required fwl-style" 
                  maxlength="2000" 
                  placeholder="Please write details here">

                  </textarea>
                </div>
                </div>
                <div className="rightItem">
                  <div className='d-flex'>
                  <h4 className='title-style' >Start Date of Announcement</h4>
                  <b className='star-style'>*</b>

                  </div>
                 
                  <div>
                  <input
                    type="text"
                    placeholder="Please Choose Start Date of Announcement"
                    className="form-control fwl-style"
                    {...register('subject', { required: true })}
                  />
                  {errors.subject && <div className='form-error fwl-style'>This field is required</div>}
                
                </div>
                
                </div>
                

                
                
              </div>
              
              <div className="d-flex pb-2 justify-content-between gap-2">
                <div className="leftItem">
                  <div className='d-flex'>
                  <h4 className='title-style'>Publish the Announcement for users </h4>
                  <b className='star-style'>*</b>

                  </div>
                  
                  <div>
                 <div className='border pt-2 pb-2'>
                 <div className='d-flex'>
                 <div className="ms-2">
                        <input
                          className="form-check-input fwl-style"
                          type="checkbox"
                          {...register('reminderEmail')}
                        />
                        
                      </div>
                      <div className=" ms-2 mt-1"><p>Marwan Dhuhli</p></div>
                      </div>
                      <div className='d-flex'>
                 <div className="ms-2 ">
                        <input
                          className="form-check-input fwl-style"
                          type="checkbox"
                          {...register('reminderEmail')}
                        />
                        
                      </div>
                      <div className=" ms-2 mt-1"><p>saifalnaabilaw@gmail.com</p></div>
                      </div>
                      <div className='d-flex'>
                 <div className="ms-2">
                        <input
                          className="form-check-input fwl-style"
                          type="checkbox"
                          {...register('reminderEmail')}
                        />
                        
                      </div>
                      <div className=" ms-2 mt-1"><p>Shamsa Habsi</p></div>
                      </div>
                      
                      
                 </div>
                </div>
                
                </div>
                <div className="rightItem">
                  <div className='d-flex'>
                  <h4 className='title-style'>Announcement Stop Date</h4>
                  <b className='star-style'>*</b>

                  </div>
                 
                  <div>
                  <input
                    type="text"
                    placeholder="Please Choose Announcement Stop Date"
                    className="form-control fwl-style"
                    {...register('subject', { required: true })}
                  />
                  {errors.subject && <div className='form-error fwl-style'>This field is required</div>}
                </div>
                <div className="rightItem mt-2">
                  <div className='d-flex'>
                  <h4 className='title-style'>Additional Notifications</h4>
                  <b className='star-style'>*</b>

                  </div>
                
    
                <div>
                  <div className="d-flex flex-wrap" style={{ gap: "10px" }}>
                    <div className="flex-grow-1 d-flex border p-3 align-items-center rounded" style={{height: '45px' }}>
                      <div className='d-flex'><i className="fa-regular fa-envelope me-2"></i><b>Email</b></div>
                      <div className="ms-2">
                        <input
                          className="form-check-input fwl-style"
                          type="checkbox"
                          {...register('reminderEmail')}
                        />
                      </div>
                    </div>
                    <div className="flex-grow-1 d-flex border p-3 align-items-center rounded" style={{ height: '45px' }}>
                      <div className='d-flex'><i className="fa-brands fa-whatsapp me-2"></i><b>WhatsApp</b></div>
                      <div className="ms-2">
                        <input
                          className="form-check-input fwl-style"
                          type="checkbox"
                          {...register('reminderWhatsApp')}
                        />
                      </div>
                    </div>
                  </div>
               
              </div>
              </div>
                
                </div>
               
             
                
               
                 

                </div>
            
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary fwl-style"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="submit" className="btn btn-success fwl-style">
                Publish Announcement
                </button>
              </div>
            </form>
            </div>
        </div>
      </div>
    </div>

  );
}
