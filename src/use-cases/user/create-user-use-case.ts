import { User } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";
import { ICreateUserParams, ICreateUserRepository } from "../../types/user";

export class CreateUserUseCase {
  constructor(private createUserRepository: ICreateUserRepository) {}

  async execute(params: Omit<User, "id">): Promise<User> {
    const id = uuidv4();

    return await this.createUserRepository.execute({ id, ...params });
  }
}
