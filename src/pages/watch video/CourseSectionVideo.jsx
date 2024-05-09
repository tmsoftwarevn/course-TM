import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./CourseSection.module.css";
import Checkbox from "@mui/material/Checkbox";

function CourseSectionVideo({
  ExpandAll,
  sectionDetails,
  idx,
  setShowVideo,
  setLink,
  setTotalChecked,
  totalChecked,
  setOpenDraw,
  setTitle
}) {
  const [open, toggleOpen] = useState(false);

  const handleSelectCheckbox = (e, item) => {
    if (e.target.checked === true) {
      let arr = [...totalChecked, item.id]; // lưu id check process %
      setTotalChecked(arr);
    } else {
      const newArr = totalChecked.filter((itemx) => itemx !== item.id);
      setTotalChecked(newArr);
    }
  };

  const {
    title,
    items,
    lecture_count: sectionLectures,
    content_length: sectionLength,
  } = sectionDetails;

  useEffect(() => {
    toggleOpen(ExpandAll);
  }, [ExpandAll]);

  useEffect(() => {
    toggleOpen(idx === 0 ? true : false);
    if(idx === 0){
      setLink(items[0].video_url)
    }

  }, [idx]);

  const handleClick = () => {
    toggleOpen(!open);
  };

  const initSelectCheckbox = (id) => {
    const index = totalChecked.findIndex((item) => item === id);
    if (index > -1)
      // nếu local có id thì tick
      return true;
    return false;
  };

  const handleShowVideo = (e, item) => {
    e.stopPropagation();
    setLink(item.video_url);
    setOpenDraw(false) ///  tắt draw mobile
    setTitle(item.title)
  };

  return (
    <Accordion expanded={open} className={styles.accordion}>
      <AccordionSummary
        className={styles.accordionSummary}
        expandIcon={<ExpandMore className={styles.expandIcon} />}
        onClick={() => handleClick()}
      >
        <div className="flex justify-between w-full">
          <span className={styles.summaryText}>{title}</span>
          <span className={styles.totalSection}>{sectionLectures} Bài</span>
        </div>
      </AccordionSummary>

      <AccordionDetails className={styles.accordionDetails}>
        {items.map((item, idx) => {
          let v = initSelectCheckbox(item.id);
          return (
            <div key={idx} className={styles.lecture}>
              <Checkbox
                checked={v} // check xem bài đã học
                onChange={(e) => handleSelectCheckbox(e, item)}
                // inputProps={{ "aria-label": "controlled" }}
              />

              <span
                onClick={(e) => handleShowVideo(e, item)}
                className={styles.lectureTitle}
              >
                {item.title}
              </span>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default CourseSectionVideo;
