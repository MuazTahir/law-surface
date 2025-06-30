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
  const caseId = params.get('id');

  useEffect(() => {
    caseAPI
      .getRelatedCases({ caseId })
      .then((resp) => {
        setIssuedInvoices(resp.data.relatedCases);
      })
      .catch((err) => {
        toast.error('Oops, the invoices could not be loaded');
      });
  }, []);

  let color = useSelector((store) => {
    return store.authSlice.color;
  });
  return (
    <div>
      <div id="issuedInvoicesContainer">
        <h2 className="heading-primary">Related Matters</h2>
        <table className="table">
          <thead className={color}>
            <th>{gTerms.case['name' + language]}</th>
            <th>{gTerms.status['name' + language]}</th>
            <th>{gTerms.details['name' + language]}</th>
            <th>{gTerms.court['name' + language]}</th>
            <th>{gTerms.department['name' + language]}</th>
            <th>{gTerms.stage['name' + language]}</th>
            <th></th>
          </thead>
          <tbody>
            {issuedInvoices.map((invoice, i) => {
              return (
                <tr key={i}>
                  <td>{gTerms.case['name' + language]}</td>
                  <td>
                    <span className={`badge cs-` + invoice.caseStatus['nameEn'].replace(' ', '')}>
                      {invoice.caseStatus['name' + language]}
                    </span>
                  </td>
                  <td>
                    <div>
                      <b>{invoice.caseNo}</b>
                    </div>
                    {invoice.matchedCaseType.values['name' + language]}
                  </td>
                  <td>
                    <div>{invoice.court['nameEn']}</div>
                  </td>
                  <td>
                    <div>{invoice.matchedDepartment.values['nameEn']}</div>
                  </td>
                  <td>
                    <div>{invoice.matchedStage.values['nameEn']}</div>
                  </td>
                  <td>
                    <Link href={'/dashboard/case-no/case-details?id=' + invoice._id}>
                      <i class="fa fa-light fa-arrow-right"></i>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
