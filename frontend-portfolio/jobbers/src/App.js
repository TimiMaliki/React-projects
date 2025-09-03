import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
import JobsPage from './pages/JobsPage';
import SearchJobs from './pages/SearchJobs';
import NotFound from './pages/404Page';

const router = createBrowserRouter(
  [
    {
      element : <Layout/>,
      children : [
        {path : "/" , element : <HomePage />},
        {path : "/jobs" , element : <JobsPage/>},
        {path : "/search" , element :<SearchJobs/>},
        {path : "*" , element :<NotFound/>}
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




