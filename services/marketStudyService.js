import performRequest from './apiRequest.js'
import indexArrayByProperty from '../utils/arrayIndexer.js'


export default async function getData({registers, limit}){

	const CALLS = registers / limit;

	let data = []
	let callPromises = [];
	let i = 1;
	let offset = 0;

	while(i <= CALLS){
		callPromises.push(performRequest(offset))
		offset+=limit;
		i++;
	}
	
	
	const responses = await  Promise.all(callPromises)


	//merge data
	responses.forEach(element=>{
 		data = [...data, ...element.data.results]
	})


	//indexing
	data.forEach(element=>{
		element.attributes = indexArrayByProperty(element.attributes, "id");
	})

	


	return data;
}
