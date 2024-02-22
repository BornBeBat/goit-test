import { NavLink, useLocation } from 'react-router-dom';
import s from './NavList.module.css';

export const NavList = () => {
  const location = useLocation();
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/tweets" state={{ from: location }}>
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
