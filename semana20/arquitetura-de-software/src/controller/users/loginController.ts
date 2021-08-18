import { Request, Response } from 'express';
import { loginBusiness } from '../../business/loginBusiness';


export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const token = await loginBusiness({ email, password });

    res.send({
      message: "Usuário logado!",
      token
    })

  } catch (error) {
    res.status(400).send(error.message)
  }
}