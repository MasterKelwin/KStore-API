import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { isEmailUnique } from "../validators/unique-email.validator";

export class UpdateUserDTO {

    @IsString({ message: 'The name field has to be a String.' })
    @MaxLength(50, { message: 'The name has to be shorter or equal to 50 characters.' })
    @IsNotEmpty({ message: 'The name field cannot be empty.' })
    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'Invalid e-mail.'})
    @isEmailUnique({ message: 'Email is already taken.' })
    @IsOptional()
    email: string;

    @MinLength(8, { message: "Password has to be at least 8 characters." })
    @IsOptional()
    password: string;

    id: string;
}