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
}) {
  const [open, toggleOpen] = useState(false);
  //console.log("detallllll", sectionDetails);
  const [totalChecked, setTotalChecked] = useState(0);

 const handleSelectCheckbox = (e) =>{
  if(e.target.checked === true){
    setTotalChecked(+totalChecked + 1);
  }
  else{
    setTotalChecked(+totalChecked - 1);
  }
 }

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
  }, [idx]);

  const handleClick = () => {
    toggleOpen(!open);
  };

  console.log('llll', items)

  return (
    <Accordion expanded={open} className={styles.accordion}>
      <AccordionSummary
        className={styles.accordionSummary}
        expandIcon={<ExpandMore className={styles.expandIcon} />}
        onClick={handleClick}
      >
        <span className={styles.summaryText}>{title}</span>
        <span className={`${styles.hide}`}>{sectionLectures} Bài</span>
      </AccordionSummary>
      <AccordionDetails className={styles.accordionDetails}>
        {items.map((item, idx) => {
          return (
            <div key={idx} className={styles.lecture}>
              <Checkbox               
                onChange={(e) =>handleSelectCheckbox(e)}
                inputProps={{ "aria-label": "controlled" }}
              />

              <span className={styles.lectureTitle}>{item.title}</span>
            </div>
          );
        })}
      </AccordionDetails>
    </Accordion>
  );
}

export default CourseSectionVideo;
