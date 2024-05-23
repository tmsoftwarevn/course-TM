import React, { useEffect, useRef, useState } from "react";
import SingleCourseHeader from "../single-course-header/SingleCourseHeader";

import LoadingSpinner from "../loading-spinner/LoadingSpinner";
import CourseContent from "../course-content/CourseContent";
import BuyCourseNavBar from "../buy-course-nav-bar/BuyCourseNavBar";

import CourseDescription from "../course-description/CourseDescription";

import Sticky from "react-stickynode";
import StickyCardContent from "../sticky-card-content/StickyCardContent";
import ReactPlayer from "react-player";
import "../../scss/showVideo.scss";
import Course_Answer from "../course-answer-guest/CourseAnswer";
import ModalVideo from "../modal-show-video/ModalVideo";


function CourseDetailsPage({ courseDetails }) {
  const [fetched, setAsFetched] = useState(true);
  const [additionalDetails, setAdditionalDetails] = useState({});
  const [isShowVideo, setShowVideo] = useState(false);
  const [link, setLink] = useState("");
  const refOutside = useRef(null);

  useEffect(() => {
    // fetch("https://api.npoint.io/427e24cf2470da9aecca")
    //   .then((response) => response.json())
    //   .then((jsonFile) => {
    //     setAdditionalDetails(jsonFile);
    //     setAsFetched(true);
    //   });
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

  return fetched ? (
    <main className="mx-auto max-w-6xl relative w-full">
      <section>
        <div className="row bg-blue-600">
          <div className="col-md-8">
            <SingleCourseHeader
              courseDetails={courseDetails}
              additionalDetails={additionalDetails}
            />
          </div>

          {!isShowVideo && (
            <div className="right-content col-md-4 d-none d-md-block absolute right-0">
              <Sticky innerZ={5} top={70} >
                <StickyCardContent
                  setLink={setLink}
                  setShowVideo={setShowVideo}
                  details={courseDetails}
                  additionalDetails={additionalDetails}
                />
              </Sticky>
            </div>
          )}
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
            setLink={setLink}
            setShowVideo={setShowVideo}
          />
        </div>

        <Course_Answer />

        <div className="mx-auto max-w-6xl">
          <CourseDescription details={additionalDetails} />

          {/* <InstructorsSection details={additionalDetails} /> */}

          {/* <StudentFeedback details={additionalDetails} /> */}
          {/* <div id="boundary">
            <ReviewsSection details={additionalDetails} />
          </div> */}
        </div>

        {/* <BuyCourseNavBar details={courseDetails} /> */}
      </section>

      <div className="mb-5"></div>

      {/* {isShowVideo && (
        <div className="show-video">
          <div className="blur-video"></div>

          <div className="video-yt" ref={refOutside}>
            <ReactPlayer
              className="react-player"
              url="https://www.youtube.com/watch?v=txHyinPy-UU"
              controls={true}
              width={"100%"}
            />
          </div>
        </div>
      )} */}
      <ModalVideo open={isShowVideo} setOpen={setShowVideo}/>

    </main>
  ) : (
    <LoadingSpinner />
  );
}

export default CourseDetailsPage;
