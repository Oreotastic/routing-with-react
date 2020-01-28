import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
const Pager = ({ count }) => {
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
    console.log(arr, count);
  };
  pageCount();

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pager;
