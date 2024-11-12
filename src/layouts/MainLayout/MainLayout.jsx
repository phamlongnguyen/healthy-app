import { Outlet } from 'react-router-dom';
import './styles.scss';
import { HeaderPage, FooterPage } from '../../components';
import { IconArrowUp } from '../../assets/icons';
const MainLayout = () => {
  return (
    <div className="main-layout">
      <HeaderPage />
      <div className="main-layout__body">
        <Outlet />
        <div className="main-layout__body__top">
          <button
            className="main-layout__body__top__btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <IconArrowUp />
          </button>
        </div>
      </div>
      <FooterPage />
    </div>
  );
};

export default MainLayout;
