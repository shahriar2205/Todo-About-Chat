import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import LoginReg from './pages/LoginReg';
import HomePage from './pages/Home/HomePage';
import Photos from './pages/PhotosPart/Photos';


const router = createBrowserRouter(
  createRoutesFromElements(
   <>
    <Route
      path="/"
      element={<LoginReg />}>  
      </Route>
    <Route
      path="/home"
      element={<HomePage />}>  
      </Route>
       <Route
      path="/photos"
      element={<Photos />}>  
      </Route>
    {/* <Route
      path="/forgetpassword"
      element={<ForgetPassword />}>  
      </Route> */}
    
   </>
  )
);

const App = () => {
  return (
    <>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    <RouterProvider router={router} />
    </>
  )
}

export default App