import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { signUpUserDTO } from "./DTO/signup.dto";
import { v4 as uuidv4 } from 'uuid';

@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository
        ) {  }

    @Post()
    async signUp(@Body() userData: signUpUserDTO) {
        const userObject = {...userData, id: uuidv4()}
        this.userRepository.save(userObject);
        return {status: 'User created!'};
    }

    @Get()
    async userList() {
        return this.userRepository.userList();
    }
}