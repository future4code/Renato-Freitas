import { Account } from '../../model/Account'
import { IAccountRepository } from '../../repositories/IAccountRepository'



class ListAccountUseCase {
  constructor(private accountsRepository: IAccountRepository) { }

  execute(): Account[] {
    const accounts = this.accountsRepository.list();

    return accounts;
  }

}

export { ListAccountUseCase };