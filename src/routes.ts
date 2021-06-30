import { Request, Response, Router } from "express";
import { createUserController } from "./useCases/createUser";

const router = Router()


router.post('/users', ( req: Request, res: Response) => {
    return  createUserController.handler(req, res)
})

export { router }