import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import App from "../App";
import Installation from "../pages/Installation";
import Apps from "../pages/Apps/Apps";
import AppsDetailse from "../pages/Apps/AppsDetailse";
import PageNotFound from "../components/PageNotFound";
import ScroollBar from "../components/ScroollBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        (<ScroollBar />
        ), (<MainLayout />)
      </>
    ),
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: async () => {
          const res = await fetch("/apps.json");
          const data = await res.json();
          return data;
        },
      },
      {
        path: "/appsDetailse/:id",
        element: <AppsDetailse />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
    ],
  },
]);

export default router;
