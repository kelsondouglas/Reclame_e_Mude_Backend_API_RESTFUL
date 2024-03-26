import { User } from "@prisma/client";

export interface ICreateUserRepository {
  execute(params: User): Promise<User>;
}

export interface IGetUserRepository {
  execute(id: string): Promise<Omit<User, "password">>;
}
