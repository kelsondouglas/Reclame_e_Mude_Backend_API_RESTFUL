import { User } from "@prisma/client";
import { prisma } from "../../../../prisma/prisma";

export class CreateUserRepository {
  constructor() {}

  async execute(params: User) {
    const user = await prisma.user.create({
      data: params,
    });

    return user;
  }
}
