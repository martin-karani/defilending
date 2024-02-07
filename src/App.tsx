import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Market from './pages/Market';

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/market',
          element: <Market />,
        },
      ],
    },
  ]);
  return (
    <div className="bg-[#21202e] min-h-[100vh]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
