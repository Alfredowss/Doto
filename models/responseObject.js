export default class ResponseObject{
	constructor({SellerID, SellerName, Brand, ShippingFree, LogisticType,
			SellerOperation, ItemCondition, PricesRange}){

		this.SellerID = SellerID;
		this.SellerName = SellerName;
		this.Brand = Brand;
		this.SellerOperation = SellerOperation;
		this.ShippingFree = ShippingFree;
		this.LogisticType = LogisticType;
		this.ItemCondition = ItemCondition;
		this.PricesRange = PricesRange;

	}
}
