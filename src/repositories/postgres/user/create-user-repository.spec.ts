import { CreateUserRepository } from "./CreateUserRepository";
import { v4 as uuidv4 } from "uuid";

describe("Testing User Repository", () => {
  test("it shold create an user", async () => {
    const createUserRepository = new CreateUserRepository();

    let id = uuidv4();
    const user = await createUserRepository.execute({
      id,
      email: "teste@teste.com",
      name: "Kelson",
      password: "hashedpassword",
      role: "ADMIN",
    });

    expect(user).toStrictEqual({
      id,
      email: "teste@teste.com",
      name: "Kelson",
      password: "hashedpassword",
      role: "ADMIN",
    });
  });
});
