// import "./App.css";
// import "bootstrap/dist/css/bootstrap.css";
// import Heading from "./components/Heading";
// import InputForm from "./components/InputForm";
// import TodoList from "./components/TodoList";
// import { useState } from "react";

// function App() {
//   const listitem = ["going to gym", "join the mall"];
//   const [list, setList] = useState(listitem);
//   const handleinput = (value) => {
//     setList([...list, value]);
//   };
//   const handleremove = (index) => {
//     setList(list.filter((_, idc) => index !== idc));

//     console.log("deleted");
//   };
//   return (
//     <div className="container-body">
//       <Heading />
//       <InputForm handleInput={handleinput} />
//       <TodoList todoList={list} handleremove={handleremove} />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Heading from "./components/Heading";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
  const [list, setList] = useState(["going to gym", "join the mall"]);

  const handleinput = (value) => {
    // Check for empty or duplicate values
    if (value.trim() === "") return;
    if (list.includes(value)) {
      alert("This todo already exists!");
      return;
    }
    setList([...list, value]);
  };

  const handleremove = (index) => {
    const filteredList = list.filter((_, idc) => index !== idc);
    setList(filteredList);
  };

  return (
    <div className="container-body">
      <Heading />
      <InputForm handleInput={handleinput} />
      <TodoList todoList={list} handleremove={handleremove} />
    </div>
  );
}

export default App;
