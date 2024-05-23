import profile from "../../asset/bg profile.jpg";
import "./thanhtoan.scss";
import qrCode from "../../asset/40415-bdc-qr-code.webp";

const ThanhToan = () => {
  return (
    <div className="thanh-toan">
      <div className="max-w-6xl mx-auto">
        <div className="banner-thanhtoan mt-3 mb-5">
          <img src={profile}></img>
        </div>

        <div className="w-9/12 mx-auto">
          <table class="table table-striped">
            <tbody>
              <tr>
                <th colSpan={2} className="text-center chuyen-khoan">
                  THÔNG TIN CHUYỂN KHOẢN
                </th>
              </tr>
              <tr>
                <td>Chủ tài khoản</td>
                <td className="text-blue-600 font-semibold">Nguyễn Tăng Hải</td>
              </tr>
              <tr>
                <td>Số tài khoản</td>
                <td className="!text-blue-600 font-semibold">123456789</td>
              </tr>
              <tr>
                <td>Ngân hàng</td>
                <td className="text-blue-600 font-semibold">VCB</td>
              </tr>
              <tr>
                <td>Số tiền</td>
                <td className="!text-blue-600 font-semibold">5.000.000 VND</td>
              </tr>
              <tr>
                <td>Nội dung</td>
                <td className="text-blue-600 font-semibold">FH4235BRH</td>
              </tr>
              <tr>
                <td colSpan={2} className="text-center !text-blue-600">
                  *Lưu ý: Nhập nội dung chính xác để đơn hàng kích hoạt tự động.
                  Thời gian xử lý giao dịch trung bình từ 30-60s, Vui lòng không
                  đóng trang khi giao dịch chưa hoàn tất
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-center text-2xl text-blue-600">Quét mã để thanh toán</p>
          <div className="mx-auto mb-5">
            <img className="mx-auto" src={qrCode} width={300} height={300}></img>
          </div>


        </div>
      </div>
    </div>
  );
};

export default ThanhToan;
