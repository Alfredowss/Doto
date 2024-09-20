import axios from 'axios';


export default function performRequest(url, param){

	
       return axios({
      	 method: 'get',
       	 url: url.concat(`&offset=${param}`),
         headers: {'Authorization': `Bearer ${process.env.CLIENT_SECRET}`}
       })
}
