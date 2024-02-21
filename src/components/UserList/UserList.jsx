import { UserCard } from 'components';
import s from './UserList.module.css';

const data = [
  {
    user: 'Shawna Baumbach',
    tweets: 66983,
    followers: 74183,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/339.jpg',
    id: '5',
  },
  {
    user: 'Natasha Balistreri II',
    tweets: 14058,
    followers: 21537,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/184.jpg',
    id: '6',
  },

  {
    user: 'Gayle Wehner Jr.',
    tweets: 99589,
    followers: 21685,
    avatar:
      'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/434.jpg',
    id: '7',
  },
];
export const UserList = () => {
  return (
    <ul className={s.list}>
      {data.map(elemen => (
        <UserCard data={elemen} />
      ))}
    </ul>
  );
};
