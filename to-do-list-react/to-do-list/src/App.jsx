//Import useState, Unique ID from uuidv4
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

//Make List and Form to components in seperate folder.
import List from "./modules/List";
import Form from "./modules/Form";
import "./App.css";

function App() {
  //Set state to an array where objects can be inserted
  const [tasks, setTasks] = useState([]);

  //Function to add tasks, recieving a taskName form Form.jsx
  function addTask(taskName) {
    const newTask = {
      task: taskName,
      completed: false,
      id: uuidv4(),
    };

    //Here we concat (set to things together) the oldTasks witht the newly added task from the input field
    setTasks((oldTasks) => oldTasks.concat(newTask));
  }

  function completeTask(id) {
    //By filtering by the clicked items id, we say that "If you do not have this id, you are in the filter and we keep you".
    setTasks((oldState) => oldState.filter((task) => task.id !== id));
  }

  // <Form /> gets the funktion addTask, <List /> gets the tasks we have in useState and the completeTask function.
  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} completeTask={completeTask} />
    </section>
  );
}

export default App;
