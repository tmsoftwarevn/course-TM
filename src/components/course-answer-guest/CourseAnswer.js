import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import styles from "./course-answer.module.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <AddCircleOutlineIcon
        className="text-blue-500"
        sx={{ fontSize: "1.5rem" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Course_Answer() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className="col-md-8 px-3 mt-3">
      <p className={styles.header}>Câu hỏi thường gặp</p>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Chưa biết gì có học được không ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Hoàn toàn được, khoá học được thiết kế dành cho người chưa biết gì
            có thể hiểu và thực hành được
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Kiến thức có được Update liên tục không ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Chúng tôi update kiến thức liên tục hàng tháng.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Chưa có máy tính có học được không ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Để lam marketing bạn cần phải có máy tính. Nhưng bạn có thể học
            trước qua điện thoại rồi thực hành sau
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Khoá học dành cho ai ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Người làm sáng tạo nội dung - phù hợp nhất</Typography>
          <Typography>Người làm nghề tự do</Typography>
          <Typography>Nhà bán hàng, tiếp thị trực tuyến</Typography>
          <Typography>Người muốn có thêm công việc tay trái</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
