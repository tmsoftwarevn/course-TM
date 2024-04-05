import React from "react";
import styles from "./InstructorsSection.module.css";
import InstructorCard from "../components/instructor-card/InstructorCard";
import { List, ListItem } from "@mui/material";

const fakeInstructor = [
  {
    url: "/user/avinashjain5/",
    name: "Avinash",
    title: "Avinash Jain",
    _class: "user",
    rating: 4.4,
    courses: 16,
    reviews: 73835,
    initials: "AJ",
    students: 891903,
    job_title: "CEO of TheCodex.me - Teaching 500,000+ Students how to code",
    description:
      "<p><strong><em>&nbsp; &nbsp;</em> </strong>Avinash Jain is currently a senior at UC Berkeley majoring in Electrical Engineering and Computer Science. He's the CEO and Founder of TheCodex, an online educational&nbsp;platform focused on bringing the best programming content to hundreds of&nbsp;thousands of students around the world.</p><p>His programming journey began at the age of 10, starting off with simple Python scripts to crawl the weather.&nbsp;Since then, he's worked at numerous companies and is professionally experienced in Python, iOS Development and Web Development. He's launched a plethora of applications in the App Store amassing thousands of downloads. Additionaly, he's competed and won in&nbsp;several hackathons around the world including PennApps and NWHacks.</p><p>Avinash has a passion to teach - his enthusiasm and love for programming is evident in every video. For the past 7 years he's been an instructor on Udemy and he loves motivating and enabling others to pursue their programming dreams. He hopes to help students realize the power of programming and jumpstart their careers through his courses.</p><p>Checkout TheCodex for all of his courses, fantastic&nbsp;discounts, and&nbsp;any guidance or help.&nbsp;</p>",
    image_50x50: "https://img-c.udemycdn.com/user/50x50/10260436_946b_6.jpg",
    display_name: "Avinash Jain",
    image_100x100:
      "https://img-c.udemycdn.com/user/100x100/10260436_946b_6.jpg",
  },
];

function InstructorsSection({ details }) {
  const { visible_instructors: instructors } = details;

  return (
    <main className="mt-3 col-md-8">
      <p className={styles.sectionTitle}>Giới thiệu tác giả</p>
      <List>
        {fakeInstructor.map((instructor, idx) => {
          return (
            <ListItem key={idx} disablePadding>
              <InstructorCard details={instructor} />
            </ListItem>
          );
        })}
      </List>
    </main>
  );
}

export default InstructorsSection;
