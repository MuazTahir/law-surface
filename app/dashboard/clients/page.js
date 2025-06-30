'use client';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import clientAPI from '@/app/apiBridge/clients';
import { toast } from 'react-toastify';
import Pagination from '@/components/pagination/pagination';
import SortedHeader from '@/components/sortedHeader/sortedHeader';

export default function Home() {
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

  const searchRef = useRef(null);
  const legalFormRef = useRef(null);
  const sortByRef = useRef(null);
  const sortOrderRef = useRef(null);

  const language = useSelector((store) => store.authSlice.language);

  const [clients, setClients] = useState([]);
  // const [filteredClients, setFilteredClients] = useState([]);
  const [legalForms, setLegalForms] = useState([]);

  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 10;

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  useEffect(() => {
    debugger;
    clientAPI
      .getClients({
        resPerPage,
        pageNum,
        company,
        sort
      })
      .then((resp) => {
        setClients(resp.data.clients[0].results);
        // This will be used for pagination
        setTotal(resp.data.clients[0].count[0].total);
      })
      .catch((err) => {
        toast.error('Oops, the clients could not be loaded!');
      });
  }, [pageNum, sort]);

  // const fetchClients = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}/api/dashboard/clients`, {
  //       action: 'getClients'
  //     });
  //     // const data = response.data.values.map((client) => {
  //     //     client.legalForm = client.legalForm.values.find(
  //     //         (i) => i._id === client.legalFormId
  //     //     )[`name${language}`];

  //     //     client.totalContacts = ["personName1", "personName2", "personName3"].filter(
  //     //         (key) => client[key]
  //     //     ).length;

  //     //     return client;
  //     // });
  //     setClients(response.data.values);
  //     setFilteredClients(response.data.values);
  //   } catch (error) {
  //     console.error('Error fetching clients:', error);
  //   }
  // };

  // const fetchLegalForms = async () => {
  //   try {
  //     const response = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}/api/settings/systemValues`, {
  //       action: 'getValuesByTitle',
  //       groupTitle: 'Legal Status'
  //     });
  //     setLegalForms(response.data.values);
  //   } catch (error) {
  //     console.error('Error fetching legal forms:', error);
  //   }
  // };

  // const handleSearch = () => {
  //   const searchValue = searchRef.current?.value.toLowerCase() || '';
  //   const filtered = clients.filter((client) => {
  //     const clientName = client.clientNameEn ? client.clientNameEn.toLowerCase() : '';
  //     const clientCode = client.clientCode ? client.clientCode.toString().toLowerCase() : '';
  //     return clientName.includes(searchValue) || clientCode.includes(searchValue);
  //   });
  //   setFilteredClients(filtered);
  //   setCurrentPage(1);
  // };

  // const handleFilterAndSort = () => {
  //   const legalFormValue = legalFormRef.current?.value || 'All Legal Forms';
  //   const sortBy = sortByRef.current?.value || 'Client Code';
  //   const sortOrder = sortOrderRef.current?.value || 'A To Z';

  //   let filtered = [...clients]; // Create a copy of the clients array.

  //   // Filter by legal form
  //   if (legalFormValue !== 'All Legal Forms') {
  //     filtered = filtered.filter((client) => client.legalFormId === legalFormValue);
  //   }

  //   // Sorting
  //   filtered.sort((a, b) => {
  //     let compareValue = 0;

  //     if (sortBy === 'Client Code') {
  //       const clientCodeA = a.clientCode ? a.clientCode.toString() : '';
  //       const clientCodeB = b.clientCode ? b.clientCode.toString() : '';
  //       compareValue = clientCodeA.localeCompare(clientCodeB);
  //     } else if (sortBy === 'Legal Form') {
  //       const legalFormA = a.legalForm || '';
  //       const legalFormB = b.legalForm || '';
  //       compareValue = legalFormA.localeCompare(legalFormB);
  //     } else if (sortBy === 'Total Matters') {
  //       const mattersA = a.totalCases || 0; // Default to 0 if undefined or null
  //       const mattersB = b.totalCases || 0; // Default to 0 if undefined or null
  //       compareValue = mattersA - mattersB;
  //     }

  //     return sortOrder === 'A To Z' ? compareValue : -compareValue;
  //   });

  //   setFilteredClients(filtered);
  //   setCurrentPage(1);
  // };

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = filteredClients.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  const handleSearch = () => {};

  const handleFilterAndSort = () => {};

  return (
    <div className="container">
      {/* Search and Filters */}
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="input-group">
          <input
            ref={searchRef}
            type="text"
            className="form-control"
            placeholder="Search by client name or code"
          />
          <button
            onClick={handleSearch}
            className="btn  ms-3 btn-success"
          >
            Search
          </button>
        </div>
        <a
          className="btn"
          style={{ whiteSpace: 'nowrap' }}
          href="/dashboard/add-client"
        >
          Add New Client
        </a>
        {/* <a href="/dashboard/add-client">aaa</a> */}
      </div>

      <div className="d-flex  gap-3 align-items-center my-3">
        <div className="d-flex align-items-center">
          <label className="me-2">Legal Form:</label>
          <select
            ref={legalFormRef}
            className="form-select"
            style={{ width: '200px' }}
          >
            <option value="All Legal Forms">All Legal Forms</option>
            {legalForms.map((form) => (
              <option
                key={form._id}
                value={form._id}
              >
                {form[`name${language}`]}
              </option>
            ))}
          </select>
        </div>
        <div className="d-flex align-items-center">
          <label className="me-2">Sort By:</label>
          <select
            ref={sortByRef}
            className="form-select"
          >
            <option value="Client Code">Client Code</option>
            <option value="Legal Form">Legal Form</option>
            <option value="Total Matters">Total Matters</option>
          </select>
          <select
            ref={sortOrderRef}
            className="form-select ms-2"
          >
            <option value="A To Z">A To Z</option>
            <option value="Z To A">Z To A</option>
          </select>
          <button
            onClick={handleFilterAndSort}
            className="btn btn-primary ms-2"
          >
            Apply
          </button>
        </div>
      </div>

      {/* Table */}
      <table className="table table-striped">
        <SortedHeader onHeaderClicked={onHeaderClicked}>
          <tr>
            <th>Client Code</th>
            <th>Client Arabic Name</th>
            <th>Client English Name</th>
            <th>Legal Form</th>
            <th>Address</th>
            <th>Total Contacts</th>
            <th>Total Cases</th>
          </tr>
        </SortedHeader>
        <tbody>
          {clients.length > 0 ? (
            clients.map((client, index) => (
              <tr key={index}>
                <td>{client.clientCode}</td>
                <td>{client.clientNameAr}</td>
                <td>{client.clientNameEn}</td>
                <td>{client.legalForm['name' + language]}</td>
                <td>{client.address}</td>
                <td>{client.totalContacts}</td>
                <td>{client.totalCases}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="text-center"
              >
                No records found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      {/* will be moved to another component */}
      <Pagination
        resPerPage={resPerPage}
        total={total}
        setPageNum={setPageNum}
        pageNum={pageNum}
      ></Pagination>

      {/* <nav>
        <ul className="pagination justify-content-center">
          <li className={`page-item ${pageNum === 1 ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setPageNum((prev) => Math.max(prev - 1, 1))}
            >
              Previous
            </button>
          </li>
          {Array.from({ length: Math.ceil(total / 5) }, (_, i) => (
            <li
              key={i + 1}
              className={`page-item ${pageNum === i + 1 ? 'active' : ''}`}
            >
              <button
                className="page-link"
                onClick={() => setPageNum(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${pageNum === total ? 'disabled' : ''}`}>
            <button
              className="page-link"
              onClick={() => setPageNum((prev) => Math.min(prev + 1, total))}
            >
              Next
            </button>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
