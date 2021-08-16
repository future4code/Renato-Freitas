import { deleteUser } from "../data/users/deleteUser";


export const deleteUserBusiness = async(input: {id: string, token: string}) => {

  const verifiedToken = deleteUser(input.token);

  if (verifiedToken.role !== "ADMIN") {
    throw new Error("Apenas administradores podem deletar usuários!")
  }

  return verifiedToken;

}