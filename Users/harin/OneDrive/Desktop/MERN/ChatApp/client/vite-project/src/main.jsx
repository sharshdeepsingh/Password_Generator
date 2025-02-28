import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Join from './components/Join/Join.jsx';
import Chat from './components/Chat/Chat.jsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Join />,
      },
      {
        path: '/chat',
        element: <Chat />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={appRouter} />
  </>
);
