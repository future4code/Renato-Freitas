import { IAccountRepository } from "../../repositories/IAccountRepository";

interface IRequest {
  name: string;
  cpf: string;
  dbirth: Date;
}

class CreateAccountUseCase {
  constructor(private accountRepository: IAccountRepository) { }
  execute({ name, cpf, dbirth }: IRequest) {
    const accountAlreadyExists = this.accountRepository.findByCpf(cpf);

    if (accountAlreadyExists) {
      throw new Error("Account already exists");
    }
    this.accountRepository.create({ name, cpf, dbirth });
  }
}

export { CreateAccountUseCase };