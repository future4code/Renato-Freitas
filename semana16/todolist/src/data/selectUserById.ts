import { connection } from "../index";

export default async function selectUserById(id: string) {
  const result = await connection("to_do_list_users").select("*").where({ id });

  return result[0];
}
