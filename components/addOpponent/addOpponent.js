
"use client";
import './styles.css';
import { useForm } from "react-hook-form";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { useRef, useState, useEffect } from 'react';
import { toast } from "react-toastify";
import axios from "axios";
import "./styles.css"
import authSlice from '@/store/auth';
import { useSelector } from 'react-redux';

let modalRem;

export  function AddOpponentsModel({addOpponent, setAddOpponent}) {


    let companyID=useSelector((store)=>{
        return  store.authSlice.currentUser.company._id;
      })
    let [legalForm, setLegalForm] = useState([]);

    const { register, handleSubmit, formState: { errors }, setValue } = useForm();

    let item = useRef();

    // Country list options
    const [options] = useState(countryList().getData());

    useEffect(() => {
        if (addOpponent) {

            axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/settings/systemValues", {
                action:"getValuesByTitle",
                groupTitle:"Legal Status"
              }).then(function (resp) {
                setLegalForm(resp.data.values);
              });  

          if (!modalRem) {
    
    
            import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {
          
                modalRem = new Modal(item.current);
    
                item.current.addEventListener('hidden.bs.modal', () => {
                    setAddOpponent(false);
                });
    
            modalRem.show();
    
    
            });
    
          
    
          } else {
            modalRem.show();
          }
        } else {
          modalRem && modalRem.hide();
        }
      }, [addOpponent]);

    // Handle form submission
    const onSubmit = (data) => {
        console.log(data);
        if(data){
            data.owner=companyID,
            data.action="saveOpponent"
            axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/settings/user",data).then(function(resp){
                console.log("dddddddddddddddddddddddddddddddd")
                console.log(resp.data);

                if(resp.data.success){
                    toast.success("Opponent save successfull");
                     
                }else{
                    toast.error(data.message)
                }
            })
             
        }else{
            toast.error("some error")
        }
    };

    // Handle country selectionen
    const handleCountryChange = (selectedOption) => {
        setValue('nationality', selectedOption.label);
    };

    return (
        <div>
          
            {/* Modal */}
            <div
            ref={item}
                className="modal fade"
                id="addOpponentModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="modal-title" id="exampleModalLabel">
                                <b>Add an Opponent to the disputes parties</b>
                            </span>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body" >
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="d-sm-flex">
                                    <div className="leftLables mt-2"><span><b>Opponents Name</b></span><span className="star"> *</span></div>
                                    <div className="rightInputs">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">Arabic</span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="Opponent Name (Arabic)"
                                                {...register('nameAr', { required: 'This field is required' })}
                                            />
                                        </div>
                                        {errors.nameAr && <p className="form-error">{errors.nameAr.message}</p>}
                                        <div className="input-group mt-2">
                                            <div className="input-group-prepend" style={{ fontSize: "12px" }}>
                                                <span className="input-group-text">English</span>
                                            </div>
                                            <input
                                                className="form-control"
                                                placeholder="Opponent Name (English)"
                                                {...register('nameEn', { required: 'This field is required' })}
                                            />
                                        </div>
                                        {errors.nameEn && <p className="form-error">{errors.nameEn.message}</p>}
                                    </div>
                                </div>

                                <div className="d-sm-flex mt-2">
                                    <div className="leftLables mt-2"><span><b>Legal Status</b></span><span className="star"> *</span></div>
                                    <div className="rightInputs ">
                                          <div>
                                          <select
                                            className="form-select"
                                            {...register('legalStatus', { required: 'Please select a legal status' })}
                                        >
                                            <option value="">Select</option>
                                            {
                                                legalForm.map((legalForm, i)=>{
                                                    // TBC language conversion here
                                                    return <option key={i}>{legalForm.nameEn}</option>
                                                })
                                            }
                                            {/* <option value="">Select....</option>
                                            <option value="inertnationalBank">Inernatioinal Band</option>
                                            <option value="semiGovernement">Semi Governemnent</option>
                                            <option value="company">Company</option>
                                            <option value="individuals">Individuals</option>
                                            <option value="localBank">Local Bank</option>
                                            <option value="governemnet">Governemnent</option> */}
                                        </select>
                                        {errors.legalStatus && <p className="form-error">{errors.legalStatus.message}</p>}
                                          </div>
                                       
                                    </div>
                                </div>

                                <div className="d-sm-flex align-items-center mt-2">
                                    <div className="leftLables"><span><b>Nationality</b></span></div>
                                    <div className="rightInputs">
                                        <Select
                                            options={options}
                                            onChange={handleCountryChange}
                                            classNamePrefix="react-select"
                                            // className="form-select"
                                            placeholder="Select Nationality"
                                            
                                        />
                                    </div>
                                </div>

                                <div className="d-sm-flex align-items-center mt-2">
                                    <div className="leftLables"><span><b>Opponents Address</b></span></div>
                                    <div className="rightInputs">
                                        <input
                                            className="form-control"
                                            placeholder="Opponents Address"
                                            {...register('address',)}
                                        />
                                    </div>
                                </div>

                                <div className="d-sm-flex align-items-center mt-2">
                                    <div className="leftLables"><span><b>Email Address</b></span></div>
                                    <div className="rightInputs">
                                        <input
                                            placeholder="Email Address"
                                            className="form-control"
                                            {...register('emailAddress', {
                                                pattern: {
                                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                    message: 'Please enter a valid email address'
                                                }
                                            })}
                                        />
                                        {errors.emailAddress && <p className="text-danger">{errors.emailAddress.message}</p>}
                                    </div>
                                </div>

                                <div className="d-sm-flex align-items-center mt-2">
                                    <div className="leftLables"><span><b>Contact Number</b></span></div>
                                    <div className="rightInputs">
                                        <PhoneInput
                                            country={'us'}
                                            inputStyle={{ width: '100%' }}
                                            onChange={(phone) => setValue('contactNumber', phone)}
                                        />
                                        {errors.contactNumber && <p className="text-danger">{errors.contactNumber.message}</p>}
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        data-bs-dismiss="modal"
                                    >
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Save changes
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
