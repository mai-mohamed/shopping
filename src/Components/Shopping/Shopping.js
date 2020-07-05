import React, { useState } from "react";
import AllProducts from "./AllProducts/AllProducts";
import AddProduct from "./AddProduct/AddProduct";

function Shopping() {
  const [allProducts, setAllProducts] = useState([
    { productName: "product1", productQuantity: "10", productPrice: "1000" },
    { productName: "product2", productQuantity: "20", productPrice: "2000" },
    { productName: "product3", productQuantity: "30", productPrice: "3000" },
  ]);

  const [editData, setEditData] = useState({});

  const handleAddProduct = (newProduct) => {
    setAllProducts([...allProducts, newProduct]);
  };

  const handleDeleteProduct = (deletedProduct) => {
    const newUpdatedProductsList = allProducts.filter((product) => {
      return product.productName !== deletedProduct;
    });
    setAllProducts(newUpdatedProductsList);
  };

  const handleEditProduct = (product) => {
    setEditData(product);
  };

  return (
    <div>
      <AddProduct handleAddProduct={handleAddProduct} EditData={editData} />

      <AllProducts
        productsList={allProducts}
        handleDeleteProduct={handleDeleteProduct}
        handleEditProduct={handleEditProduct}
      />
    </div>
  );
}

export default Shopping;
