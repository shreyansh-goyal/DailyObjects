import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core"
@Injectable()
export class dataServices{
    constructor(private http:HttpClient){

    }
    getLadiesHandbagData()
    {
        return this.http.get("https://www.dailyobjects.com/api/products/feed?count=16&fields=slug,categories.slug,brand.slug,model.name,model.slug,subProducts.exclusiveOffer,subProducts.name,subProducts.slug,subProducts.thumbnail,subProducts.buildOptions,subProducts.mrp,subProducts.sellingPrice,subProducts.inventoryPrice,subProducts.inventory,subProducts.tags.slug,subProducts.status&filter=%7B%22$and%22:%5B%7B%22model.slug%22:%7B%22$eq%22:%22crossbody-bags%22%7D%7D,%7B%22brand.slug%22:%7B%22$eq%22:%22dailyobjects%22%7D%7D,%7B%22categories.slug%22:%7B%22$eq%22:%22bags-and-sleeves%22%7D%7D,%7B%22subProducts.status%22:%7B%22$in%22:%5B%22active%22,%22commingSoon%22%5D%7D%7D,%7B%22subProducts.buildOptions.crossbodyBagType%22:%7B%22$eq%22:%22trapeze%22%7D%7D%5D%7D&q=&sort=-subProducts.popularity&start=0")
    }
}