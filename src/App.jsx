import { useEffect, useState } from 'react'

const App = () => {
 const [users,setUsers] = useState([])
 const [userLoading,setUserLoading] = useState(false)
 const [userError,setUserError] = useState('')
 const [posts,setPosts] = useState([])
 const [postsLoading,setPostsLoading] = useState(false)
 const [postsError,setPostsError] = useState('')


 useEffect (()=>{

  fetchUsers();
  fetchPosts();
 },[]);



 const fetchUsers = async () =>{
    setUserLoading(true);
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data);
      setUserError('');
      setUserLoading(false);
    }catch(e){
      setUserError('server error');
      setUserLoading(false);
    }
   
 };


  const fetchPosts = async() =>{
    setPostsLoading(true);
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setPosts(data);
      setPostsError('');
      setPostsLoading(false);
    }catch(e){
      setPostsError('server error');
      setPostsLoading(false);
    }
  
  };


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

          {userLoading && <h3>Loading...</h3> }
          {userError && <h3>{userError}</h3>}
          {users.map((user)=>(
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
        <div>
          Posts
          <hr/>
          {postsLoading && <h3>Loading...</h3> }
          {postsError && <h3>{postsError }</h3>}
          {posts.map((post)=>(
            <li key={post.id}>{post.title}</li>
          ))}
        </div>
      </div>
  )
}

export default App