"use client"
import { useState, useRef, useEffect } from "react"
import PhoneInput from "react-phone-input-2"
import Contact from "../contact/Contact";
import './form.css'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/auth";
import ReduxProvider from "../reduxProvider/reduxProvider";

export default function Component(){
    return <ReduxProvider>
        <BusinessForm></BusinessForm>
    </ReduxProvider>
}


function BusinessForm () {

    let dispatch = useDispatch();

    let { register, handleSubmit, formState: { errors } } = useForm();

    const [phone, setPhone] = useState('')
    const [personPhone, setpersonPhone] = useState('')
    const fileInputRef = useRef(null);

    let router = useRouter();

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log('value file:', file);
    };

    const onSave = (data) => {

        data.contact = personPhone;

        data.businessContactPhone = phone;

        let formData = new FormData();

        formData.append('action', 'request-trial');

        for (let i in data) {
            formData.append(i, data[i]);
        }

        axios.post( process.env.NEXT_PUBLIC_API_SERVER+'/api/auth', formData).then((resp) => {
            if (resp.data.success) {
                debugger    
                dispatch(setUser(resp.data.user));
                toast.success("Your trial request has been submitted");
                localStorage.setItem('token', resp.data.token)
                // router.push('/trial-pending');

            } else {
                toast.error(resp.data.message || "Oops, the trial could not be requested!");
            }
        }).catch((err) => {
            console.log(err);
            toast.error("Oops, the trial could not be requested!");
        });

        console.log(data)

    }


    return (
        <div className='container section_space' >
            <div className='row' >
                <div className="col-12 col-md-8">
                    <div className='form-heading lh-sm p-4 pl-2' >
                        <div className='fw-bold fs-5' >Business Details</div>
                        <div className='form-heading-desc' >Make sure all details are correct</div>
                    </div>
                    <form onSubmit={handleSubmit(onSave)}>
                        {/* business details  */}
                        <div className='row mt-3 px-4' >
                            <div className='col-12 col-md-6' >
                                <label htmlFor="Name" className="form-label ">
                                    Business Legal Name <span className='text-danger' >*</span>
                                </label>
                                <input {...register('businessLegalName', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Business Legal Name" />
                                {errors.businessLegalName && <div className="form-error">This field is required</div>}

                                <label htmlFor="Address" className="form-label mt-4">
                                    Business Address <span className='text-danger' >*</span>
                                </label>
                                <input {...register('businesssAddress', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Business Address" />
                                {errors.businesssAddress && <div className="form-error">This field is required</div>}


                                <label className='form-label mt-4' htmlFor="Telephone">
                                    Business Contact Telephone
                                </label>
                                <PhoneInput
                                    country={'us'}
                                    value={phone}
                                    onChange={setPhone}
                                    className="col-12 shadow-none"
                                // id="Telephone"
                                />
                                <label htmlFor="TAX" className="form-label mt-4">
                                    TAX / VAT Number
                                </label>
                                <input  {...register('tax_vat_number', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type TAX / VAT Number optional" />

                                <label htmlFor="OfficeCapacity" className="form-label mt-4" >Office Capacity</label>
                                <select {...register('officeCapacity', { required: true })} className="form-select shadow-none " aria-label="OfficeCapacity">
                                    <option value="">- Select -</option>
                                    <option value="Working Solo">Working Solo</option>
                                    <option value="2-5 Employees">2-5 Employees</option>
                                    <option value="6-10 Employees">6-10 Employees</option>
                                    <option value="+10 Employees">+10 Employees</option>
                                </select>
                            </div>
                            <div className='col-12 col-md-6' >
                                <label htmlFor="LicenseNo" className="form-label">
                                    Trade License Number <span className='text-danger' >*</span>
                                </label>
                                <input {...register('tradeLicenseNumber', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Trade License Number" />
                                {errors.tradeLicenseNumber && <div className="form-error">This field is required</div>}

                                {/*                            
                            <label htmlFor="Owner" className="form-label mt-4">
                                Owner Name <span className='text-danger' >*</span>
                            </label>
                            <input {...register('businessEmailAddress', {required:true})} type="text" className="form-control shadow-none"  placeholder="Please type Owner Name" />
                            {errors.businessEmailAddress && <div className="form-error">This field is required</div>} */}


                                <label htmlFor="BusinessMail" className="form-label mt-4">
                                    Business Email Address <span className='text-danger' >*</span>
                                </label>
                                <input {...register('businessEmailAddress', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Business Email Address" />
                                {errors.businessEmailAddress && <div className="form-error">This field is required</div>}


                                <label htmlFor="BusinessWebsite" className="form-label mt-4">
                                    Business Website
                                </label>
                                <input {...register('businessWebsite')} type="text" className="form-control shadow-none" placeholder="Please type Business Website Link" />
                                {errors.businessWebsite && <div className="form-error">This field is required</div>}



                                <label htmlFor="LicenseCopy" className="form-label mt-4 " >
                                    Trade License Copy
                                </label>
                                <div className="bg-secondary text-white p-3 file-btn " onClick={handleButtonClick}>
                                    Choose File
                                </div>
                                <input
                                    type="file"
                                    id="LicenseCopy"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>

                        {/* Authorized Person */}
                        <div className='form-heading mt-5 lh-sm p-4 pl-2' >
                            <div className='fw-bold fs-5' >Authorized Person / Administrator Account Details</div>
                            <div className='form-heading-desc' >Responsible for communication with the Law Surface support team</div>
                        </div>
                        <div className="row mt-3 px-4" >
                            <div className='col-12 col-md-6' >
                                <label htmlFor="FullName" className="form-label ">
                                    Full Name <span className='text-danger' >*</span>
                                </label>

                                <input {...register('fullName', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Full Name" />
                                {errors.fullName && <div className="form-error">This field is required</div>}


                                <label htmlFor="EmailAddress" className="form-label mt-4">
                                    Email Address <span className='text-danger' >*</span>
                                </label>

                                <input {...register('email', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Email Address" />
                                {errors.email && <div className="form-error">This field is required</div>}

                                <div>
                                    <label htmlFor="EmailAddress" className="form-label mt-4">
                                        Password <span className='text-danger' >*</span>
                                    </label>
                                    <input {...register('password', { required: true })} type="text" className="form-control shadow-none" placeholder="Password" />
                                    {errors.password && <div className="form-error">This field is required</div>}

                                </div>

                            </div>
                            <div className='col-12 col-md-6' >
                                <label htmlFor="Job" className="form-label ">
                                    Job / Responsibility Title <span className='text-danger' >*</span>
                                </label>
                                <input {...register('responsible', { required: true })} type="text" className="form-control shadow-none" placeholder="Please type Job / Responsibility Title" />
                                {errors.responsible && <div className="form-error">This field is required</div>}


                                <label className='form-label mt-4' htmlFor="Contact">
                                    Contact Phone / Mobile
                                </label>
                                <PhoneInput
                                    country={'us'}
                                    value={personPhone}
                                    onChange={setpersonPhone}
                                    className="col-12 shadow-none"

                                />
                            </div>
                        </div>

                        {/* Package Details  */}
                        <div className='form-heading mt-5 lh-sm p-4 pl-2' >
                            <div className='fw-bold fs-5' >Package Details</div>
                            <div className='form-heading-desc' >Select the best package for your office</div>
                        </div>
                        <div className="row mt-3 px-4" >
                            <div className='col-12 col-md-6' >
                                <label htmlFor="LawSurfacePlan" className="form-label mt-4" >Law Surface Plan
                                    <span className="text-danger" >*</span>
                                </label>
                                <select {...register('package', {
                                    required: true, validate: (value) => {

                                        if (value == "NIL") {
                                            return false;
                                        } else {
                                            return true;
                                        }

                                    }
                                })} className="form-select shadow-none " aria-label="LawSurfacePlan">
                                    <option value="NIL">Select</option>
                                    <option value="66b8cdbc86f66eab0ef432e6">Signle User Plan</option>
                                    <option value="66b8cdbc86f66eab0ef432e6">3 Users Plan</option>
                                    <option value="66b8cdbc86f66eab0ef432e6">5 Users Plan</option>
                                    <option value="66b8cdbc86f66eab0ef432e6">10 Users Plan</option>
                                    <option value="66b8cdbc86f66eab0ef432e6">Enterprise Plan</option>
                                </select>
                                {errors.package && <div className="form-error">This field is required</div>}

                            </div>
                            <div className='col-12 col-md-6' >
                                <label htmlFor="OperationCountry" className="form-label mt-4" >Operation Country
                                    <span className="text-danger" >*</span>
                                </label>
                                <select {...register('country', {
                                    required: true, validate: (value) => {

                                        if (value == "NIL") {
                                            return false;
                                        } else {
                                            return true;
                                        }

                                    }
                                })} className="form-select shadow-none " aria-label="OperationCountry">
                                    <option value="NIL">Select Country</option>
                                    <option value="Bahrain">Bahrain</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="Iraq">Iraq</option>
                                    <option value="Oman">Oman</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                </select>
                                {errors.country && <div className="form-error">This field is required</div>}

                            </div>
                        </div>
                        <div className="my-5" >
                            <div className="border-top pt-4 border-solid border-secondary-emphasis" >
                                <div className="d-flex align-items-center"  >
                                    <input type="checkbox" id="correct" />
                                    <label className="fw-bold point mx-2" htmlFor="correct" >I declare that all information entered is correct and legal</label>
                                </div>
                                <div className="my-3" >
                                    The contract and the credentials to access Law Surface will be sent to you within 24 hours to the authorized person{`'`}s email. You will get a 14-day free private account.
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-primary px-4" type="submit">
                            Send Request
                        </button>
                    </form>
                </div>
                <div className="col-12 mt-5 col-md-4">
                    <Contact />
                </div>
            </div>
        </div>
    )
}

// export default BusinessForm