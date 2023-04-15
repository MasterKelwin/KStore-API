import { IsString, MaxLength } from "class-validator";

export class ProductDetailsDTO {

    @IsString({ message: 'The name field has to be a String.' })
    @MaxLength(50, { message: 'The name has to be shorter or equal to 50 characters.' })
    name: string;

    @IsString({ message: 'The description field has to be a String.' })
    @MaxLength(240, { message: 'The description has to be shorter or equal to 240 characters.' })    
    description: string;

}