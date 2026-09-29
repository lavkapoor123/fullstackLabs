 class Product {
    private _id:number;
    private _name:string;
   private _price:number;
    private _description?:string;
    constructor(product:{id:number,name:string,price:number,description?:string}){
        this._id=product.id
        this._name=product.name
        this._price=product.price;
        this._description=product.description;
    }
}
