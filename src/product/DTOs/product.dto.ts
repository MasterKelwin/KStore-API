import { IsArray, IsDate, IsNotEmpty, IsNumber, IsString, MaxLength, ValidateNested, isArray } from "class-validator";
import { ProductDetailsDTO } from "./product-details.dto";
import { ProductImageDTO } from "./product-image.dto";
import { Type } from "class-transformer";
import { isDate } from "util/types";

export class ProductDTO {

    @IsString({ message: 'The name field has to be a String.' })
    @MaxLength(100, { message: 'The name has to be shorter or equal to 100 characters.' })
    name: string;

    @IsNumber()
    @IsNotEmpty({ message: 'The value field cannot be empty.' })
    value: number;

    @IsNumber()
    @IsNotEmpty({ message: 'The stock field cannot be empty.' })
    stock: number;
    
    @IsString({ message: 'The description field has to be a String.' })
    @MaxLength(480, { message: 'The description has to be shorter or equal to 480 characters.' })
    description: string;

    @ValidateNested()
    @IsArray()
    @Type(() => ProductDetailsDTO)
    details: ProductDetailsDTO[];

    @IsString({ message: 'The category field has to be a String.' })
    @MaxLength(30, { message: 'The category has to be shorter or equal to 30 characters.' })
    category: string;

    @ValidateNested()
    @IsArray()
    @Type(() => ProductImageDTO)
    images: ProductImageDTO[];

    @IsString({ message: 'The createdAt field has to be a String.' })
    @MaxLength(24, { message: 'The createdAt has to be shorter or equal to 24 characters.' })
    createdAt: Date;

    @IsString({ message: 'The updatetAt field has to be a String.' })
    @MaxLength(24, { message: 'The updatetAt field has to be shorter or equal to 24 characters.' })
    updatedAt: Date;
}