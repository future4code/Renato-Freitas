import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname } = req.body

      //nome alternativo para esta const: token const token = req.headers.authorization!;
      const authorization = req.headers.authorization!;
      const auth = new Authenticator();
      //no caso de endpoints autenticados, a gente verifica o token ANTES da transação com o banco.
      const verifiedToken = auth.getTokenData(authorization);


      if (!name && !nickname) {
         res.statusCode = 422
         res.statusMessage = "Informe o(s) novo(s) 'name' ou 'nickname'"
         throw new Error()
      }

      await connection('to_do_list_users')
         .update({ name, nickname })
         .where({ id: verifiedToken.id })

      res.end()

   } catch (error) {
      console.log(error.message);
      if (res.statusCode === 200) {
         res.status(500).end()
      }

      res.end()
   }
}