import { Outlet, useLocation, useNavigate } from "react-router-dom";
import profile from "../../asset/bg profile.jpg";
import "./account.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { doLogoutAction } from "../../redux/account/accountSlice";
import { useEffect, useState } from "react";

const Account = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [active, setActive] = useState(false);

  const handleLogout = async () => {
    // const res = await callLogout(idUser);
    // if (res && res.data) {
    //   dispatch(doLogoutAction());
    //   dispatch(doRemoveCartLogout());
    // }
    dispatch(doLogoutAction());
    navigate("/login", { state: { isLogout: true } });
  };

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className="acccount pb-5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="banner-account mt-3">
          <img src={profile}></img>
          <div className="flex items-center g-name">
            <Stack>
              <Avatar
                style={{ width: "70px", height: "70px" }}
                src="/broken-image.jpg"
              />
            </Stack>
            <span className="ml-3 text-xl">Nguyễn Văn A</span>
          </div>
        </div>

        <div className="content pb-2">
          <div className="row">
            <div className="col-md-3">
              <div className="content__left">
                <div
                  className="title font-semibold"
                  style={{ padding: "20px" }}
                >
                  Bảng điều khiển
                </div>
                <div className="leading-loose" style={{ padding: "15px" }}>
                  <p
                    className={
                      active === "/account/khoa-hoc"
                        ? "cursor-pointer text-blue-600 bg-slate-300 pl-2 rounded mt-1"
                        : "cursor-pointer hover:text-blue-600 hover:bg-slate-300 pl-2 rounded mt-1"
                    }
                    onClick={() => navigate("/account/khoa-hoc")}
                  >
                    Khóa học
                  </p>
                  <p
                    className={
                      active === "/account/thong-tin"
                        ? "cursor-pointer text-blue-600 bg-slate-300 pl-2 rounded mt-1"
                        : "cursor-pointer hover:text-blue-600 hover:bg-slate-300 pl-2 rounded mt-1"
                    }
                    onClick={() => navigate("/account/thong-tin")}
                  >
                    Thông tin
                  </p>
                  <p
                    className={
                      active === "/account/don-hang"
                        ? "cursor-pointer text-blue-600 bg-slate-300 pl-2 rounded mt-1"
                        : "cursor-pointer hover:text-blue-600 hover:bg-slate-300 pl-2 rounded mt-1"
                    }
                    onClick={() => navigate("/account/don-hang")}
                  >
                    Đơn hàng
                  </p>
                  <p
                    className={
                      active === "/account/bao-mat"
                        ? "cursor-pointer text-blue-600 bg-slate-300 pl-2 rounded mt-1"
                        : "cursor-pointer hover:text-blue-600 hover:bg-slate-300 pl-2 rounded mt-1"
                    }
                    onClick={() => navigate("/account/bao-mat")}
                  >
                    Bảo mật
                  </p>
                  <p
                    className="cursor-pointer hover:text-blue-600 hover:bg-slate-300 pl-2 hover:rounded mt-1"
                    onClick={() => handleLogout()}
                  >
                    Đăng xuất
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="content__right">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
