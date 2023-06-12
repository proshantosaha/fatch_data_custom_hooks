import { useEffect, useState } from 'react'
import useFetchData from './useFetchData';

const App = () => {
  const users = useFetchData('https://jsonplaceholder.typicode.com/users',
  (data)=>data.map((item)=>({id:item.id,  name:item.name})));

  const posts = useFetchData('https://jsonplaceholder.typicode.com/posts',(data)=>data.slice(0,10));
  const comments = useFetchData('https://jsonplaceholder.typicode.com/comments',(data)=>data.slice(0,10));




  return (
      <div style={{
        width:'600px',
        display:'flex',
        gap:'1rem',
        justifyContent:'space-between',
      }}>

        <div>
          Users

          <hr/>

          {users.loading && <h3>Loading...</h3> }
          {users.error && <h3>{users.error}</h3>}
          {users.data?.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
        <div>
          posts

          <hr/>

          {posts.loading && <h3>Loading...</h3> }
          {posts.error && <h3>{posts.error}</h3>}
          {posts.data.map((post)=>(
            <li key={post.id}>{post.title}</li>
          ))}
        </div>

        <div>
          comment

          <hr/>

          {comments.loading && <h3>Loading...</h3> }
          {comments.error && <h3>{comments.error}</h3>}
          {comments.data.map((comment)=>(
            <li key={comment.id}>{comment.name}</li>
          ))}
        </div>
      </div>
  )
}

export default App