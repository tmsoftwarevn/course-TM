import { Card, Col, Input, InputNumber, Modal, Row } from "antd";

const ModalUpdateBaigiang = (props) => {
  const { isModalUpdate, setIsModalUpdate } = props;

  const handleCallAdd = () => {
    // all api
    setIsModalUpdate(false);
  };
  const handleCancel = () => {
    setIsModalUpdate(false);
  };
  const onChangeBaigiang = (value) => {
    console.log("vvv", value);
  };

  return (
    <div>
      <Modal
        title="Cập nhật bài giảng"
        open={isModalUpdate}
        onOk={() => {
          handleCallAdd();
        }}
        okText="Thêm"
        onCancel={handleCancel}
        maskClosable={false}
        forceRender
        width={1000}
      >
        <div>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Tên bài giảng" bordered={true}>
                <Input></Input>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Thời lượng" bordered={true}>
                <Input></Input>
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Link video">
                <Input />
              </Card>
            </Col>
          </Row>
        </div>
      </Modal>
    </div>
  );
};
export default ModalUpdateBaigiang;
