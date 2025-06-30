import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import caseAPI from '../../app/apiBridge/case';
import { toast } from 'react-toastify';

const Form5 = ({ id }) => {
  const [feeAmount, setFeeAmount] = useState(0);
  const [totalAmtCalculated, setTotalAmtCalculated] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  // Form submit handler
  const onSubmit = (data) => {
    data.date = new Date(data.date).getTime();
    data.totalAmtCalculated = totalAmtCalculated;
    data.case = id;
    caseAPI
      .addGeneralPayment({
        action: 'addFees',
        ...data
      })
      .then(() => {
        toast.success('The fees added successfully');
      })
      .catch(() => {
        toast.error('Oops, the fees cannot be added');
      });
    console.log('Form Data:', data);
  };

  return (
    <div
      className="modal fade "
      id="add_new_fee_pop"
      tabIndex={-1}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        style={{ width: '540px' }}
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title ">
              Add Fees
              <p className="text-muted">Court fees or attorney fees that relate to this case file</p>
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-body">
              <div className="table-responsive">
                <table className="table">
                  <tbody>
                    {/* Fee Date */}
                    <tr>
                      <td>
                        <label
                          htmlFor="date"
                          className="form-label"
                        >
                          Fee Date <span className="text-danger">*</span>
                        </label>
                      </td>
                      <td>
                        <input
                          type="date"
                          id="date"
                          className={`form-control ${errors.date && 'is-invalid'}`}
                          {...register('date', {
                            required: 'Fee date is required'
                          })}
                        />
                        {errors.date && <div className="invalid-feedback">{errors.date.message}</div>}
                      </td>
                    </tr>

                    {/* Fee Type */}
                    <tr>
                      <td>
                        <label
                          htmlFor="type"
                          className="form-label"
                        >
                          Fees Type <span className="text-danger">*</span>
                        </label>
                      </td>
                      <td>
                        <select
                          id="type"
                          className={`form-select ${errors.type && 'is-invalid'}`}
                          {...register('type', {
                            required: 'Fee type is required'
                          })}
                        >
                          <option value="">Select Fee Type...</option>
                          <option value="777">Objection to the accountant's report</option>
                          <option value="778">Submit a request for disbursement of the deposited amount</option>
                          <option value="779">Reprocedures</option>
                          <option value="780">Writ of Arrest</option>
                          <option value="784">Certificate of Payable Fees</option>
                          <option value="791">Court hearing record</option>
                        </select>
                        {errors.type && <div className="invalid-feedback">{errors.type.message}</div>}
                      </td>
                    </tr>

                    {/* Fees Details */}
                    <tr>
                      <td>
                        <label
                          htmlFor="feesDetails"
                          className="form-label"
                        >
                          Fees Details
                        </label>
                      </td>
                      <td>
                        <textarea
                          id="feesDetails"
                          className="form-control"
                          maxLength="200"
                          placeholder="Please Enter Fees Details"
                          {...register('feesDetails')}
                        ></textarea>
                      </td>
                    </tr>

                    {/* Fees Amount */}
                    <tr>
                      <td>
                        <label
                          htmlFor="amount"
                          className="form-label"
                        >
                          Fees Amount <span className="text-danger">*</span>
                        </label>
                      </td>
                      <td>
                        <input
                          type="number"
                          id="fees_amount"
                          className={`form-control ${errors.fees_amount && 'is-invalid'}`}
                          placeholder="Please Enter Fees Amount (Excluding VAT)"
                          {...register('amount', {
                            required: 'Fees amount is required',
                            valueAsNumber: true,
                            onChange: (evt) => {
                              setFeeAmount(evt.target.value);
                              setTotalAmtCalculated(evt.target.value * (1 + taxPercentage));
                            }
                          })}
                        />
                        {errors.fees_amount && <div className="invalid-feedback">{errors.fees_amount.message}</div>}
                      </td>
                    </tr>

                    {/* Apply VAT */}
                    <tr>
                      <td>
                        <label
                          htmlFor="taxPercentage"
                          className="form-label"
                        >
                          Apply VAT
                        </label>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <select
                            id="taxPercentage"
                            className="form-select me-2"
                            {...register('taxPercentage', {
                              onChange: (evt) => {
                                const value = parseFloat(evt.target.value) / 100;
                                setTaxPercentage(value);
                                setTotalAmtCalculated(feeAmount * (1 + value));
                              }
                            })}
                          >
                            <option value={0}>0%</option>
                            <option value={5}>5%</option>
                          </select>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="0.0"
                            disabled
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="modal_selecting_table_title">Total</td>
                      <td class="modal_selecting_table_content">
                        <span
                          class="show_total_fees"
                          id="show_total_fees"
                        >
                          <span>{totalAmtCalculated}</span> OMR
                        </span>
                      </td>
                    </tr>

                    {/* Notify Accountant */}
                    <tr>
                      <td>
                        <label htmlFor="notifyAccountant">Notify Accountant</label>
                      </td>
                      <td>
                        <div className="form-check">
                          <input
                            type="checkbox"
                            id="notifyAccountant"
                            className="form-check-input"
                            {...register('notifyAccountant')}
                          />
                          <label
                            htmlFor="notifyAccountant"
                            className="form-check-label"
                          >
                            Notify accounting department
                          </label>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default Form5;
