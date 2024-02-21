import { NavLink } from 'react-router-dom';
import s from './NavList.module.css';

export const NavList = () => {
  return (
    <nav>
      <ul className={s.navList}>
        <li>
          <NavLink className={s.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={s.link} to="/tweets">
            Tweets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
