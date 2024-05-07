import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

import img_1 from "../../asset/PygUbq64RIKgIYC52S65_Học Edit video.jpg";
import nam from "../../asset/nam.png"


export default function KhoahocHome() {
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
          <Typography gutterBottom variant="h5" component="div">
            Chinh Phục Sản Xuất Video Ngắn
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div className="g-parent flex items-center gap-5 justify-between">
              <div className="g-icon flex items-center text-blue-600">
                <span className="fa-regular fa-clock"></span>
                <p className="ml-1">10 giờ 25 phút</p>
              </div>
              <div className="g-icon flex items-center text-blue-600">
                <span className="fa-solid fa-circle-play"></span>
                <p className="ml-1">15 bài học</p>
              </div>
            </div>
            <p className="mt-2"></p>
            <span className="text-orange-500 text-2xl font-bold mr-2">9.987.654 đ</span>
            <span className="line-through">12.000.000 đ</span>
           
          </Typography>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}
