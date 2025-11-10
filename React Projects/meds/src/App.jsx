import "./App.css";
import "./index.css"
import MainLayout from "../src/Layout/MainLayout";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import All from "./products/AllinOne/All";

function App() {
  const router = createBrowserRouter([
    {
      element : <MainLayout/>,
      children : [
        { element : <HomePage/>, path : "/"},
        { element : <About/>, path : "/about"},
         { element : <Products/>, path : "/products"},
            { element : <All/>, path : "/all"}
      ]
    }
  ]);
  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
}

export default App;
