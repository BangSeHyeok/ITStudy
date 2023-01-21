import axios from 'axios';

//https://jsonplaceholder.typicode.com/posts
export const fetchPosts = () :any =>{
    return async function fethPostsThunk(dispatch:any,getState:any) {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      dispatch({type:"FETCH_POSTS",payload:response.data})
    }
  }

export const getchPosts = () :any => async(dispatch:any,getState:any)=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch({type:"FETCH_POSTS",payload:response.data})
}