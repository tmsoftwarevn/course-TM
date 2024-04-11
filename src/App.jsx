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


const App = () => {
 
 
  // return (
  //   <div className="App">
  //     <Data.Provider value={coursesData}>
  //       <FetchState.Provider value={fetched}>
  //         <SearchTermContext.Provider value={searchTerm}>
  //           <SetSearchTermContext.Provider value={setSearchTerm}>
  //             <NavBar />
  //             <Routes>
  //               <Route path="/" element={<HomePage />}></Route>
  //               <Route
  //                 path="/Udemy-Clone-ReactJS/courses/:courseId"
  //                 element={<SingleCoursePage />}
  //               ></Route>

  //                 <Route path="/login" element={<SignIn />}></Route>
  // 			  <Route path="/dang-ky" element={<SignUp />}></Route>

  //               <Route path="*" element={<PageNotFound />}></Route>
  //             </Routes>

  //             <Footer />
  //           </SetSearchTermContext.Provider>
  //         </SearchTermContext.Provider>
  //       </FetchState.Provider>
  //     </Data.Provider>
  //   </div>
  // );

  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <LayoutUser />,
        children: [
          { index: true, element: <HomePage /> },
          {
            path: "khoa-hoc/:courseId",
            element: <SingleCoursePage />,
          },
          {
            path: "blog",
            element: <ListBlog />
          },
          {
            path: "blog/tim-kiem",
            element: <SearchBlog />
          },
          {
            path: "lien-he",
            element: <Lienhe />
          }
        ],
      },
      {
        path: "/login",
        element: <SignIn />
      },
      {
        path: "/dang-ky",
        element: <SignUp />
      },
    ]
    // {
    //   basename: "/deploy_FE_TM_Media",
    // }
  );

  return <RouterProvider router={router} />;
};

export default App;
