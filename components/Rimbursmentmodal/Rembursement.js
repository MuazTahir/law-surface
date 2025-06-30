import React from 'react';
import { useForm } from 'react-hook-form';
import clientAPI from '@/app/apiBridge/clients';
import { toast } from 'react-toastify';
import moment from 'moment';
import { loadImbursements } from '@/store/auth';
import { useDispatch, useSelector } from 'react-redux';
const Rembursement = ({ caseId }) => {
  const dispatch = useDispatch();

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    data.case = caseId;
    data.owner = company;

    data.paymentDate = moment(data.sessipaymentDateonDate).startOf('day').valueOf();
    clientAPI
      .addReimbursement(data)
      .then((resp) => {
        if (resp.data.success) {
          // TBC not much efficient, again calls the API
          dispatch(loadImbursements());
          toast.success('Reimbursement processed successfully');
          // TBC all modals should closed after processing
        }
      })
      .catch(() => {
        toast.error('Oops, reimbursement process could not be completed');
      });
  };
  return (
    <div
      className="modal fade full_border_input fade"
      id="add_reimbursement"
      tabindex="-1"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered mid_modal"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">
              Add Reimbursement
              <p>The amount paid from the opponent to the client or the court</p>
            </h5>
            <button
              type="button"
              className="close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div
            className="modal-body"
            id="add_reimbursement_form"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <table className="modal_selecting_table">
                <tbody>
                  {/* Payment Date */}
                  <tr>
                    <td className="modal_selecting_table_title required_icon">Payment Date</td>
                    <td
                      className="modal_selecting_table_content"
                      style={{ float: 'right' }}
                    >
                      <input
                        type="date"
                        className={`form-control ${errors.paymentDate ? 'is-invalid' : ''}`}
                        style={{ width: '250px' }}
                        placeholder="Payment Date"
                        id="payment_day_legal"
                        {...register('paymentDate', {
                          required: 'Payment date is required'
                        })}
                      />
                      {errors.paymentDate && <div className="invalid-feedback">{errors.paymentDate.message}</div>}
                    </td>
                  </tr>

                  {/* Reimbursement Amount */}
                  <tr>
                    <td className="modal_selecting_table_title required_icon">Reimbursement Amount</td>
                    <td
                      className="modal_selecting_table_content"
                      style={{ float: 'right' }}
                    >
                      <input
                        type="number"
                        className={`form-control ${errors.reimbursementAmount ? 'is-invalid' : ''}`}
                        style={{ width: '250px' }}
                        placeholder="Please Enter Reimbursement Amount"
                        id="reimbursement_amount"
                        {...register('reimbursementAmount', {
                          required: 'Amount is required',
                          min: {
                            value: 1,
                            message: 'Amount must be greater than 0'
                          }
                        })}
                      />
                      {errors.reimbursementAmount && (
                        <div className="invalid-feedback">{errors.reimbursementAmount.message}</div>
                      )}
                    </td>
                  </tr>

                  {/* Reimbursement Place */}
                  <tr>
                    <td className="modal_selecting_table_title required_icon">Reimbursement Place</td>
                    <td
                      className="modal_selecting_table_content"
                      style={{ float: 'right' }}
                    >
                      <input
                        type="text"
                        className={`form-control ${errors.reimbursementPlace ? 'is-invalid' : ''}`}
                        style={{ width: '250px' }}
                        placeholder="Please Enter Reimbursement Place"
                        id="reimbursement_place"
                        {...register('reimbursementPlace', {
                          required: 'Reimbursement place is required'
                        })}
                      />
                      {errors.reimbursementPlace && (
                        <div className="invalid-feedback">{errors.reimbursementPlace.message}</div>
                      )}
                    </td>
                  </tr>

                  {/* Reimbursement Details */}
                  <tr className="">
                    <td
                      className="modal_selecting_table_title is_top"
                      style={{ flex: 1 }}
                    >
                      Reimbursement Details
                    </td>
                    <td
                      className="modal_selecting_table_content"
                      style={{ flex: 2, float: 'right' }}
                    >
                      <textarea
                        className="form-control"
                        maxLength={200}
                        style={{ width: '250px' }}
                        placeholder="Please Enter Reimbursement Details"
                        id="reimbursement_details"
                        {...register('reimbursementDetails')}
                      />
                    </td>
                  </tr>

                  {/* Transfer Status
                  <tr>
                    <td className="modal_selecting_table_title">
                      Transfer Status
                    </td>
                    <td className="modal_selecting_table_content w-50">
                      <input
                        type="checkbox"
                        className="form-checkbox "
                        id="transfer_status"
                        {...register("transferStatus")}
                      />{" "}
                      The payment amount has been transferred to the client
                    </td>
                  </tr> */}

                  {/* File Upload */}
                  <tr className="extra_files_quick_upload">
                    <td className="modal_selecting_table_title" />
                    <td className="modal_selecting_table_content">
                      <div className="filesupload_in_modal">
                        <div>
                          <select className="form-select in_same_line_input list_of_folders_for_pop">
                            <option value="">Upload to: Main Directory</option>
                            <option value="الاثباتات">Upload to: الاثباتات</option>
                            <option value="الاحكام">Upload to: الاحكام</option>
                            <option value="التنفيذ">Upload to: التنفيذ</option>
                            <option value="الحسابات">Upload to: الحسابات</option>
                            <option value="المذكرات">Upload to: المذكرات</option>
                            <option value="المراسلات">Upload to: المراسلات</option>
                            <option value="المستندات">Upload to: المستندات</option>
                            <option value="محاضر الجلسات">Upload to: محاضر الجلسات</option>
                            <option value="ملفات الخصم">Upload to: ملفات الخصم</option>
                          </select>
                          <input
                            type="file"
                            accept=".jpeg,.png,.pdf,.doc,.docx,.csv,.xlsx,.xls,.jpg,.msg,.zip,.txt,.mp3,.mp4,"
                            name="file_to_pass[]"
                            className="pops_reimbursement files_upload_from_pops"
                            multiple
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Submit Button */}
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
    </div>
  );
};

export default Rembursement;
