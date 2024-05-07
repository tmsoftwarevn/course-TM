import React, { useEffect } from "react";
import "./HomePage.scss";
import img from "../../asset/7RJ4m1yLRcOZNvyt8bge_banner2.png";
import img2 from "../../asset/8aNM4sL6S0infZfko3G2_Thực hành UI_UX.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import khoitao from "../../asset/khoi-tao-image.png";
import img_teaching from "../../asset/teacher-is-teaching-school-carto.jpg";


function HomePage() {
  useEffect(function () {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <div class="homepage">
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

        <section className="content-654">
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
                  MUA NGAY
                </div>

              </div>
            </div>
          </div>
        </section>

        <section className="content-834">
            <div className="row content-834__group">
              <div className="col-md-6 content-834__group-left"></div>
              <div className="col-md-6 content-834__group-right">
                <img src={img_teaching} />
              </div>

            </div>

        </section>


      </div>
    </>
  );
}

export default HomePage;
