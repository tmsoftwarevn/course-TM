import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./CourseSection.module.css";

function CourseSectionVideo({ ExpandAll, sectionDetails, idx, setShowVideo, setLink }) {
  const [open, toggleOpen] = useState(false);
  //console.log("detallllll", sectionDetails);
  const {
    title,
    items,
    lecture_count: sectionLectures,
    content_length: sectionLength,
  } = sectionDetails;

  const handlePreviewVideo = () => {
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

  return (
    <Accordion expanded={open} className={styles.accordion}>
      <AccordionSummary
        className={styles.accordionSummary}
        expandIcon={<ExpandMore className={styles.expandIcon} />}
        onClick={handleClick}
      >
        <span className={styles.summaryText}>{title}</span>
        <span className={`${styles.hide}`}>
          {sectionLectures} Bài
        </span>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>
        {items.map((item, idx) => {
          return (
            <div
              key={idx}
              className={styles.lecture}
              onClick={() => handlePreviewVideo()}
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
              
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default CourseSectionVideo;
