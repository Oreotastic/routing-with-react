import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import qs from 'qs';
const Pager = ({ count, state, params }) => {
  // page count
  // loop thru page count
  // check if i modulas count = 0 50 can fit
  //
  const pageCount = () => {
    const pageNum = count / 50;

    let arr = [];
    for (let i = 0; i < pageNum; i++) {
      arr.push(i);
    }

    return arr;
  };
  //pageCount();

  // const pageLink = ev => {
  //   console.dir(ev.target.innerText);
  // };
  console.log(params);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination pageCount">
        <li className="page-item">
          <a
            className="page-link"
            href={`#${qs.stringify({ view: 'users', idx: params.idx - 1 })}`}
          >
            Previous
          </a>
        </li>

        {pageCount().map(pageNum => {
          return (
            <li
              key={pageNum}
              className="page-item"
              // onClick={pageLink}
            >
              <a
                className="page-link"
                href={`#${qs.stringify({ view: 'users', idx: pageNum })}`}
              >
                {pageNum + 1}
              </a>
            </li>
          );
        })}
        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pager;
