import React, { useEffect } from "react";
import "./HomePage.scss";
import img from "../../asset/7RJ4m1yLRcOZNvyt8bge_banner2.png";
import img2 from "../../asset/thiet ke ui.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import khoitao from "../../asset/khoi-tao-image.png";
import img_teaching from "../../asset/teacher-is-teaching-school-carto.jpg";
import img_edit from "../../asset/edit.svg";
import chungchi from "../../asset/chung-chi.png";
import { TiTickOutline } from "react-icons/ti";
import ttt from "../../asset/7RJ4m1yLRcOZNvyt8bge_banner2.png";
import SingleKhoahoc from "../khoahoc/SingleKhoahoc";
import { useNavigate } from "react-router-dom";
import KhoahocHome from "./KhoahocHome";
import CarouselKhoahoc from "../../components/carousel-react/CarouselKhoahoc";
import CarouselBlog from "../../components/carousel-react/CarouselBlog";

const arr = ["1", "2", "3"];
const arrBlog = ["1", "2", "3", "4", "5"];
function HomePage() {
  const navigate = useNavigate();

  useEffect(function () {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div class="homepage overflow-hidden">
        <section class="banner-gradiant">
          <div class="max-w-6xl mx-auto">
            <div class="row banner">
              <div class="col-lg-6 banner__content">
                <h1 class="banner__content-heading">
                  Tạo dựng website kinh doanh khoá học online miễn phí
                </h1>
                <div class="banner__content-description">
                  <div class="d-flex banner__content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                    </svg>
                    <p>Làm chủ 100% doanh thu</p>
                  </div>
                  <div class="d-flex banner__content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                    </svg>
                    <p>Tích hợp công cụ bảo vệ bài giảng</p>
                  </div>
                  <div class="d-flex banner__content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                    </svg>
                    <p>Bao gồm nhiều cổng thanh toán</p>
                  </div>
                  <div class="d-flex banner__content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                    </svg>
                    <p>Đội ngũ hỗ trợ tận tâm – chuyên nghiệp</p>
                  </div>
                  <div class="d-flex banner__content-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"></path>
                    </svg>
                    <p>Tiện ích hỗ trợ: Quiz, App mobile, SEO…</p>
                  </div>
                </div>
                <div class="mt-3 hover:bg-blue-400 cursor-pointer size-fit rounded-full py-2 px-4 bg-blue-600 text-white">
                  KHÓA HỌC
                </div>
              </div>
              <div class="col-lg-6 banner__image">
                <img
                  src="https://edubit.vn/statics/home_edubit/asset/banner-image.svg"
                  alt="Giải Pháp Dạy Học Trực Tuyến Chỉ Cần 5 Phút Thao Tác"
                />
              </div>
            </div>
          </div>
        </section>

        <section data-aos="fade-up" className="content-243">
          <div class="max-w-6xl mx-auto">
            <div className="content-243__group">
              <div className="content-243__group-title text-center">
                LỢI ÍCH KHI ĐĂNG KÍ KHÓA HỌC
              </div>
              <div className="content-243__group-mota text-center">
                website tiết kiệm 90% chi phí và thời gian so với tổ chức học
                offline truyền thống. Bạn chỉ cần tập trung chất lượng và phân
                phối với hàng ngàn học viên
              </div>

              <div className="content-243__group__card">
                <div className="row mt-5">
                  <div className="col-lg-4 hover:translate-y-2">
                    <div className="card">
                      <img className="card-image " src={img} />
                      <p className="card-title">Liên tục nâng cấp</p>
                      {/* <p className="card-mota">
                        Bạn chỉ cần tập trung chất lượng và phân phối với hàng
                        ngàn học viên
                      </p> */}
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card">
                      <img className="card-image" src={img} />
                      <p className="card-title">Liên tục nâng cấp</p>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card">
                      <img className="card-image" src={img} />
                      <p className="card-title">Liên tục nâng cấp</p>
                    </div>
                  </div>
                  {/* 2222222 */}
                  <div className="col-lg-4 mt-4">
                    <div className="card">
                      <img className="card-image" src={img2} />
                      <p className="card-title">Liên tục nâng cấp</p>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-4">
                    <div className="card">
                      <img className="card-image" src={img2} />
                      <p className="card-title">Liên tục nâng cấp</p>
                    </div>
                  </div>
                  <div className="col-lg-4 mt-4">
                    <div className="card">
                      <img className="card-image" src={img2} />
                      <p className="card-title">Liên tục nâng cấp</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="khoahoc-home mb-5 px-2" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="khoahoc-home__title text-center mb-3">
              KHÓA HỌC TM
            </div>
            {/* <CarouselKhoahoc arrProp = {arr} /> */}
            <div className="row">
              {arr.map((item, idx) => {
                return (
                  <>
                    <div className="col-md-4 mt-4"
                    onClick={() => navigate("/khoa-hoc/3321")}
                    >
                      <KhoahocHome />
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <section className="content-654" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="row content-654__group">
              <div className="col-md-6 img-content-654">
                <img src={khoitao} />
              </div>
              <div className="col-md-6 content-654__right">
                <div className="content-654__title">THAM GIA KHÓA HỌC NGAY</div>
                <div className="content-654__mota">
                  CÙNG BẠN LAN TỎA TRI THỨC ĐẾN HÀNG TRIỆU NGƯỜI
                </div>
                <div className="content-654__button rounded-full size-fit px-3 py-2">
                  KHÁM PHÁ
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="content-834 px-2" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="row content-834__group">
              <div className="col-md-6 content-834__group-left">
                <div className="content-834__group-left-title">
                  HỌC TRỰC TUYẾN QUA VIDEO
                </div>
                <div className="content-834__group-left-content">
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Không yêu cầu có kiến thức trước</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Không yêu cầu có kiến thức trước</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Không yêu cầu có kiến thức trước</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 content-834__group-right">
                <img className="rounded" src={img_teaching} />
              </div>
            </div>
          </div>
        </section>

        <section className="content-123 " data-aos="fade-up">
          <div className="row content-123__group">
            <div className="col-md-6 img-content-123">
              <img src={chungchi} />
            </div>
            <div className="col-md-6 content-123__right">
              <div className="content-123__title">KHÓA HỌC TEXT TEXT</div>
              <div className="text-white">
                Clita diam vero et consetetur ipsum dolor, at amet stet.
              </div>
              <div className="content-123__mota">
                <TiTickOutline />
                <span>Giải pháp học trực tuyến</span>
              </div>
              <div className="content-123__mota">
                <TiTickOutline />
                <span>Giải pháp học trực tuyến</span>
              </div>
              <div className="content-123__mota">
                <TiTickOutline />
                <span>Giải pháp học trực tuyến</span>
              </div>
              <div className="content-123__mota">
                <TiTickOutline />
                <span>Giải pháp học trực tuyến</span>
              </div>
            </div>
          </div>
        </section>

        <section className="content-957 px-2" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="row content-834__group">
              <div className="col-md-6 content-834__group-left">
                <div className="content-834__group-left-title">
                  HỌC TRỰC TUYẾN QUA VIDEO
                </div>
                <div className="content-834__group-left-content">
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Không yêu cầu có kiến thức trước</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Không yêu cầu có kiến thức trước</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Không yêu cầu có kiến thức trước</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                  <div className="content-834__group-left-content-description">
                    <img className="mr-3" src={img_edit} />
                    <span>Giải pháp học trực tuyến</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 content-834__group-right">
                <img className="rounded" src={ttt} />
              </div>
            </div>
          </div>
        </section>

        <section className="blog-home mb-5 px-2" data-aos="fade-up">
          <div className="max-w-6xl mx-auto">
            <div className="blog-home__title text-center mb-3">BÀI VIẾT</div>
            <CarouselBlog arrProp={arrBlog} />
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
