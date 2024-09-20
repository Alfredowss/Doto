const ID_CELLPHONES_SUBCATEGORY = "MLA1055";
const SITE_MX = "MLA";


let ENDPOINTS = {
	listOfCategory: `https://api.mercadolibre.com/sites/${SITE_MX}/search?category=${ID_CELLPHONES_SUBCATEGORY}&sort=price_asc`,
	sellerDetails:  `https://api.mercadolibre.com/users`
}


export default ENDPOINTS;

