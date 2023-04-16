import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserRepository } from "./user.repository";
import { UniqueEmail } from "./validators/unique-email.validator";

@Module({
    controllers: [UserController],
    providers: [UserRepository, UniqueEmail]
})

export class UserModule { }