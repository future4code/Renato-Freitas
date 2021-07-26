import { Request, Response } from "express";
import insertUser from "../data/insertUser";

export default async function createUser(req: Request, res: Response) {
  const { name, nickname, email } = req.body;
  try {
    if (!name || !nickname || !email) {
      res
        .status(400)
        .send("Preencha todos os campos, 'name', 'nickname' e 'email'");
    }
    const id: string = Date.now() + Math.random().toString();

    await insertUser(id, name, nickname, email);

    res.status(200).send("Usuário criado com sucesso!");

    return;
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
