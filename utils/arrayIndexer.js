

export default function indexArrayByProperty(list, property){
	const indexedObject = list.reduce((acc, element, index)=>{

		acc[element[property]] = element;
		return acc
	}, {})


	return indexedObject;
}
