import { Account } from "../model/Account";

interface ICreateAccountDTO {
  name: string;
  cpf: string;
  dbirth: string;
}

interface IAccountRepository {
  findByCpf(cpf: string): Account;
  create(account: ICreateAccountDTO): void;
}

export { IAccountRepository, ICreateAccountDTO }