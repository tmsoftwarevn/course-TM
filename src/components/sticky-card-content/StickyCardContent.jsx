import React, { useState } from "react";
import styles from "./StickyCardContent.module.scss";
import ThisCourseIncludes from "../this-course-includes/ThisCourseIncludes";
import { useEffect } from "react";
import img_test from "../../asset/1700297631-social-media-marketing.jpg";

function StickyCardContent({ details, additionalDetails }) {
  const { image_750x422: image } = details;

  const [hidden, toggleHidden] = useState(false);

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

  return (
    <main>
      <figure className={styles.imageWrapper}>
        <img className="w-full" src={img_test} alt="" />
      </figure>
      <div className={styles.cardBody}>
        <span className={styles.price}>9.987.654 đ</span>
        <span className="line-through">12.000.000 đ</span>
        <button
          //className={[styles.buyNowButton, styles.button].join(" ")}
          className="w-full bg-blue-500 hover:bg-blue-600 p-2.5 sm:p-3 rounded text-white"
        >
          MUA KHÓA HỌC
        </button>

        <ThisCourseIncludes details={additionalDetails} />
      </div>
    </main>
  );
}

export default StickyCardContent;
