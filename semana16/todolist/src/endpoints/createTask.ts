import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(req: Request, res: Response) {
  const { title, description, deadline, authorId } = req.body;
  try {
    if (!title || !description || !deadline || !authorId) {
      res.status(400).send({
        message:
          '"title", "description", "deadline" e "authorId" são obrigatórios'
      });
      return;
    }
    const dateDiff: number =
      moment(deadline, "DD/MM/YYYY").unix() - moment().unix();

    if (dateDiff <= 0) {
      res.status(400).send({
        message: '"deadline" deve ser uma data futura!'
      });
      return;
    }
    const id: string = Date.now() + Math.random().toString();
    await insertTask(
      id,
      title,
      description,
      moment(deadline, "DD/MM/YYYY").format("YYYY/MM/DD"),
      authorId
    );

    res.status(200).send({ message: "Task criada com sucesso!", id });
  } catch (error) {
    res.status(400).send({ message: error.message || error.sqlMessage });
  }
}
