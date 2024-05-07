import Blog from "./Blog";
import { useNavigate } from "react-router-dom";

const DetailBlog = () => {
  const navigate = useNavigate();

  return (
    <div className="detail-blog my-5">
      <div className="max-w-6xl mx-auto">
        <div className="row">
          <div className="col-md-9">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb breadcrumb-ov">
                <li className="breadcrumb-item">
                  <span
                    className="br-home"
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Trang chủ
                  </span>
                </li>
                <li className="breadcrumb-item">
                  <span
                    className="br-home"
                    onClick={() => {
                      navigate("/blog");
                    }}
                  >
                    Blog
                  </span>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  dsadsd
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-md-3">
            <div className="text-black font-bold text-2xl mb-3">
              Bài viết nổi bật
            </div>
            <Blog />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
