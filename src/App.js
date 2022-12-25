import React, {useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'description' },
    { id: 2, title: 'JavaScript 2', body: 'description' },
    { id: 3, title: 'JavaScript 3', body: 'description' }
  ]) 

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕД ПОСТ');
    if (selectedSort) {
        return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
        return posts;
  }

  const sortedPosts = getSortedPosts();

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
      setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}} />
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)} 
          placeholder="Поиск..."
        />
       <MySelect
          value={selectedSort}
          onChange={sortPosts} 
          defaultValue="Сортировка"
          option={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'},
          ]}
       />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title="Посты про JS" />
        : <h1 style={{textAlign: 'center'}}>
            Посты не найдены!
          </h1>
      }
      
    </div>
  );
}

export default App;
