import { Injectable } from "@nestjs/common";
import { ProductDetailsDTO } from "./DTOs/product-details.dto";

@Injectable()
export class ProductRepository {
    private products: ProductDetailsDTO[] = [];

    async save(product: ProductDetailsDTO) {
        this.products.push(product)
    }

    async productList() {
        return this.products;
    }

}