import React from "react";
import styles from "./SingleCourseHeader.module.css";
import "./iconStyle.css";
import { Link } from "react-router-dom";

function SingleCourseHeader({ courseDetails, additionalDetails }) {
  const {
    title,
    image_750x422: image,
    headline,
    rating,
    num_subscribers: subscribers,
    visible_instructors: instructors,
    last_update_date: lastUpdate,
    caption_languages: languages,
  } = courseDetails;

  return (
    <>
      <main className="mx-auto max-w-6xl bg-blue-600">
        <div className={styles.body}>
          <section className={styles.categoriesSection}>
            <Link to="/">
              <p className={styles.subCategory}>Trang chủ</p>
            </Link>
            <i className="fa-solid fa-chevron-right sub-category-arrow"></i>
            <Link to="/ahmedGamal-Project2React#courses">
              <p className={styles.subCategory}>Khóa học</p>
            </Link>
          </section>
          <section className={styles.coursePreview}>
            <section className={styles.mainDetails}>
              <h1 className={styles.title}>Chinh Phục Sản Xuất Video Ngắn</h1>
              <p className="mt-3 font-medium text-lg">
                Giúp bạn biến ý tưởng thành những video ấn tượng để xây dựng
                thương hiệu cá nhân, bán hàng và bắt kịp xu hướng viral trên
                mạng xã hội.
              </p>

              <div className="g-parent flex items-center gap-5 mt-3">
                <div className="g-icon flex items-center">
                  <span className="fa-regular fa-clock"></span>
                  <p className="ml-1">10 giờ 25 phút</p>
                </div>
                <div className="g-icon flex items-center">
                  <span className="fa-solid fa-circle-play"></span>
                  <p className="ml-1">15 bài học</p>
                </div>
                <div className="g-icon sm:flex items-center hidden">
                  <i class="fa-solid fa-tag"></i>
                  <p className="ml-1">Mọi trình độ</p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}

export default SingleCourseHeader;
