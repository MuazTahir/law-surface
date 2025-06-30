// import React from "react";

// export default function FileTable({ fileData }) {
//   const getBillingStatusClass = (status) => {
//     if (status === "Finished") {
//       return "bg-danger p-1 rounded-2 text-white";
//     } else if (status === "In Process") {
//       return "bg-success p-1 rounded-2 text-white";
//     } else if (status === "Stop Temporary") {
//       return "bg-warning p-1 rounded-2 text-dark";
//     }
//   };
  

//   return (
//     <>
//       <table className="table container-fluid text-center">
//         <thead>
//           <tr>
//             <th>File</th>
//             <th>Case No.</th>
//             <th>Client</th>
//             <th>Accountant Ref. Number</th>
//             <th>Total Invoices</th>
//             <th>Fees Count</th>
//             <th>Payments Count</th>
//             <th>Balance</th>
//           </tr>
//         </thead>
//         <tbody>
//           {fileData.map((file) => (
//             <tr key={file.fileNumber}>
//               <td>
//                 {file.fileNumber}
//                 <br />
//                 <span className={getBillingStatusClass(file.billingStatus)}>
//                   {file.billingStatus}
//                 </span>
//               </td>
//               <td className="pt-4">{file.caseNumber}</td>
//               <td className="col-3 pt-4">{file.client}</td>
//               <td className="pt-4">{file.accountantRefNumber}</td>
//               <td className="pt-4">{file.totalInvoices}</td>
//               <td className="pt-4">{file.feesCount}</td>
//               <td className="pt-4">{file.paymentsCount}</td>
//               <td className="pt-4">{file.balance}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <nav aria-label="Page navigation example">
//         <ul className="pagination">
//           <li className="page-item">
//             <a className="page-link" href="#">
//               Previous
//             </a>
//           </li>
//           <li className="page-item">
//             <a className="page-link" href="#">
//               1
//             </a>
//           </li>
//           <li className="page-item">
//             <a className="page-link" href="#">
//               2
//             </a>
//           </li>
//           <li className="page-item">
//             <a className="page-link" href="#">
//               3
//             </a>
//           </li>
//           <li className="page-item">
//             <a className="page-link" href="#">
//               Next
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// }





import React, { useState } from "react";

export default function FileTable({ fileData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate the current files to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentFiles = fileData.slice(indexOfFirstItem, indexOfLastItem);

  const getBillingStatusClass = (status) => {
    if (status === "Finished") {
      return "bg-danger p-1 rounded-2 text-white";
    } else if (status === "In Process") {
      return "bg-success p-1 rounded-2 text-white";
    } else if (status === "Stop Temporary") {
      return "bg-warning p-1 rounded-2 text-dark";
    }
  };

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate total pages
  const totalPages = Math.ceil(fileData.length / itemsPerPage);

  return (
    <div>
      <table className="table container-fluid text-center">
        <thead>
          <tr>
            <th>File</th>
            <th>Case No.</th>
            <th>Client</th>
            <th>Accountant Ref. Number</th>
            <th>Total Invoices</th>
            <th>Fees Count</th>
            <th>Payments Count</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {currentFiles.map((file) => (
            <tr key={file.fileNumber}>
              <td>
                {file.fileNumber}
                <br />
                <span className={getBillingStatusClass(file.billingStatus)}>
                  {file.billingStatus}
                </span>
              </td>
              <td className="pt-2">{file.caseNumber}{<br/>}{file.fileCategory}</td>
              <td className="col-3 pt-4">{file.client}</td>
              <td className="pt-4">{file.accountantRefNumber}</td>
              <td className="pt-4">{file.totalInvoices}</td>
              <td className="pt-4">{file.feesCount}</td>
              <td className="pt-4">{file.paymentsCount}</td>
              <td className="pt-4">{file.balance}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
              Previous
            </button>
          </li>
          {[...Array(totalPages).keys()].map((number) => (
            <li key={number + 1} className={`page-item ${currentPage === number + 1 ? "active" : ""}`}>
              <button className="page-link" onClick={() => handlePageChange(number + 1)}>
                {number + 1}
              </button>
            </li>
          ))}
          <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
            <button className="page-link" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
