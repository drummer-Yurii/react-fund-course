import React, { useRef, useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'description' },
    { id: 2, title: 'JavaScript 2', body: 'description' },
    { id: 3, title: 'JavaScript 3', body: 'description' }
  ])

  const addNewPost = (e) => {
    e.preventDefault();
    
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', body: ''})
  }

  return (
    <div className="App">
      <PostForm />
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
