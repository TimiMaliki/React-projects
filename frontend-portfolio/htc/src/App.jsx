import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Hotel from "./pages/Hotel";
import HomePage from "./component/HomePage";

function App() {
  const routes = createBrowserRouter([
    {
      element : <Layout/>,
      children : [
        {path : "/" , element : <HomePage/>},
         {path : "/hotel", element :<Hotel/>}
      ]
    }
  ])
  return (
    <>
      <RouterProvider router ={routes} />
    </>
  );
}

export default App;
