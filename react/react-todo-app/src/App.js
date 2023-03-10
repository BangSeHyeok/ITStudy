import React,{useState, useCallback, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import List from "./components/List"
import axios from 'axios';

const initialTodoData = localStorage.getItem("todoData")?
JSON.parse(localStorage.getItem("todoData")) : [];

export default function App() {

  const [todoData,setTodoData] = useState(initialTodoData);
  const [value,setValue] = useState("");

  useEffect(() => {
    const apiCall = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/employee`);
      console.log(response.data);
    };
    apiCall();
  }, [])

  const handleClick = useCallback((id) =>{
    let newTodoData = todoData.filter(data => data.id !== id);
    setTodoData(newTodoData);
    localStorage.setItem('todoData',JSON.stringify(newTodoData));
  },[todoData]);

  const handleSubmit = (e) =>{
    //form 안에 input을 전송할 때 페이지 리로드 되는걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title:value,
      completed: false
    }

    //원래 있던 할 일에 새로운 할 일 더해주기
    setTodoData(prev =>
        [...prev,newTodo]
      );
      localStorage.setItem('todoData',JSON.stringify([...todoData,newTodo]));
 
    setValue("");
  }

  const handleRemoveClick = () =>{
    setTodoData([]);
    localStorage.setItem('todoData',JSON.stringify([]));
 
  }

//map , filter 
//React State 
//컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체
//state가 변경되면 컴포넌트는 리랜더링됨
//state는 컴포넌트내에서 관리됨
//TailWindCSS(CSS프레임워크)
    return(
      <div className='flex items-center justify-center w-screen h-screen bg-blue-100'>
        <div className='w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg'>
          <div className='flex justify-between mb-3'>
            <h1>할 일 목록 Test</h1>
            <button onClick={handleRemoveClick}>Delete All</button>
          </div>
          <List handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        </div>
      </div>
    );
  
}
