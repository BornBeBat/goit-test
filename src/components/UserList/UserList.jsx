import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { fetchUsers, selectError, selectIsLoading, selectUsers } from 'myRedux';
import { Button, UserCard } from 'components';
import { useLocalStorage, useFilter } from 'hooks';

import s from './UserList.module.css';

export const UserList = () => {
  const [idList, setIdList] = useLocalStorage('idList', []);
  const filteredUsers = useFilter(idList);

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const handleClick = id => {
    if (idList.includes(id)) {
      setIdList(idList.filter(el => el !== id));
    } else {
      setIdList([...idList, id]);
    }
  };

  const handleLoadMore = () => {
    const currentPage = users.length / 3;
    dispatch(fetchUsers(currentPage + 1))
      .unwrap()
      .catch(error => {
        if (error !== null) {
          toast.warning(error.message);
        }
      });
  };

  return (
    <>
      <ul className={s.list}>
        {filteredUsers.map(elemen => (
          <UserCard
            key={elemen.id}
            data={elemen}
            onClick={handleClick}
            idList={idList}
          />
        ))}
      </ul>
      {error === null && (
        <Button
          onClick={handleLoadMore}
          text={isLoading ? 'Loading...' : 'Load more'}
          disabled={isLoading}
        />
      )}
    </>
  );
};
