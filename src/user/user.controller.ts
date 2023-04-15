import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { signUpUserDTO } from "./dto/signup.dto";

@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository
        ) {  }

    @Post()
    async signUp(@Body() userData: signUpUserDTO) {
        this.userRepository.save(userData);
        return {status: 'User created!'};
    }

    @Get()
    async userList() {
        return this.userRepository.userList();
    }
}