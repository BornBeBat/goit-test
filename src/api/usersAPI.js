import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65afa59b2f26c3f2139b5b13.mockapi.io/users',
  params: {
    limit: 3,
  },
});

export const fetchUsers = async (page = 1) => {
  const response = await instance.get('/contacts', { params: { page: page } });
  return response.data;
};
