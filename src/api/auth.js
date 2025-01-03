import axios from 'axios';

axios.defaults.baseURL = 'https://ai-backend-h3zd.onrender.com';
// const API_KEY = '7014ff3481c4736f473f368d478f8f78';

export async function auth(data) {
  //   console.log(data);
  const resp = await axios.post('/users/register', { ...data });
  //   console.log(resp);
  return await resp.data;
}
