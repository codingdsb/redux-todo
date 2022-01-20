import { Checkbox, TickCircleIcon, TrashIcon } from "evergreen-ui";
import React from "react";
import EditTodo from "./EditTodo";
import { useDispatch } from "react-redux";
import { toggleCompleted, deleteTodo } from "../features/Todos";
const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo">
      <div className="todosection">
        <Checkbox
          checked={todo.completed}
          onChange={() => dispatch(toggleCompleted(todo.id))}
        />
        &nbsp; &nbsp;
        <span>{todo.completed ? <del>{todo.text}</del> : todo.text}</span>
      </div>
      <div className="todosection">
        {todo.completed && (
          <>
            &nbsp; &nbsp;
            <TickCircleIcon color="success" size={25} />
          </>
        )}
        &nbsp; &nbsp;
        <EditTodo todo={todo} />
        &nbsp; &nbsp;
        <TrashIcon
          color="danger"
          size={25}
          style={{ cursor: "pointer" }}
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
      </div>
    </div>
  );
};

export default TodoItem;
