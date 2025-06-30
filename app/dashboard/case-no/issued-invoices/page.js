'use client';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import caseAPI from '../../../apiBridge/case';
import { toast } from 'react-toastify';
import Link from 'next/link';

export default function IssuedInvoices() {
  const [issuedInvoices, setIssuedInvoices] = useState([]);
  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  let gTerms = useSelector((store) => {
    return store.authSlice.generalTerms;
  });
  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  useEffect(() => {
    caseAPI
      .getIssuedInvoices({ caseID })
      .then((resp) => {
        setIssuedInvoices(resp.data.results);
      })
      .catch((err) => {
        toast.error('Oops, the invoices could not be loaded');
      });
  }, []);
  return (
    <div>
      <div id="issuedInvoicesContainer">
        <h2 className="heading-primary">Issued Invoices</h2>
        <table className="table">
          <thead>
            <th>Invoice Code</th>
            <th>Invoice Date</th>
            <th>Case / File</th>
            <th>Invoice Total</th>
            <th>User</th>
          </thead>
          <tbody>
            {issuedInvoices.map((invoice, i) => {
              return (
                <tr key={i}>
                  <td>{gTerms.case['name' + language] + ' - ' + invoice.case.caseType['name' + language]}</td>
                  <td>{new Date(invoice.date).toDateString()}</td>
                  <td>
                    <Link href="#">Generate</Link>
                  </td>
                  <td>{invoice.amount}</td>
                  <td>{invoice.user}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
