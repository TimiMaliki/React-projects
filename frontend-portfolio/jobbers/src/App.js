import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
import JobsPage from './pages/JobsPage';
import SearchJobs from './pages/SearchJobs';
import NotFound from './pages/404Page';
import AddJob from './pages/AddJob';
import CollarJobs  from './pages/CollarJobs';


function App() {

  const addJob = async (newJob)=>{
     const res = await fetch("http://localhost:5000/jobs", {
      method : "POST",
      headers:{
        "Content-Type" :"application/json"
      },
      body : JSON.stringify(newJob)
     })

     return
     
  }
  
  const router = createBrowserRouter(
    [
      {
        element : <Layout/>,
        children : [
          {path : "/" , element : <HomePage />},
          {path : "/jobs" , element : <JobsPage/>},
          {path : "/search" , element :<SearchJobs/>},
          {path : "/collars" , element :<CollarJobs/>},
          {path : "/add-job" , element :<AddJob addJobSubmit={addJob}/>},
          {path : "*" , element :<NotFound/>}
        ]
    }
    ]
  )
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;




