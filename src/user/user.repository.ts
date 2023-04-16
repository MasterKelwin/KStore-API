import { Injectable } from "@nestjs/common";
import { signUpUserDTO } from "./DTO/signup.dto";

@Injectable()
export class UserRepository {
    private users: signUpUserDTO[] = [];

    async save(user: signUpUserDTO) {
        this.users.push(user)
    }

    async userList() {
        return this.users;
    }

    async isEmailUnique(email: string) {
        return this.users.some(user => user.email === email);
    }
}