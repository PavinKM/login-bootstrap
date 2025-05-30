import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login.jsx'
import Home from './Home.jsx' 
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import NotFound from './NotFound.jsx'
import Counter from './Counter.jsx'
import Post from './Post.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home/>,
    errorElement: <NotFound/>
  },
  {
    path : '/login',
    element : <Login/>
  },
  {
    path : '/counter',
    element : <Counter/>
  },{
    path : '/post/:id',
    element : <Post/>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)

// cd your-project-folder
// git init                     # If not already initialized
// git remote -v                # Confirm remote is set
// git add .
// git commit -m "Initial commit"
// git push origin main         # Or master
