import React, { useEffect, useState } from "react";
import medicinesApi from "../../api/medicinesApi";
import "../../scss/ModalSearch.scss";

const ModalSearch = (props) => {
  const { name } = props;

  return (
    <div class="modalSearch">
      <div class="modalSearch__Content">
        {/* {data.map((name) => ( */}
        <div class="modalSearch__Item">
          <p>
            <svg
              class="DropdownSearch_search-icon__3t0L-"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.5024 13.7383L12.2108 11.4979L12.1571 11.4162C12.0572 11.3168 11.9207 11.2608 11.7781 11.2608C11.6356 11.2608 11.4991 11.3168 11.3992 11.4162C9.45169 13.2029 6.4508 13.3 4.3867 11.6431C2.32261 9.98627 1.83581 7.08956 3.24915 4.8741C4.6625 2.65863 7.53741 1.81188 9.96726 2.89541C12.3971 3.97894 13.6279 6.65651 12.8434 9.15238C12.7869 9.33269 12.8331 9.52877 12.9645 9.66676C13.096 9.80475 13.2928 9.86369 13.4807 9.82138C13.6687 9.77906 13.8193 9.64192 13.8758 9.46161C14.8136 6.49975 13.3972 3.31235 10.5428 1.96136C7.68836 0.610359 4.25259 1.5012 2.45807 4.0576C0.663545 6.61399 1.04882 10.0687 3.36465 12.187C5.68049 14.3052 9.23189 14.4512 11.7214 12.5306L13.7505 14.5143C13.96 14.7183 14.2988 14.7183 14.5084 14.5143C14.7177 14.3075 14.7177 13.9744 14.5084 13.7675L14.5024 13.7383Z"
                fill="#8E9AAB"
              ></path>
            </svg>
            {name}
          </p>
          <svg
            class="DropdownSearch_goto-icon__3ty0_ cursor-point"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19.75 11.7246L4.75 11.7246"
              stroke="#8E9AAB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M13.6992 5.701L19.7492 11.725L13.6992 17.75"
              stroke="#8E9AAB"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default ModalSearch;
