import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import authSlice from '@/store/auth';

const Filters = ({ setFilters, fileData }) => {
  const [paymentType, setPaymentType] = useState([]);
  const [attorney, setAttornyUSer] = useState([]);
  const [caseType, setCaseType] = useState([]);
  const [caseStage, setCaseStage] = useState([]);
  const [court, setCourt] = useState([]);
  const [department, setDeparments] = useState([]);
  const [governate, setGovernate] = useState([]);
  const [caseStatus, setCaseStatus] = useState([]);
  const [counsel, setCounsel] = useState([]);
  const [fileCategory, setFileCategory] = useState([]);
  const [tempFilters, setTempFilters] = useState({
    fileCategory: 'All Categories',
    sort: 'fileNumber',
    sortOrder: 'asc',
    caseStatus: 'All Cases',
    users: 'All Users',
    balance: 'All Balances'
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setTempFilters((prevTempFilters) => ({
      ...prevTempFilters,
      [name]: value
    }));
  };

  let language = useSelector((store) => {
    return store.authSlice.language;
  });
  // const language=useSelector((store)=>{
  //   return store.authSlice.language
  // })
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues', {
        action: 'getValuesByTitle',
        groupTitle: 'Payment Type'
      })
      .then((resp) => {
        setPaymentType(resp.data.values);
      });
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues', {
        action: 'getValuesByTitle',
        groupTitle: 'fileCategory'
      })
      .then((resp) => {
        console.log('cccccccccccccccccccc');
        console.log(resp.data);
        setFileCategory(resp.data.values);
      });
  }, []);

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case', {
        company: user.company._id,
        action: 'getCaseFormData',
        token: localStorage.getItem('token')
      })
      .then((resp) => {
        resp.data.systemValues.forEach((item) => {});
        setGovernate(resp.data.systemValues.find((i) => i.groupTitle == 'Governorate').values);
      });
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues', {
        action: 'getValuesByTitle',
        groupTitle: 'caseStatus'
      })
      .then((resp) => {
        setCaseStatus(resp.data.values);
      });
  }, []);

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/user', {
        action: 'getUsers_Attorney',
        company: user.company._id
      })
      .then((resp) => {
        setAttornyUSer(resp.data);
      });
  }, []);
  const applyFilters = () => {
    setFilters(tempFilters);
  };
  return (
    <div>
      <div
        className=" bg-white mt-1  flex-wrap  p-3 d-flex justify-content-start align-items-center"
        style={{ width: '97%', margin: 'auto', borderRadius: '10px' }}
      >
        <div
          className="me-3"
          style={{ width: '150px' }}
        >
          <div className="d-flex  justify-content-between">
            <b>
              {' '}
              <small>File Category</small>
            </b>
            <span>icon</span>
          </div>
          <select
            name="fileCategory"
            className="form-select"
            onChange={handleFilterChange}
            value={tempFilters.fileCategory}
          >
            <option value="All Categories">All Categories</option>
            {fileCategory.map((category, index) => {
              return (
                <option
                  key={category._id || index}
                  value={category._id}
                >
                  {language === 'En' ? category.nameEn : category.nameAr}
                </option>
              );
            })}
          </select>
        </div>

        <div
          className="me-3"
          style={{ width: '130px' }}
        >
          <div className="d-flex justify-content-between">
            <b>
              {' '}
              <small>Case Status</small>
            </b>

            <span>icon</span>
          </div>
          <select
            name="caseStatus"
            className="form-select"
            onChange={handleFilterChange}
            value={tempFilters.caseStatus}
          >
            <option value="All Cases">All Status</option>
            {caseStatus.map((caseStatus, index) => {
              return (
                <option
                  key={caseStatus._id}
                  value={caseStatus._id}
                >
                  {language === 'En' ? caseStatus.nameEn : caseStatus.nameAr}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className="me-3"
          style={{ width: '189px' }}
        >
          <div className="d-flex justify-content-between">
            <b>
              {' '}
              <small>City/Governorate</small>
            </b>

            <span>icon</span>
          </div>
          <select
            id="governing"
            class="form-select "
          >
            <option value="">Select City/Governorate</option>

            {governate.map((governate, i) => {
              return (
                <option
                  key={i}
                  value={governate._id}
                >
                  {governate['name' + language]}
                </option>
              );
            })}
          </select>
        </div>
        <div
          className="me-3 pe-3"
          style={{ width: '160px', borderRight: '1px solid black' }}
        >
          <div className="d-flex justify-content-between">
            <b>
              {' '}
              <small>Assigned user</small>
            </b>
            <span>icon</span>
          </div>
          <select
            name="users"
            className="form-select"
            onChange={handleFilterChange}
            value={tempFilters.users}
          >
            <option value="All Users">All Users</option>
            {attorney.map((attorney, index) => {
              return (
                <option
                  key={attorney._id || index}
                  value={attorney._id}
                >
                  {attorney.fullName}
                </option>
              );
            })}
          </select>
        </div>
        <div className="me-3">
          <div className="d-flex  justify-content-between">
            <b>
              {' '}
              <small>Table Sort</small>
            </b>

            <span>icon</span>
          </div>
          <div className="d-flex">
            <select
              name="sort"
              className="form-select"
              onChange={handleFilterChange}
              value={tempFilters.sort}
            >
              <option value="fileNumber">File Number</option>
              <option value="caseNumber">Case Number</option>
            </select>
            <select
              name="sortOrder"
              className="form-select"
              onChange={handleFilterChange}
              value={tempFilters.sortOrder}
            >
              <option value="asc">A To Z</option>
              <option value="desc">Z To A</option>
            </select>
          </div>
        </div>

        {/* <div className="me-3">
        <div className="d-flex justify-content-between">
        <b> <small>Filter Balance</small></b>

          
          <span>icon</span>
        </div>
        <select
          name="balance"
          className="form-select"
          onChange={handleFilterChange}
          value={tempFilters.balance}
        >
          <option value="All Balances">All Balances</option>
          {
            paymentType.map((paymenttype) => (
              <option key={paymenttype._id} value={paymenttype._id}>
                {language === 'En' ? paymenttype.nameEn : paymenttype.nameAr}
              </option>
            ))
          }
 
        </select>
      </div> */}
        <div>
          <button
            className="btn btn-success me-2"
            onClick={applyFilters}
          >
            Sort
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
