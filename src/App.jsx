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
import QuanliHocvien from "./admin/component/hoc vien/QuanliHocvien";
import QuanliLienhe from "./admin/quan ly lien he/QuanliLienhe";
import Account from "./pages/account/Account";
import Info from "./pages/account/Info";
import Baomat from "./pages/account/Baomat";
import KhoahocActive from "./pages/account/Khoahoc";
import Doimatkhau from "./admin/component/doi-mat-khau/Doimatkhau";
import QuenMatkhau from "./pages/quen-mat-khau/QuenMatkhau";
import Review from "./pages/thanh-toan/Review";
import DonHang from "./pages/account/DonHang";
import ThanhToan from "./pages/thanh-toan/ThanhToan";



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
          {
            path: "/review",
            element: <Review />,
          },
          {
            path: "/thanh-toan",
            element: <ThanhToan />,
          },
          {
            path: "account",
            element: <Account />,
            children: [
              {
                path: "thong-tin",
                element: <Info />,
              },
              {
                path: "don-hang",
                element: <DonHang />,
              },
              {
                path: "bao-mat",
                element: <Baomat />,
              },
              {
                path: "khoa-hoc",
                element: <KhoahocActive />,
              },
              
            ]
          }
        ],
      },
      {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
          {
            path: "khoa-hoc",
            element: <QuanlyKhoahoc />,
          },
          {
            path: "doi-mat-khau",
            element: <Doimatkhau />,
          },
          {
            path: "hoc-vien",
            element: <QuanliHocvien />,
          },
          {
            path: "lien-he",
            element: <QuanliLienhe />,
          },
          {
            path: "khoa-hoc/:id",
            element: <DetailKhoahoc />,
          },
          {
            path: "bai-viet",
            element: <QuanlyBaiviet />,
          },
          {
            path: "detail-khoa-hoc",
            element: <DetailKhoahoc />,
          },
        ],
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
        path: "/quen-mat-khau",
        element: <QuenMatkhau />,
      },
     
      {
        path: "/video/:id",
        element: <WatchVideo />,
      },
    ]
    // {
    //   basename: "/deploy_FE_TM_Media",
    // }
  );

  return <RouterProvider router={router} />;
};

export default App;
