'use client';
import './styles.css';
import { useEffect, useRef, useState } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { useSelector } from 'react-redux';
// import 'jquery-ui/ui/widgets/draggable';
// import 'jquery-ui/ui/widgets/droppable';

export default function Home() {
  const [caseType, setCaseType] = useState([]);
  const [caseStage, setCaseStage] = useState([]);
  const [court, setCourt] = useState([]);
  const [departments, setDeparments] = useState([]);
  const [governorate, setGovernate] = useState([]);
  const [caseStatus, setCaseStatus] = useState([]);
  const [fileCatagory, setFileCatagory] = useState([]);
  const [search, setSearch] = useState(''); // State for search input
  const [filteredClients, setFilteredClients] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown visibility
  // const [attorneys, setAttorneys] = useState([])
  const [clients, setClients] = useState([]);
  // const [caseStage,setCaseStage]=useState([])

  let companyID = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  });

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  let sar = useRef();

  useEffect(() => {
    require('jquery-ui/ui/widgets/draggable');
    require('jquery-ui/ui/widgets/droppable');
  }, []);

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case', {
        company: companyID,
        action: 'getCaseFormData',
        token: localStorage.getItem('token')
      })
      .then((resp) => {
        console.log('allllllllllllllllllllll data');
        console.log(resp.data);

        const groupedValues = resp.data.systemValues.reduce((acc, item) => {
          acc[item.groupTitle] = item.values || [];

          return acc;
        }, {});
        console.log('Grouped Values: ', groupedValues);

        setCaseType(groupedValues['Case Type']);
        setCaseStage(groupedValues['Case Stage']);
        setCourt(groupedValues['Court']);
        setGovernate(groupedValues['Governorate']);
        setAttorneys(groupedValues['ATTORNEY']);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/clients', {
        action: 'getClients'
      })
      .then((resp) => {
        console.log('Clients data fetched:', resp.data.values);
        setClients(resp.data.values); // Set fetched clients
        setFilteredClients(resp.data.values); // Initialize filtered clients
      });
  }, []);

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase(); // Convert input to lowercase for case-insensitive search
    setSearch(value);
    setFilteredClients(
      clients.filter((client) => `${client.clientNameEn} ${client.clientNameAr}`.toLowerCase().includes(value))
    );
  };

  // useEffect(() => {

  //   axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case', {
  //     company: companyID,
  //     action: "getCaseFormData"
  //   }).then((resp) => {
  //     console.log("comppppppppppppppppppppppppppppppp")
  //     console.log(resp.data)
  //     setCaseType(resp.data.systemValues.find(i => i.groupTitle == 'Case Type').values);
  //     setCaseStage(resp.data.systemValues.find(i => i.groupTitle == 'Case Stage').values);
  //     setCourt(resp.data.systemValues.find(i => i.groupTitle == 'Court').values);
  //     setDeparments(resp.data.systemValues.find(i => i.groupTitle == 'Court Departments').values);
  //     setGovernate(resp.data.systemValues.find(i => i.groupTitle == 'Governorate').values);
  //     setAttorneys(resp.data.systemValues.find(i => i.groupTitle == 'ATTORNEY').values);

  //   });
  // }, []);

  let currentFiles = [
    {
      name: 'Client Name(English)',
      form: 'Client Legal Form(English)',
      name2: 'Client Name(Arabic)',
      email: 'Clients Email',
      file: 'Total FIles',
      no: 'Clients TRN NO.',
      id: 'ID Number',
      nation: 'Clients Nationality',
      card: 'Cradit limit',
      card2: 'Cradit balance',
      payment: 'Total Payments',
      fee: 'Total Fees',
      balance: 'Balance',
      Snumber: 'Serial Number',
      code: 'Client Code',
      form2: 'Client Legal Form',
      address: 'Client Address',
      Url: 'Website Url',
      Pno: 'Passport Number',
      Pnumber: 'Phone Number',
      Tmatters: 'Total Matters',
      contracts: 'Total Contracts',
      attorney: 'Total Power of Attorney',
      comtact: 'Contacts',
      nation2: 'Client Nationality(English)'
    }
  ];

  useEffect(() => {
    // Make the h6 elements draggable
    $('h6.draggable').draggable({
      revert: 'invalid', // If not dropped in the drop area, revert to original position
      containment: 'document' // Keeps the draggable within the document bounds
    });

    // Define the drop area
    $('#drop-area').droppable({
      accept: 'h6.draggable', // Only accept h6 elements with the draggable class
      drop: function (event, ui) {
        // When dropped, append the element to the drop area
        $(this).append(ui.helper);
        ui.helper.css({ top: 'auto', left: 'auto' }); // Reset the position to fit inside the drop area
      }
    });
    $('#drop-area2').droppable({
      accept: 'h6.draggable', // Only accept h6 elements with the draggable class
      drop: function (event, ui) {
        // When dropped, append the element to the drop area
        $(this).append(ui.helper);
        ui.helper.css({ top: 'auto', left: 'auto' }); // Reset the position to fit inside the drop area
      }
    });
  }, [currentFiles]);

  useEffect(() => {
    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');

    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues ', {
        action: 'getValuesByTitle',
        groupTitle: 'caseStatus'
      })
      .then((resp) => {
        console.log('caseStatussss  data');
        console.log(resp.data.values);
        setCaseStatus(resp.data.values);
      });
  }, []);

  // fileCatagory

  useEffect(() => {
    console.log('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');

    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues ', {
        action: 'getValuesByTitle',

        groupTitle: 'fileCategory'
      })
      .then((resp) => {
        console.log('FileCatagoryyyyyyyy  data');
        console.log(resp.data.values);
        setFileCatagory(resp.data.values);
      });
  }, []);

  return (
    <div>
      <div className="m-5">
        <div className="d-flex flex-md-wrap justify-content-start gap-3">
          <div className="d-flex align-items-center ">
            {/* <div  > */}
            <i class="fal fa-suitcase me-3"></i>
            {/* </div> */}
            {/* <div> */}
            <h4
              style={{ color: '#0d6efd' }}
              className="mb-0 lh-lg"
            >
              Report Matters
            </h4>
            {/* </div> */}
          </div>
        </div>
        <h6 className="mt-2">
          Create a report by selecting the type of data you want to expcit in the report and classification
          <br></br>
          when chossing filter options
        </h6>
        {/* <button id="btn" className="bg-whte border-0  mt-4 " >
        <p className="mt-2" style={{ color: "#0d6efd" }} >All Settings</p>
      </button> */}
      </div>

      <div className="d-md-flex flex-wrap align-items-md-center justify-content-center gap-5 mt-5 flex-lg-nowrap  mt-lg-0 align-items-lg-start">
        <div
          id="main"
          className="bg-white p-4"
        >
          <h6 className="border-bottom">Sort Report</h6>

          <div className="d-md-flex justify-content-center gap-5">
            <div className="border rounded p-2">
              <h5>Available Data</h5>
              <p className="smal">You can drag and drop from this list to include in the report list</p>

              <div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span
                      className="input-group-text"
                      id="basic-addon1"
                    >
                      {/* <i id="icon2" className="fas fa-magnifying-glass"></i> */}
                      <i
                        class="fal fa-search"
                        id="icon2"
                      ></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>

                {/* Client Data Section */}
                <div className="d-md-flex justify-content-space-between mt-4 gap-5 border-bottom">
                  <h6 className="mx-5 ms-3 ps-3">Client Data</h6>
                  {/* <i className="fa-solid fa-user mx-5 ms-3 ps-3"></i> */}
                  <i class="fal fa-user"></i>
                </div>

                {/* Draggable Elements */}
                {currentFiles.map((file, index) => (
                  <div
                    id="drop-area"
                    key={index}
                    className=" mt-3"
                    style={{ minHeight: '200px', padding: '10px' }}
                  >
                    <div
                      key={index}
                      className="text-start me-5 pe-5"
                    >
                      <h6
                        className="small ms-4 ps-4 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {' '}
                        {file.name}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.form}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.email}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.file}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.no}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.id}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.nation}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.card}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.card2}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.payment}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.fee}
                      </h6>
                      <h6
                        className="small ms-4 ps-4 mt-3 draggable"
                        style={{ cursor: 'pointer' }}
                      >
                        {file.balance}
                      </h6>
                    </div>
                  </div>
                ))}

                {/* Drop Area */}
                {/* <div>
          Drop here
        </div> */}

                {/* Public Data Section */}
                <div className="d-md-flex justify-content-start gap-5 border-bottom mt-4">
                  <h6
                    className="mx-5 ms-3 ps-3"
                    style={{ width: '95px' }}
                  >
                    File Data
                  </h6>
                  {/* <i className=xx"fa-solid fa-user mx-5 ms-3 ps-3"></i> */}
                  <i class="fal fa-suitcase me-4"></i>
                </div>

                {/* Public Data Mapping */}
                {currentFiles.map((file, index) => (
                  <div
                    key={index}
                    className="text-start me-5 pe-5 mt-3"
                  >
                    {/* <h6 className="small ms-5 ps-4">{file.Snumber}</h6> */}
                  </div>
                ))}
              </div>
            </div>

            <div className="h-auto border rounded p-2 ">
              <h5>Include in the report</h5>
              <p className="smal">Include this data in the same order</p>

              <div className="input-group mb-3 rounded-3 ">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text"
                    id="basic-addon1"
                  >
                    {/* <i id="icon2" className="fa-solid fa-magnifying-glass"></i> */}
                    <i
                      class="fal fa-search"
                      id="icon2"
                    ></i>
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>

              {/* Include in Report Section */}
              {currentFiles.map((file, index) => (
                <div
                  id="drop-area2"
                  key={index}
                  className=" mt-3 h-100"
                  style={{ minHeight: '200px', padding: '10px' }}
                >
                  <div
                    key={index}
                    className="text-start me-5 pe-5 mt-3"
                  >
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.name2}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.form2}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.address}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.Url}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.nation2}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.Pno}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.Tmatters}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.contracts}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.attorney}
                    </h6>
                    <h6
                      className="small ms-4 ps-4 mt-3 draggable"
                      style={{ cursor: 'pointer' }}
                    >
                      {file.contracts}
                    </h6>
                  </div>
                </div>
              ))}

              {/* Drop Area */}
              {/* <div>
                        Drop here
                                   </div> */}
            </div>
          </div>
        </div>
        {/* <div id="main" className=" bg-white p-4 " > */}
        {/* <h6 className="border-bottom" >Filtering Options</h6>

        <div className="mt-5  " >
          <hr id="main2" />
          <div className="ms-5 ps-3" >
            <div className="ms-5 ps-5" >
              <button className="bg-primary ms-5 ps-4 rounded " >
                <h6 style={{ color: "white" }} className="mt-2 me-4  " >Download</h6>
              </button>
            </div>
          </div>
        </div> */}
        {/* </div> */}
        <div
          id="main"
          className="bg-white p-4"
        >
          <h6 className="border-bottom">Filtering Options</h6>

          <div className="mt-5">
            <div>
              <div className="ms-3">
                <div
                  style={{ background: '#e9ecef', height: '30px' }}
                  className="me-5 pe-5"
                >
                  <h6 className="pt-2 ps-2 small">Define the search word</h6>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6
                    style={{ width: '250px' }}
                    className="small"
                  >
                    Export results only when the entered search word is available
                  </h6>
                  <input className="form-control" />
                </div>
                <div>
                  <h6 className="small">Define search categories</h6>
                  <select className="form-select ">
                    <option>File No.</option>
                    <option>Case No.</option>
                    <option>Reference Number</option>
                    <option>Opponent</option>
                    <option>All</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <div className="ms-3 mt-5">
                <div
                  style={{ background: '#e9ecef', height: '30px' }}
                  className="me-5 pe-5"
                >
                  <h6 className="pt-2 pb-4 ps-2 small">Select the client(s)</h6>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div
                  className="dropup position-relative"
                  style={{ width: '240px' }}
                >
                  <h6 className="small">Client Name</h6>
                  {/* Dropdown Toggle */}
                  <button
                    className="btn btn-outline-secondary w-100 text-start"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    Select Client
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div
                      className="dropdown-menu show w-100 mt-1 p-0"
                      style={{ maxHeight: '200px', overflowY: 'auto' }}
                    >
                      {/* Search Box */}
                      <div className="p-2">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search clients..."
                          value={search}
                          onChange={handleSearch}
                        />
                      </div>

                      {/* Dropdown Options */}
                      {filteredClients.map((client, i) => (
                        <button
                          key={i}
                          className="dropdown-item"
                          onClick={() => {
                            console.log('Selected Client:', client);
                            setIsDropdownOpen(false); // Close dropdown on selection
                          }}
                        >
                          {client.clientNameEn} | {client.clientNameAr}
                        </button>
                      ))}

                      {/* No Results Found */}
                      {filteredClients.length === 0 && <div className="dropdown-item text-muted">No clients found</div>}
                    </div>
                  )}
                </div>

                <div>
                  <h6 className="small">Define search categories</h6>
                  <div className="d-flex align-items-center">
                    <input
                      type="checkbox"
                      className="form-check-input"
                    />
                    <p className="small pt-3 ms-2">All Clients</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="ms-3 mt-5 pb-3">
                <div
                  style={{ background: '#e9ecef', height: '30px' }}
                  className="me-5 pe-5"
                >
                  <h6 className="pt-2 ps-2 small">Other Options</h6>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6 className="small">File type</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Select...</option>
                    <option>All Cases Type</option>
                    <option>Cases only</option>
                    <option>Execution file only</option>
                  </select>
                </div>
                <div>
                  <h6 className="small">File Category</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Select...</option>
                    {fileCatagory.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item._id}
                        >
                          {item['name' + language]}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6 className="small">Case Type</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    {caseType.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item._id}
                        >
                          {item.nameEn}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div>
                  <h6 className="small">Case Status</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Select Status...</option>
                    {caseStatus.map((item, i) => {
                      return <option key={i}>{item['name' + language]}</option>;
                    })}
                  </select>
                </div>
              </div>

              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6 className="small">Case Stage</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    {caseStage.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item._id}
                        >
                          {item.nameEn}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <h6 className="small">Court</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    {court.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item}
                        >
                          {/* {item['name'+language]} */}
                          {item.nameEn}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6 className="small">City/Governrate</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    {governorate.map((item, i) => {
                      return (
                        <option
                          key={i}
                          value={item._id}
                        >
                          {item.nameEn}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <h6 className="small">Select User</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Select...</option>
                    <option>All Users</option>
                    <option>Marwan Said Al Dhuhli</option>
                    <option>Muhammad Zayid Al-Hatmi</option>
                    <option>Lawyeraldhuhli@Gmail.com</option>
                    <option>Saifalnaabilaw@Gmail.com</option>
                    <option>Mahmoud Al-Bouiqi</option>
                  </select>
                </div>
              </div>
              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6 className="small">Related Matters</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option value="All Categories">All Matters</option>
                    <option value="Civil Cases">Main Matters Only</option>
                    <option value="Criminal Cases">Related cases only</option>
                  </select>
                </div>

                <div>
                  <h6 className="small">Client Legal Form</h6>
                  <select
                    disabled
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Select...</option>
                    <option>All Users</option>
                    <option>Marwan Said Al Dhuhli</option>
                    <option>Muhammad Zayid Al-Hatmi</option>
                    <option>Lawyeraldhuhli@Gmail.com</option>
                    <option>Saifalnaabilaw@Gmail.com</option>
                    <option>Mahmoud Al-Bouiqi</option>
                  </select>
                </div>
              </div>
              <div className="d-flex  flex-md-column justify-content-around align-items-start gap-4 pe-3 mb-0 mt-3">
                <h6 className="small">Case/Execution date period</h6>

                <input
                  type="text"
                  className="form-control  "
                  placeholder="Please leave it blank for other filtering optins"
                />
              </div>

              <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
                <div>
                  <h6 className="small">Commissioning Date</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Month...</option>
                    <option value="All Categories">1-January</option>
                    <option value="Civil Cases">2-Februay</option>
                    <option value="Criminal Cases">3-March</option>
                    <option value="Criminal Cases">4-April</option>
                    <option value="Criminal Cases">5-May</option>
                    <option value="Criminal Cases">6-June</option>
                    <option value="Criminal Cases">7-July</option>
                    <option value="Criminal Cases">8-August</option>
                    <option value="Criminal Cases">9-september</option>
                    <option value="Criminal Cases">10-October</option>
                    <option value="Criminal Cases">11-November</option>
                    <option value="Criminal Cases">12-December</option>
                  </select>
                </div>

                <div>
                  <h6 className="small">Commissioning Date</h6>
                  <select
                    className="form-select mt-2"
                    style={{ width: '200px', maxHeight: '100px', overflowY: 'scroll' }}
                  >
                    <option>Year...</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                  </select>
                </div>
              </div>
            </div>

            {/* <div>
            <div className="ms-3 mt-5">
              <div style={{ background: "#e9ecef", height: "30px" }} className="me-5 pe-5">
                <h6 className="pt-2 ps-2 small">Determine the period</h6>
              </div>
            </div>
            <div className="d-flex flex-column flex-md-row gap-4 pe-3 mt-3">
              <div>
                <h6 className="small">From</h6>
                <input type="date" className="form-control" />
              </div>
              <div>
                <h6 className="small">To</h6>
                <input type="date" className="form-control" />
              </div>
            </div>
          </div> */}
          </div>

          <div className="d-flex justify-content-end">
            <div className="mt-4">
              <div>
                <button className="btn btn-primary">
                  <h6 className="text-white my-2 mx-4">Download</h6>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
