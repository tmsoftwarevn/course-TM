import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./CourseSection.module.css";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { Button, Popconfirm } from "antd";
import { IoAdd } from "react-icons/io5";
import ModalUpdateBaihoc from "../bai hoc/UpdateBaihoc";
import ModalUpdateBaigiang from "../bai giang/UpdateBaigiang";
import ModalAddBaigiang from "../bai giang/AddBaigiang";

const titleX = "Xác nhận muốn xóa ?";
function CourseSection({
  ExpandAll,
  sectionDetails,
  idx,
  setShowVideo,
  setLink,
}) {
  const [open, toggleOpen] = useState(false);
  const navigate = useNavigate();

  const [isModalUpdateBaihoc, setIsModalUpdateBaihoc] = useState(false);
  const [isModalUpdateBaigiang, setIsModalUpdateBaigiang] = useState(false);
  const [isModalAddBaigiang, setIsModalAddBaigiang] = useState(false);

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

  const handleAdd_Baigiang = () => {};
  const handleUpdate_Baigiang = () => {};
  const handleDelete_Baigiang = () => {};
  const handleUpdate_Baihoc = () => {};
  const handleDelete_Baihoc = () => {};

  return (
    <>
      <Accordion expanded={open} className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMore className={styles.expandIcon} />}
          onClick={handleClick}
        >
          <span className={styles.summaryText}>{title}</span>

          <span className={`${styles.hide}`}>{sectionLectures} Bài giảng</span>

          <span className="ml-5 mr-3">
            <Button
              size="small"
              type="primary"
              style={{ display: "flex", alignItems: "center" }}
            >
              <IoAdd
                style={{ fontSize: "15px" }}
                onClick={() => setIsModalAddBaigiang(true)}
              />
            </Button>
          </span>
          <span className="mr-3">
            <Button
              size="small"
              type="primary"
              style={{ display: "flex", alignItems: "center" }}
            >
              <CiEdit
                style={{ fontSize: "15px" }}
                onClick={() => setIsModalUpdateBaihoc(true)}
              />
            </Button>
          </span>

          <span>
            <Popconfirm
              placement="left"
              title={titleX}
              onConfirm={() => {
                handleDelete_Baihoc();
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button
                size="small"
                type="primary"
                danger
                style={{ display: "flex", alignItems: "center" }}
              >
                <MdDelete />
              </Button>
            </Popconfirm>
          </span>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          {items.map((item, idx) => {
            return (
              <div key={idx} className={styles.lecture}>
                <span
                  className={
                    (item.content_summary.includes("page") // check xem la tai lieu hay video
                      ? "fa-regular fa-file"
                      : "fa-solid fa-circle-play text-blue-600") +
                    ` ${styles.lectureIcon}`
                  }
                ></span>

                <span className={styles.lectureTitle}>{item.title}</span>

                <span className="mr-3">
                  <Button
                    size="small"
                    type="primary"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CiEdit
                      style={{ fontSize: "15px" }}
                      onClick={() => setIsModalUpdateBaigiang(true)}
                    />
                  </Button>
                </span>
                <span>
                  <Popconfirm
                    placement="left"
                    title={titleX}
                    onConfirm={() => {
                      handleDelete_Baigiang();
                    }}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Button
                      size="small"
                      type="primary"
                      danger
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MdDelete />
                    </Button>
                  </Popconfirm>
                </span>
              </div>
            );
          })}
        </AccordionDetails>
      </Accordion>

      <ModalUpdateBaihoc
        isModalUpdate={isModalUpdateBaihoc}
        setIsModalUpdate={setIsModalUpdateBaihoc}
      />

      <ModalUpdateBaigiang
        isModalUpdate={isModalUpdateBaigiang}
        setIsModalUpdate={setIsModalUpdateBaigiang}
      />

      <ModalAddBaigiang
        isModalAdd={isModalAddBaigiang}
        setIsModalAdd={setIsModalAddBaigiang}
      />
    </>
  );
}

export default CourseSection;
