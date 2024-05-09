import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import KhoahocHome from "../../pages/home/KhoahocHome";
import { useNavigate } from "react-router-dom";
import "./carouselKhoahoc.scss";
import Blog from "../../pages/blog/Blog";
let settings = {
//   dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 4000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
const CarouselBlog = (props) => {
  const { arrProp } = props;
  const navigate = useNavigate();

  return (
    <Slider {...settings}>
      {arrProp &&
        arrProp.map((item, idx) => {
          return (
            <div key={idx} onClick={() => navigate("/blog/232")}>
                <Blog />
            </div>
          );
        })}
    </Slider>
  );
};

export default CarouselBlog;
