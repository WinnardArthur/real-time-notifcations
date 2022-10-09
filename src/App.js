import { useState } from 'react';
import './App.css';
import Card from './card';
import Navbar from './navbar';
import { posts } from './data';

function App() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState('');
  
  return (
    <div className="app">
      {user ? (
        <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-[40%] mx-auto  border border-blue-200'>
          <Navbar />
          {posts.map(post => (
            <Card key={post.id} post={post}/>
          ))}
          <span>{user}</span>
      </div>) : (
        <div className='h-screen w-1/2 mx-auto flex flex-col justify-center items-center'>
        <input
          type='text' 
          placeholder='Username'
          className='w-1/2 border border-slate-200 p-[10px] rounded-md outline-none shadow-lg focus:shadow-none focus:border-slate-400'
          onChange={(e) => setUsername(e.target.value)}  
        />
        <button 
          className='flex flex-col mt-6 bg-green-400 py-2 px-10 font-semibold rounded-sm shadow-lg shadow-green-500/50'
          onClick={() => setUser(username)}
        >Login
        </button>
        </div>
      )}
     
    </div>
  )
}

export default App;