import { Account } from "../model/Account";

interface ICreateAccountDTO {
  name: string;
  cpf: string;
  dbirth: Date;
}

interface IAccountRepository {
  findByCpf(cpf: string): Account;
  list(): Account[];
  create(account: ICreateAccountDTO): void;
}

export { IAccountRepository, ICreateAccountDTO }