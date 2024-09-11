import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home";
import MainLayout from "@/layout/MainLayout";

import AlphabetTiles from "@/components/alphabet-tiles";
import PartitionBuilder from "@/components/layout-builder";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "/",
        element: <Home />,
      },
      {
        path: "recursive-partitioning",
        element: <PartitionBuilder />,
      },
      {
        path: "alphabetical-interaction",
        element: <AlphabetTiles />,
      },
    ],
  },
]);

export default routes;
