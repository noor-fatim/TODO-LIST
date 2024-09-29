import { useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const TodoList = ({ todoList, handleremove }) => {
  const [clickedIndex, setIndex] = useState(null);
  const handlecolor = (index) => {
    setIndex(index);
  };
  return (
    <ul style={{ listStyle: "none" }}>
      {todoList.map((list, index) => {
        return (
          <div key={index} className="todo-list">
            <FaRegCircle
              size={20}
              key={index}
              onClick={() => handlecolor(index)}
              style={{
                backgroundColor: clickedIndex === index ? "black" : "white",

                borderRadius: "50%",
              }}
            />
            <div style={{ width: "350px" }}>
              <li>{list}</li>
            </div>
            <RxCross2 size={30} onClick={() => handleremove(index)} />
          </div>
        );
      })}
    </ul>
  );
};

export default TodoList;
