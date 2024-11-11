import { createBrowserRouter } from 'react-router-dom'
import { ColumnPage, DashBoard, ErrorPage, MyRecordPage } from '../pages'
import { MainLayout } from '../layouts'
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <DashBoard />,
      },
      {
        path: '/column',
        element: <ColumnPage />,
      },
      {
        path: '/my-record',
        element: <MyRecordPage />,
      },
    ],
  },
])
export default router
