import logo from 'img/logo.png';

import { trallingComa } from 'utils';
import { Button } from 'components';
import s from './UserCard.module.css';

const data = {
  user: 'Shawna Baumbach',
  tweets: 66983,
  followers: 74183,
  avatar:
    'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/339.jpg',
  id: '5',
};

export const UserCard = () => {
  return (
    <li className={s.item}>
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.imgWrapper}>
        <div className={s.imgInsideWrapper}>
          <img src={data.avatar} alt="avatar" width={63} height={63} />
        </div>
      </div>
      <p className={s.tweets}>{trallingComa(data.tweets)} tweets</p>
      <p className={s.followers}>{trallingComa(data.followers)} Followers</p>
      <Button />
    </li>
  );
};
