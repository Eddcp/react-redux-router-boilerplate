import axios from 'axios';
 
export const API = 'https://the-one-api.herokuapp.com/v1/book';
 
export const fetchData = async () => {
  const url = `${API}/book`;
 
  return await axios.get(url);
};
 
fetchData();