import React, { useState } from "react";
import PostList from "./components/PostList";
import './styles/App.css';

function App() {  
  const [posts, setPosts] = useState([
    {id: 1, title: 'JavaScript', body: 'description'},
    {id: 2, title: 'JavaScript 2', body: 'description'},
    {id: 3, title: 'JavaScript 3', body: 'description'}
  ])
  return (
    <div className="App">
      <PostList posts={posts} title="Посты про JS"/>
    </div>
  );
}

export default App;
