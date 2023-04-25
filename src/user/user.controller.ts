import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { SignUpUserDTO } from "./DTO/signup.dto";
import { UserListDTO } from "./DTO/user-list.dto";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDTO } from "./DTO/updateuser.dto";

@Controller('/users')
export class UserController {

    constructor(
        private userRepository: UserRepository
        ) {  }

    @Post()
    async signUp(@Body() userData: SignUpUserDTO) {
        const userObject = {...userData, id: uuidv4()}
        this.userRepository.save(userObject);
        return {status: 'User created!'};

        const Dara = {
            name: 'Dara',
            lastName: 'Lacerda'
        }
        const Plano = {
            name: 'Alvinegro',
            status: 201
        }


    }

    @Get()
    async userList() {
        const users = await this.userRepository.userList();
        return users.map(user => new UserListDTO(
            user.id,
            user.name
            )
        );      
    }

    @Put('/:id')
    async updateUser(@Param('id')id: string, @Body() userData: UpdateUserDTO) {
        this.userRepository.update(id, userData);

        return {status: 'User updated', user: userData}
    }

    @Delete('/:id')
    async deleteUser(@Param('id')id: string) {
        this.userRepository.delete(id);

        return {status: 'User deleted'}
    }
}