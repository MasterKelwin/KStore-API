import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UserRepository } from "../user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
@ValidatorConstraint({ async: true })
export class UniqueEmail implements ValidatorConstraintInterface {

    constructor(private userRepository: UserRepository) { }
 
    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        const denyRequest = await this.userRepository.isEmailUnique(value);
        return !denyRequest;
    }
} 

export const isEmailUnique = (options: ValidationOptions) => {
    return (object: Object, property: string) => {
        registerDecorator({
            target: object.constructor,
            propertyName: property,
            options: options,
            constraints: [],
            validator: UniqueEmail
        })
    }
}