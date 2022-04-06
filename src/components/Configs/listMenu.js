import React from "react";

const listMenu = [
  {
    id: 1,
    icon: <i class="fa-solid fa-chart-pie"></i>,
    link: "/dashboard",
    name: "dashboard",
  },
  {
    id: 2,
    icon: <i class="fa-solid fa-user-group"></i>,
    link: "/user",
    name: "customers",
  },
  {
    id: 3,
    icon: <i class="fa-solid fa-table-list"></i>,
    link: "/table-list",
    name: "table",
  },
  {
    id: 4,
    icon: <i class="fa-solid fa-coins"></i>,
    link: "/order",
    name: "orders",
  },
  {
    id: 5,
    icon: <i class="fa-solid fa-cube"></i>,
    link: "/product",
    name: "products",
  },
  {
    id: 6,
    icon: <i class="fa-solid fa-gear"></i>,
    link: "/setting",
    name: "settings",
  },
];

export default listMenu;
