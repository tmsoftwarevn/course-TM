import "./lienhe.scss";
import img_test from "../../asset/peson.jpg";
import contact from "../../asset/contact-us-img-550x352.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AlertCustom from "../../alert/AlertCustom";
import { useState } from "react";
import Button from "@mui/material/Button";

const Lienhe = () => {
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!data.get("email").match(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)) {
      setOpen(true);
      setErr("Email không đúng định dạng");
      return;
    }
    let check = /(03|05|07|08|09)+([0-9]{8})\b/.test(data.get("phone"));
    if (!check) {
      setOpen(true);
      setErr("Số điện thoại không đúng định dạng");
      return;
    }
    if (!data.get("noidung")) {
      setOpen(true);
      setErr("Bạn chưa nhập nội dung");
      return;
    }
    console.log({
      email: data.get("email"),
      phone: data.get("phone"),
      noidung: data.get("noidung"),
    });
  };

  return (
    <div className="lien-he pt-3 pb-3 px-2">
      <div className="max-w-7xl mx-auto overflow-hidden ">
        <div className="row">
          <div className="col-md-5 lienhe-left ">
            <img className="w-full" src={img_test}></img>
            <p className="text-blue-400 font-bold text-center mt-2">
              CEO Cty TM Branding
            </p>
          </div>
          <div className="col-md-7 lienhe-right mt-3">
            <p className="text-3xl text-blue-400 mb-3">Tôi là: Nguyễn Văn A</p>
            <p className="text-lg mb-2">
              Tôi là tác giả cuốn sách “Tuổi Trẻ Vượt Bão”, là 1 copywriter gần
              10 năm kinh nghiệm và hiện đang là 1 creator với hơn 300.000 người
              theo dõi trên các nền tảng mạng xã hội, hiện tôi cũng đang tự kinh
              doanh online.
            </p>
            <p className="text-lg mb-2">
              Tôi lập ra “Cộng Đồng Khởi Nghiệp Creator” với 03 mục đích:
            </p>
            <p className="text-lg mb-2">
              1. Tôi đã vượt qua hơn 10.000 giờ luyện tập kỹ năng Viết nên tôi
              muốn sử dụng kỹ năng này để chia sẻ kiến thức của mình đến với thế
              giới thông qua cộng đồng này.
            </p>
            <p className="text-lg mb-2">
              2. Giúp bạn trở thành nhà sáng tạo nội dung và tận dụng mạng xã
              hội để phát triển sự nghiệp và tạo ra thu nhập.
            </p>
            <p className="text-lg mb-2">
              3. Tìm kiếm những người cùng chung đam mê và chí hướng trở thành
              nhà sáng tạo nội dung, vì thực sự công việc này rất cô đơn.
            </p>
            <p className="text-lg mb-2">
              Bạn có thể đọc các bài viết chia sẻ kiến thức của tôi ở mục Blog.
            </p>
            <p className="text-lg mb-2">
              Phía dưới là các nền tảng mạng xã hội tôi đang hoạt động.
            </p>

            <p className="text-lg mb-2">
              Nếu có thể chúng ta hãy kết bạn với nhau và tôi sẽ đồng hành cùng
              bạn trên con đường sáng tạo nội dung.
            </p>
            <p className="text-lg mb-2">Cảm ơn bạn!</p>

            <div className="flex gap-5 mt-4 justify-center">
              <FaFacebook className="text-blue-600 text-5xl cursor-pointer" />
              <FaYoutube className="text-red-600 text-5xl cursor-pointer" />
              <FaTiktok className="text-black text-5xl cursor-pointer" />
            </div>
          </div>
        </div>

        <p className="text-center mt-20 mb-10 font-bold text-3xl text-blue-500">
          Liên hệ
        </p>
        <div className="row">
          <div className="col-md-6 contact-l">
            <img src={contact}></img>
          </div>
          <div className="col-md-6 contact-r">
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate={false}
              sx={{ mt: 1 }}
            >
              <div className="row">
                <div className="col-12 col-md-6 mt-4">
                  <TextField
                    name="email"
                    className="w-full"
                    label="Email"
                    required
                  />
                </div>
                <div className="col-12 col-md-6 mt-4">
                  <TextField
                    name="phone"
                    className="w-full"
                    required
                    label="Số điện thoại"
                  />
                </div>
                <div className="col-12 col-sm-12 mt-4">
                  <TextField
                    required
                    name="noidung"
                    className="w-full"
                    label="Nội dung"
                    multiline
                    rows={2}
                    maxRows={4}
                  />
                </div>

                <div className="col-12">
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Gửi
                  </Button>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>

      <AlertCustom open={open} setOpen={setOpen} err={err} />
    </div>
  );
};

export default Lienhe;
