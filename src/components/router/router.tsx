import { lazy } from "react";
import { createBrowserRouter } from "react-router";
const Dashboard =  lazy(()=>import("../../pages/dashboard/Dashboard")) ;
const Detail =  lazy(()=>import("../../pages/detail/Detail")) ;
import Layout from "../../pages/layout/Layout";
import RouterError from "./RouterError";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement:<RouterError />,
    children: [
      {
        path:'/',
        Component: Dashboard,
      },
      {
        path: "detail",
        Component: Detail,
      },
    ],
  },
]);