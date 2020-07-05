import React from "react";
import { Card, Row, Col, Button } from "antd";

function AllProducts({ productsList, handleDeleteProduct, handleEditProduct }) {
  return (
    <div>
      <Row justify="space-between">
        {productsList.map((product) => (
          <Col span={7} key={product.productName} className="product-details">
            <Card title={product.productName} bordered={true}>
              <h4>Quantity: {product.productQuantity}</h4>
              <h4>Price: {product.productPrice}</h4>
              <Button
                onClick={() => {
                  handleDeleteProduct(product.productName);
                }}
              >
                delete
              </Button>
              <Button
                onClick={() => {
                  handleEditProduct(product);
                }}
              >
                Edit
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AllProducts;
