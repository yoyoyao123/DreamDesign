import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DetailProducts from './pages/DetailProducts';
import Inscription from './pages/Inscription';
import Connexion from './pages/Connexion';
import Categorie from './pages/Categorie';
import Acceuille from './pages/Acceuille';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path: "/",
        element: <Acceuille/>,
      },
      {
        path: "/detail",
        element: <DetailProducts/>,
      },
      {
        path: "/Categorie/:name",
        element: <Categorie/>,

      },
    

    ]
  },
 

      /*{
        path: "/inscription",
        element: <Inscription/>,

      },*/
    

      /*{
          path: "/connexion",
        element: <Connexion/>,

      }*/
      
  


  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);  



