import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "@radix-ui/themes/styles.css";

import { createHashRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects.jsx";
import Project1 from "./pages/Project1.jsx";
import Project2 from "./pages/Project2.jsx";
import Project3 from "./pages/Project3.jsx";
import About from "./pages/About.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Education from "./pages/Education.jsx";



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contactPage",
    element: <ContactPage/>,
  },
  {
    path: "education",
    element: <Education />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "project1",
    element: <Project1 />,
  },
  {
    path: "project2",
    element: <Project2 />,
  },
  {
    path: "project3",
    element: <Project3 />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router} />
  
    
  </StrictMode>,
)
