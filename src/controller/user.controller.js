import getNextId from "../utilities/getNextId.js";
import { querySearchUsers } from "../repositories/user.repositories.js";

let users = [
  {
    id: 1,
    username: "thailq",
    email: "thailq@gmail.com",
  },

  {
    id: 2,
    username: "giangnt",
    email: "giangnt@gmail.com",
  },
];

// Trả về trang HTML hiển thị danh sách user
const searchUser = (req, res) => {
  querySearchUsers().then((userList) => {
    res.render("pages/users/index", {
      title: "Danh sách người dùng",
      users: userList,
    });
  });
};

// Trả về trang HTML - form thêm mới user
const viewAddUser = (req, res) => {
  res.render("pages/users/new");
};

// Thực hiện add user: nhận request từ form thêm mới user
const addUser = (req, res) => {
  const input = req.body;

  const newUser = {
    ...input,
    id: getNextId(users),
  };

  users.push(newUser);

  res.redirect("/users");
};

// Trả về HTML - thông tin user
const getDetailUser = (req, res) => {};

// Trả về HTML form cập nhật user
const viewEditUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id == id);

  if (user) {
    res.render("pages/users/edit", { user: user });
  } else {
    res.render("error/404", { msg: "Người dùng không tồn tại" });
  }
};

// Thực hiện cập nhật user
const updateUser = (req, res) => {
  const { id } = req.params;

  const input = req.body;

  users = users.map((user) => {
    if (user.id == id) {
      return {
        ...user,
        username: input.username,
        email: input.email,
      };
    } else {
      return user;
    }
  });

  // Chuyển hướng về trang danh sách
  res.redirect("/users");
};

// Thực hiện xóa user
const deleteUser = (req, res) => {
  const { id } = req.params;

  deleteUserByUserId(id);

  res.redirect("/users");
};

export default {
  searchUser,
  viewAddUser,
  addUser,
  getDetailUser,
  viewEditUser,
  updateUser,
  deleteUser,
};
