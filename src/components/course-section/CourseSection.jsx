import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./CourseSection.module.css";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { useSelector } from "react-redux";

function CourseSection({
  ExpandAll,
  sectionDetails,
  idx,
  setShowVideo,
  setLink,
}) {
  const [open, toggleOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  //console.log("detallllll", sectionDetails);
  const {
    title,
    items,
    lecture_count: sectionLectures,
    content_length: sectionLength,
  } = sectionDetails;

  const handlePreviewVideo = (e) => {
    e.stopPropagation();
    setShowVideo(true);
    //setLink();
  };

  useEffect(() => {
    toggleOpen(ExpandAll);
  }, [ExpandAll]);

  useEffect(() => {
    toggleOpen(idx === 0 ? true : false);
  }, [idx]);

  const handleClick = () => {
    toggleOpen(!open);
  };
  const check_active_cource = () => {
    if (isAuthenticated) {
      navigate("/video/1");
    }
    else{
      navigate("/khoa-hoc/2");
    }
  };
  return (
    <Accordion expanded={open} className={styles.accordion}>
      <AccordionSummary
        className={styles.accordionSummary}
        expandIcon={<ExpandMore className={styles.expandIcon} />}
        onClick={handleClick}
      >
        <span className={styles.summaryText}>{title}</span>
        <span className={`${styles.hide}`}>
          {sectionLectures} Bài giảng . {Math.round(sectionLength / 60)}
          phút
        </span>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className={styles.lecture}
              onClick={() => check_active_cource()}
            >
              <span
                className={
                  (item.content_summary.includes("page") // check xem la tai lieu hay video
                    ? "fa-regular fa-file"
                    : "fa-solid fa-circle-play text-blue-600") +
                  ` ${styles.lectureIcon}`
                }
              ></span>

              <span className={styles.lectureTitle}>{item.title}</span>
              {item.can_be_previewed ? (
                <span
                  onClick={(e) => handlePreviewVideo(e)}
                  className={styles.preview}
                >
                  Xem trước
                </span>
              ) : (
                <span></span>
              )}
              <span className={styles.hide}>{item.content_summary}</span>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default CourseSection;
