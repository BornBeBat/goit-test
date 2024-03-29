import { useSelector } from 'react-redux';

import { selectFilter, selectUsers } from 'myRedux';

export const useFilter = idList => {
  const users = useSelector(selectUsers);
  const filter = useSelector(selectFilter);

  if (filter === 'all') {
    return users;
  }
  if (filter === 'follow') {
    return users.filter(el => !idList.includes(el.id));
  }
  if (filter === 'followings') {
    return users.filter(el => idList.includes(el.id));
  }
};
