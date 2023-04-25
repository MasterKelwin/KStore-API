import { Injectable } from "@nestjs/common";
import { SignUpUserDTO } from "./DTO/signup.dto";
import { UpdateUserDTO } from "./DTO/updateuser.dto";

@Injectable()
export class UserRepository {
    private users: SignUpUserDTO[] = [];

    async save(user: SignUpUserDTO) {
        this.users.push(user)
    }

    async find(id: string) {
        const userData = this.users.find(user => user.id === id);

        if(!userData) {
            throw new Error('User dont exist.');
        }

        return userData;
    }

    async update(id: string, newUserData: Partial<UpdateUserDTO>) {
        const userToUpdate = await this.find(id);

        if(!userToUpdate) {
            throw new Error('User dont exist.');
        }

        Object.entries(newUserData).forEach(([key, value]) => {
            if(key === 'id') {
                throw new Error('You cant change user IDs.')
            }
            userToUpdate[key] = value;
        });
    }

    async delete(id: string) {
        const deletedUser = await this.find(id);

        if(!deletedUser) {
            throw new Error('User dont exist.')
        }

        const indexOfDeletedUser = this.users.indexOf(deletedUser);

        this.users.splice(indexOfDeletedUser, 1);
    }

    async userList() {
        return this.users;
    }

    async isEmailUnique(email: string) {
        return this.users.some(user => user.email === email);
    }
}