import productService from "./../services/product.service.js";

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
                response.send(result);
            }
        }
    );
};

const addProduct = (request, response) => {
    if (request.auth.role !== 1) {
        response.status(403).send({
            error: "Không có quyền truy cập",
        });
        return;
    }

    const requestBody = request.body;
    const image = request.file;

    productService.addProduct(
        {
            ...requestBody,
            authId: request.auth.product_id,
            image: image,
        },
        (error, result) => {
            if (error) {
                response.status(500).send({ error: error });
            } else {
                response.status(201).send();
            }
        }
    );
};

const getDetailProduct = (request, response) => {
    if (request.auth.role !== 1) {
        response.status(403).send({
            error: "Không có quyền truy cập",
        });
        return;
    }

    const { id } = request.params;

    productService.getDetailProduct(id, (error, result) => {
        if (error) {
            response.status(500).send({
                error: error.message,
            });
        } else {
            response.send(result[0]);
        }
    });
};

const updateProduct = (request, response) => {
    if (request.auth.role !== 1) {
        response.status(403).send({
            error: "Không có quyền truy cập",
        });
        return;
    }

    const productId = request.params.id;

    const requestBody = request.body;

    const image = request.file;

    productService.updateProduct(
        productId,
        {
            ...requestBody,
            image: image,
        },
        (error, result) => {
            if (error) {
                response.status(500).send({
                    error: error.message,
                });
            } else {
                response.status(200).send();
            }
        }
    );
};

const deleteProduct = (request, response) => {
    if (request.auth.role !== 1) {
        response.status(403).send({
            error: "Không có quyền truy cập",
        });
        return;
    }

    const { id } = request.params;

    productService.deleteProduct(id, (error, result) => {
        if (error) {
            response.status(500).send({
                error: error.message,
            });
        } else {
            response.status(204).send();
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
