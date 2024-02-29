import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Contacts, Home } from './pagess';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/contacts',
      element: <Contacts></Contacts>,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
