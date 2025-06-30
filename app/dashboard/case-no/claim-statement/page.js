'use client';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import caseAPI from '../../../apiBridge/case';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function IssuedInvoices() {
  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');
  const [issuedInvoices, setIssuedInvoices] = useState([]);

  useEffect(() => {
    caseAPI
      .getClaims({ caseID,  })
      .then((resp) => {
        setIssuedInvoices(resp.data.results);
      })
      .catch((err) => {
        toast.error('Oops, the invoices could not be loaded');
      });
  }, []);

  const exportData = () => {
    caseAPI
      .exportClaimStatement(
        {
          columns: ['Fees Type', 'Date', 'Fees Amount', 'VAT', 'Credit', 'Debit', 'Balance'],
          rows: issuedInvoices
        },
        { responseType: 'blob' }
      )
      .then((resp) => {
        const blob = new Blob([resp.data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });

        // Create a download link dynamically
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Invoice.xlsx'; // Set the file name
        document.body.appendChild(a);
        a.click();
        a.remove();
      })
      .catch((err) => {
        toast.error('Oops, the statement could not be exported');
      });
  };

  return (
    <div>
      <div id="issuedInvoicesContainer">
        <div className="row dash-btn-container w-fit">
          <div className="col-md-12 col-sm-12 flex full-width">
            <div className="flex-grow-1 d-btn">
              <Link
                href="#"
                data-bs-target="#createInvoice"
                id="add_new_fee_pop_call_folders"
                data-bs-toggle="modal"
              >
                {/* <div> */}
                <i class="fa fa-plus i-m"></i>
                <p className="small i-m">Create Invoice</p>
                {/* </div> */}
              </Link>
            </div>

            <div className="flex-grow-1 d-btn">
              <Link
                href="#"
                onClick={exportData}
              >
                <i class="fa fa-download i-m"></i>
                <p className="small i-m">Export</p>
              </Link>
            </div>
          </div>
        </div>
        <h2 className="heading-primary">Claim Statement</h2>
        <table className="table">
          <thead>
            <th>No</th>
            <th>Fees Type</th>
            <th>Date</th>
            <th>Fees Amount</th>
            <th>VAT</th>
            <th>Credit</th>
            <th>Debit</th>
            <th>Balance</th>
          </thead>
          <tbody>
            {issuedInvoices.map((invoice, i) => {
              let isPayment = !('taxPercentage' in invoice) ? true : false;
              invoice.isPayment = isPayment;

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
                  <td>{i + 1}</td>
                  <td>{isPayment ? 'Payment' : 'Fees'}</td>
                  <td>{new Date(invoice.date).toDateString()}</td>
                  <td>{isPayment ? '-' : invoice.amount}</td>
                  <td>{isPayment ? '-' : invoice.taxPercentage}</td>
                  {/* credit */}
                  <td>{isPayment ? '-' : invoice.amount}</td>
                  {/* debit */}
                  <td>{isPayment ? invoice.amount : '-'}</td>
                  <td>{invoice.balance}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
