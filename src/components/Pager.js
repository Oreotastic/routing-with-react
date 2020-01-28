import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Pager = ({ count, state, grabPage }) => {
  // page count
  // loop thru page count
  // check if i modulas count = 0 50 can fit
  //
  const pageCount = () => {
    const pageNum = count / 50;

    let arr = [];
    for (let i = 0; i < pageNum; i++) {
      arr.push(i + 1);
    }
    
    return arr
  };
  pageCount();

  const pageLink = (ev) => {
    console.dir(ev.target.innerText)
  }

  return (
      <nav aria-label="Page navigation example">
        <ul className="pagination pageCount">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>

            {
              pageCount().map(pageNum => {
                return(
                  <li className="page-item" onClick={pageLink}>
                    <a className="page-link" href="#">
                      {pageNum}
                    </a>
                  </li>
                )
              })
            }
            <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
  );
};

export default Pager;
