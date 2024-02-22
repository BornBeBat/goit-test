import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { UserList, Filter, Button } from 'components';
import { fetchUsers, selectUsers } from 'myRedux/user';

import s from './Tweets.module.css';

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (users?.length >= 3) return;
    dispatch(fetchUsers());
  }, [dispatch, users]);

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <>
      <div className={s.navbar}>
        <Button text={'go back'} onClick={handleGoBack} />
        <Filter />
      </div>
      <UserList />
    </>
  );
};

export default Tweets;
