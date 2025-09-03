import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
import JobsPage from './pages/JobsPage';
import JobPage from './pages/JobPage';
import SearchJobs from './pages/SearchJobs';

const router = createBrowserRouter(
  [
    {
      element : <Layout/>,
      children : [
        {path : "/" , element : <HomePage />},
        {path : "/jobs" , element : <JobsPage/>},
        {path : "/job/:id" , element : <JobPage/>},
        {path : "/search" , element :<SearchJobs/>}
      ]
  }
  ]
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;




