import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "zagrac wreszcie w Wiedzmina 3",
        date: "2018-02-15",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "zrobic dobry uczynek",
        date: "2020-11-12",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "pomalowac dom po sylwestrze",
        date: "2019-09-11",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "schudnac 30 kilkogramow",
        date: "2019-05-20",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "nabrać masy mięśniowej",
        date: "2020-05-20",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "podlać kwiatki",
        date: "2020-05-21",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 6,
        text: "umyć podłogę",
        date: "2020-05-29",
        important: false,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log("delete elementu o id " + id);

    // Pierwsza metoda !!!
    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);

    // this.setState({
    //   tasks,
    // });

    // Metoda druga !!!
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  changeTaskStatus = (id) => {
    console.log("change elementu o id " + id);
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>TO-DO APP</h1>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}
export default App;
