import productRepository from "../repositories/product.repository.js";
import fs from "fs";
import { getFileExtension } from "../../utilities/upload.util.js";

const searchProducts = (params, callback) => {
    if (params.limit && !/^[0-9]+$/.test(params.limit)) {
        callback({ message: "Limit is number" }, null);
    } else if (params.pager && !/^[0-9]+$/.test(params.page)) {
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

const addProduct = (requestBody, callback) => {
    let originalName = null;
    let path = null;

    if (requestBody.image) {
        originalName = requestBody.image.originalname;
        path = requestBody.image.path;
    }

    const validate = (params) => {
        let errors = new Map();

        // Validate name product
        if (!params.name) {
            errors.set("name", "Tên sản phẩm không được bỏ trống.");
        } else if (typeof params.name !== "string") {
            errors.set("name", "Tên sản phẩm phải là chuỗi.");
        }

        if (typeof params.category !== "string") {
            errors.set("category", "Vai trò phải là chuỗi.");
        } else if (
            params.category !== "1" &&
            params.category !== "2" &&
            params.category !== "3"
        ) {
            errors.set("category", "Vai trò chỉ cho phép nhập 1 hoặc 2 hoặc 3");
        }
        return errors;
    };

    const validateErrors = validate(requestBody);

    if (validateErrors.size !== 0) {
        callback(Object.fromEntries(validateErrors), null);
    } else {
        let image = null;

        if (requestBody.image) {
            const imageExtension = getFileExtension(originalName);
            image = `image${requestBody.image}.${imageExtension}`;
            const imageLocation = `./public/${image}`;

            // Copy uploaded file to saving loacation
            fs.cpSync(path, imageLocation);
        }

        const newProduct = {
            sku: requestBody.sku,
            name: requestBody.name,
            category: requestBody.category,
            description: requestBody.description,
            unit_price: requestBody.unit_price,
            image: image,
            create_by_id: requestBody.authId,
            updated_by_id: requestBody.authId,
        };

        productRepository.addProduct(newProduct, (error, result) => {
            if (path) {
                fs.rmSync(path);
            }
            if (error) {
                callback(error, result);
            } else {
                callback(null, result);
            }
        });
    }
};

const updateProduct = (productId, requestBody, callback) => {
    let originalName = null;
    let path = null;

    if (requestBody.image) {
        originalName = requestBody.image.originalname;
        path = requestBody.image.path;
    }

    const validate = (params) => {
        let errors = new Map();

        // Validate name product
        if (!params.name) {
            errors.set("name", "Tên sản phẩm không được bỏ trống.");
        } else if (typeof params.name !== "string") {
            errors.set("name", "Tên sản phẩm phải là chuỗi.");
        }

        if (typeof params.category !== "string") {
            errors.set("category", "Vai trò phải là chuỗi.");
        } else if (
            params.category !== "1" &&
            params.category !== "2" &&
            params.category !== "3"
        ) {
            errors.set("category", "Vai trò chỉ cho phép nhập 1, 2, 3.");
        }

        return errors;
    };

    const validateErrors = validate(requestBody);

    if (validateErrors.size !== 0) {
        callback(Object.fromEntries(validateErrors), null);
    } else {
        let image = null;

        if (requestBody.image) {
            const imageExtension = getFileExtension(originalName);
            image = `image/${requestBody.name}.${imageExtension}`;
            const imageLocation = `./public/${image}`;

            // Copy upload file to saving location
            fs.cpSync(path, imageLocation);
        }

        const updateProduct = {
            sku: requestBody.sku,
            name: requestBody.name,
            category: requestBody.category,
            description: requestBody.description,
            unit_price: requestBody.unit_price,
            image: image,
            updated_by_id: requestBody.authId,
        };

        productRepository.updateProduct(
            productId,
            updateProduct,
            (error, result) => {
                if (path) {
                    fs.rmSync(path);
                }
                if (error) {
                    callback(error, null);
                } else {
                    callback(null, result);
                }
            }
        );
    }
};

const getDetailProduct = (id, callback) => {
    if (!/^[0-9]+$/.test(id)) {
        callback({ message: "ID phải là số" }, null);
    } else {
        productRepository.getDetailProduct(id, (error, result) => {
            if (error) {
                callback(error, null);
            } else if (result.length === 0) {
                callback({ message: "Product not found" }, null);
            } else {
                callback(null, result);
            }
        });
    }
};

const deleteProduct = (id, callback) => {
    if (!/^[0-9]+$/.test(id)) {
        callback({ message: "ID phải là số" }, null);
    } else {
        productRepository.deleteProduct(id, (error, result) => {
            if (error) {
                callback(error, null);
            } else if (result.affectedRows === 0) {
                callback({ message: "Product not found" }, null);
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
