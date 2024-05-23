import { useNavigate } from "react-router-dom";
import ttt from "../../asset/thiet ke ui.jpg";
import "./review.scss";

const Review = () => {
  const navigate = useNavigate();

  return (
    <div className="review my-5">
      <div className="max-w-6xl mx-auto px-2">
        <div className="row">
          <div className="col-md-6 review-left">
            <div className="review-left__title text-xl mb-3 font-semibold">
              Hoàn thành mua hàng để bắt đầu học
            </div>
            <div className="review-left__khoahoc">
              <img src={ttt} />
              <div className="border-b pb-4 review-left__khoahoc-title text-xl mt-3 font-bold text-blue-600">
                Photoshop Dành Cho Marketing | Thiết Kế Đồ Họa
              </div>
            </div>
            <div className="border-b review-left__price flex justify-between py-3">
              <div className="font-semibold">TỔNG CỘNG</div>
              <div className="font-semibold">6.000.000 VND</div>
            </div>
          </div>

          <div className="col-md-6 review-right">
            <div className="mb-3 text-center review-right__title text-xl font-semibold">
              Thanh toán
            </div>
            <div className="review-right__email p-3 mb-3">
              <span className="mr-3">Tài khoản:</span>
              <span>Test@gmail.com</span>
            </div>
            <div className="review-right__button text-center bg-blue-500 cursor-pointer hover:bg-blue-600 py-2 rounded text-white"
              onClick={() => navigate("/thanh-toan")}
            >
              Thanh toán
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
