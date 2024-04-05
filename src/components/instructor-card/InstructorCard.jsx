import React from "react";
import styles from "./InstructorCard.module.css";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  Star,
  WorkspacePremium,
  People,
  PlayCircle,
} from "@mui/icons-material";
import FadedText from "../faded-text/FadedText";
import img_nam from "../../asset/10260436_946b_6.jpg";
import InventoryTwoToneIcon from "@mui/icons-material/InventoryTwoTone";

function InstructorCard({ details }) {
  const {
    display_name: name,
    job_title: title,
    image_100x100: image,
    rating,
    reviews,
    students,
    courses,
    description,
  } = details;

  const icons = [
    <InventoryTwoToneIcon className="text-blue-500" />,
    <InventoryTwoToneIcon className="text-blue-500" />,
    <InventoryTwoToneIcon className="text-blue-500" />,
    <InventoryTwoToneIcon className="text-blue-500" />,
  ];
  const itemsText = [
    <span className={styles.black}>50k lượt follow tiktok</span>,
    <span className={styles.black}>
      Hơn 10 năm kinh nghiệm truyền thông và Marketing
    </span>,
    <span className={styles.black}>Design director tại Lazada</span>,
    <span className={styles.black}>Design director tại LINGO GROUP</span>,
  ];
  return (
    <article>
      <p className={styles.instructorName}>
        Nguyễn Tăng Hải - CEO of TM Branding
      </p>
      {/* <p className={styles.instructorTitle}>CEO of TM Branding</p> */}
      <section className={styles.instructorProfile}>
        <figure className={styles.instructorImage}>
          <img src={img_nam} alt="anh" />
        </figure>
        <section className={styles.profileElements}>
          <List>
            {icons.map((icon, idx) => {
              return (
                <ListItem key={idx} className={styles.listItem}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText className={styles.profileElement}>
                    {itemsText[idx]}
                  </ListItemText>
                </ListItem>
              );
            })}
          </List>
        </section>
      </section>
      <FadedText rawHTML={description} />
    </article>
  );
}

export default InstructorCard;
