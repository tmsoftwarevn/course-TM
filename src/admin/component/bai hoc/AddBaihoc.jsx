import { Card, Col, Input, InputNumber, Modal, Row } from "antd";

const ModalAddBaihoc = (props) => {
  const { isModalAdd, setIsModalAdd } = props;

  const handleCallAdd = () => {
    // all api
    setIsModalAdd(false);
  };
  const handleCancel = () => {
    setIsModalAdd(false);
  };
  const onChangeBaigiang =(value)=>{
    console.log('vvv',value);
  }

  return (
    <div>
      <Modal
        title="Thêm bài học"
        open={isModalAdd}
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
              <Card title="Tên bài học" bordered={true}>
                <Input></Input>
              </Card>
            </Col>
            <Col span={12}>
              <Card title="Số bài giảng" bordered={true}>
              <InputNumber min={1} max={100}  onChange={onChangeBaigiang} />
              </Card>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="Tổng thời gian">
                <Input />
              </Card>
            </Col>
           
          </Row>
        </div>
      </Modal>
    </div>
  );
};
export default ModalAddBaihoc;
