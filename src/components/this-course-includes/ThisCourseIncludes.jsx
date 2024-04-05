import React from "react";
import styles from "./ThisCourseIncludes.module.css";
import {
  OndemandVideo,
  InsertDriveFile,
  Download,
  AllInclusive,
  StayCurrentPortrait,
  EmojiEvents,
} from "@mui/icons-material";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ThisCourseIncludes({ details }) {
  const { content_length_video: seconds, num_additional_assets: downloadable } =
    details;

  const icons = [
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
    <AddIcon className="text-blue-500" />,
  ];

  const itemsText = [
    `99+ Chuyển cảnh hiếm`,
    "9999+ Background, Lớp phủ",
    `Ebook Tiktok For Newbie`,
    "Ebook Chiến lược phát triển Social Media",
    "Ebook Chiến lược Free Traffic Facebook",
  ];

  return (
    <main className={styles.mainContainer}>
      <p className={styles.header}>Ưu đãi khi đăng ký khóa học:</p>
      <List>
        {icons.map((icon, idx) => {
          return (
            <ListItem key={idx} disablePadding className={styles.listItem}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText className={styles.itemText}>
                <span className={styles.black}>{itemsText[idx]}</span>
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    </main>
  );
}

export default ThisCourseIncludes;
