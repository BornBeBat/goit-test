import { Button, UserCard } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  selectError,
  selectIsLoading,
  selectUsers,
} from 'myRedux/user';
import { useLocalStorage } from 'hooks';
import { toast } from 'react-toastify';

import s from './UserList.module.css';

export const UserList = () => {
  const user = useSelector(selectUsers);
  const [idList, setIdList] = useLocalStorage('idList', []);
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
    const currentPage = user.length / 3;
    dispatch(fetchUsers(currentPage + 1))
      .unwrap()
      .catch(error => {
        if (error !== null) {
          toast.warning(error);
        }
      });
  };

  return (
    <>
      <ul className={s.list}>
        {user.map(elemen => (
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
