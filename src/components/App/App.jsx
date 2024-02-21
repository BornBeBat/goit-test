import { UserCard } from 'components';
import s from './App.module.css';

export const App = () => {
  return (
    <div className={s.app}>
      <ul>
        <UserCard />
      </ul>
    </div>
  );
};
