import axios from 'axios';

const ID_CELLPHONES_SUBCATEGORY = "MLA1055";
const SITE_MX = "MLA";

let ENDPOINTS = {
	listOfCategory: `https://api.mercadolibre.com/sites/${SITE_MX}/search?category=${ID_CELLPHONES_SUBCATEGORY}&sort=price_asc`
}

export default function performRequest(offset){
	
       return axios({
      	 method: 'get',
       	 url: ENDPOINTS.listOfCategory.concat(`&offset=${offset}`),
         headers: {'Authorization': `Bearer ${process.env.CLIENT_SECRET}`}
       })
}
