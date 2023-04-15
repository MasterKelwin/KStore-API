import { Injectable } from "@nestjs/common";
import { signUpUserDTO } from "./dto/signup.dto";

@Injectable()
export class UserRepository {
    private users: signUpUserDTO[] = [];

    async save(user: signUpUserDTO) {
        this.users.push(user)
    }

    async userList() {
        return this.users;
    }
}