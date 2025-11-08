import "./App.css";
import "./index.css"
import MainLayout from "../src/Layout/MainLayout";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";

function App() {
  const router = createBrowserRouter([
    {
      element : <MainLayout/>,
      children : [
        { element : <HomePage/>, path : "/"},
        { element : <About/>, path : "/about"}
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
