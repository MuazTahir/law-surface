"use client";
import { useState, useEffect } from "react";
import ClientModal from "../Modals/Clientsmodal/ClientModal";
import OpponentModal from "../Modals/OpponentModel/OpponentModal";
import DisputingPartyModal from "../Modals/DisputingPartyModal/DisputingPartyModal";
import { useSelector } from "react-redux";
import axios from "axios";
import systemAPI from '@/app/apiBridge/system';
import { toast } from "react-toastify";

export default function DisputeForm({partydata, onSaveClientData, onSaveOpponentsData, onSaveDisputyData, onSavePartiesData }) {
  

  const [adjectives, setAdjectives] = useState([]);

  
  const [partyData, setPartyData] = useState({
    clientName: "",
    legalStatus: "",
    nationality: "",
  });
  let language = useSelector((store) => {
    return store.authSlice.language
  });
  const [opponentData, setOpponentData] = useState({
    opponentName: "",
    opponentLegalStatus: "",
    opponentNationality: "",
    opponentContact: "",
    opponentEmail: "",
    opponentAddress: "",
  });

  let company = useSelector((store) => {
    return store.authSlice.currentUser.company?._id;
  });

  const [disputingPartyData, setDisputingPartyData] = useState({
    disputingPartyName: "",
    disputingPartyLegalStatus: "",
    disputingPartyContact: "",
    disputingPartyEmail: "",
    opponentAddress: "",
  });

  const [allParties, setAllParties] = useState([]);

  const openModal = (element)=>{

    clientModal.show();

  }

  const clientOptions = [ 
    { name: "Client 1", legalStatus: "Individual", nationality: "USA" },
    { name: "Client 2", legalStatus: "Company", nationality: "Canada" },
  ];
useEffect(()=>{
 
  if(partydata){
            // setAllParties(partyData)
            console.log(",,,,,,,,,,,,,ddddddddddddppppppp");
            console.log(partydata);
            setAllParties(partydata);

  }
},[partydata])
  const [legalStatusOptions, setLegalStatusOptions] =  useState([]);
  // const nationalityOptions = ["USA", "Canada", "UK", "India"];
  const [nationalityOptions, setNationalityOptions] = useState([]);

  // ********** modals
  const [clientModal, setClientModal] = useState();
  const [disputingPartyModal, setDisputingPartyModal] = useState();
  const [opponentModal, setOpponentModal] = useState();
  
  
  useEffect(() => {

    import("bootstrap").then((mod) => {
      const modal1 = new mod.Modal(document.getElementById("addClientModal"));
      setClientModal(modal1);
      const disputingPartyModal = new mod.Modal(document.getElementById("addDisputingPartyModal"));
      setDisputingPartyModal(disputingPartyModal);
      const opponentModal = new mod.Modal(document.getElementById("addOpponentModalLabel"));
      setOpponentModal(opponentModal);
    });

    // TBC remove company after token
    // systemAPI.getValuesByTitle({groupTitle: 'Legal Status', company}).then((resp)=>{
    //   // debugger;
    //   setLegalStatusOptions(resp.data.values);
    // });

    async function fetchCountries() {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        const countryNames = countries.map((country) => country.name.common).sort();
        setNationalityOptions(countryNames);
      } catch (error) {
        console.error("Failed to fetch countries:", error);
      }
    }

    fetchCountries();

    let targetData = ["Adjectives", 'Legal Status'];

    // TBC remove company after token

    systemAPI.getValuesByTitleBulk({groupTitles:targetData, company}).then((resp)=>{
      resp.data.values.forEach((item)=>{
       switch(true){
          case item.groupTitle == 'Adjectives':
            setAdjectives(item.values)
            break;

          case item.groupTitle == 'Legal Status':
            setLegalStatusOptions(item.values)
          break;
       }
      });
      // setAdjectives(resp.data.values);
    }).catch((err)=>{
      debugger;
      toast.error("Oops, the adjectives data could not be loaded");
    });
    // TBC company to be removed after tokeb activated
    // systemAPI.getValuesByTitle({groupTitle:"Adjectives", company}).then((resp)=>{
    //   setAdjectives(resp.data.values);
    // }).catch((err)=>{
    //   debugger;
    //   toast.error("Oops, the adjectives data could not be loaded");
    // });

  }, [])
  const addParty = (partyType) => {
    let newParty = {};
    if (partyType === "Client") {
      newParty = { type: "Client", ...partyData };
    } else if (partyType === "Opponent") {
      newParty = { type: "Opponent", ...opponentData };
    } else if (partyType === "Disputing Party") {
      newParty = { type: "Disputing Party", ...disputingPartyData };
    }


    setAllParties([...allParties, newParty]);

    setPartyData({ clientName: "", legalStatus: "", nationality: "" });
    setOpponentData({
      opponentName: "",
      opponentLegalStatus: "",
      opponentNationality: "",
      opponentContact: "",
      opponentEmail: "",
      opponentAddress: "",
    });
    setDisputingPartyData({
      disputingPartyName: "",
      disputingPartyLegalStatus: "",
      disputingPartyContact: "",
      disputingPartyEmail: "",
      opponentAddress: "",
    });
  };

  const deleteParty = (index) => {
    const updatedParties = allParties.filter((_, i) => i !== index);
    setAllParties(updatedParties);
  };

  // useEffect(() => {
  //   console.log("All parties data: ", allParties);
  // }, [allParties]);
  useEffect(() => {
    if (onSavePartiesData) {
      onSavePartiesData(allParties);
    }
  }, [allParties, onSavePartiesData]);

  return (
    <div className="container mt-5">
      <h2>Dispute Form</h2>

      <button
        className="btn btn-success"
        onClick={()=>openModal('addClientModal')}
      >
        Add Client
      </button>
      <button
        className="btn btn-primary ms-2"
        data-bs-toggle="modal"
        data-bs-target="#addOpponentModal"
      >
        Add Opponent
      </button>
      <button
        className="btn btn-warning ms-2"
        data-bs-toggle="modal"
        data-bs-target="#addDisputingPartyModal"
      >
        Add Disputing Party
      </button>

      <table className="table table-bordered mt-4">
        <thead>
          <tr>
            <th>Type</th>
            <th>Name</th>
            {/* TBC, after language support, hard coded arabic should be */}
            {/* <th>Arabic Name</th> */}
            <th>Legal Status</th>
            <th>Nationality</th>
            <th>Contact</th>
            <th>Email</th>
            <th>Address</th>
            <th>Adjective</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {allParties.map((party, index) => (
            <tr key={index}>
              <td>{party.type}</td>
              <td>
                {party.type === "Client" && party.clientName['clientName'+language]}
                {party.type === "Opponent" && party.opponentName}
                {party.type === "Disputing Party" && party.disputingPartyName}
              </td>
              <td>
                {party.type === "Client" && party.legalStatus['name'+language]}
                {party.type === "Opponent" && party.opponentLegalStatus['name'+language]}
                {party.type === "Disputing Party" && party.disputingPartyLegalStatus['name'+language]}
              </td>
              <td>
                {party.type === "Client" && party.nationality}
                {party.type === "Opponent" && party.opponentNationality}
              </td>
              <td>
                {party.type === "Opponent" && party.opponentContact}
                {party.type === "Disputing Party" && party.disputingPartyContact}
              </td>
              <td>
                {party.type === "Opponent" && party.opponentEmail}
                {party.type === "Disputing Party" && party.disputingPartyEmail}
              </td>
              <td>
                {party.type === "Opponent" && party.opponentAddress}
                {party.type === "Disputing Party" && party.opponentAddress}
              </td>
              <td>
                <select value={party.adjective}  onChange={(evt)=>{
                    party.adjective = evt.target.value;
                    setAllParties([...allParties]);
                }} className="form-control" id="partyAdjectiveSelector">
                <option value="" disabled>
                  Select...
                </option>
                {
                  adjectives.map((adjective, i)=>{
                    return <option key={i} value={adjective._id}>{adjective['name'+language]}</option>
                  })
                }
                </select>
                </td>
              {/* <td>
                <select className="form-select">
                  <option>adjective</option>
                  <option>kairm</option>
                  <option>usman</option>
                  <option>altaf</option>
                </select>
              </td> */}
              {/* <td>
                <select className="form-select">
                  <option value="">Select Legal Form</option>
                  {legalForms.map((legalForm, i) => (
                    <option key={i} value={legalForm._id}>
                      {legalForm["name" + language]}
                    </option>
                  ))}
                </select>
              </td> */}

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteParty(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ClientModal
        legalStatusOptions={legalStatusOptions}
        language={language}
        clientOptions={clientOptions}
        addParty={() => {
          addParty("Client");
          clientModal.hide(); 
        }}
        partyData={partyData}
        onSaveClientData={onSaveClientData}
        setPartyData={setPartyData}
      />
      <OpponentModal
      language={language}
        legalStatusOptions={legalStatusOptions}
        nationalityOptions={nationalityOptions}
        opponentData={opponentData}
        onSaveOpponentsData={onSaveOpponentsData}
        setOpponentData={setOpponentData}
        addOpponent={() => {
          addParty("Opponent");
          opponentModal.hide();
        }}
      />
      <DisputingPartyModal
      language={language}
        legalStatusOptions={legalStatusOptions}
        nationalityOptions={nationalityOptions}
        disputingPartyData={disputingPartyData}
        onSaveDisputyData={onSaveDisputyData}
        setDisputingPartyData={setDisputingPartyData}
        addDisputingParty={() => {
          addParty("Disputing Party");
          disputingPartyModal.hide();
        }}
      />
    </div>
  );
}
