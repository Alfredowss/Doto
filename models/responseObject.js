export default class ResponseObject{
	constructor({SellerID, SellerName, Brand, ShippingFree, LogisticType,
			ItemCondition, PricesRange}){

		this.SellerID = SellerID;
		this.SellerName = SellerName;
		this.Brand = Brand;
		this.ShippingFree = ShippingFree;
		this.LogisticType = LogisticType;
		this.ItemCondition = ItemCondition;
		this.PricesRange = PricesRange;

	}
}
