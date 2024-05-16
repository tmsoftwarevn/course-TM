import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import img_1 from "../../asset/thiet ke ui.jpg";
import nam from "../../asset/nam.png";
import ProgressBar from "@ramonak/react-progress-bar";

export default function KhoahocAccount() {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img_1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="span">
            Chinh Phục Sản Xuất Video Ngắn
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="g-parent flex items-center gap-5 justify-between mt-2">
              <div className="g-icon flex items-center text-blue-600">
                <span className="fa-regular fa-clock"></span>
                <p className="ml-1">10 giờ 25 phút</p>
              </div>
              <div className="g-icon flex items-center text-blue-600">
                <span className="fa-solid fa-circle-play"></span>
                <p className="ml-1">15 bài học</p>
              </div>
            </div>
            
            <ProgressBar
                height="5px"
                bgColor="#2563eb"
                customLabel=" "
                completed={45}
                className="pt-3"
              />
              <p className="pt-2">Đã hoàn thành 45%</p>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
