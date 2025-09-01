import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './layout/Layout';
import JobsPage from './pages/JobsPage';

const router = createBrowserRouter(
  [
    {
      element : <Layout/>,
      children : [
        {path : "/" , element : <HomePage />},
        {path : "/jobs" , element : <JobsPage/>}
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




