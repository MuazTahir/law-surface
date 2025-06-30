'use client';
// import { useForm } from 'react-hook-form';
import './add-case.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import ReduxProvider from '@/components/reduxProvider/reduxProvider';
import { useEffect, useState } from 'react';
import SessionCheck from '@/components/session-check/session-check';
import DisputeForm from '@/components/addcaseModel/Form1/Form1';
import { useRouter } from 'next/navigation';
// import 'bootstrap/dist/js/bootstrap.bundle'
import { useSearchParams } from 'next/navigation';
import caseAPI from '../../apiBridge/case';

import dynamic from 'next/dynamic';

const BootstrapScript = dynamic(
  () => {
    return import('bootstrap/dist/js/bootstrap.bundle.min.js');
  },
  { ssr: false }
);

// const reinitializeBootstrapDropdowns = () => {
//     const dropdownElements = document.querySelectorAll('.dropdown-toggle');
//     dropdownElements.forEach((dropdownToggle) => {
//         new window.bootstrap.Dropdown(dropdownToggle);
//     });
// };
export default function AddCaseRedux() {
  return (
    <ReduxProvider>
      <SessionCheck>
        <AddCase></AddCase>
      </SessionCheck>
    </ReduxProvider>
  );
}

function AddCase() {
  const params = useSearchParams();
  const caseID = params.get('_id');
  const [newCase, setNewCase] = useState(true);

  const router = useRouter();

  // useEffect(() => {
  //     // Initialize Bootstrap dropdowns on mount
  //     reinitializeBootstrapDropdowns();

  //     // Reinitialize Bootstrap dropdowns on route change by watching `asPath`
  //     reinitializeBootstrapDropdowns();
  // }, [router.asPath]);

  let language = useSelector((store) => {
    return store.authSlice.language;
  });

  let user = useSelector((store) => {
    return store.authSlice.currentUser;
  });

  // let {data, error, isLoading} = useSWR('/api/case', fetcher)

  let [governate, setGovernate] = useState([]);
  let [caseType, setCaseType] = useState([]);
  let [departments, setDeparments] = useState([]);
  let [cityArea, setCityArea] = useState([]);
  let [caseStage, setCaseStage] = useState([]);
  let [court, setCourt] = useState([]);
  let [fileNo, setFileNo] = useState();

  const [allParties, setAllParties] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [opponentData, setOpponentData] = useState([]);
  const [disputeData, setDisputeData] = useState([]);
  const [fileCategory, setFileCategory] = useState([]);

  let {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset
  } = useForm();

  const handleClientData = (data) => {
    setClientData((prevClients) => [...prevClients, data]);
  };
  const handleOpponentData = (data) => {
    // setOpponentData(data);
    setOpponentData((preOpponent) => [...preOpponent, data]);
  };
  const handleDisputeData = (data) => {
    setDisputeData((prevDispute) => [...prevDispute, data]);
    // setDisputeData(data)
  };

  const handlePartiesData = (parties) => {
    setAllParties(parties);
  };

  const [opType, setOpType] = useState('new');

  useEffect(() => {
    // axios.post(process.env.NEXT_PUBLIC_API_SERVER + '/api/dashboard/case', {
    //   company: user.company._id,
    //   action: 'getCaseFormData',
    //   token: localStorage.getItem('token')
    // });
    caseAPI.getCaseFormData().then((resp) => {
      let { caseType, departments, cityArea, caseStage, court, fileNo } = resp.data;

      resp.data.systemValues.forEach((item) => {});
      setCaseType(resp.data.systemValues.find((i) => i.groupTitle == 'Case Type').values);
      setCaseStage(resp.data.systemValues.find((i) => i.groupTitle == 'Case Stage').values);
      setCourt(resp.data.systemValues.find((i) => i.groupTitle == 'Court').values);
      setDeparments(resp.data.systemValues.find((i) => i.groupTitle == 'Court Departments').values);
      setGovernate(resp.data.systemValues.find((i) => i.groupTitle == 'Governorate').values);
      setAttorneys(resp.data.systemValues.find((i) => i.groupTitle == 'ATTORNEY').values);
      setCounsel(resp.data.systemValues.find((i) => i.groupTitle == 'COUNSEL').values);
      // setCaseType(caseType);
      // setDeparments(departments);
      setCityArea(cityArea);
      // setCaseStage(caseStage);
      // setCourt(court);
      // setFileNo(fileNo);
    });
  }, []);
  const [caseData, setCaseData] = useState([]);
  const [partydata, setPartyData] = useState([]);

  useEffect(() => {
    const fetch = params.get('rel') || params.get('_id');
    let op;

    if (params.get('rel')) {
      op = 'relative';
    } else if (params.get('_id')) {
      op = 'edit';
    } else {
      op = 'new';
    }

    setOpType(op);

    if (fetch) {
      caseAPI.getCase({ caseId: fetch }).then((resp) => {
        if (op === 'relative' || op == 'edit') {
          let caseItem = resp.data.case[0];

          setCaseData(caseItem);

          setValue('fileNo', caseItem.fileNo._id);
          setValue('refNo', caseItem.refNo);

          setValue('comissioningDate', new Date(caseItem.comissioningDate).toISOString().split('T')[0]);

          const clients = caseItem.clients.map((client) => {
            return {
              adjective: client.adjective._id,
              clientName: client,
              legalStatus: client.legalForm,
              type: 'Client',
              _id: client._id,
              nationality: client.nationality
            };
          });

          const opponents = caseItem.opponents.map((opponent) => {
            return {
              ...opponent,
              opponentLegalStatus: opponent.opponentLegalStatus,
              adjective: opponent.adjective._id,
              type: 'Opponent'
            };
          });

          const disputes = caseItem.disputes.map((dispute) => {
            return {
              ...dispute,
              disputingPartyLegalStatus: dispute.disputingPartyLegalStatus,
              adjective: dispute.adjective._id,
              type: 'Disputing Party'
            };
          });

          const combinedParties = [...clients, ...opponents, ...disputes];

          setPartyData(combinedParties);

          // now we need to set only specific fields
        } else if (op === 'new') {
        }
      });
    }
  }, [caseID]);

  // this is for update, not needed right now
  // useEffect(() => {
  //   if (Object.keys(caseData).length > 0) {
  //     reset({
  //       fileNo: caseData.fileNo._id || '',
  //       caseNo: caseData.caseNo || '',
  //       caseType: caseData.caseType || '',
  //       caseStatus: caseData.caseStatus._id || '',
  //       claimAmount: caseData.claimAmount || '',
  //       caseStage: caseData.caseStage || '',
  //       refNo: caseData.refNo || '',
  //       department: caseData.department || '',
  //       governing: caseData.governing._id || '',
  //       comissioningDate: caseData.comissioningDate || '',
  //       designatedAttorney: caseData.desginatedAttorney || '',
  //       designatedCounsel: caseData.designatedCounsel || '',
  //       owner: caseData.owner || '',
  //       court: caseData.court._id,
  //       clients: caseData.clients || ''
  //     });
  //   }
  // }, [caseData, reset]);

  const [caseStatus, setCaseStatus] = useState([]);

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + '/api/settings/systemValues', {
        action: 'getValuesByTitle',
        groupTitle: 'fileCategory'
      })
      .then((resp) => {
        setFileCategory(resp.data.values);
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
  let [addedFields, setAddedFields] = useState([]);

  let [dynamicProperties, setDynamicProperties] = useState([
    { name: "Judge's Name", value: 'judgeName' },
    { name: 'Legal Reference', value: 'legalReference' },
    { name: 'Complaint Number', value: 'complaintNumber' },
    { name: 'Cheque No.', value: 'chequeNo' },
    { name: 'Cheque Date', value: 'chequeDate', type: 'date' },
    { name: 'Cheque Amount', value: 'chequeAmount', type: 'number' },
    { name: 'Drawn Cheque Bank', value: 'drawnChequeBank' },
    { name: 'Account No.', value: 'accountNo' },
    { name: 'Court Link', value: 'courtLink' },
    { name: 'Propery Number', value: 'properyNumber' },
    { name: 'Propery Address', value: 'properyAddress' },
    { name: 'Elec./Water No.', value: 'electWaterNo' },
    { name: 'Unit No.', value: 'unitNo' },
    { name: 'Responsible Bank Employee', value: 'responsibleBankEmployee' },
    { name: 'Documents Received Date', value: 'documentsReceivedDate' },
    { name: 'Contract No.', value: 'contractNo' },
    { name: 'Contract Amount', value: 'contractAmount', type: 'number' },
    { name: 'Contract Period', value: 'contractPeriod' },
    { name: 'Payment Stopped', value: 'paymentStopped' },
    { name: 'Property Owner', value: 'propertyOwner' },
    { name: 'Murabaha Number', value: 'murbahaNumber' },
    { name: 'Notarized Contact No.', value: 'notarizedContractNo' },
    { name: 'Opponent Trading License', value: 'opponentTradingLicense' },
    { name: 'Reservation No.', value: 'reservationNo' },
    { name: 'Assignment Date', value: 'assignmentDate', type: 'date' },
    { name: 'Traffic Plate No.', value: 'trafficPlateNo' },
    { name: 'Vehicle Type', value: 'vehicleType' },
    { name: 'Manufacturing Year', value: 'manufacturingYear' },
    { name: 'Place of Issue', value: 'placeOfIssue' },
    { name: 'Payment of Date', value: 'paymentOfDate' },
    { name: 'Vehicle Colour', value: 'vechileColour' },
    { name: 'Request No.', value: 'requestNo' },
    { name: 'Notice Date', value: 'noticeDate', type: 'date' },
    { name: 'Case Date', value: 'caseDate', type: 'date' }
  ]);

  // let counsels = [
  //     { fullName: "khurram", role: 'attorney' }
  // ];

  const addField = (field, index) => {
    addedFields.push(field);
    dynamicProperties.splice(index, 1);
    setDynamicProperties([...dynamicProperties]);
  };

  let [attorneys, setAttorneys] = useState([]);
  let [counsel, setCounsel] = useState([]);

  const addCase = async (data) => {
    // Determine the action type
    const actionType = caseID ? 'updateCase' : 'addCase';
    data.action = actionType;

    if (opType == 'relative') {
      data.relative = [caseData._id];
    }

    // Include `caseID` as `_id` when updating
    if (caseID) {
      data._id = caseID;
    }
    //

    // Attach owner
    data.owner = user.company._id;

    // Remove empty fields
    if (!data.pleadingLawer) delete data.pleadingLawer;

    // Process party data

    // older change
    // const clients = allParties.filter((party) => party.type === 'Client').map((client) => client._id);

    // new change, we need to client's adjective for this case as well, therefore, now we are setting an
    // object which will hold the clientID and the adjective
    const clients = allParties
      .filter((party) => party.type === 'Client')
      .map((client) => {
        return {
          adjective: client.adjective,
          client: client._id
        };
      });

    let opponents = allParties
      .filter((party) => party.type === 'Opponent')
      .map((i) => {
        return { ...i, opponentLegalStatus: i.opponentLegalStatus._id };
      });
    // .map((opponent) => opponent._id);

    const disputes = allParties
      .filter((party) => party.type === 'Disputing Party')
      .map((i) => {
        return { ...i, disputingPartyLegalStatus: i.disputingPartyLegalStatus._id };
      });

    // Prepare the full data
    const fullData = {
      opType,
      ...data,
      clients,
      opponents,
      disputes
    };

    console.log('Merged Case Data:', fullData);
    debugger;
    try {
      // Make the POST request
      const resp = await axios.post(`${process.env.NEXT_PUBLIC_API_SERVER}/api/dashboard/case`, fullData, {
        headers: {
          Authorization: localStorage.getItem('token')
        }
      });

      console.log('Response:', resp.data);

      // Handle the response
      if (resp.data.success) {
        const message = actionType === 'addCase' ? 'Case added successfully' : 'Case updated successfully';
        toast.success(message);
      } else {
        toast.error(resp.data.message || 'Operation failed');
      }
    } catch (e) {
      toast.error('Oops, the case could not be added/updated');
      console.error('Error:', e);
    }
  };

  return (
    <div
      id="add-case"
      className="add-case-container"
    >
      <form onSubmit={handleSubmit(addCase)}>
        {/* <option>{item['name'+language]}</option> */}

        <div className="row general_style general_boxs_padding new_case_form gx-5">
          <div className="col-md-2 inner_box_title col-sm-12">
            Case Details{' '}
            <p className="tab_description">
              {opType == 'new' ? (
                <p className="small">Add New Case to the system</p>
              ) : (
                <div className="notification-box">
                  This case will be recorded as a substantive <b>case No {caseData.caseNo}</b> &{' '}
                  <b>
                    File No.
                    {caseData.genFileNo}
                  </b>
                </div>
              )}
            </p>
            {/* <input type="text" id="main_case" defaultValue="" /> <p />{" "} */}
            <div className="skip_email_notification">
              <b>Other options</b>{' '}
              <div className="flex pb-8">
                <input
                  {...register('sendAttorneyEmail')}
                  type="checkbox"
                  id="sendAttorneyEmail"
                  defaultChecked=""
                  className="i-m"
                />
                <p className="small i-m ml-7">Send mail to notify the Attorney</p>{' '}
              </div>{' '}
              <div className="flex pb-8">
                <input
                  type="checkbox"
                  id="sendCouncellorEmail"
                  defaultChecked=""
                  className="i-m"
                />
                <p className="small i-m ml-7">Send mail to notify the Counsellor</p>{' '}
              </div>
              <div className="flex pb-8">
                <input
                  type="checkbox"
                  id="sendPleadingEmail"
                  defaultChecked=""
                  className="i-m"
                />
                <p className="small i-m ml-7">Send mail to notify the Pleading Lawyer</p>{' '}
              </div>{' '}
              <p className="small">
                An email alert will is sent when a new attorney or counsellor or pleading lawyer designated or modified
              </p>
            </div>
          </div>

          <div className="col-md-10 center-area col-sm-12">
            <div className="row pb-20">
              <div class="col-md-4  col-sm-12">
                <div>
                  <label
                    for="fileNo"
                    class="form-label"
                  >
                    <div className="row">
                      File No.
                      <required>*</required>
                      <div className="col">
                        <select
                          {...register('fileNo', {
                            required: true,
                            onChange: (e) => {
                              caseAPI
                                .geFileCaseNo({ fileType: e.target.value })
                                .then((resp) => {
                                  setValue('caseFileNo', resp.data.code);
                                })
                                .catch((err) => {
                                  toast.error('Oops, the fileNo could not be loaded');
                                });
                            }
                          })}
                          class="form-control"
                          id="fileNo"
                          disabled={opType == 'relative'}
                        >
                          <option value="All Categories">seletct File category</option>
                          {fileCategory.map((category) => {
                            return (
                              <option
                                key={category._id}
                                value={category._id}
                              >
                                {language === 'En' ? category.nameEn : category.nameAr}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col">
                        <input
                          placeholder="--"
                          {...register('caseFileNo')}
                          class="form-control w-50 text-center"
                          disabled
                        />
                      </div>
                    </div>
                  </label>

                  {errors.fileNo && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="exampleInput"
                    class="form-label"
                  >
                    Case No.
                    <required>*</required>
                    <input
                      placeholder="Case No."
                      className="form-control"
                      id="caseNo"
                      {...register('caseNo', { required: true })}
                    />
                  </label>
                  {errors.caseNo && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="exampleInput"
                    class="form-label"
                  >
                    Case Type
                    <required>*</required>
                    <select
                      id="caseType"
                      {...register('caseType', { required: true })}
                      className="form-control"
                    >
                      <option
                        value=""
                        data-select2-id="2"
                      >
                        Choose Case type
                      </option>
                      {/* <option value="256" data-select2-id="1444">Plenary Commercial Execution</option> */}
                      {caseType.map((item, i) => {
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
                  </label>
                  {errors.caseType && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="exampleInput"
                    class="form-label"
                  >
                    Case Status
                    <required>*</required>
                    <select
                      {...register('caseStatus', { required: true })}
                      id="caseStatus"
                      class="form-control"
                    >
                      <option
                        value="All Status"
                        
                        disabled
                      >
                        All Status
                      </option>

                      {caseStatus.map((caseStatus) => {
                        return (
                          <option
                            key={caseStatus._id}
                            value={caseStatus._id}
                          >
                            {language === 'En' ? caseStatus.nameEn : caseStatus.nameAr}
                          </option>
                        );
                      })}
                      {/* <option value="" data-select2-id="4">Select Status...</option>
                                        <option value="In Process" data-select2-id="1455">In Process</option>
                                        <option value="Finished" data-select2-id="1456">Finished</option>
                                        <option value="Postponed" data-select2-id="1457">Postponed</option>
                                        <option value="Stop Temporarily" data-select2-id="1458">Stop Temporarily</option>
                                        <option value="Separated" data-select2-id="1459">Separated</option>
                                        <option value="Draft" data-select2-id="1460">Draft</option> */}
                    </select>
                  </label>
                  {errors.caseStatus && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="claimAmount"
                    class="form-label"
                  >
                    Claim Amount
                    <input
                      placeholder="Claim Amount"
                      {...register('claimAmount')}
                      className="form-control"
                      type="number"
                    />
                  </label>
                </div>

                <div>
                  <label
                    for="caseStage"
                    class="form-label"
                  >
                    Case Stage
                    <required>*</required>
                    <select
                      {...register('caseStage', { required: true })}
                      className="form-control"
                    >
                      <option
                        value=""
                        data-select2-id="6"
                      >
                        Select Level...
                      </option>
                      {caseStage.map((item, i) => {
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
                  </label>
                  {errors.caseStage && <p className="form-error small">This field is required</p>}
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div>
                  <label
                    for="refNo"
                    class="form-label"
                  >
                    Reference Number
                    <required>*</required>
                    <input
                      {...register('refNo', { required: true })}
                      className="form-control"
                      type="text"
                      disabled={opType == 'relative'}
                    />
                  </label>
                  {errors.refNo && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="department"
                    class="form-label"
                  >
                    Department
                    <select
                      {...register('department')}
                      class="form-control"
                      id="department"
                    >
                      <option value="">Select the department...</option>
                      {departments.map((department, i) => {
                        return (
                          <option
                            key={i}
                            value={department._id}
                          >
                            {department['name' + language]}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </div>

                <div>
                  <label
                    for="governing"
                    class="form-label"
                  >
                    City/Governorate
                    <select
                      id="governing"
                      {...register('governing', { required: true })}
                      class="form-control "
                    >
                      <option value="">Select City/Governorate...</option>

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
                  </label>
                  {errors.governing && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="comissioningDate"
                    class="form-label"
                  >
                    Commissioning Date
                    <input
                      id="comissioningDate"
                      {...register('comissioningDate')}
                      className="form-control"
                      type="date"
                      disabled={opType == 'relative'}
                    />
                  </label>
                </div>

                <div>
                  <label
                    for="desginatedAttorney"
                    class="form-label"
                  >
                    Designated Attorney
                    <required>*</required>
                    <select
                      {...register('desginatedAttorney', { required: true })}
                      class="form-control"
                      id="desginatedAttorney"
                    >
                      <option value="">Select Attorney</option>
                      {attorneys.map((attorney) => {
                        debugger;
                        return <option value={attorney._id}>{attorney['name' + language]}</option>;
                      })}
                      {/* {
                                            attorneys.map((user, i) => {
                                                return <option key={i} value={user._id}>{user.fullName}</option>
                                            })

                                        } */}
                    </select>
                  </label>
                  {errors.desginatedAttorney && <p className="form-error small">This field is required</p>}
                </div>

                <div>
                  <label
                    for="designatedCounsel"
                    class="form-label"
                  >
                    Designated Counsel
                    <select
                      {...register('designatedCounsel')}
                      class="form-control"
                      id="designatedCounsel"
                    >
                      <option value="">Select Counsel</option>
                      {counsel.map((user, i) => {
                        return (
                          <option
                            key={i}
                            value={user._id}
                          >
                            {user['name' + language]}
                          </option>
                        );
                      })}
                    </select>
                  </label>
                </div>

                <div>
                  <label
                    for="pleadingLawer"
                    class="form-label"
                  >
                    Pleading lawyer
                    <select
                      {...register('pleadingLawer')}
                      id="pleadingLawer"
                      class="form-control"
                    >
                      {}
                    </select>
                  </label>
                </div>

                <div>
                  <label
                    for="court"
                    class="form-label"
                  >
                    Choose Court
                    <required>*</required>
                    <select
                      {...register('court', { required: true })}
                      class="form-control"
                    >
                      <option
                        value=""
                        data-select2-id="8"
                      >
                        Choose the court...
                      </option>
                      {court.map((court, i) => {
                        return (
                          <option
                            key={i}
                            value={court._id}
                          >
                            {court['name' + language]}
                          </option>
                        );
                      })}

                      {/* <option value="3125" data-select2-id="1374">supreme court</option>
                                         <option value="3126" data-select2-id="1375">The Court of First Instance in Dhank</option>
                                          */}
                    </select>
                  </label>
                  {errors.court && <p className="form-error small">This field is required</p>}
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <a
                  href="javascript:"
                  data-bs-toggle="dropdown"
                  className="dropdown-toggle"
                  id="addAdditionalProp"
                >
                  <i class="fal fa-plus"></i>
                  <span>Add Additional Field</span>
                </a>

                <ul
                  className="dropdown-menu additiona-fields-container"
                  aria-labelledby="addAdditionalProp"
                >
                  {/* <div>Quick Add</div> */}
                  <ol className="no-ls-type internal-list">
                    {dynamicProperties.map((item, index) => {
                      return (
                        <li key={index}>
                          <a
                            onClick={(e) => addField(item, index)}
                            className="nuetral-a"
                            href="#"
                          >
                            {item.name}
                          </a>
                        </li>
                      );
                    })}
                  </ol>
                </ul>

                <div>
                  {addedFields.map((field, i) => {
                    return (
                      <div key={i}>
                        <label
                          for={field.value}
                          class="form-label"
                        >
                          {field.name}
                          {/* <required>*</required> */}
                          <input
                            type={field.type || 'string'}
                            {...register(field.value, { required: true })}
                            placeholder={field.name}
                            class="form-control"
                          />
                        </label>
                        {/* {errors[field] && <p className='form-error small'>This field is required</p>} */}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-end">
                <button className="btn btn-primary">Add Case</button>
              </div>
            </div>
          </div>
        </div>
      </form>
      <DisputeForm
        partydata={partydata}
        onSaveClientData={handleClientData}
        onSaveOpponentsData={handleOpponentData}
        onSaveDisputyData={handleDisputeData}
        onSavePartiesData={handlePartiesData}
      />
    </div>
  );
}
