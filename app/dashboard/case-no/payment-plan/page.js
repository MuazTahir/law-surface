'use client';
import React, { useState, useEffect } from 'react';
import utility from '@/app/apiBridge/utility';
import { toast } from 'react-toastify';

// import './client.css';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import clientsAPI from '@/app/apiBridge/clients';
export default function FileTable({ fileData }) {
  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [reimbursements, setReimbursements] = useState([]);

  const loadReimbursementSignal = useSelector((store) => {
    return store.authSlice.signals.loadReimbursements;
  });

  useEffect(() => {
    clientsAPI
      .getReimbursemtns({ caseID })
      .then((resp) => {
        setReimbursements(resp.data.reimbursements);
      })
      .catch((err) => {
        toast.error('Oops, the invoices could not be loaded');
      });
  }, [loadReimbursementSignal]);

  const exportReimbursement = () => {
    const rows = reimbursements.map((item, i) => {
      item.no = i + 1;
      return item;
    });
    clientsAPI
      .exportReimbursements(
        {
          columns: [
            'No',
            'Status',
            'Payment Due Date',
            'Payment Date',
            'Payment Place',
            'Reimbursement Details',
            'Reimbursement Amount'
          ],
          rows: rows
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
    <div
      className=" mt-4 tableDiv"
      style={{ width: '97%', margin: 'auto', borderRadius: '10px' }}
    >
      <h2 className="heading-primary">
        Reimbursement
        <table className="float-end">
          <tr>
            <td>
              <a
                href="#"
                onClick={exportReimbursement}
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-download"></i> <span>Export</span>
              </a>
              <a
                href="javascript:"
                data-bs-target="#add_reimbursement"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Reimbursement</span>
              </a>
            </td>
          </tr>
        </table>
      </h2>
      <table className="table  cleintTable ">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Status</th>
            <th>Payment Due Date</th>
            <th>Payment Date</th>
            <th>Reimbursement Amount</th>
          </tr>
        </thead>
        <tbody>
          {reimbursements.map((file, i) => (
            <tr key={file.fileNumber}>
              <td>{i + 1}</td>
              <td>{file.status || 'Paid'}</td>
              <td>{file.paymentDueDate}</td>
              <td>{file.paymentDate}</td>
              <td>{file.reimbursementAmount}</td>
            </tr>
          ))}
          {!reimbursements.length && (
            <tr>
              <th
                className="text-center form-error"
                colSpan={5}
              >
                NO DATA FOUND
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
