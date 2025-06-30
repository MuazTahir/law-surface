'use client';

import React, { useEffect, useState } from 'react';
// import Filters from "@/components/filters/Filters";
import Filters from '@/components/clientfilterfunction/Filters';
// import FileTable from "@/components/table/FileTable";
import FileTable from '@/components/clientfilterfunction/FileTable';
import axios from 'axios';
import { useSelector } from 'react-redux';
import authSlice from '@/store/auth';
import './client.css';
import { useSearchParams } from 'next/navigation';
import Pagination from '@/components/pagination/pagination';
import caseAPI from '@/app/apiBridge/case';
// import "../globals.css";

const ClientSorting = () => {
  const params = useSearchParams();
  let caseStatus = params.get('c');
  let designated = params.get('v');

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

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  const [filters, setFilters] = useState({
    fileCategory: 'All Categories',
    sort: 'fileNo',
    sortOrder: 'asc', // "asc" for A to Z, "desc" for Z to A
    caseStatus: 'All Cases',
    users: 'All Users',
    balance: 'All Balances'
  });

  let companyID = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  });
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const [fileData, setFileData] = useState([]);

  useEffect(() => {
    caseAPI
      .getCases({
        designated: designated,
        company: companyID,
        status: caseStatus,
        pageNum,
        resPerPage,
        sort,
        language
      })
      .then((resp) => {
        setFileData(resp.data.cases[0].results);
        setTotal(resp.data.cases[0].count[0]?.total);
      });
  }, [pageNum, sort]);

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
  //     if (filters.caseStatus !== 'All Cases' && file.caseStatus._id !== filters.caseStatus) {
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
  //         ? a.fileNo._id.localeCompare(b.fileNo._id)
  //         : b.fileNo.localeCompare(a.fileNo);
  //     } else if (filters.sort === 'caseNumber') {
  //       return filters.sortOrder === 'asc' ? a.caseNo.localeCompare(b.caseNo) : b.caseNo.localeCompare(a.caseNo);
  //     }
  //     return 0;
  //   });

  const selectedFilters = () => {
    let selected = [];
    if (filters.fileCategory !== 'All Categories') {
      selected.push(`File Category: ${filters.fileCategory}`);
    }
    if (filters.sortOrder !== 'asc') {
      selected.push(`Table sort: ${filters.sortOrder}`);
    }
    if (filters.caseStatus !== 'All Cases') {
      selected.push(` All Cases: ${filters.caseStatus}`);
    }
    if (filters.balance !== 'All Balances') {
      selected.push(`Balance: ${filters.balance}`);
    }
    return selected.length > 0 ? selected.join(' / ') : '';
  };

  return (
    <div>
      {/* Search Input */}
      <div className="advanceSearchBox p-2 mt-2">
        <div className="d-flex justify-content-between">
          <div>
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
          <div className="dash-btn-container d-flex">
            <div class="flex-grow-1 d-btn">
              <a href="/dashboard/add-case">
                <i class="fa fa-folder-plus i-m"></i>
                <p class="small i-m">Add Case</p>
              </a>
            </div>
            {!designated ? (
              <div class="flex-grow-1 d-btn">
                <a href="/dashboard/ClientSorting?v=true">
                  <i class="fa fa-note-sticky  i-m"></i>
                  <p class="small i-m">My Designated Cases</p>
                </a>
              </div>
            ) : (
              <div class="flex-grow-1 d-btn">
                <a href="/dashboard/ClientSorting">
                  <i class="fa fa-note-sticky  i-m"></i>
                  <p class="small i-m">View All Cases</p>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <Filters
        setFilters={setFilters}
        fileData={fileData}
      />
      <h6 className="m-3 d-flex align-items-center">
        <span className="me-3">
          <span className="row bg-primary text-white p-2 rounded-2">Search Results ({fileData.length}) Files</span>
        </span>
      </h6>
      <FileTable
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

export default ClientSorting;
