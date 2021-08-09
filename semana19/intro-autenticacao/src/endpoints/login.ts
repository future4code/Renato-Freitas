import { Request, Response } from "express";
import connection from "../connection";
import { Authenticator } from "../services/Authenticator";

export async function login(req: Request, res: Response) {

    try {
        const { email, password } = req.body;

        if (!password || req.body.password.length < 6) {
            throw new Error("Invalid password");
        }
        if (!email || req.body.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        const [user] = await connection('to_do_list_users')
            .where({ email });

        if (!user) {
            res.statusCode = 400
            throw new Error('Email não existe!');
        }

        if (user.password !== password) {
            throw new Error('Credenciais inválidas');
        }

        //depois da transação com o banco
        const auth = new Authenticator();
        const token = auth.generateToken({ id: user.id });

        res.status(200).send({ token });

    } catch (error) {
        res.send({ message: error.message });
    }
}