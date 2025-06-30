import React, { useEffect, useRef, useState } from 'react';

import './deleteConfirmation.css';
// import { login, requestNewPassword } from './../../store/actions/auth';
import { useDispatch, useSelector } from 'react-redux';
// import M from 'materialize-css';
// import { useForm } from 'react-hook-form';
import axios from 'axios';
// import { Modal } from 'bootstrap/dist/js/bootstrap';
import $ from 'jquery';
import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import history from './../../history';

import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import('bootstrap/dist/js/bootstrap').then(mod =>{
    return mod.Modal
}),
  { ssr: false }
);


export default function DeletionConfirmation({onDelete=()=>{}, data={}, state, message, successMessage, setState }) {

    // let navigate = useNavigate();

    // let dispatch = useDispatch();
    // let store = useSelector(store=>store);
    let [modal, setModal] = useState();

    let modalRef = useRef();

    useEffect(() => {

        if (state) {

            import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {
                // const modalElement = document.getElementById('myModal');
                // if (modalElement) {
                  
                    let modal = new Modal(modalRef.current);
                    modal.show();
                    setModal(modal)

                // }
              });

            // let modal = new Modal(modalRef.current);
            // modal.show();
            // setModal(modal)

            // modalRef.current.addEventListener('hidden.bs.modal', () => {
            //     setState(false);
            // });

            // $('#delete-confirm').modal('open');
        } else {
            modal && modal.hide()
        }

    }, [state]);



    let [loading, setLoading] = useState(false);

    const deleteItem = async (evt) => {

        evt.preventDefault();
        setLoading(true)

        // let $dataElement = $('#deletion-message');

        // let id = $dataElement.data('_id');
        // let api_path = $dataElement.data('api_path');
        // let message = $dataElement.data("deletionmessage");
        // let onDelete = $dataElement.data("onDelete");
        // let cData = $dataElement.data("cData");

        if (data.api_path) {

            // let args = $dataElement.data();

            return axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/' + data.api_path, {
                ...data,
                token:localStorage.getItem('token')
            }).then((resp) => {

                // $dataElement.removeData("cData");

                toast.success(successMessage);
                setState(false);


                // Modal('#delete-confirm').open();
                // $('#delete-confirm').modal('close')
                //   M.Modal.init(document.getElementById('delete-confirm'), {}).close();        
                onDelete(resp);
                setLoading(false);
            }).catch((e) => {

                // $dataElement.removeData("cData");

                setState(false);

                toast.error("Oops, this item could not be deleted!");
                setLoading(false);
            });

        } else {

            // $dataElement.removeData("cData");

            setState(false);



            // $('#delete-confirm').modal('close')

            //   M.Modal.init(document.getElementById('delete-confirm'), {}).close();        

            setLoading(false);
            toast.success(successMessage);
            onDelete(true);
        }


    }

    return <div id="delete-confirm" class="modal" ref={modalRef}>

        <div class="modal-dialog">

            <div class="modal-body">

                <div className="modal-content">

                    {/* <h4>Lets start!</h4><br /> */}
                    <div className="text-center">
                        <p id='deletion-message'>{message}</p>
                    </div>
                    <form action="" onSubmit={deleteItem}>

                        <>
                            <div class="text-center">

                                <button class="btn btn-danger" type="submit">Yes</button>
                                <button class="btn btn-success" type="button" onClick={(evt) => {
                                    // M.Modal.init(document.getElementById('delete-confirm'), {}).close();
                                    setState(false);
                                    evt.stopPropagation();

                                }}>No</button>
                                {loading && <img className='loading-img' src="/loading.gif" />}
                            </div>

                        </>
                    </form>
                </div>
            </div>
        </div>
    </div>

}

// export default connect((store) => {
//     return { store };
// }, { login, requestNewPassword })(Login)