import { useForm } from 'react-hook-form';
import caseAPI from '../../app/apiBridge/case';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';

export default function CreateInvoice({ id }) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors }
  } = useForm();

  const [issuedInvoices, setIssuedInvoices] = useState([]);

  const watchAll = watch('selectAll');
  const watchItems = watch('issuedInvoices', issuedInvoices); // Watch `items`, defaulting to state

  // Sync form state with local state when items change
  useEffect(() => {
    setValue('issuedInvoices', issuedInvoices);
  }, [issuedInvoices]);

  // Handle "Select All"
  const handleSelectAll = (e) => {
    const isChecked = e.target.checked;
    setValue('selectAll', isChecked);
    setIssuedInvoices((prevItems) => prevItems.map((item) => ({ ...item, checked: isChecked })));
    setValue(
      'issuedInvoices',
      getValues('issuedInvoices').map((item) => ({ ...item, checked: isChecked }))
    );
  };

  // Handle individual checkbox toggle
  const handleItemChange = (index) => {
    const updatedItems = getValues('issuedInvoices').map((item, i) => ({
      ...item,
      checked: i === index ? !item.checked : item.checked
    }));

    setIssuedInvoices(updatedItems);
    setValue('issuedInvoices', updatedItems);

    // Uncheck "Select All" if any item is unchecked
    if (updatedItems.some((item) => !item.checked)) {
      setValue('selectAll', false);
    } else {
      setValue('selectAll', true);
    }
  };

  useEffect(() => {
    caseAPI
      .getClaims({ caseID: id, action: 'getClaims' })
      .then((resp) => {
        setIssuedInvoices(resp.data.results);
      })
      .catch((err) => {
        toast.error('Oops, the payemnts/fees could not be loaded');
      });
  }, []);

  const onSave = (data) => {
    data.case = id;
    data.date = new Date(data.date).getTime();
    data.payments = data.issuedInvoices
      .filter((i) => i.checked)
      .map((item) => {
        return {
          type: 'taxPercentage' in item ? 'fees' : 'payment',
          _id: item._id
        };
      });
    delete data.issuedInvoices;

    caseAPI
      .createInvoice(data)
      .then((resp) => {
        toast.success('Oops, the invoice could not be generated');
      })
      .catch((err) => {
        toast.error('Oops, the invoice could not be generated');
      });
  };

  return (
    <div
      className="modal fade"
      id="createInvoice"
      tabIndex={-1}
      aria-labelledby="invoiceModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="modal-title"
              id="invoiceModalLabel"
            >
              Create Invoice
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <form onSubmit={handleSubmit(onSave)}>
            <div className="modal-body">
              <p>Making and exporting an invoice dedicated fees with the office letterhead for the client</p>
              <div className="mb-3">
                <label
                  htmlFor="invoiceDate"
                  className="form-label"
                >
                  Invoice Date <span className="text-danger">*</span>
                </label>
                <input
                  {...register('date', { required: true })}
                  type="date"
                  className="form-control"
                  id="invoiceDate"
                  required=""
                />
                {errors.date && <div className="form-error">This field is required</div>}
              </div>

              <div className="mb-3">
                <label
                  htmlFor="invoiceTemplate"
                  className="form-label"
                >
                  Invoice Template <span className="text-danger">*</span>
                </label>
                <select
                  className="form-select"
                  id="invoiceTemplate"
                  {...register('invoiceTemplate', {
                    required: true,
                    validate: (value) => {
                      if (!value) {
                        return false;
                      } else {
                        return true;
                      }
                    }
                  })}
                >
                  <option value="">Select Invoice Template</option>
                  <option value={1}>Template 1</option>
                  <option value={2}>Template 2</option>
                </select>
                {errors.invoiceTemplate && <div className="form-error">This field is required</div>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="fileDetails"
                  className="form-label"
                >
                  Matter / File Details <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fileDetails"
                  defaultValue="Case - Dummy-Case - Plenary Commer"
                  disabled=""
                />
              </div>
              <table className="table">
                <thead>
                  <th>
                    <input
                      type="checkbox"
                      {...register('selectAll')}
                      checked={watchAll}
                      onChange={handleSelectAll}
                    />
                  </th>
                  <th>File</th>
                  <th>Date</th>
                  <th>Fees Type</th>
                  <th>Fees Amount</th>
                </thead>
                <tbody>
                  {issuedInvoices.map((invoice, i) => {
                    let isPayment = !('taxPercentage' in invoice) ? true : false;

                    let balance = 0;
                    let previousRecord = issuedInvoices[i - 1];

                    if (!previousRecord) {
                      if (isPayment) {
                        invoice.balance = -invoice.amount;
                      } else {
                        invoice.balance = invoice.amount;
                      }
                    } else {
                      if (isPayment) {
                        invoice.balance = previousRecord.balance - invoice.amount;
                      } else {
                        invoice.balance = previousRecord.balance + invoice.amount;
                      }
                    }

                    return (
                      <tr key={i}>
                        <td>
                          <input
                            type="checkbox"
                            checked={watchItems[i]?.checked || false}
                            onChange={() => handleItemChange(i)}
                          />
                        </td>
                        <td>{i + 1}</td>
                        <td>{invoice.invoiceCode}</td>
                        <td>{isPayment ? 'Payment' : 'Fees'}</td>
                        <td>{new Date(invoice.date).toDateString()}</td>
                        <td>{isPayment ? '-' + invoice.amount : invoice.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
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
                className="btn btn-primary"
              >
                Create Invoice
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
