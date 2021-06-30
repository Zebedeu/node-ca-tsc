import { User } from "../../entities/User";
import { IEmailProvider } from "../../providers/IEmailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { iCreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IEmailProvider,
  ){}
  async execute(data: iCreateUserRequestDTO)  {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email)
    if(userAlreadyExists){
      throw new Error("User Altready existis")
    }
    const user = new User(data)
    await this.usersRepository.save(user)
    this.mailProvider.sendEmail({
      to: {
        name: data.name,
        email: data.email
      },
      from: {
        name:"Machize",
        email:"marciozebedeu@gmail.com"
      },
      subject: "seja bem vindo a MACHIZE",
      body: "<P> Você ja pode fazer logi à lantaforma<P>"
    })
  }
}