import { connection } from "../..";


export const deleteUser = async (id: string): Promise<void> => {
  try {
    await connection()
      .where({ id })
      .from("User_Arq")
      .del()
  } catch (error) {
    throw new Error(error.sqlMessage || error.message);
  }
}