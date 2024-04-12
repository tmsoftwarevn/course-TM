import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from "react-router-dom";
import img_1 from "../../asset/PygUbq64RIKgIYC52S65_Học Edit video.jpg"


export default function Blog(props) {
  const {detail} = props;
  const navigate = useNavigate();


  return (
    <Card onClick={()=> navigate("/blog/1432")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={img_1}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          xem thêm
        </Button>
      </CardActions>
    </Card>
  );
}