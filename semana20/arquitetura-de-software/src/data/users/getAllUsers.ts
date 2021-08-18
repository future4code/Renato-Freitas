import { connection } from "../..";

export const getAllUsers = async (token: string): Promise<any[]> => {

  try {

    const users: any =[];

    const result = await connection()
      .select("*")
      .from("User_Arq");

    for(let user of result) {
      users.push(user);
    }

    return users;

  } catch(error) {
    throw new Error(error.sqlMessage || error.message);
  }
}