import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@material-ui/styles";
import MenuVideo from "./CourseContent";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";

export default function MobileDrawer(props) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate();
  const {openDraw, setOpenDraw, totalChecked, setTotalChecked, process} = props;

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: window.innerWidth > 576 ? "50vw" : "100vw" }} // fix screen
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="box shadow-md p-2">
        <div
          className="flex items-center cursor-pointer hover:text-blue-600"
          onClick={() => navigate("/")}
        >
          <IoIosArrowBack className="text-xs" />
          <p className="py-2">Về trang chủ</p>
        </div>
        <p className="text-3xl py-2">Content Marketing | Digital Marketing</p>

        <ProgressBar
          height="5px"
          bgColor="blue"
          customLabel=" "
          completed={process}
          className="pt-3"
        />
        <p className="pt-2 mb-3">Đã hoàn thành {process}%</p>
      </div>

      <MenuVideo totalChecked={totalChecked} setTotalChecked={setTotalChecked} />

    </Box>
  );
  const useStyles = makeStyles({
    drawerPaper: {
      // marginTop: "65px",
      paddingTop: "65px"
    },
  });
  const classes = useStyles();
  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
           
          <Drawer
            anchor={anchor}
            open={openDraw}
            // onClose={toggleDrawer(anchor, false)}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
