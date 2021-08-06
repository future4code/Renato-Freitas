import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req: Request, res: Response) {
  const { name, nickname, email } = req.body;
  try {
    if (name === "" || nickname === "" || email === "") {
      res.status(400).send({ message: "Nenhum dos campos podem estar vazios" });
    }
    if (!name && !nickname && !email) {
      res
        .status(400)
        .send({ message: "Escolha ao menos um valor para alterar" });
    }

    await updateUser(req.params.id, name, nickname, email);

    res.status(200).send({ message: "Usuário atualizado" });

    return;
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
