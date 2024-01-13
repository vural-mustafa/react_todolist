import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Todolist from './components/Todolist'
function App() {
  
  const[input,setInput] = useState("");
  const[todos,setTodos] = useState([]);
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
          />
        </div>
        <div>
          <Todolist
          todos={todos}
          setTodos={setTodos}
          onChange={((event)=>{event.preventDefault()})}/>
        </div>
      </div>
    </div>
  )
}

export default App


