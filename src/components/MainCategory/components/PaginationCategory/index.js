import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PaginationCategory = () => {
  const [activeList, setActiveList] = useState(1);

  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     getData();
  //   }, []);

  //   async function getData(id = 1) {
  //     let result = await fetch(
  //       `http://localhost:8000/api/get-Pagination/?page=${id}`
  //     );
  //     result = await result.json();
  //     setData(result);
  //     console.log(result);
  //   }

  // ]
  return (
    <div class="paginationCategory">
      <ul>
        {/* {data.map((name) => (
          <li
            onClick={() => setActiveList(name.id)}
            className={name.id === activeList ? "ActiveListPagination" : ""}
            key={name.id}
          >
            <Link to="#">{name.data}</Link>
          </li>
        ))} */}
      </ul>
    </div>
  );
};

export default PaginationCategory;
