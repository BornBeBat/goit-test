import { Button, UserCard } from 'components';
import s from './UserList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchUsers,
  selectError,
  selectIsLoading,
  selectUsers,
} from 'myRedux/user';
import { toast } from 'react-toastify';

export const UserList = () => {
  const user = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

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
          <UserCard key={elemen.id} data={elemen} />
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
