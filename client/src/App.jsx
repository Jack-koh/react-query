import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import Navigator from "./layout/navigator/Navigator";
import "./App.css";

import Pagination from "./components/pagination/Pagination";

function App() {
  // return <Todos />;
  return useRoutes([
    {
      path: "/",
      element: <Navigator />,
      children: [
        {
          path: "pagination",
          element: <Pagination />,
        },
        {
          path: "/",
          element: <Navigate to="/pagination" />,
        },
      ],
    },
  ]);
}

export default App;
