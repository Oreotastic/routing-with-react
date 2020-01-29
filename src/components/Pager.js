import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import qs from 'qs';
const Pager = ({ count, state, params }) => {
  const [totalCount, setTotalCount] = useState();
  const pageCount = () => {
    const pageNum = count / 50;

    let arr = [];
    for (let i = 0; i < pageNum; i++) {
      arr.push(i);
    }

    return arr;
  };

  return (
    <nav aria-label="Page navigation example">
      {totalCount}
      <ul className="pagination pageCount">
        <li className="page-item">
          <a
            className="page-link"
            href={`#${qs.stringify({
              view: 'users',
              idx: Number(params.idx) - 1,
            })}`}
          >
            Previous
          </a>
        </li>

        {pageCount().map(pageNum => {
          return (
            <li key={pageNum} className="page-item">
              <a
                className="page-link"
                href={`#${qs.stringify({ view: 'users', idx: pageNum })}`}
                onClick={() => setTotalCount((pageNum + 1) * 50)}
              >
                {pageNum + 1}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a
            className="page-link"
            href={`#${qs.stringify({
              view: 'users',
              idx: Number(params.idx) + 1,
            })}`}
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pager;
