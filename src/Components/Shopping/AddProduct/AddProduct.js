import React, { useEffect } from "react";
import { Form, Input, Button, Row, Col } from "antd";
function AddProduct({ handleAddProduct, EditData }) {
  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue({
      productName: EditData.productName,
      productQuantity: EditData.productQuantity,
      productPrice: EditData.productPrice,
    });
  });

  return (
    <div>
      <Row justify="space-around">
        <Col span={10}>
          <p>add product</p>
          <Form form={form} onFinish={handleAddProduct}>
            <Form.Item name="productName">
              <Input placeholder="product name" />
            </Form.Item>
            <Form.Item name="productQuantity">
              <Input placeholder="product quantity" />
            </Form.Item>
            <Form.Item name="productPrice">
              <Input placeholder="product price" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Add</Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default AddProduct;
