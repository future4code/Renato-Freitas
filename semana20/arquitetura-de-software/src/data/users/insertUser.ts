import { connection } from "../../index";
import { user } from "../../types/users";

export const insertUser = async (
  user: user
) => {
  await connection.insert({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
    role: user.role
  }).into('User_Arq')
}
