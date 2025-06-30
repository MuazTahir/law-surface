import React, { useState } from "react";

const Filters = ({ setFilters }) => {
  const initialFilters = {
    fileCategory: "All Categories",
    sort: "fileNumber",
    sortOrder: "asc", // "asc" for A to Z, "desc" for Z to A
    billingStatus: "All Status",
    users:"All Users",
    balance: "All Balances",
  };

  const [tempFilters, setTempFilters] = useState(initialFilters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setTempFilters((prevTempFilters) => ({
      ...prevTempFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    setFilters(tempFilters);
  };

  const resetFilters = () => {
    setTempFilters(initialFilters);
    setFilters(initialFilters); // Optional: reset the filters immediately in the parent component
  };

  return (
    <div className="m-3 d-flex justify-content-start align-items-center">
      <div className="me-3">
        <div className="d-flex justify-content-between">
          <b>File Category</b>
          <i className="fa-solid fa-filter pt-1"></i>
        </div>
        <select
          name="fileCategory"
          className="form-select text-center"
          onChange={handleFilterChange}
          value={tempFilters.fileCategory}
        >
          <option value="All Categories">All Categories</option>
          <option value="Civil Cases">Civil Cases</option>
          <option value="Criminal Cases">Criminal Cases</option>
          <option value="Rental Cases">Rental Cases</option>
          <option value="Cheques Cases">Cheques Cases</option>
          <option value="Mortgage Cases">Mortgage Cases</option>
          <option value="Sales & Seizures">Sales & Seizures</option>
          <option value="Personal Affairs">Personal Affairs</option>
          <option value="Legal Notices">Legal Notices</option>
          <option value="Order For Payments">Order For Payments</option>
          <option value="General Cases">General Cases</option>
        </select>
      </div>
      <div className="me-3">
        <div className="d-flex justify-content-between">
          <b>Table Sort</b>
          <i className="fa-solid fa-filter pt-1"></i>
        </div>
        <div className="d-flex">
          <select
            name="sort"
            className="form-select text-center"
            onChange={handleFilterChange}
            value={tempFilters.sort}
          >
            <option value="fileNumber">File Number</option>
            <option value="caseNumber">Case Number</option>
          </select>
          <select
            name="sortOrder"
            className="form-select text-center"
            onChange={handleFilterChange}
            value={tempFilters.sortOrder}
          >
            <option value="asc">A To Z</option>
            <option value="desc">Z To A</option>
          </select>
        </div>
      </div>
      <div className="me-3">
        <div className="d-flex justify-content-between">
          <b>Billing Status</b>
          <i className="fa-solid fa-filter pt-1"></i>
        </div>
        <select
          name="billingStatus"
          className="form-select text-center"
          onChange={handleFilterChange}
          value={tempFilters.billingStatus}
        >
          <option value="All Status">All Status</option>
          <option value="In Process">In Process</option>
          <option value="Finished">Finished</option>
          <option value="Stop Temporary">Stop Temporary</option>
        </select>
      </div>
      <div className="me-3">
        <div className="d-flex justify-content-between">
          <b>Filter Balance</b>
          <i className="fa-solid fa-filter pt-1"></i>
        </div>
        <select
          name="balance"
          className="form-select text-center"
          onChange={handleFilterChange}
          value={tempFilters.balance}
        >
          <option value="All Balances">All Balances</option>
          <option value="Fully Paid">Fully Paid</option>
          <option value="Not Fully Paid">Not Fully Paid</option>
        </select>
      </div>
      <div>
        <button className="btn btn-primary me-2" onClick={applyFilters}>
          Sort
        </button>
      </div>
      <div>
        <button className="btn btn-dark me-3" onClick={resetFilters}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Filters;
