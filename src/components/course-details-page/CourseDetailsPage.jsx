import React, { useEffect, useRef, useState } from "react";
import SingleCourseHeader from "../single-course-header/SingleCourseHeader";
import CourseObjectives from "../course-objectives/CourseObjectives";
import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import CourseContent from "../course-content/CourseContent";
import BuyCourseNavBar from "../buy-course-nav-bar/BuyCourseNavBar";
import CourseRequirements from "../course-requirements/CourseRequirements";
import styles from "./CourseDetailsPage.module.css";
import CourseDescription from "../course-description/CourseDescription";
import InstructorsSection from "../../instructors-section/InstructorsSection";
import ThisCourseIncludes from "../this-course-includes/ThisCourseIncludes";
import StudentFeedback from "../student-feedback/StudentFeedback";
import ReviewsSection from "../reviews-section/ReviewsSection";
import Sticky from "react-stickynode";
import StickyCardContent from "../sticky-card-content/StickyCardContent";
import ReactPlayer from "react-player";
import "../../scss/showVideo.scss";

function CourseDetailsPage({ courseDetails }) {
  const [fetched, setAsFetched] = useState(false);
  const [additionalDetails, setAdditionalDetails] = useState({});
  const [isShowVideo, setShowVideo] = useState(false);
  const [link, setLink] = useState("");
  const refOutside = useRef(null);

  useEffect(() => {
    fetch("https://api.npoint.io/427e24cf2470da9aecca")
      .then((response) => response.json())
      .then((jsonFile) => {
        setAdditionalDetails(jsonFile);
        setAsFetched(true);
      });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        refOutside &&
        refOutside.current &&
        !refOutside.current?.contains(event.target)
      ) {
        setShowVideo(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  console.log("ttttt", isShowVideo);

  return fetched ? (
    <main className="mx-auto max-w-7xl relative">
      <section>
        <div className="row bg-blue-600">
          <div className="col-md-8">
            <SingleCourseHeader
              courseDetails={courseDetails}
              additionalDetails={additionalDetails}
            />
          </div>

          <div className="right-content col-md-4 d-none d-md-block absolute right-0">
            <Sticky innerZ={5} top={0}>
              <StickyCardContent
                details={courseDetails}
                additionalDetails={additionalDetails}
              />
            </Sticky>
          </div>
        </div>

        <div className="row px-2">
          <div className="col-md-8">
            <CourseContent
              details={additionalDetails}
              setLink={setLink}
              setShowVideo={setShowVideo}
            />
          </div>
        </div>

        {/* ------mobile mơi hiện--------- */}

        <div className="d-md-none">
          <StickyCardContent
            details={courseDetails}
            additionalDetails={additionalDetails}
          />
        </div>

        <div className="mx-auto max-w-7xl">
          <CourseDescription details={additionalDetails} />

          <InstructorsSection details={additionalDetails} />

          {/* <StudentFeedback details={additionalDetails} /> */}
          {/* <div id="boundary">
            <ReviewsSection details={additionalDetails} />
          </div> */}
          
        </div>
        <BuyCourseNavBar details={courseDetails} />
      </section>

      {isShowVideo && (
        <div className="show-video">
          <div className="blur"></div>

          <div className="video-yt" ref={refOutside}>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=txHyinPy-UU"
              controls={true}
            />
          </div>
        </div>
      )}
    </main>
  ) : (
    <LoadingSpinner />
  );
}

export default CourseDetailsPage;
