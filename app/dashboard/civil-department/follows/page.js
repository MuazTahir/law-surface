'use client';

import React, { useEffect, useState } from 'react';
// import Filters from "@/components/filters/Filters";
import Filters from '@/components/clientfilterfunction/Filters';
// import FileTable from "@/components/table/FileTable";
import FileTable from './SessionFileTable';
import axios from 'axios';
import { useSelector } from 'react-redux';
import authSlice from '@/store/auth';
import './client.css';
import { toast } from 'react-toastify';
import caseAPI from '../../../apiBridge/case';
import { useSearchParams } from 'next/navigation';
import Pagination from '@/components/pagination/pagination';
import API from '@/app/apiBridge/api';
// import "../globals.css";

const ProceduresFollowsUp = () => {
  const resPerPage = 5;
  const [pageNum, setPageNum] = useState(1);
  const [total, setTotal] = useState(0);
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

  const [filters, setFilters] = useState({
    fileCategory: 'All Categories',
    sort: 'fileNo',
    sortOrder: 'asc', // "asc" for A to Z, "desc" for Z to A
    caseStatus: 'All Cases',
    users: 'All Users',
    balance: 'All Balances'
  });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  });

  // const params = useSearchParams();
  // To get a single parameter value:
  // const name = params.get('name');

  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [fileData, setFileData] = useState([]);

  const unFollowProcedure = (id) => {
    API.setFollowProcedure({ id, value: false })
      .then((resp) => {
        setFileData(fileData.filter((i) => i._id != id));
        toast.success('The procedure has been unfollowed!');
      })
      .catch((e) => {
        toast.error('Oops, this procedure could not be unfollowed!');
      });
  };

  useEffect(() => {
    API.getProceduralFollows({ sort, pageNum, company, language })
      .then((resp) => {
        debugger;
        setFileData(resp.data.procedures[0].results);
        setTotal(resp.data.procedures[0].count[0]?.total);
      })
      .catch(() => {
        toast.error('Oops, the procedures could not be loaded');
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
  }, [sort, pageNum, language]);

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
      {/* Search Input */}
      <div className="advanceSearchBox p-2 mt-2">
        <div className="d-flex align-items-center ">
          <div className="me-3">
            <b>
              <small>Advance Search</small>
            </b>
          </div>
          <div className="m-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by File No or Client Name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-success"> Search</button>
        </div>
      </div>

      <Filters
        setFilters={setFilters}
        fileData={fileData}
      />
      <h6 className="m-3 d-flex align-items-center">
        <span className="me-3">
          <span className="row bg-primary text-white p-2 rounded-2">Search Results ({resPerPage.length}) Files</span>
        </span>
      </h6>
      <FileTable
        unFollowProcedure={unFollowProcedure}
        onHeaderClicked={onHeaderClicked}
        fileData={fileData}
      />

      <Pagination
        resPerPage={resPerPage}
        total={total}
        setPageNum={setPageNum}
        pageNum={pageNum}
      ></Pagination>
    </div>
  );
};

export default ProceduresFollowsUp;
