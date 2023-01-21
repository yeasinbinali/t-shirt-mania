import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layout/Main/Main';

const App = () => {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, 
    children: [
      {path: '/home',
       element: <Home></Home>,
       loader: async () => fetch('tshirts.json')
      },
      {path: '/', element: <Home></Home>},
      {path: '/orders', element: <Orders></Orders>},
      {path: '/about', element: <About></About>},
      {path: '*', element: <h1 style={{color: 'red', textAlign: 'center', marginTop: '20px'}}>Oops!! No route on this page</h1>}
    ]  
  }
  ])
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
};

export default App;