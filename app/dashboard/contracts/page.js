'use client';
import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ContractModal from '@/components/addContract/addContract';
import { useSelector } from 'react-redux';
import Pagination from '@/components/pagination/pagination';
import SortedHeader from '@/components/sortedHeader/sortedHeader';

export default function ClientDisplay() {
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

  const Language = useSelector((store) => store.authSlice.language);

  let [addContract, setAddContract] = useState();

  const [myclient, setMyclient] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('asc'); // State to manage sorting order for expiry date
  const [nameSortOrder, setNameSortOrder] = useState('A to Z'); // State to manage sorting order for client name
  const [sortedClients, setSortedClients] = useState([]); // State to store sorted clients
  let router = useRouter();

  console.log('ohhhhhhhhhhhhh' + Language);

  // Fetch client data from the API
  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/contract', {
        action: 'getContracts',
        pageNum,
        resPerPage,
        sort,
        Language
      })
      .then(function (resp) {
        // const myData = resp.data.contracts;
        console.log(resp.data.contracts);
        // setMyclient(myData);
        setSortedClients(resp.data.contracts[0].results);
        setTotal(resp.data.contracts[0].count[0].total);
        // setSortedClients(resp.data.contracts || []); // Initialize sortedClients with the fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [pageNum, sort]);

  // Filter the clients based on the search query names kosearch krte hai
  const filteredClients = sortedClients.filter((client) => {
    const clientName = client?.client?.['clientName' + Language] || ''; // Fallback for missing values
    return clientName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSortClick = () => {
    // let sorted;
    // // Determine sorting based on selected options
    // if (sortOrder === 'asc' || sortOrder === 'desc') {
    //   sorted = [...filteredClients].sort((a, b) => {
    //     const dateA = new Date(a.expiryDate);
    //     const dateB = new Date(b.expiryDate);
    //     return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    //   });
    // } else {
    //   sorted = [...filteredClients].sort((a, b) => {
    //     return nameSortOrder === 'A to Z'
    //       ? a['client']['clientName' + Language].localeCompare(b['client']['clientName' + Language])
    //       : b['client']['clientName' + Language].localeCompare(a['client']['clientName' + Language]);
    //   });
    // }
    // setSortedClients(sorted); // Update sortedClients with sorted data
  };

  // Handle sort order change for expiry date
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Handle sort order change for client name
  const handleNameSortChange = (e) => {
    setNameSortOrder(e.target.value);
    setSortOrder(''); // Reset sortOrder to avoid conflict yani duplicate ko avoide krta hai
  };

  // Pagination settings
  const itemsPerPage = 10;
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredClients.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  //   console.log('Filtered Clients:', filteredClients);
  //   console.log('Current Items:', currentItems);

  //   const totalPages = Math.ceil(filteredClients.length / itemsPerPage);

  // Handle page click for pagination
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Function to format the date
  const formatDate = (dateString) => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-GB', options);
  };

  const onContractAdded = (contract) => {
    console.log('New Contract to be added:', contract); // Debug the contract
    setSortedClients((prevClients) => {
      console.log('Previous Clients:', prevClients); // Debug previous state
      return [...prevClients, contract];
    });
  };

  return (
    <div className="maindev">
      <ContractModal
        onContractAdded={onContractAdded}
        setAddContract={setAddContract}
        addContract={addContract}
      ></ContractModal>

      <div className="p-0.5 rounded childDev">
        <div className="row mb-3 mt-2">
          <div className="d-flex align-items-center col-md-6">
            <div>
              <span className="me-3 mt-3">
                <b>Advance Search</b>
              </span>
            </div>
            <div>
              <input
                type="search"
                className="form-control inputSize"
                placeholder="Search by the client's name"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div>
              <button className="btn btn-primary ms-2">Search</button>
            </div>
          </div>

          <div className="col-md-6 align-items-center justify-content-between d-flex">
            <div className="d-flex justify-content-start align-items-center">
              <div className="me-2">
                <b>Table Sort</b>
              </div>
              <div>
                <select
                  className="form-select"
                  value={sortOrder}
                  onChange={handleSortChange}
                >
                  <option value="asc">Expiration Date Asc</option>
                  <option value="desc">Expiration Date Desc</option>
                </select>
              </div>
              <div>
                <select
                  className="form-select "
                  value={nameSortOrder}
                  //   onChange={handleNameSortChange}
                >
                  <option value="A to Z"> A to Z</option>
                  <option value="Z to A"> Z to A</option>
                </select>
              </div>
              <div>
                <button
                  className="btn btn-primary ms-2"
                  onClick={handleSortClick}
                >
                  Sort
                </button>
              </div>
            </div>
            <div>
              <button
                className="btn"
                onClick={() => {
                  setAddContract(true);
                }}
              >
                New Contract
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-0.5 rounded childDev">
        <table
          border={1}
          className="table"
        >
          <SortedHeader onHeaderClicked={onHeaderClicked}>
            <tr>
              <td>
                <b>Contract No.</b>
              </td>
              <td>
                <b>Client Name</b>
              </td>
              <td>
                <b>Contract Type</b>
              </td>
              <td>
                <b>Start Date</b>
              </td>
              <td>
                <b>Expiry Date</b>
              </td>
              <td>
                <b>Notes</b>
              </td>
            </tr>
          </SortedHeader>
          <tbody>
            {sortedClients.map((client, index) => (
              <tr key={index}>
                <td>{client.contractNo}</td>
                <td>{client.client['clientName' + Language]}</td>
                <td>{client.contractType.values['name' + Language]}</td>
                <td>{formatDate(client.startDate)}</td>
                <td className="text-danger fw-bold">{formatDate(client.expiryDate)}</td>
                <td>{client.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        resPerPage={resPerPage}
        total={total}
        setPageNum={setPageNum}
        pageNum={pageNum}
      ></Pagination>
    </div>
  );
}
