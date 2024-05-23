import React, { useState } from "react";
import "./StickyCardContent.scss";
import ThisCourseIncludes from "../this-course-includes/ThisCourseIncludes";
import { useEffect } from "react";
import img_test from "../../asset/thiet ke ui.jpg";
import { useNavigate } from "react-router-dom";

function StickyCardContent({
  details,
  additionalDetails,
  setLink,
  setShowVideo,
}) {
  const { image_750x422: image } = details;

  const [hidden, toggleHidden] = useState(false);
  const navigate = useNavigate();

  const handleStyles = () => {
    if (window.scrollY > 400) {
      toggleHidden(true);
    } else {
      toggleHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStyles);
  }, []);

  const handleSetVideo = (open, link) => {
    setShowVideo(open);
  };
  
  return (
    <main>
      <div className="g-image">
        <img className="w-full" src={img_test} alt="" />
        {/* btn */}
        <div
          className="glightbox_video"
          onClick={() => handleSetVideo(true, "")}
        >
          <svg
            viewBox="0 0 131 131"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="inner-circle"
              d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
              fill="white"
            ></path>
            <circle
              className="outer_circle"
              cx="65.5"
              cy="65.5"
              r="64"
              stroke="white"
            ></circle>
            <path
              className="play"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M60 76V57L77 66.7774L60 76Z"
              fill="orange"
            ></path>
          </svg>
        </div>
      </div>

      <div className="cardBody">
        <span className="price">9.987.654 đ</span>
        <span className="line-through">12.000.000 đ</span>
        <button
        onClick={() => navigate("/review?name=khoa-hoc-marketing")}
         className="w-full bg-blue-500 hover:bg-blue-600 p-2.5 sm:p-3 rounded text-white">
          MUA KHÓA HỌC
        </button>

        <ThisCourseIncludes details={additionalDetails} />
      </div>
    </main>
  );
}

export default StickyCardContent;
