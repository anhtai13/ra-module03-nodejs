import { Router } from "express";
import userController from "./controller/user.controller.js";
import todolistController from "./controller/todolist.controller.js";
const router = Router();

// User management
router.get("/users", userController.searchUser);
router.get("/users/new", userController.viewAddUser);
router.post("/users", userController.addUser);
router.get("/users/:id", userController.getDetailUser);
router.get("/users/:id/edit", userController.viewEditUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

// todolist management
router.get("/todolists", todolistController.searchTodo);
router.get("/todolists/new", todolistController.viewAddTodo);
router.post("/todolists", todolistController.addTodo);
router.get("/todolists/:id", todolistController.getDetailTodo);
router.get("/todolists/:id/edit", todolistController.viewEditTodo);
router.put("/todolists/:id", todolistController.updateTodo);
router.delete("/todolists/:id", todolistController.deleteTodo);

export default router;
