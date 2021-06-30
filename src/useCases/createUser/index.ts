import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUserCase";

const postgresUserRepository = new PostgresUserRepository
const mailtrapMailProvider = new MailTrapMailProvider

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository,
  mailtrapMailProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export {createUserUseCase, createUserController}