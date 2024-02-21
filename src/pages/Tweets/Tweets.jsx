import React, { useEffect } from 'react';
import { UserList } from 'components';
import { fetchUsers } from 'api/usersAPI';

const Tweets = () => {
  useEffect(() => {
    fetchUsers(2).then(response => console.log(response));
  }, []);

  return (
    <>
      <UserList />
    </>
  );
};

export default Tweets;
