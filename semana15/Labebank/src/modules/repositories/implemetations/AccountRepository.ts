import { Account } from "../../model/Account";
import { IAccountRepository, ICreateAccountDTO } from "../IAccountRepository";

class AccountRepository implements IAccountRepository {
  private accounts: Account[];

  private static INSTANCE: AccountRepository;

  private constructor() {
    this.accounts = [];
  }

  public static getInstance(): AccountRepository {
    if(!AccountRepository.INSTANCE) {
      AccountRepository.INSTANCE = new AccountRepository();
    }
    return AccountRepository.INSTANCE;
  }

  create({ name, cpf, dbirth }: ICreateAccountDTO): void {
    const account = new Account();

    Object.assign(account, {
      name,
      cpf,
      dbirth
    })
    this.accounts.push(account);
  }

  list(): Account[] {
    return this.accounts;
  }

  findByCpf(cpf: string): Account {
    const account = this.accounts.find(account => account.cpf === cpf);
    return account;
  }
  // verifyAge(date: string): any {
  //   const [day, month, year] = date.split('/');
  //   const dbirth: Date = new Date(`${year}-${month}-${day}`);
  //   const ageInMilliseconds: number = Date.now() - dbirth.getTime();
  //   const ageInYears: number = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
  //   return ageInYears;
  // } 
}

export { AccountRepository }