import React from "react";
import { useDrag } from "react-dnd";
import { dragItem } from "./constants";

const TodoCard = ({ todo }) => {
  const { title, priority, dueOn } = todo;

  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragItem.TODO_CARD,
    // type: "else",
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "10px",
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
      }}
      ref={drag}
    >
      <h4>{title}</h4>
      <p>
        Priority: {priority} | Due On: {new Date(dueOn).toLocaleDateString()}
      </p>
    </div>
  );
};

export default TodoCard;
