import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { UserList, Filter, Button } from 'components';
import { fetchUsers, selectUsers } from 'myRedux';

import s from './Tweets.module.css';
import { toast } from 'react-toastify';

const Tweets = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (users?.length >= 3) return;
    dispatch(fetchUsers())
      .unwrap()
      .then()
      .catch(error => toast.error(error.message));
  }, [dispatch, users]);

  const handleGoBack = () => {
    navigate(location.state?.from ?? '/');
  };

  return (
    <section className={s.container}>
      <div className={s.navbar}>
        <div>
          <Button text={'go back'} onClick={handleGoBack} />
        </div>
        <Filter />
      </div>
      <UserList />
    </section>
  );
};

export default Tweets;
