import ReactPlayer from "react-player";
import CourseContent from "../../components/course-content/CourseContent";
import "./watchvideo.scss";
import MenuVideo from "./CourseContent";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { IoReorderThreeSharp } from "react-icons/io5";
import MobileDrawer from "./DrawMobile";
import { useState } from "react";
import { MdCancelPresentation } from "react-icons/md";

const WatchVideo = () => {
  const navigate = useNavigate();
  const [openDraw, setOpenDraw] = useState(false);

  return (
    <>
      <div className="watch-video overflow-hidden">
        <div className="row">
          <div className="left-video col-sm-3 hidden lg:block">
            <div className="text-white bg-blue-600 w-full p-3 font-bold text-center ">
              KHÓA HỌC TM
            </div>
            <div className="box shadow-md p-2">
              <div
                className="flex items-center cursor-pointer hover:text-blue-600"
                onClick={() => navigate("/")}
              >
                <IoIosArrowBack className="text-xs" />
                <p className="py-2">Về trang chủ</p>
              </div>
              <p className="text-3xl py-2">
                Content Marketing | Digital Marketing
              </p>

              <ProgressBar
                height="5px"
                bgColor="blue"
                customLabel=" "
                completed={60}
                className="pt-3"
              />
              <p className="pt-2 mb-3">Đã hoàn thành 60%</p>
            </div>

            <MenuVideo />
          </div>

          <div
            style={{ zIndex: "999999" }}
            className="p-3 mobile-title lg:hidden flex items-center bg-blue-600 text-white font-bold text-xl"
          >
            {openDraw ? (
              <MdCancelPresentation
                className="ml-2 text-3xl"
                onClick={() => setOpenDraw(false)}
              />
            ) : (
              <IoReorderThreeSharp
                className="ml-2 text-3xl"
                onClick={() => setOpenDraw(true)}
              />
            )}

            <div className="text-center w-full"> KHÓA HỌC TM</div>
          </div>

          <div className="right-video col-lg-9">
            <iframe
              src="https://embed.api.video/vod/vi6xetXwQy8pb1f9Gmfs41Zg"
              frameborder="0"
              allowfullscreen="true"
            ></iframe>
          </div>

         
        </div>
        
        <MobileDrawer openDraw={openDraw} setOpenDraw={setOpenDraw} />
      </div>
    </>
  );
};

export default WatchVideo;
