import ReactPlayer from "react-player";
import CourseContent from "../../components/course-content/CourseContent";
import "./watchvideo.scss";
import MenuVideo from "./CourseContent";


const WatchVideo = () => {
  return (
    <div className="watch-video overflow-hidden p-3">
      <div className="row">
        <div className="left-video col-sm-3 ">
          <MenuVideo />
        </div>
        <div className="right-video col-sm-9">
          <iframe
            src="https://embed.api.video/vod/vi5TkT0KKE21fA4PEV687nHQ"
           
            frameborder="0"
            scrolling="no"
            allowfullscreen="true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
