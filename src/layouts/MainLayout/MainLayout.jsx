import { Outlet } from 'react-router-dom'
import './styles.scss'
import { HeaderPage, FooterPage } from '../../components'

const MainLayout = () => {
  return (
    <div className="main-layout">
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </div>
  )
}

export default MainLayout
