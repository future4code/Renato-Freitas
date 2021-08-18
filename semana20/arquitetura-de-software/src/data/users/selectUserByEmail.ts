import { connection } from "../.."
import { user } from "../../types/users"

export const selectUserByEmail = async (
  email: string
): Promise<user | null> => {
  try {
    const result = await connection("User_Arq")
      .select("*")
      .where({ email })

    if (!result[0]) {
      return null
    }

    return {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email,
      password: result[0].password,
      role: result[0].role
    }

  } catch (error) {
    throw new Error(error.slqMessage || error.message)
  }
}
