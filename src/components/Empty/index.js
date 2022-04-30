import React from "react";
import "./Empty.css";

function Empty() {
  return (
    <div className="empty__container">
      <p className="first-task">Create your first task</p>
      <img src="https://img.icons8.com/fluency/96/000000/task.png" alt="task icon" />
    </div>
  );
}

export { Empty };
