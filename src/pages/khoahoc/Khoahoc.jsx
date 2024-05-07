import "../../scss/khoahoc.scss";
import banner from "../../asset/banner-khoahoc.jpg";
import { useNavigate } from "react-router-dom";
import SingleKhoahoc from "./SingleKhoahoc";

const arr = ["1"];

const Khoahoc = () => {
  const navigate = useNavigate();

  return (
    <div className="Khoahoc">
      <div className="max-w-6xl mx-auto overflow-hidden">
        <div className="banner-khoahoc">
          <img src={banner} />
          <div className="text-kh text-white text-3xl md:text-5xl font-bold">
            KHÓA HỌC
          </div>
        </div>
        <div className="list-khoahoc row my-3">
          {arr &&
            arr.map((item, map) => {
              return (
                <div
                  className="col-sm-6 col-md-4 mt-4"
                  onClick={() => navigate("/khoa-hoc/232")}
                >
                  <SingleKhoahoc />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Khoahoc;
