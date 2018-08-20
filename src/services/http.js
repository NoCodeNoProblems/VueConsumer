import axios from 'axios';

export default axios.create({
  baseURL: "http://localhost:8080/app/neri/",
  timeout: 1000,
  headers: {'Access-Control-Allow-Origin': '*'}
}); 
