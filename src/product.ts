export class Product {
    private _id: number;
    private _name: string;
    private _price: number;
    private _description?: string;

    constructor(product: { id: number; name: string; price: number; description?: string }) {
        this._id = product.id;
        this._name = product.name;
        this._price = product.price;
        this._description = product.description;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if (value === "") {
            throw new Error("Name cannot be empty");
        }
        this._name = value;
    }

    get price(): number {
        return this._price;
    }
    set price(value: number) {
        if (value < 0) {
            throw new Error("Price cannot be negative.");
        }
        this._price = value;
    }

    get description(): string | undefined {
        return this._description;
    }
    set description(value: string | undefined) {
        this._description = value;
    }
}