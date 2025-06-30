"use client";
import './styles.css'
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import bootstrap from 'bootstrap/dist/js/bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from '@/store/auth';

let modal;

export default function ChooseLanguageModal({ showLanguageModal, setShowLanguageModal }) {
  
    let dispatch = useDispatch();

    let user = useSelector((store)=>{
        return store.authSlice.currentUser;
    });

    let currentLanguage = useSelector((store)=>{
        return store.authSlice.language;
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
    axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/dashboard/contract", data).then(function (resp) {
      console.log(resp.data);
      if (resp.data.success) {
        // toast.success(resp.data.message)
        toast.success("HO GYA");
      } else {
        toast.error("nhi hoya");
        // toast.error(resp.message)
      }
    });
    // }
    // You can handle the form submission here
  };

  const item = useRef();

  useEffect(() => {
    if (showLanguageModal) {
      // axios.post('/api/dashboard/clients', {
      //     action:"getClients"
      // }).then((resp)=>{
      //     setClients(resp.data.clients);
      // }).catch((err)=>{
      //     toast.error("Oops, the clients could be fetched");
      // })

      if (!modal) {
        import("bootstrap/dist/js/bootstrap").then(({ Modal }) => {
          modal = new Modal(item.current);

          item.current.addEventListener("hidden.bs.modal", () => {
            setShowLanguageModal(false);
          });

          modal.show();
        });
      } else {
        modal.show();
      }
    } else {
      modal && modal.hide();
    }
  }, [showLanguageModal]);

  const updateLanguage = async (language)=>{
    try{

        await axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/settings/user', {
            _id:user._id,
            language:language,
            action:'setLanguage'
        })
        
        dispatch(changeLanguage(language));
    }catch(e){
        toast.error("Oops, we cannot save this setting right now");
    }

   }


  


  return (
    <>
      <div
        ref={item}
        className="modal fade"
        // id="siteColorChoose"
        tabIndex="-1"
        // aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title">Language</h5>
                <span>
                  Change the preferred language for the system display
                </span>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">


                <table className='full-width'>
                    <tr>
                        <td>
                           <div onClick={async ()=>{
                                updateLanguage('En')
                           }}
                            className={'language-item '+(currentLanguage == 'En' ? 'selected' : '')}>English</div>
                        </td>
                        <td>
                           <div onClick={()=>{                    
                                updateLanguage('Ar')                        
                           }}  className={'language-item '+(currentLanguage == 'Ar' ? 'selected' : '')}>العربية</div>
                        </td>
                    </tr>
                </table>


            </div>

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
    </>
  );
}
