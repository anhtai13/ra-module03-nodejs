import { Router } from "express";
import userController from "./controllers/user.controller.js";
import productController from "./controllers/product.controller.js";

const router = Router();

// User management
router.get("/users", userController.searchUsers);
router.get("/users/new", userController.viewAddUser);
router.post("/users", userController.addUser);
router.get("/users/:id", userController.getDetailUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// product management
router.get("/products", productController.searchProducts);
router.post("/products", productController.addProduct);
router.get("/products/:id", productController.getDetailProduct);
router.put("/products/:id", productController.updateProduct);
router.delete("/products/:id", productController.deleteProduct);

export default router;
