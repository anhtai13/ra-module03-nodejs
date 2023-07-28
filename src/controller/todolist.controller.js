import getNextId from "../utilities/getNextId.js";

let todolists = [];

// Trả về trang HTML hiển thị danh sách việc cần làm
const searchTodo = (req, res) => {
  res.render("pages/todolists/index", {
    title: "Danh sách việc cần làm",
    todolists: todolists,
  });
};

// Trả về trang HTML - thêm mới user
const viewAddTodo = (req, res) => {
  res.render("pages/todolists/new");
};

// Thực hiện add todo: nhận request từ form thêm mới todo
const addTodo = (req, res) => {
  const input = req.body;

  const newTodo = {
    ...input,
    id: getNextId(todolists),
  };

  todolists.push(newTodo);

  res.redirect("/todolists");
};

// Trả về HTML - thông tin todo
const getDetailTodo = (req, res) => {};

// Trả về HTML - thông tin việc cần làm
const viewEditTodo = (req, res) => {
  const { id } = req.params;

  const todo = todolists.find((todo) => todo.id == id);

  if (todo) {
    res.render("pages/todolists/edit", { todo: todo });
  } else {
    res.render("error/404", { msg: "Not found" });
  }
};

// Thực hiện cập nhật todolist
const updateTodo = (req, res) => {
  const { id } = req.params;

  const input = req.body;

  todolists = todolists.map((todo) => {
    if (todo.id == id) {
      return {
        ...todo,
        todo: input.todo,
      };
    } else {
      return todo;
    }
  });
  res.redirect("/todolists");
};

// Thực hiện xóa todo
const deleteTodo = (req, res) => {
  const { id } = req.params;

  const todo = todolists.find((todo) => {
    return todo.id == id;
  });

  if (todo) {
    todolists = todolists.filter((todo) => {
      return todo.id != id;
    });

    res.redirect("/todolists");
  } else {
    res.render("error/404", { msg: "Việc cần làm không tồn tại" });
  }
};

export default {
  searchTodo,
  viewAddTodo,
  addTodo,
  getDetailTodo,
  viewEditTodo,
  updateTodo,
  deleteTodo,
};
