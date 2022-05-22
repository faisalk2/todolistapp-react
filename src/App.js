import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './components/Todo';
import Todolist from './components/Todolist';
import TodoItem from './components/TodoItem';

function App() {
  const [query,setQuery]=React.useState("")
  const [data,setData]=React.useState([]);
  const [savedata,setSaveData]=React.useState([])

const delete=()=>{
  
}

  console.log(savedata);
  return (
    <div  className="App">
    <Todo query={query} setQuery={setQuery} setData={setData} data={data} />
    <Todolist data={data} savedata={savedata} setSaveData={setSaveData}/>
    <TodoItem savedata={savedata} />
    </div>
  );
}

export default App;
