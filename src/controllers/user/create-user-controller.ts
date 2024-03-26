import { Request } from "express";
import { CreateUserUseCase } from "../../use-cases/user/create-user-use-case";

export class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  async execute(httpRequest: Request) {}
}
