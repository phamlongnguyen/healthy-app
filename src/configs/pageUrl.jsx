import { createBrowserRouter } from 'react-router-dom';
import { DashBoard, ErrorPage } from '../pages';
import { MainLayout } from '../layouts';
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <DashBoard />,
      },
    ],
  },
]);
export default router;
