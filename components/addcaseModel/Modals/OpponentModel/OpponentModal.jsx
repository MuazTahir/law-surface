"use client";
import { useState, useRef } from "react";
// import { Modal } from "bootstrap";
import PhoneInput from "react-phone-number-input";
let Modal_;
const dynamicStyle = (name) => dynamic(
  () => import("bootstrap").then(({Modal}) => {
    Modal_=Modal;
  }    ),
  { ssr: false }
);
export default function OpponentModal({
  legalStatusOptions,
  nationalityOptions,
  opponentData,
  setOpponentData,
  addOpponent,
  onSaveOpponentsData,
  language
}) {
  const modalRef = useRef(null);

  const [errors, setErrors] = useState({});

  const handleOpponentInputChange = (field, value) => {
    setOpponentData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!opponentData.opponentName) {
      newErrors.opponentName = true;
    }
    if (!opponentData.opponentLegalStatus) {
      newErrors.opponentLegalStatus = true;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddOpponent = () => {
    if (validateForm()) {
      addOpponent();
      setErrors({});
      onSaveOpponentsData(opponentData);
    }
  };

  return (
    <div
      className="modal fade"
      id="addOpponentModal"
      tabIndex="-1"
      aria-labelledby="addOpponentModalLabel"
      aria-hidden="true"
      ref={modalRef}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h6 className="modal-title" id="addOpponentModalLabel">
              Add an opponent to the dispute parties
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
              <label htmlFor="opponentName">
                Opponent Name
                {errors.opponentName && (
                  <span className="text-danger ms-1">*</span>
                )}
              </label>
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                id="opponentName"
                value={opponentData.opponentName}
                onChange={(e) =>
                  handleOpponentInputChange("opponentName", e.target.value)
                }
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="opponentLegalStatus">
                Legal Status
                {errors.opponentLegalStatus && (
                  <span className="text-danger ms-1">*</span>
                )}
              </label>
              <select
                className="form-control"
                id="opponentLegalStatus"
                value={opponentData.opponentLegalStatus}
                onChange={(e) =>{
                  let targetE = legalStatusOptions.find(item=>item._id == e.target.value);
                  handleOpponentInputChange(
                    "opponentLegalStatus",
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
            </div>
            <div className="form-group mb-3">
              <label htmlFor="opponentNationality">Nationality</label>
              <select
                className="form-control"
                id="opponentNationality"
                value={opponentData.opponentNationality}
                onChange={(e) =>
                  handleOpponentInputChange(
                    "opponentNationality",
                    e.target.value
                  )
                }
              >
                <option value="" disabled>
                  Select...
                </option>
                {nationalityOptions.map((nationality, index) => (
                  <option key={index} value={nationality}>
                    {nationality}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="opponentContact">Contact Number</label>
              <PhoneInput
                international
                placeholder="Enter phone number"
                value={opponentData.opponentContact}
                onChange={(value) =>
                  handleOpponentInputChange("opponentContact", value)
                }
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="opponentEmail">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                id="opponentEmail"
                value={opponentData.opponentEmail}
                onChange={(e) =>
                  handleOpponentInputChange("opponentEmail", e.target.value)
                }
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="opponentAddress">Address</label>
              <input
                type="text"
                placeholder="Address"
                className="form-control"
                id="opponentAddress"
                value={opponentData.opponentAddress}
                onChange={(e) =>
                  handleOpponentInputChange("opponentAddress", e.target.value)
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
              data-bs-dismiss="modal"
              aria-label="Close"
              className="btn btn-primary"
              onClick={handleAddOpponent}
            >
              Add Opponent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
