import React,{Component } from 'react';
import './App.css';

export default class App extends Component {

  state = {
    todoData : [
      {
        id : "1",
        title : "공부하기",
        completed : true
      },
      {
        id : "2",
        title : "청소하기",
        completed : false
      },
    ],
    value : ""
  }

  btnStyle = {
    color : "#fff",
    border: "none",
    padding : "5px 9px",
    borderRadius : "50%",
    cursor: "pointer",
    float:"right"
  }

  getStyle = (completed) => {
    return {
      padding : "10px",
      borderBottom : "1px #ccc dotted",
      textDecoration : completed ? "line-through" : "none"
    }
  }

  todoData_temp = [
    {
      id : "1",
      title : "공부하기",
      completed : true
    },
    {
      id : "2",
      title : "청소하기",
      completed : false
    },
  ]

  handleClick = (id) =>{
    console.log(id);

    let newTodoData = this.state.todoData.filter(data => data.id !== id);

    console.log("newTodoData",newTodoData );

    this.setState({todoData : newTodoData});
  }

  handleChange = (e) =>{
    this.setState({value : e.target.value });
  }

  handleSubmit = (e) =>{
    //form 안에 input을 전송할 때 페이지 리로드 되는걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(),
      title:this.state.value,
      completed: false
    }

    //원래 있던 할 일에 새로운 할 일 더해주기
    this.setState({ todoData : [...this.state.todoData, newTodo],value: ""})
 
  }

  handleCompleChange = (id) =>{
    let newTodoData = this.state.todoData.map(data =>{
      if(data.id === id){
        data.completed = !data.completed;
      }
      return data;
    })

    this.setState({ todoData: newTodoData})
  }
//map , filter 
//React State 
//컴포넌트의 렌더링 결과물에 영향을 주는 데이터를 갖고 있는 객체
//state가 변경되면 컴포넌트는 리랜더링됨
//state는 컴포넌트내에서 관리됨
  render(){
    return(
      <div className='container'>
        <div className='todoBlock'>
          <div className='title'>
            <h1>할 일 목록</h1>
          </div>
         
          {this.state.todoData.map((data,index) => (
            <div style={this.getStyle(data.completed)} key={data.id}>
              <input 
                  type="checkbox" 
                  onChange={ () => this.handleCompleChange(data.id)}
                  defaultChecked={data.completed} />
                {data.title}
                <button style={this.btnStyle} onClick={() => this.handleClick(data.id)}>
                X
              </button>
            </div>
          ))}

          <form style={{display:"flex"}} onSubmit={this.handleSubmit}>
            <input
                type="text"
                name="value"
                style={{flex:"10", padding:"5px"}}
                placeholder="해야 할 일을 입력하세요."
                value={this.state.value}
                onChange={this.handleChange}
            />
            <input 
              type="submit"
              value="입력"
              className="btn"
              style={{flex:"1"}}
            />
          </form>

        </div>
      </div>
    )
  }
}
