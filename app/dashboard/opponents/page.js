"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AddOpponentsModel } from "@/components/addOpponent/addOpponent";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Home() {
  const sar = useRef();

  const [addOpponent, setAddOpponent] = useState(false);
  const [currentFiles, setCurrentFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const companyID = useSelector((store) => {
    return store.authSlice.currentUser.company._id;
  });

  useEffect(() => {
    axios
      .post(process.env.NEXT_PUBLIC_API_SERVER + "/api/settings/user", {
        action: "getOpponentsByCompany",
        company: companyID,
      })
      .then((resp) => {
        console.log(resp.data);
        setCurrentFiles(resp.data.opponents);
        setFilteredFiles(resp.data.opponents); // Initialize filtered files with all data
      });
  }, []);

  const search = () => {
    const searchTerm = sar.current.value.trim().toLowerCase();
    setIsLoading(true);

    const filtered = currentFiles.filter((file) =>
      file.nameAr.toLowerCase().includes(searchTerm)
    );

    setTimeout(() => {
      setFilteredFiles(filtered);
      setIsLoading(false);
      setCurrentPage(1); // Reset to the first page for the filtered data
    }, 500); // Simulating slight delay for UX
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFilesPaginated = filteredFiles.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);

  return (
    <div id="opponents-page">
      <AddOpponentsModel
        addOpponent={addOpponent}
        setAddOpponent={setAddOpponent}
      ></AddOpponentsModel>

      <div id="sarch" className="d-md-flex bg-white pt-2 pb-2 ps-3 rounded-3">
        <h5 className="mt-1">Advanced</h5>
        <div className="ms-3">
          <div className="input-group">
            <input
              ref={sar}
              className="form-control"
              id="sar"
              type="search"
              placeholder="Search by client name"
              aria-label="Search"
            />
            <button
              onClick={search}
              className="ms-3 bg-primary text-white rounded-1"
            >
              Search
            </button>
            <Link href="" onClick={() => setAddOpponent(true)}>
              <i className="fa-solid fa-user"></i>
              <span className="small mt-1 pt-1">+New Opponent</span>
            </Link>
          </div>
        </div>
      </div>

      {isLoading ? (
        <div className="loading-page">
          <div className="spinner"></div>
          <h6 style={{ color: "#bfd0f4" }}>Please hold, data is loading</h6>
        </div>
      ) : (
        <div className="table-responsive mt-3">
          <table className="table table-bordered text-center">
            <thead className="table-primary">
              <tr>
                <th>Arabic Name</th>
                <th>English Name</th>
                <th>Legal Form</th>
                <th>Nationality</th>
                <th>Contact Number</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              {currentFilesPaginated.length > 0 ? (
                currentFilesPaginated.map((file, i) => (
                  <tr key={i}>
                    <td>{file.nameAr}</td>
                    <td>{file.nameEn}</td>
                    <td>{file.legalStatus}</td>
                    <td>{file.nationality?file.nationality:"-"}</td>
                    <td>{file.contactNumber?file.contactNumber:"-"}</td>
                    <td>{file.address?file.address:"-"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No records found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
          </li>
          {[...Array(totalPages).keys()].map((number) => (
            <li
              key={number + 1}
              className={`page-item ${currentPage === number + 1 ? "active" : ""}`}
            >
              <button
                className="page-link"
                onClick={() => handlePageChange(number + 1)}
              >
                {number + 1}
              </button>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <button
              className="page-link"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
