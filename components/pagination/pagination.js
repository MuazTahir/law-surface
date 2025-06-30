export default function Pagination({ setPageNum, pageNum, total, resPerPage }) {
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${pageNum === 1 ? 'disabled' : ''}`}>
          <button
            className="page-link"
            onClick={() => setPageNum((prev) => Math.max(prev - 1, 1))}
          >
            Previous
          </button>
        </li>
        {Array.from({ length: Math.ceil(total / resPerPage) }, (_, i) => (
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
    </nav>
  );
}
