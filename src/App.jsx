import React, { useEffect, useState, createContext } from "react";
import HomePage from "./pages/home/HomePage";
import NavBar from "./components/nav-bar/NavBar";

import SingleCoursePage from "./pages/single-course-page/SingleCoursePage";
import PageNotFound from "./components/page-not-found/PageNotFound";
import Footer from "./components/footer/Footer";
import SignIn from "./pages/login/Login";
import SignUp from "./pages/signup/Signup";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayoutUser from "./pages/layout user/LayoutUser";
import ListBlog from "./pages/blog/ListBlog";
import Lienhe from "./pages/lienhe/Lienhe";
import SearchBlog from "./pages/blog/SearchBlog";
import Khoahoc from "./pages/khoahoc/Khoahoc";
import DetailBlog from "./pages/blog/DetailBlog";
import WatchVideo from "./pages/watch video/WatchVideo";
import LayoutAdmin from "./pages/layout admin/LayoutAdmin";

import QuanlyBaiviet from "./admin/quan ly bai viet/QuanlyBaiviet";
import QuanlyKhoahoc from "./admin/khoa hoc/QuanlyKhoahoc";
import DetailKhoahoc from "./admin/detail khoa hoc/DetailKhoahoc";

const App = () => {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayoutUser />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "khoa-hoc",
            element: <Khoahoc />,
          },
          {
            path: "khoa-hoc/:courseId",
            element: <SingleCoursePage />,
          },
          {
            path: "blog",
            element: <ListBlog />,
          },
          {
            path: "blog/:slug",
            element: <DetailBlog />,
          },
          {
            path: "blog/tim-kiem",
            element: <SearchBlog />,
          },
          {
            path: "lien-he",
            element: <Lienhe />,
          },
        ],
      },
      {
        path: "/admin",
        element: <LayoutAdmin />,
        children:[
          {
            path: "khoa-hoc",
            element: <QuanlyKhoahoc />,
          },
          {
            path: "bai-viet",
            element: <QuanlyBaiviet />
          },
          {
            path: "detail-khoa-hoc",
            element: <DetailKhoahoc />
          }
        ]
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/dang-ky",
        element: <SignUp />,
      },
      {
        path: "/video",
        element: <WatchVideo />
      }
    ]
    // {
    //   basename: "/deploy_FE_TM_Media",
    // }
  );

  return <RouterProvider router={router} />;
};

export default App;
