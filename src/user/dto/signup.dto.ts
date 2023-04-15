import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class signUpUserDTO {

    @IsString({ message: 'The name field has to be a String.' })
    @MaxLength(50, { message: 'The name has to be shorter or equal to 50 characters.' })
    @IsNotEmpty({ message: 'The name field cannot be empty.' })
    name: string;

    @IsEmail(undefined, { message: 'Invalid e-mail.'})
    email: string;

    @MinLength(8, { message: "Password has to be at least 8 characters." })
    password: string;
}