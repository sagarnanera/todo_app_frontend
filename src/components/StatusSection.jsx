import React from "react";
import { dragItem } from "./constants";
import TodoCard from "./TodoCard";
import { useDrop } from "react-dnd";

const StatusSection = ({ status, todos }) => {
  const [{ isOver, canDrop }, drag] = useDrop(() => ({
    accept: dragItem.TODO_CARD,
    //   drop: () => moveTodoCard(x, y),
    drop: (item, monitor) => ondrop(item, monitor, status),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  return (
    <div
      ref={drag}
      key={status}
      style={{
        border: `2px dashed ${isOver && canDrop ? "green" : "black"}`,
        padding: "20px",
      }}
    >
      <div>
        <h3>{status}</h3>
        {todos.map((todo, index) => (
          <TodoCard todo={todo} key={todo._id} />
        ))}
      </div>
    </div>
  );
};

export default StatusSection;
