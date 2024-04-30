import React from "react";

function Pagination({ postPerPage, totalPosts, handlePagination }) {
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="page-numbers">
        <li onClick={() => handlePagination("prev")}> {"<"} </li>
        {pageNumbers.map((num, i) => {
          return (
            <li onClick={() => handlePagination(i + 1)} className="page-number">
              {num}
            </li>
          );
        })}
        <li onClick={() => handlePagination("next")}> {">"} </li>
      </ul>
    </div>
  );
}

export default Pagination;
