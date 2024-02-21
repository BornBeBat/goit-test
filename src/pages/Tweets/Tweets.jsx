import React, { useEffect } from 'react';
import { UserList, Filter, Button } from 'components';
import { fetchUsers } from 'api/usersAPI';
import s from './Tweets.module.css';

const Tweets = () => {
  useEffect(() => {
    fetchUsers(2).then(response => console.log(response));
  }, []);

  return (
    <>
      <div className={s.navbar}>
        <Button text={'go back'} />
        <Filter />
      </div>
      <UserList />
    </>
  );
};

export default Tweets;
