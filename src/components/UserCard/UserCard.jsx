import { trallingComa, isChecked } from 'utils';
import { Button } from 'components';

import s from './UserCard.module.css';

import logo from 'img/logo.png';

export const UserCard = ({ data, onClick, idList }) => {
  const { tweets, followers, avatar, id } = data;

  return (
    <li className={s.item}>
      <img className={s.logo} src={logo} alt="logo" />
      <div className={s.imgWrapper}>
        <div className={s.imgInsideWrapper}>
          <img src={avatar} alt="avatar" width={63} height={63} />
        </div>
      </div>
      <p className={s.tweets}>{trallingComa(tweets)} tweets</p>
      <p className={s.followers}>
        {isChecked(idList, id)
          ? trallingComa(followers + 1)
          : trallingComa(followers)}
        &nbsp;Followers
      </p>
      <Button onClick={() => onClick(id)} checked={isChecked(idList, id)} />
    </li>
  );
};
