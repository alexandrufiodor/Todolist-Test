import React from 'react';
import s from './App.module.css';
import {Todolist} from "./Components/Todolist/Todolist";

function App() {
  return (
      <div className={s.app}>
          <h1 className={s.title}>Todos</h1>
        <Todolist/>
      </div>
  );
}

export default App;
