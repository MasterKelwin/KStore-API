import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductRepository } from "./product.repository";
import { ProductDTO } from "./DTOs/product.dto";

@Controller('/products')
export class ProductController {

    constructor(
        private productRepository: ProductRepository
    ) {  }

        @Post()
        async productRegistration(@Body() product: ProductDTO) {
            this.productRepository.save(product);
            return {status: 'Product registrated'};
        }

        @Get()
        async productList() {
            return this.productRepository.productList();
        }
}