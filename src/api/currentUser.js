import axios from 'axios';

axios.defaults.baseURL = 'https://ai-backend-h3zd.onrender.com';
// const API_KEY = '7014ff3481c4736f473f368d478f8f78';
// const token = localStorage.getItem('token')
export async function currentUser() {
  //   console.log(data);
  const token = localStorage.getItem('token');
  const resp = await axios.get('/users/current', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  console.log(resp);
  return await resp.data;
}
