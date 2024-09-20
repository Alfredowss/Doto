import 'dotenv/config'

import express from 'express'
const app = express();


import getData from './services/marketStudyService.js'; 
import ResponseObject from './models/responseObject.js';

let response;


async function init(){

	let data = await getData({registers: 1000, limit: 50})
	
	response = data.map((element)=>{
		return(new ResponseObject({
			"SellerID": element?.seller?.id,
			"SellerName": element?.seller?.nickname,
			"Brand": element?.attributes["BRAND"]?.value_name,
			"ShippingFree": element?.shipping?.free_shipping,
			"LogisticType": element?.shipping?.logistic_type,
			"ItemCondition": element?.attributes["ITEM_CONDITION"]?.value_name,
			"PricesRange": `${element?.price} - ${element?.original_price || "*"}`
		}))
	})
	
}


init();



app.get('/', (req, res)=>{
	res.send(response)	
})


app.listen(8000, ()=>{
	console.log("listen on port http://localhost:8000")
})


