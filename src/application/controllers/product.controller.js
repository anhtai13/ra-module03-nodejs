import productService from "../services/product.service.js";

const searchProducts = (request, response) => {
  const { name, page, limit } = request.query;

  productService.searchProducts(
    { name: name, page: page, limit: limit },
    (error, result) => {
      if (error) {
        response.status(500).send({
          error: error.message,
        });
      } else {
        response.send({
          products: result,
        });
      }
    }
  );
};
const addProduct = (request, response) => {};

const getDetailProduct = (request, response) => {
  const { id } = request.params;
  productService.getDetailProduct(id, (error, result) => {
    if (error) {
      response.status(500).send({
        error: error.message,
      });
    } else {
      response.send(result);
    }
  });
};
const updateProduct = (request, response) => {};

const deleteProduct = (request, response) => {
  const { id } = request.params;

  productService.deleteProduct(id).then(id, (error, response) => {
    if (error) {
      response.status(500).send({
        error: error.message,
      });
    } else {
      response.send({ products: result });
    }
  });
};

export default {
  searchProducts,
  addProduct,
  updateProduct,
  getDetailProduct,
  deleteProduct,
};
