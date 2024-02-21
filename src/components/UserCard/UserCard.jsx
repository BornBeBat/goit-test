import logo from 'img/logo.png';

import { trallingComa } from 'utils';
import { Button } from 'components';
import s from './UserCard.module.css';

export const UserCard = ({ data }) => {
  const { tweets, followers, avatar } = data;
  return (
    <li className={s.item}>
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.imgWrapper}>
        <div className={s.imgInsideWrapper}>
          <img src={avatar} alt="avatar" width={63} height={63} />
        </div>
      </div>
      <p className={s.tweets}>{trallingComa(tweets)} tweets</p>
      <p className={s.followers}>{trallingComa(followers)} Followers</p>
      <Button />
    </li>
  );
};
