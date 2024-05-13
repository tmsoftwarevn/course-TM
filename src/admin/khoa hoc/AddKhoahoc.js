import {
  Button,
  Card,
  Col,
  Flex,
  Input,
  InputNumber,
  Modal,
  Row,
  message,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Upload } from "antd";

import { Editor } from "@tinymce/tinymce-react";
import TextArea from "antd/es/input/TextArea";
import { convertSlug } from "../../utils/convertSlug";
import ReactPlayer from "react-player";

const AddKhoahoc = (props) => {
  const { isModalAddKhoahoc, setIsModalAddKhoahoc, fetchKhoahoc_All } = props;
  //////////////////
  const refEditor = useRef(null);
  const filePickerCallback = function (cb, value, meta) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");

    input.onchange = async function () {
      const file = input.files[0];

      // const res = await callUpload_Single_Img_Khoahoc(file);
      // if (res && res.EC === 1) {
      //   cb(
      //     `${process.env.REACT_APP_BACKEND_URL}/images/Khoahoc/${res.data.fileUploaded}`,
      //     { alt: file.name }
      //   );
      // }
    };

    input.click();
  };
  ////////////////////
  const params = useParams();

  const [totalHour, setTotalHour] = useState("");
  const [totalSection, setTotalSection] = useState();
  const [newPrice, setNewPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [link, setLink] = useState("");
  const [tieude, setTieude] = useState();
  const [mota, setMota] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const handleUploadFile_thumbnail = async ({ file, onSuccess, onError }) => {
    // const res = await callUpload_Single_Img(file);
    // if (res && res.data) {
    //   if (thumbnail) {
    //     let remove = await callDeleteImg(thumbnail);
    //   }
    //   setThumbnail(res.data.fileUploaded);
    //   onSuccess("ok");
    // } else {
    //   onError("Đã có lỗi khi upload");
    // }
  };

  const handleCallAdd = async () => {
    let noidung = refEditor?.current?.getContent();

    console.log(tieude, totalHour, totalSection, oldPrice, newPrice);

    // if (!key_word || !meta_des || !mota_ngan || !thumbnail || !tieude) {
    //   message.error("Vui lòng nhập đầy đủ thông tin");
    //   return;
    // }
    let slug = convertSlug(tieude);
    const res = {};
    // const res = await callAddKhoahoc(
    //   tieude,
    //   key_word,
    //   meta_des,
    //   noidung,
    //   thumbnail,
    //   mota_ngan,
    //   slug
    // );
    if (res && res.EC === 1) {
      message.success("Thêm thành công");
      //handleCancel();
      fetchKhoahoc_All();
    } else {
      message.error("Thêm thất bại");
      //handleCancel();
    }
  };

  const handleCancel = () => {
    setIsModalAddKhoahoc(false);
    setMota("");
    setFileList("");
    setOldPrice("");
    setTotalHour("");
    setTotalSection("");
    setTieude("");
    setFileList([]);
  };

  return (
    <>
      <Modal
        title="Thêm khóa học"
        open={isModalAddKhoahoc}
        onOk={() => {
          handleCallAdd();
        }}
        okText="Thêm"
        onCancel={handleCancel}
        maskClosable={false}
        forceRender
        width={1200}
      >
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Tên khóa học" bordered={true}>
                <Input
                  onChange={(e) => setTieude(e.target.value)}
                  placeholder="Nhập tên khóa học"
                  value={tieude}
                ></Input>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Ảnh khóa học" bordered={true}>
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  customRequest={handleUploadFile_thumbnail}
                  onChange={onChange}
                  onPreview={onPreview}
                  maxCount={1}
                  multiple={false}
                  accept="image/*"
                >
                  Tải lên
                </Upload>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Tổng số giờ">
                <Input
                  onChange={(e) => setTotalHour(e.target.value)}
                  placeholder="Nhập số giờ"
                  value={totalHour}
                ></Input>

              </Card>
            </Col>
            <Col span={12}>
              <Card title="Tổng bài học">
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  onChange={(e) => setTotalSection(e)}
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card title="Giá mới">
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  addonAfter="VND"
                  onChange={(e) => setNewPrice(e)}
                />
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Giá cũ">
                <InputNumber
                  min={1}
                  style={{ width: "100%" }}
                  formatter={(value) =>
                    `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }
                  addonAfter="VND"
                  onChange={(e) => setOldPrice(e)}
                />
              </Card>
            </Col>

            <Col span={12}>
              <Card title="Video">
              <Input
                className="mb-4"
                onChange={(e) => setLink(e.target.value)}
                placeholder="Nhập link video"
               
              ></Input>
              <ReactPlayer
                url={link}
                width={"100%"}
                height={"300px"}
                controls={true}
              />
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    </>
  );
};

export default AddKhoahoc;
