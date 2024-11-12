import { useNavigate } from 'react-router-dom';
import { IconClose, IconKebabMenu } from '../../assets/icons';
import './styles.scss';
import logoPng from '../../assets/images/logo.png';
import { MenuItem, MenuList, Popover } from '@mui/material';
import { useState } from 'react';
import { LIST_MENU, MENU_HEADER } from './constants';

const HeaderPage = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState();

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const redirectPage = page => {
    handleCloseMenu();
    navigate(`/${page.key}`);
  };

  return (
    <header className="header-page">
      <div className="header-page__box">
        <div className="header-page__box__logo">
          <img
            src={logoPng}
            alt="logo-heathy-care-app"
            onClick={() => navigate('/')}
          />
        </div>
        <div className="header-page__box__menu">
          {MENU_HEADER.map(e => {
            return (
              <div
                className="header-page__box__menu__item"
                key={e.key}
                onClick={() => navigate(`/${e?.url ?? e.key}`)}
              >
                {e.icon}
                <p>{e.label}</p>
              </div>
            );
          })}
          <div
            className="header-page__box__menu__btn"
            onClick={evt =>
              anchorEl ? setAnchorEl(null) : setAnchorEl(evt.currentTarget)
            }
          >
            {anchorEl ? <IconClose /> : <IconKebabMenu />}
          </div>
        </div>
      </div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        className="popover-header-menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuList className="popover-header-menu__box">
          {LIST_MENU.map(item => {
            return (
              <MenuItem
                key={item.key}
                onClick={() => redirectPage(item)}
                className="popover-header-menu__box__item"
              >
                {item.label}
              </MenuItem>
            );
          })}
        </MenuList>
      </Popover>
    </header>
  );
};

export default HeaderPage;
