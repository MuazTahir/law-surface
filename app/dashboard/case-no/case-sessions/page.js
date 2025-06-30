'use client';

import React, { useEffect, useState } from 'react';
// import Filters from "@/components/filters/Filters";
import Filters from '@/components/clientfilterfunction/Filters';
// import FileTable from "@/components/table/FileTable";
import FileTable from '@/components/clientfilterfunction/SessionFileTable';
import axios from 'axios';
import { useSelector } from 'react-redux';
import authSlice from '@/store/auth';
import './client.css';
import { toast } from 'react-toastify';
import caseAPI from '../../../apiBridge/case';
// import "../globals.css";

const ClientSorting = () => {
  const params = new URLSearchParams(window.location.search);
  const caseID = params.get('id');

  const [filters, setFilters] = useState({
    fileCategory: 'All Categories',
    sort: 'fileNo',
    sortOrder: 'asc', // "asc" for A to Z, "desc" for Z to A
    caseStatus: 'All Cases',
    users: 'All Users',
    balance: 'All Balances'
  });

  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [fileData, setFileData] = useState([]);

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  const [sort, setSort] = useState('');

  const onHeaderClicked = function (evt) {
    const selectedHeader = evt.target.innerHTML.trim();
    if (sort == selectedHeader) {
      if (sort[0] == '-') {
        setSort(selectedHeader);
      } else {
        setSort('-' + selectedHeader);
      }
    } else {
      setSort(selectedHeader);
    }
  };

  useEffect(() => {
    caseAPI
      .getSessions({ company, search: { case: caseID } })
      .then((resp) => {
        debugger;
        setFileData(resp.data.sessions[0].results);
      })
      .catch(() => {
        toast.error('Oops, the sessions could not be loaded');
      });

    // axios
    //   .post(process.env.NEXT_PUBLIC_API_SERVER + "/api/dashboard/case", {
    //     action: "getCases",
    //     company: companyID,
    //     token: localStorage.getItem("token"),
    //   })
    //   .then((resp) => {
    //     setFileData(resp.data.cases);
    //   });
  }, [sort]);

  // Filter and Sort Logic
  // const filteredData = fileData
  //   .filter((file) => {
  //     // Filter based on search term
  //     if (
  //       searchTerm &&
  //       !(
  //         file.caseNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //         file.clients.some((client) => client.clientNameEn.toLowerCase().includes(searchTerm.toLowerCase()))
  //       )
  //     ) {
  //       return false;
  //     }
  //     // Other filter conditions
  //     if (filters.fileCategory !== 'All Categories' && file.fileNo._id !== filters.fileCategory) {
  //       return false;
  //     }
  //     if (filters.users !== 'All Users' && file.desginatedAttorney !== filters.users) {
  //       return false;
  //     }
  //     if (filters.caseStatus !== 'All Cases' && file.case.caseStatus._id !== filters.caseStatus) {
  //       return false;
  //     }
  //     if (filters.balance === 'Fully Paid' && file.balance !== 0) {
  //       return false;
  //     }
  //     if (filters.balance === 'Not Fully Paid' && file.balance === 0) {
  //       return false;
  //     }
  //     return true;
  //   })
  //   .sort((a, b) => {
  //     if (filters.sort === 'fileNo') {
  //       return filters.sortOrder === 'asc'
  //         ? a.case.fileNo._id.localeCompare(b.case.fileNo._id)
  //         : b.case.fileNo.localeCompare(a.case.fileNo);
  //     } else if (filters.sort === 'caseNumber') {
  //       return filters.sortOrder === 'asc'
  //         ? a.case.caseNo.localeCompare(b.case.caseNo)
  //         : b.case.caseNo.localeCompare(a.caseNo);
  //     }
  //     return 0;
  //   });

  // const selectedFilters = () => {
  //   let selected = [];
  //   if (filters.fileCategory !== 'All Categories') {
  //     selected.push(`File Category: ${filters.fileCategory}`);
  //   }
  //   if (filters.sortOrder !== 'asc') {
  //     selected.push(`Table sort: ${filters.sortOrder}`);
  //   }
  //   if (filters.caseStatus !== 'All Cases') {
  //     selected.push(` All Cases: ${filters.caseStatus}`);
  //   }
  //   if (filters.balance !== 'All Balances') {
  //     selected.push(`Balance: ${filters.balance}`);
  //   }
  //   return selected.length > 0 ? selected.join(' / ') : '';
  // };

  return (
    <div>
      <h2 className="heading-primary">
        Sessions
        <table className="float-end">
          <tr>
            <td>
              <a
                href="javascript:"
                data-bs-target="#addProcdurenModal"
                data-bs-toggle="modal"
                class="delete_case_request text-dark action-link"
                file_type="0"
              >
                {' '}
                <i class="fal fa-add"></i> <span>Add Procedure</span>
              </a>
            </td>
          </tr>
        </table>
      </h2>

      <FileTable
        onHeaderClicked={onHeaderClicked}
        fileData={fileData}
      />
    </div>
  );
};

export default ClientSorting;
