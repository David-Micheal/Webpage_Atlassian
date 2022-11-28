import React from "react";
import { useRoutes } from "react-router-dom";
import ForTeamPage from "../Pages/ForTeamPage";
import HomePage from "../Pages/HomePage";
import ProductPage from "../Pages/ProductPage";
import Support from "../Pages/Support";

const AllPages: React.FC = () => {
  let elements = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Products",
      element: <ProductPage />,
    },
    {
      path: "/ForTeam",
      element: <ForTeamPage />,
    },
    {
      path: "/Support",
      element: <Support />,
    },
  ]);
  return elements;
};

export default AllPages;
