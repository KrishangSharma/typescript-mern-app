import express from "express";
import {
  getTodos,
  addTodo,
  markAsComplete,
  deleteTodo,
} from "../controllers/todoController";

const router = express.Router();

//* METHOD  GET
//* DESC    Health Check
//* URL     /api/healthcheck
router.get("/healthcheck", (req, res) => res.send("Everything's fineee!"));

//* METHOD  GET
//* DESC    Get all todos
//* URL     /api/all
router.get("/all", getTodos);

//* METHOD  POST
//* DESC    Add a todo
//* URL     /api/new
router.post("/new", addTodo);

//* METHOD  POST
//* DESC    Mark a todo as complete
//* URL     /api/complete/:id
router.post("/complete/:id", markAsComplete);

//* METHOD  DELETE
//* DESC    Delete
//* URL     /api/delete/:id
router.delete("/delete/:id", deleteTodo);

export const todoRoutes = router;
