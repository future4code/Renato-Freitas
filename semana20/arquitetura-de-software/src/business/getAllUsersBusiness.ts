import { getAllUsers } from "../data/users/getAllUsers"

export const getAllUsersBusiness = async (token: string) => {
  
  const users: any | null = await getAllUsers(token)

  return users;  
}