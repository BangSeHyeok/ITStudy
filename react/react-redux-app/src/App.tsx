import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { fetchPosts } from './actions/posts';
import './App.css';
import { RootSate } from './reducers';

type Props = {
  value :any;
 onIncrement: () =>void; 
 onDecrement: () =>void;
}

interface Post{
  userId : number;
  id: number;
  title: string;
}
function App({value,onIncrement,onDecrement} : Props) {
 const dispatch =  useDispatch();
 const counter =  useSelector((state: RootSate)=>state.counter);
 const todos: string[] = useSelector((state: RootSate)=>state.todos);
const posts:Post[] = useSelector((state:RootSate) => state.posts);

  const [todoValue, setTodoValue] = useState("");

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  const handlechange =(e: React.ChangeEvent<HTMLInputElement>) =>{
    setTodoValue(e.target.value)
  }
  const addTodo =(e:React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    dispatch({type:"ADD_TODO",text:todoValue});
    setTodoValue("");
  }

  return (
    <div className="App">
      Clicked : {counter} times
      <button onClick={onIncrement}>
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
      <ul>
        {todos.map((todo,index)=> <li key={index}>{todo}</li>)}
      </ul>
      <form onSubmit={addTodo}>
        <input 
          type="text"
          value={todoValue}
          onChange={handlechange}
        />
        <input type="submit"/>
      </form>

      <ul>
        {posts.map((post,index)=><li key={index}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;
