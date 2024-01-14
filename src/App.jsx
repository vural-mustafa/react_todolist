import React,{ useState,useEffect} from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Todolist from './components/Todolist'
function App() {
  
  const initialState= JSON.parse(localStorage.getItem("todos")) || [];

  const[input,setInput] = useState("");
  const[todos,setTodos] = useState(initialState);
  const[editTodo,seteditTodo]=useState(null);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos])

  return (
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <Header/>
        </div>
        <div>
          <Form
          input={input}
          setInput={setInput}
          todos={todos}
          setTodos={setTodos}
          editTodo={editTodo}
          seteditTodo={seteditTodo}
          />
        </div>
        <div>
          <Todolist
          todos={todos}
          setTodos={setTodos}
          seteditTodo={seteditTodo}
          onChange={((event)=>{event.preventDefault()})}/>
        </div>
      </div>
    </div>
  )
}

export default App


