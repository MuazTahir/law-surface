
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
                  Show branch code
                </h6>
                <p className='p small' > You can share this code with the other account you want to link with</p>

              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <div style={{ gap: "200px" }} className='d-flex mb-3 mt-4 ' >
                <h6 className='h6 small' >Branch code</h6>
                <p className='small pt-1 ' >(Do not share this code publicly)</p>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} >
                <div style={{ border: "2px solid rgb(194 202 194)" }} className='d-flex justify-content-center p-3 gap-2 mb-3 mt-2 rounded-3 ' >
                  <p style={{ fontSize: "12px", fontWeight: "500" }}>aUVUeUl4R3Y1dzVOdWZ5cnptbDlxVXdjVHk4ZXNoOEVybkFmeDBZTytsdF <br></br> dnd2ZxMFFNcHFqL0VXZjF1UllLQg==
                  </p>
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
