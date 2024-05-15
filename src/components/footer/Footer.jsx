import "../../scss/footer.scss";

import { MdKeyboardArrowRight, MdLocationOn } from "react-icons/md";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BiWorld } from "react-icons/bi";

import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  const [menu_video, setMenu_video] = useState([]);
  const [menu_chupanh, setMenu_chupanh] = useState([]);
  const [menu_xaykenh, setMenu_xaykenh] = useState([]);
  const navigate = useNavigate();

  return (
    <footer className="footer px-2">
      <div className="mx-auto max-w-6xl">
        <div className="row w-full">
          <div class="footer-col col-sm-6 col-md-3">
            <h4>Liên hệ</h4>
            <ul className="ul-ft">
              <li>
                <span>
                  <MdLocationOn
                    style={{
                      display: "inline-block",
                      marginRight: "5px",
                      fontSize: "18px",
                      marginTop: "1px",
                    }}
                  />
                </span>
                Sky9 Số 61, Đường số 1, Phường Phú Hữu, TP.Thủ Đức, Ho Chi Minh
                City, Vietnam
              </li>

              <li
                onClick={() => {
                  window.open("tel:" + process.env.REACT_APP_PHONE);
                }}
              >
                <IoCall
                  style={{
                    display: "inline-block",
                    marginRight: "5px",
                    fontSize: "18px",
                    marginTop: "5px",
                  }}
                />
                {process.env.REACT_APP_PHONE}
              </li>
              <li
                onClick={() => {
                  window.open("mailto:" + "mr.haidesign@gmail.com");
                }}
              >
                <IoMdMail
                  style={{
                    display: "inline-block",
                    marginRight: "5px",
                    fontSize: "18px",
                    marginTop: "5px",
                  }}
                />
                mr.haidesign@gmail.com
              </li>
              <li
                onClick={() => window.open("https://tmbranding.vn/", "_blank")}
              >
                <BiWorld
                  style={{
                    display: "inline-block",
                    marginRight: "5px",
                    fontSize: "18px",
                    marginTop: "5px",
                  }}
                />
                tmbranding.vn
              </li>
            </ul>

            {/* /// */}
            {/* <div className="center-icon">
              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_LINK_FACEBOOK, "_blank")
                }
              >
                <FaFacebookF className="fb" />
              </div>

              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_LINK_YOUTUBE, "_blank")
                }
              >
                <FaYoutube className="yt" />
              </div>
              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_LINK_TIKTOK, "_blank")
                }
              >
                <FaTiktok className="tiktok" />
              </div>
              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_URL_ZALO, "_blank")
                }
              >
                <SiZalo className="zalo" />
              </div>
            </div> */}
          </div>
          <div class="footer-col col-sm-6 col-md-3">
            <h4>Khóa học</h4>
            <ul className="ul-ft">
              {menu_video.map((item, index) => {
                return (
                  <li key={item.id}>
                    <MdKeyboardArrowRight />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="footer-col col-sm-6 col-md-3">
            <h4>Blog</h4>
            <ul className="ul-ft">
              {menu_chupanh.map((item, index) => {
                return (
                  <li key={item.id}>
                    <MdKeyboardArrowRight />
                    {item.name}
                  </li>
                );
              })}
            </ul>
          </div>
          <div class="footer-col col-sm-6 col-md-3">
            <h4>Mạng xã hội</h4>
            <div className="center-icon">
              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_LINK_FACEBOOK, "_blank")
                }
              >
                <FaFacebookF className="fb" />
              </div>

              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_LINK_YOUTUBE, "_blank")
                }
              >
                <FaYoutube className="yt" />
              </div>
              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_LINK_TIKTOK, "_blank")
                }
              >
                <FaTiktok className="tiktok" />
              </div>
              <div
                className="g-fb"
                onClick={() =>
                  window.open(process.env.REACT_APP_URL_ZALO, "_blank")
                }
              >
                <SiZalo className="zalo" />
              </div>
            </div>
          </div>
        </div>

        <p className="ft-end">
          &copy; All rights reserved. Designed By{" "}
          <span
            className="sp-tm"
            onClick={() => window.open("https://tmsoftware.vn/", "_blank")}
          >
            TM Software
          </span>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
