import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutUser;
