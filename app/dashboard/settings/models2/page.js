
"use client"
import './style.css'
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import bootstrap from 'bootstrap/dist/js/bootstrap';

let Modal_;
const dynamicStyle = (name) => dynamic(
  () => import("bootstrap").then(({Modal}) => {
    Modal_=Modal;
  }    ),
  { ssr: false }
);

export default function ContractModal({ addContract, setAddContract }) {

  let [clients, setClients] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {

    console.log(data);

    data.action = "Branch-code";

    if (data) {
      axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/auth', data).then((resp) => {
        if (resp.data.success) {

          toast.success("success");


        } else {
          toast.error("unsuccess")
        }
      });

    }

  };

  const item = useRef();

  useEffect(() => {
    if (addContract) {

      // axios.post('/api/dashboard/clients', {
      //     action:"getClients"
      // }).then((resp)=>{
      //     setClients(resp.data.clients);
      // }).catch((err)=>{
      //     toast.error("Oops, the clients could be fetched");
      // })

      if (!Modal_) {

        import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {

          Modal_ = new Modal(item.current);

          item.current.addEventListener('hidden.bs.modal', () => {
            setAddContract(false);
          });

          Modal_.show();


        });

      } else {
        Modal_.show();
      }
    } else {
      Modal_ && Modal_.hide();
    }
  }, [addContract]);


  // });






  return (
    <>
      <div ref={item}
        className="modal fade   "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-md rounded-3   " role="document">
          <div className="modal-content rounded-3 ">
            <div style={{ background: "#f9fbf9" }} className="modal-header">
              <div>
                <h6 className="modal-title h6 " id="exampleModalLabel">
                  Add a new branch
                </h6>
                <p className='p small' > To add a new branch, you must obtain the branch code from the other account</p>

              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)} >
                <div className='d-flex gap-2 mb-5 mt-2 ' >
                  <input {...register("code")} style={{ width: "300px", height: "32px", border: "1px solid #dee2e6" }} className='small rounded-1 px-2 ' placeholder='Enter Branch Code' ></input>
                  <button style={{ background: "#289548", color: "white" }} type='submit' className='px-5 border-0 rounded-1 '>
                    check
                  </button>
                </div>
              </form>

              <div className="modal-footer">



                <button
                  type="button"
                  className='border-0 bg-white '
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
