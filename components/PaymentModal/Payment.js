import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import caseAPI from '../../app/apiBridge/case';
import api from '../../app/apiBridge/api';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Payment = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [paymentTypes, setPaymentTypes] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm();

  useEffect(() => {
    api
      .getCaseValuesByTitle({
        groupTitle: 'Payment Type'
      })
      .then((resp) => {
        setPaymentTypes(resp.data.values);
      })
      .catch((err) => {
        toast.error('Oops, the payment types could not be loaded');
      });
  }, []);

  const onSubmit = (data) => {
    data.date = new Date(data.date).getTime();
    data.case = id;
    caseAPI
      .addGeneralPayment({
        action: 'addPayment',
        ...data
      })
      .then(() => {
        toast.success('The payment added successfully');
      })
      .catch(() => {
        toast.error('Oops, the payment cannot be added');
      });

    console.log('Form Data:', data);
  };

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  return (
    <div
      className="modal fade "
      id="add_new_payment"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Add Payment
              <p>The amount paid by the client on this case file</p>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="modal-body">
              <div className="row align-items-center mb-3">
                <label
                  htmlFor="date"
                  className="col-sm-3 col-form-label"
                >
                  Date <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="date"
                    id="date"
                    className={`form-control ${errors.date ? 'border-danger' : ''}`}
                    {...register('date', { required: true })}
                  />
                  {errors.date && <small className="text-danger">Date is required</small>}
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <label
                  htmlFor="type"
                  className="col-sm-3 col-form-label"
                >
                  Payment Type <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <select
                    id="type"
                    className={`form-select ${errors.type ? 'border-danger' : ''}`}
                    {...register('type', { required: true })}
                  >
                    <option value="">Select Payment Type</option>
                    {paymentTypes.map((paymentType, i) => {
                      return (
                        <option
                          key={i}
                          value={paymentType._id}
                        >
                          {paymentType['name' + language]}
                        </option>
                      );
                    })}
                  </select>
                  {errors.type && <small className="text-danger">Payment type is required</small>}
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <label
                  htmlFor="paymentNote"
                  className="col-sm-3 col-form-label"
                >
                  Note
                </label>
                <div className="col-sm-9">
                  <textarea
                    id="paymentNote"
                    className="form-control"
                    maxLength={200}
                    {...register('paymentNote')}
                    placeholder="Enter note (optional)"
                  ></textarea>
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <label
                  htmlFor="amount"
                  className="col-sm-3 col-form-label"
                >
                  Amount <span className="text-danger">*</span>
                </label>
                <div className="col-sm-9">
                  <input
                    type="number"
                    step="any"
                    id="amount"
                    className={`form-control ${errors.amount ? 'border-danger' : ''}`}
                    {...register('amount', {
                      required: true,
                      min: 0.01
                    })}
                    placeholder="Enter payment amount"
                  />
                  {errors.amount?.type === 'required' && <small className="text-danger">Amount is required</small>}
                  {errors.amount?.type === 'min' && (
                    <small className="text-danger">Amount must be greater than 0</small>
                  )}
                </div>
              </div>

              <div className="row align-items-center mb-3">
                <label
                  htmlFor="attachments"
                  className="col-sm-3 col-form-label"
                >
                  Attachments
                </label>
                <div className="col-sm-9">
                  <input
                    type="file"
                    id="attachments"
                    className="form-control"
                    accept=".jpeg,.png,.pdf,.doc,.docx,.csv,.xlsx,.xls,.jpg,.zip"
                    {...register('attachments')}
                  />
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
              <button
                type="submit"
                className="btn btn-success"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
