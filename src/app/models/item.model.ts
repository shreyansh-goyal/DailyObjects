export class Items{
    thumbnail: String;
    sellingPrice: Number;
    MaxRetailPrice: Number;
    offer: String;
    limitedStock: String;
    constructor(thumbnail,sellingPrice,MaxRetailPrice,offer,limitedStock)
    {
        this.thumbnail=thumbnail;
        this.sellingPrice=sellingPrice;
        this.MaxRetailPrice=MaxRetailPrice;
        this.offer=offer;
        this.limitedStock=limitedStock
    }
}