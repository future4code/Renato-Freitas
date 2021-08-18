import { insertUser } from "../data/users/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";

export const signupBusiness = async ({ name, email, password, role }: any) => {
  if (
    !name ||
    !email ||
    !password ||
    !role
  ) {
    throw new Error('Preencha os campos "name", "email" e "password"')
  }

  const id: string = generateId()

  const cypherPassword = await hash(password);

  await insertUser({
    id,
    name,
    email,
    password: cypherPassword,
    role
  })

  const token: string = generateToken({
    id,
    role: role
  })

  return token;
}