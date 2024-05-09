import React, { useState } from "react";
import styles from "./CourseContent.module.css";
import CourseSection from "./CourseSectionVideo";
import { List, ListItem } from "@mui/material";
import { useNavigate } from "react-router-dom";

const khoa_hoc = {
  sections: [
    {
      index: 1,
      items: [
        {
          id: 2239858,
          title: "Giới thiệu khóa học Chiến thắng những Đòn tâm lý",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 224234,
          title: "Vạch trần 07 sự thật về ngành bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Giới thiệu series tổng & khoá học",
      lecture_count: 2,
      content_length: 344,
      content_length_text: "05:44",
    },
    {
      index: 1,
      items: [
        {
          id: 343255,
          title: "Giới thiệu khóa học Chiến thắng những Đòn tâm lý",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 458464,
          title: "Vạch trần 07 sự thật về ngành bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Giới thiệu series tổng & khoá học",
      lecture_count: 2,
      content_length: 344,
      content_length_text: "05:44",
    },
    {
      index: 1,
      items: [
        {
          id: 98046,
          title: "Giới thiệu khóa học Chiến thắng những Đòn tâm lý",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 867544,
          title: "Vạch trần 07 sự thật về ngành bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Giới thiệu series tổng & khoá học",
      lecture_count: 2,
      content_length: 344,
      content_length_text: "05:44",
    },
    {
      index: 1,
      items: [
        {
          id: 254245,
          title: "Giới thiệu khóa học Chiến thắng những Đòn tâm lý",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 980567,
          title: "Vạch trần 07 sự thật về ngành bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Giới thiệu series tổng & khoá học",
      lecture_count: 2,
      content_length: 344,
      content_length_text: "05:44",
    },
    {
      index: 1,
      items: [
        {
          id: 98575,
          title: "Giới thiệu khóa học Chiến thắng những Đòn tâm lý",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 125657,
          title: "Vạch trần 07 sự thật về ngành bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Giới thiệu series tổng & khoá học",
      lecture_count: 2,
      content_length: 344,
      content_length_text: "05:44",
    },
    {
      index: 1,
      items: [
        {
          id: 1978234,
          title: "Giới thiệu khóa học Chiến thắng những Đòn tâm lý",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 909868,
          title: "Vạch trần 07 sự thật về ngành bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Giới thiệu series tổng & khoá học",
      lecture_count: 2,
      content_length: 344,
      content_length_text: "05:44",
    },
    {
      index: 2,
      items: [
        {
          id: 134675,
          title: "Nắm vững 07 hoạt động trọng yếu trong bán hàng",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239858",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862852",
          object_index: 1,
          video_asset_id: 3862852,
          content_summary: "04:07",
          can_be_previewed: true,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 876867,
          title: "Thông thạo 04 bước tạo nên thành công",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
        {
          id: 967974,
          title: "Thấu hiểu 03 tác động của Lòng tự tôn",
          item_type: "lecture",
          learn_url: "/course/pythonforbeginners/learn/lecture/2239862",
          icon_class: "udi udi-play-circle",
          description: "",
          preview_url: "/course/394676/preview/?startPreviewId=3862806",
          object_index: 2,
          video_asset_id: 3862806,
          content_summary: "01:37",
          can_be_previewed: false,
          landing_page_url: null,
          is_coding_exercise: false,
          has_linked_workspace: false,
        },
      ],
      title: "Nắm vững 07 hoạt động trọng yếu trong bán hàng",
      lecture_count: 3,
      content_length: 344,
      content_length_text: "05:44",
    },
  ],
  title: "Khóa học Marketing cho người bắt đầu",
  total_sections: 10,
  total_lecture: 30,
  total_time: "10h30p20s",
};

function MenuVideo({ details, setLink, setShowVideo, setTotalChecked, totalChecked }) {
  const [open, toggleOpen] = useState(false);
 
  const navigate = useNavigate();

  //console.log("detail: ", details);

  const [clicked, toggleClicked] = useState(false);

  const handleClick = () => {
    toggleClicked(true);
    toggleOpen(!open);
  };

  return (
    <div className={styles.contentContainer}>
      <section className={styles.beforeContent}></section>
      {/* lặp từng bài học, lấy tất cả bài giảng của bài học */}
      <List>
        {khoa_hoc.sections.map((section, idx) => {
          const sectionComponent = (
            <CourseSection
              ExpandAll={open}
              sectionDetails={section}
              idx={idx}
              setShowVideo={setShowVideo} // truyền sự kiện click show video
              setLink={setLink}
              setTotalChecked={setTotalChecked}
              totalChecked = {totalChecked}
            />
          );
          return (
            <ListItem key={idx} disablePadding className={styles.listItem}>
              {sectionComponent}
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default MenuVideo;
