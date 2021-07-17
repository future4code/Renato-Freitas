import { Account } from '../../model/Account'
import { IAccountRepository } from '../../repositories/IAccountRepository'



class ListAccountUseCase {
  constructor(private accountsRepository: IAccountRepository) { }

  execute(): Account[] {
    const accounts = this.accountsRepository.list();
    if (!accounts.length) {
      throw new Error("No accounts have been registered");
    }
    return accounts;
  }

}

export { ListAccountUseCase };