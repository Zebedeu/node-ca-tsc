import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUserCase";

export class CreateUserController {

  constructor( 
    private CreateUserUseCase: CreateUserUseCase
    ) {}
 async handler( req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body
    console.log(name)

    try {
      await this.CreateUserUseCase.execute({
        name,
        email,
        password
      })
      return res.status(201).send()
    } catch (err) {
    return res.status(400).json({
      message: err.message || 'uNEXPECTED ERROR.'
    })
    }

    
  }
}