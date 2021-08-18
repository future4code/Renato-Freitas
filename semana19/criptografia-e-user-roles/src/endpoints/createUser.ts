import { Request, Response } from "express";
import connection from "../connection";
import { user } from "../types";
import { IdGenerator } from "../services/IdGenerator"
import { Authenticator } from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body

      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const [user] = await connection('to_do_list_users')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      //const idg = new IdGenerator()

      const id: string = new IdGenerator().generateId();

      const newUser: user = { id, name, nickname, email, password }

      await connection('to_do_list_users')
         .insert(newUser);

      //sempre depois da transação com o banco
      const auth = new Authenticator();

      const token = auth.generateToken({ id: newUser.id });

      res.status(201).send({ token })

   } catch (error) {

      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}