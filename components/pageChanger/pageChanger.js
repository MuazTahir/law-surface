import Link from "next/link";
import React from "react";
import "./style.css"

const  PageChanger = () => {
  return (
    <div className="d-flex flex-column align-items-center my-3">
      <nav aria-label="Page navigation">
        <ul className="pagination text-success">
          <li className="page-item">
            <Link className="page-link text-success me-1" href="#beginning">
              Beginning
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-success me-1" href="#prev" aria-label="Previous">
              &lt;
            </Link>
          </li>
          {[1, 2, 3, 4, 5].map((page) => (
            <li
              key={page}
              className={`page-item  ${page === 1 ? "active green-highlight" : ""}`}
            >
              <Link className="page-link text-success rounded me-1" href={`#emaillogs/${page}`}>
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link className="page-link text-success me-1" href="#next" aria-label="Next">
              &gt;
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link text-success me-1" href="#last">
              Last
            </Link>
          </li>
        </ul>
      </nav>
      <p className="mt-2">Total Sent Emails: 797</p>
    </div>
  );
};

export default PageChanger;
