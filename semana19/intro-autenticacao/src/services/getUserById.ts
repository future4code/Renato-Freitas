import connection from '../../connection'; 
 
 public async getUserById(id: string): Promise <any> {
  const result = await this.connection
    .select("*")
    .from('to_do_list_users')
    .where({ id });

  return result[0];
}