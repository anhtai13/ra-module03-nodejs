import productRepository from "../repositories/product.repository.js";

const searchProducts = (params, callback) => {
  if (!/^[0-9]+$/.test(params.limit)) {
    callback({ message: "Limit is number" }, null);
  } else if (!/^[0-9]+$/.test(params.page)) {
    callback({ message: "Page is number" }, null);
  } else {
    productRepository.searchProducts(params, (error, result) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, result);
      }
    });
  }
};

const addProduct = (params, callback) => {};

const getDetailProduct = (id, callback) => {
  if (!/^[0-9]+$/.test(id)) {
    callback({ message: "ID phải là số" }, null);
  } else {
    productRepository.getDetailProduct(id, (error, result) => {
      if (error) {
        callback(error, null);
      } else if (result.length === 0) {
        callback({ message: "User not found" }, null);
      } else {
        callback(null, result);
      }
    });
  }
};

const updateProduct = (params, callback) => {};

const deleteProduct = (id, callback) => {
  if (!/^[0-9]+$/.test(id)) {
    callback({ message: "ID phải là số" }, null);
  } else {
    productRepository.deleteProduct(id, (error, result) => {
      if (error) {
        callback(error, null);
      } else if (result.affectedRows === 0) {
        callback({ message: "User not found" }, null);
      } else {
        callback(null, result);
      }
    });
  }
};

export default {
  searchProducts,
  addProduct,
  updateProduct,
  getDetailProduct,
  deleteProduct,
};
