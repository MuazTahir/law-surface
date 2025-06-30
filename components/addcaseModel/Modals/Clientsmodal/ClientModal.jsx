"use client"
import axios from "axios";
import { mode } from "d3";
import dynamic from "next/dynamic";
// import { Modal } from "bootstrap";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

let Modal_  = dynamic(
  () => import("bootstrap").then((mod) => mod.Modal),
  { ssr: false } // Disable server-side rendering
);


export default function ClientModal({
  legalStatusOptions,
  addParty,
  partyData,
  setPartyData,
  onSaveClientData,
}) {
  // const modalRef = useRef(null);

  const [errors, setErrors] = useState({});
  const [clientOptions, setClientOptions] = useState([]);
  const [modalInstance, setModalInstance] = useState();

  useEffect(() => {

    // import("bootstrap").then((mod) => {
    //   const ModalClass = mod.Modal;
    //   if (modalRef.current) {
    //     debugger;
    //     const instance = new ModalClass(modalRef.current, {
    //       keyboard: false, // example option
    //     });
    //     modalRef.current.addEventListener("hidden.bs.modal", () => {
    //       if(!instance){
    //         return;
    //       }
    //       instance.dispose();
    //       setModalInstance(null);
    //     });
    //     setModalInstance(instance);
    //   }
    // });

    axios.post(process.env.NEXT_PUBLIC_API_SERVER + "/api/dashboard/clients", {
      action: "getClients",  
      resPerPage:1000000,
      token: localStorage.getItem("token")  
    })
      .then((resp) => {
        // debugger;
        console.log(resp.data);  
        setClientOptions(resp.data.clients[0].results);
      })
      .catch((error) => {
        console.error("Error fetching clients:", error);  
      });



  }, [])

  let language = useSelector((store)=>{
    return store.authSlice.language 
  });

  const handleClientChange = (clientName) => {
    const selectedClient = clientOptions.find(
      (client) => client["clientName"+language] === clientName
    );

    if (selectedClient) {


      const legalStatus = legalStatusOptions.find(
        (value) => value._id === selectedClient.legalForm._id
      );
      console.log("tejkjdkjf fjisdjsfdsijfiodjf ")
      console.log(legalStatus);
      console.log("*****************************")
      console.log(legalStatus.nameEn)
  
      // Set the legalStatus based on the selected language (English or Arabic)
      const legalStatusName = legalStatus ? legalStatus["ClientName" + language] : "";

      setPartyData({
        ...partyData,
        _id: selectedClient._id,
        clientName: selectedClient,
         legalStatus: legalStatus,
        //  legalStatus:
        nationality: selectedClient.nationality,
      });
    }
  };



  const validateForm = () => {
    const newErrors = {};
    if (!partyData.clientName) {
      newErrors.clientName = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveClient = () => {
    if (validateForm()) {
      addParty("Client");
      setErrors({});
      onSaveClientData(partyData);
    }
  };  

  const modalRef = useRef();

  return (
    <div
      ref={modalRef}
      className="modal fade"
      id="addClientModal"
      tabIndex="-1"
      aria-labelledby="addClientModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="addClientModalLabel">
              Add a client to the dispute parties
            </h6>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="form-group mb-3">
              <label htmlFor="clientName">
                Select Client Name
                {errors.clientName && (
                  <span className="text-danger ms-1">*</span>
                )}
              </label>
              <select
                className="form-control"
                id="clientName"
                value={partyData.clientName['name'+language]}
                onChange={(e) => handleClientChange(e.target.value)}
              >
                <option value="" disabled>
                  Select a client
                </option>
                {clientOptions.map((client, index) => (
                  // <option key={index} value={client.name}>
                  //   {client.name}
                  // </option>
                  // <option  value={client._id}>{client."clientName"+language}</option>
                  <option key={index}>{client["clientName"+language]}</option>
                ))}
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="legalStatus">Legal Status</label>
              <input
                type="text"
                className="form-control"
                id="legalStatus"
                value={partyData.legalStatus['name'+language]}
                readOnly
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                className="form-control"
                id="nationality"
                value={partyData.nationality}
                readOnly
              />
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
            <button
              type="button"
              // data-bs-dismiss="modal"
              // aria-label="Close"
              className="btn btn-primary"
              onClick={handleSaveClient}
            >
              Save Client
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
