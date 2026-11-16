import axios from 'axios';

axios.defaults.baseURL = 'https://ai-backend-h3zd.onrender.com';

export async function login(data) {
  //   console.log(data);
  const resp = await axios.post('/users/login', { ...data });
  //   console.log(resp);
  return await resp.data;
}
