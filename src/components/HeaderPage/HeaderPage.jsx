import { useNavigate } from 'react-router-dom';
import {
  IconAchievement,
  IconCaution,
  IconKebabMenu,
  IconNote,
} from '../../assets/icons';
import './styles.scss';
import logoPng from '../../assets/images/logo.png';

const MENUS = [
  { label: '自分の記録', key: 'my-record', url: '/', icon: <IconNote /> },
  { label: 'チャレンジ', key: 'challenge', icon: <IconAchievement /> },
  { label: 'お知らせ', key: 'notice', icon: <IconCaution /> },
];

const HeaderPage = () => {
  const navigate = useNavigate();
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
          {MENUS.map(e => {
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
          <IconKebabMenu className="header-page__box__menu__btn" />
        </div>
      </div>
    </header>
  );
};

export default HeaderPage;
