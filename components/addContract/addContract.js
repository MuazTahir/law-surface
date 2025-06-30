
"use client"
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

let modal;

export default function ContractModal({addContract, setAddContract, onContractAdded}) {

    let [clients, setClients] = useState([]);
    let [contractType, setContractType] = useState([]);
    

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    data.action = "addContract";

    // if(data){
      axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/dashboard/contract',data).then(function(resp){
        console.log(resp.data)
        if(resp.data.success){
          toast.success(resp.data.message);
          onContractAdded(resp.data.contract);
        }
        else{
          toast.error(resp.message)
        }
      })
    // }
    // You can handle the form submission here
  };

  const item = useRef();
    
  useEffect(() => {
      if (addContract) {

          axios.post(process.env.NEXT_PUBLIC_API_SERVER+"/api/settings/systemValues", {
            action:"getValuesByTitle",
            groupTitle:"Contact Type"
          }).then(function (resp) {
            setContractType(resp.data.values);
          });  

            axios.post(process.env.NEXT_PUBLIC_API_SERVER+'/api/dashboard/clients', {
                action:"getClients"
            }).then((resp)=>{
                setClients(resp.data.values);
            }).catch((err)=>{
                toast.error("Oops, the clients could be fetched");
            })

          if (!modal) {

              import('bootstrap/dist/js/bootstrap').then(({ Modal }) => {
    
                  modal = new Modal(item.current);
      
                  item.current.addEventListener('hidden.bs.modal', () => {
                    setAddContract(false);
                  });

                  modal.show();

      
              });

          } else {
              modal.show();
          }
      } else {
          modal && modal.hide();
      }
  }, [addContract]);



  return (
    <>
      <div
      ref={item}
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div>
                <h5 className="modal-title" id="exampleModalLabel">
                Add Contract
              </h5>
              <span> The contract concluded between the office and the client,with an alert to the user when the contract</span>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Contract No</b> <span className="text-danger ms-2">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Please Enter Contract No."
                          {...register("contractNo", { required: true })}
                        />
                        {errors.contractNo && (
                          <small className="text-danger">Contract No is required.</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Client Name</b> <span className="text-danger ms-2">*</span>
                      </label>
                      <div className="col-sm-9">
                      <select
                          className="form-select"
                          {...register("client", { required: true })}
                        >
                          <option value="">Select...</option>
                        {
                            clients.map((client, i)=>{
                              // TBC Arabic conversions according to language
                                return <option key={i} value={client._id}>{client.clientNameEn}</option>
                            })
                        }
                       
                        </select>
                        {errors.contractType && (
                          <small className="text-danger">Contract Type is required.</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Contract Type</b> <span className="text-danger ms-2">*</span>
                      </label>
                      <div className="col-sm-9">
                        <select
                          className="form-select"
                          {...register("contractType", { required: true })}
                        >
                          <option value="">Select...</option>
                         {
                          contractType.map((contract, i)=>{
                            return <option key={i} value={contract._id}>{contract.nameEn}</option>
                          })
                         }
                        </select>
                        {errors.contractType && (
                          <small className="text-danger">Contract Type is required.</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Start Date</b> <span className="text-danger ms-2">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          className="form-control"
                          {...register("startDate", { required: true })}
                        />
                        {errors.startDate && (
                          <small className="text-danger">Start Date is required.</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Expiry Date</b> <span className="text-danger ms-2">*</span>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="date"
                          className="form-control"
                          {...register("expiryDate", { required: true })}
                        />
                        {errors.expiryDate && (
                          <small className="text-danger">Expiry Date is required.</small>
                        )}
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Agreed Amount</b>
                      </label>
                      <div className="col-sm-9">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Please Enter Agreed Amount"
                          {...register("agreedAmount")}
                        />
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Notes</b>
                      </label>
                      <div className="col-sm-9">
                        <textarea
                          className="form-control"
                          placeholder="Please Enter Notes"
                          {...register("notes")}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Attachment1</b>
                      </label>
                      <div className="col-sm-9">
                        <input type="file" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Attachment2</b>
                      </label>
                      <div className="col-sm-9">
                        <input type="file" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Attachment3</b>
                      </label>
                      <div className="col-sm-9">
                        <input type="file" className="form-control" />
                      </div>
                    </div>

                    <div className="mb-2 row">
                      <label className="col-sm-3 col-form-label">
                        <b>Attachment4</b>
                      </label>
                      <div className="col-sm-9">
                        <input type="file" className="form-control" />
                      </div>
                    </div>
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
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
