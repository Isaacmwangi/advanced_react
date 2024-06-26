import React, { useState } from "react";
import { ACTIONS } from "../0.useReducer/actions/actions";

function Todo({ todo, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  const handleEdit = () => {
    if (isEditing && newName.trim() !== "") {
      dispatch({ type: ACTIONS.EDIT_TODO, payload: { id: todo.id, newName } });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      ) : (
        <div
          style={{ color: todo.complete ? "rgb(7, 245, 7)" : "#fff" }}
          className="todo__title"
        >
          {todo.name}
        </div>
      )}
      <div className="todo__buttons">
        <button
          className="todo__toggle"
          onClick={() =>
            dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })
          }
        >
          Toggle
        </button>
        <button
          className="todo__delete"
          onClick={() =>
            dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })
          }
        >
          Delete
        </button>
        <button className="todo__edit" onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
}

export default Todo;
