
"use client"
import './style.css'
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import bootstrap from 'bootstrap/dist/js/bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '@/store/auth';

let modal;
let modalRem;

//    showColorModal   setShowColorModal
export default function ChooseColorModal({ showColorModal, setShowColorModal }) {

    let dispatch = useDispatch();

    let user = useSelector((store)=>{
        return store.authSlice.currentUser;
    });

    let color = useSelector((store)=>{
        return store.authSlice.color;
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        data.action = "addContract";

        // if(data){
        axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/dashboard/contract', data).then(function (resp) {
            console.log(resp.data)
            if (resp.data.success) {
                // toast.success(resp.data.message)
                toast.success("HO GYA")
            }
            else {
                toast.error("nhi hoya")
                // toast.error(resp.message)
            }
        })
        // }
        // You can handle the form submission here
    };

    const item = useRef();

    useEffect(() => {
        if (showColorModal) {
          if (!modalRem) {
    
    
            import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {
          
                modalRem = new Modal(item.current);
    
                item.current.addEventListener('hidden.bs.modal', () => {
                    setShowColorModal(false);
                });
    
            modalRem.show();
    
    
            });
    
          
    
          } else {
            modalRem.show();
          }
        } else {
          modalRem && modalRem.hide();
        }
      }, [showColorModal]);
    // let [color, setColor] = useState();

    const updateColor = (color)=>{

    
            axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/settings/user', {
                _id:user._id,
                color:color,
                action:'setColor'
            }).then(()=>{
                dispatch(changeColor(color));
            }).catch((resp)=>{
                toast.error("Oops, we cannot save this setting right now");
            })
        
            
        }
        
    

    return (
        <>
            <div ref={item}
                className="modal fade"
                id="siteColorChoose"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div>
                                <h5 className="modal-title" id="exampleModalLabel">
                                    Change style
                                </h5>
                                <span> Change the asthetic of the system with diffrent colos</span>
                                <h6 className='mt-3' >General Appreance</h6>
                            </div>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">

                            <div className='d-md-flex ms-5 ps-3 mb-3 ' >
                                <div  id='c-circle1' onClick={e=>updateColor(e.currentTarget.id)}className={'d-md-flex justify-content-center '+(color=="c-circle1" ? "selected-border2" : "")}></div>
                                <div  id='c-circle2' onClick={e=>updateColor(e.currentTarget.id)} className={'d-md-flex justify-content-center '+(color=="c-circle2" ? "selected-border2" : "")}></div>
                                <div  id='c-circle3' onClick={e=>updateColor(e.currentTarget.id)} className={'d-md-flex justify-content-center '+(color=="c-circle3" ? "selected-border2" : "")}></div>
                                <div  id='c-circle4' onClick={e=>updateColor(e.currentTarget.id)} className={'d-md-flex justify-content-center '+(color=="c-circle4" ? "selected-border2" : "")}></div>
                                <div  id='c-circle5' onClick={e=>updateColor(e.currentTarget.id)} className={'d-md-flex justify-content-center '+(color=="c-circle5" ? "selected-border2" : "")}></div>
                                <div  id='c-circle6' onClick={e=>updateColor(e.currentTarget.id)} className={'d-md-flex justify-content-center '+(color=="c-circle6" ? "selected-border2" : "")}></div>
                            </div>

                            {/* <h6>Menu Appreance</h6>
                            <select style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }} className="mt-3 small ms-2 ps-2 rounded-3 ">
                                <option>Default Menu</option>
                            </select> */}



                            <div className="modal-footer">



                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                               
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
