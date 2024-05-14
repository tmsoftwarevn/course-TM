import { Outlet, useNavigate } from "react-router-dom";
import profile from "../../asset/bg profile.jpg";
import "./account.scss";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="acccount mb-5">
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

        <div className="content">
          <div className="row">
            <div className="col-lg-3">
              <div className="content__left">
                <div className="title font-semibold" style={{ padding: "20px" }}>
                  Bảng điều khiển
                </div>
                <div className="leading-loose" style={{ padding: "15px" }}>
                  <p className="cursor-pointer hover:text-blue-600 hover:bg-gray-400 pl-2 hover:rounded">
                    Khóa học
                  </p>
                  <p className="cursor-pointer hover:text-blue-600 hover:bg-gray-400 pl-2 hover:rounded"
                  onClick={() => navigate("/account/ho-so")}
                  >
                    Hồ sơ
                  </p>
                  <p
                    className="cursor-pointer hover:text-blue-600 hover:bg-gray-400 pl-2 hover:rounded"
                    onClick={() => navigate("/account")}
                  >
                    Cài đặt
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
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
