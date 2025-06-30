import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useState, useEffect, useRef } from 'react';
// import { Modal } from 'bootstrap'; 

let Modal_;
const dynamicStyle = (name) => dynamic(
  () => import("bootstrap").then(({Modal}) => {
    Modal_=Modal;
  }    ),
  { ssr: false }
);
export default function DisputingPartyModal({
  legalStatusOptions,
  disputingPartyData,
  setDisputingPartyData,
  addDisputingParty,
  onSaveDisputyData,
  language
}) {
  const [errors, setErrors] = useState({}); 
  const modalRef = useRef(null);

  useEffect(() => {

    if(!Modal_){
      return
    }

    const modalElement = document.getElementById('addDisputingPartyModal');
    modalRef.current = new Modal_(modalElement); 

    return () => {
      modalRef.current.dispose();
    };
  }, [Modal_]);

  const handleDisputingPartyInputChange = (field, value) => {
    setDisputingPartyData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!disputingPartyData.disputingPartyName) {
      newErrors.disputingPartyName = 'Party name is required';
    }
    if (!disputingPartyData.disputingPartyLegalStatus) {
      newErrors.disputingPartyLegalStatus = 'Legal status is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSaveDisputingParty = () => {
    if (validateForm()) {
      addDisputingParty(); 
       onSaveDisputyData(disputingPartyData)
      setErrors({}); 
    }
  };

  return (
    <div
      className="modal fade"
      id="addDisputingPartyModal"
      tabIndex="-1"
      aria-labelledby="addDisputingPartyModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="addDisputingPartyModalLabel">
              Add a disputing party to the dispute
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
              <label htmlFor="disputingPartyName">
                Party Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                id="disputingPartyName"
                value={disputingPartyData.disputingPartyName}
                onChange={(e) =>
                  handleDisputingPartyInputChange(
                    'disputingPartyName',
                    e.target.value
                  )
                }
              />
              {errors.disputingPartyName && (
                <div className="text-danger">{errors.disputingPartyName}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="disputingPartyLegalStatus">
                Legal Status <span className="text-danger">*</span>
              </label>
              <select
                className="form-control"
                id="disputingPartyLegalStatus"
                value={disputingPartyData.disputingPartyLegalStatus}
                onChange={(e) =>{
                  let targetE = legalStatusOptions.find(item=>item._id == e.target.value);
                  handleDisputingPartyInputChange(
                    'disputingPartyLegalStatus',
                    targetE
                  )
                }
                }
              >
                <option value="" disabled>
                  Select...
                </option>
                {legalStatusOptions.map((status, index) => (
                  <option key={index} value={status._id}>
                    {status['name'+language]}
                  </option>
                ))}
              </select>
              {errors.disputingPartyLegalStatus && (
                <div className="text-danger">{errors.disputingPartyLegalStatus}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="disputingPartyContact" className="me-2">
                Contact Number
              </label>
              <PhoneInput
                international
                className="phoneInput"
                id="disputingPartyContact"
                value={disputingPartyData.disputingPartyContact}
                onChange={(value) =>
                  handleDisputingPartyInputChange(
                    'disputingPartyContact',
                    value
                  )
                }
              />
            </div>

            <div className="form-group mb-3">
              <label htmlFor="disputingPartyEmail">Email Address</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="disputingPartyEmail"
                value={disputingPartyData.disputingPartyEmail}
                onChange={(e) =>
                  handleDisputingPartyInputChange(
                    'disputingPartyEmail',
                    e.target.value
                  )
                }
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
              className="btn btn-primary"
              onClick={handleSaveDisputingParty}
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              Save Disputing Party
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
