import axios from 'axios';
import 'dotenv/config'


import  ENDPOINTS  from './utils/api/endpoints.js'

let data;

axios({
  method: 'get',
  url: ENDPOINTS.listOfCategory,
  headers: {'Authorization': `Bearer ${process.env.CLIENT_SECRET}`}
})
  .then(function (response) {
    console.log(response.data.results);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


