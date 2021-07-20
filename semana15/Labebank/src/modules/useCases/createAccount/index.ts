import { AccountRepository } from "../../repositories/implemetations/AccountRepository";
import { CreateAccountController } from "./CreateAccountController";
import { CreateAccountUseCase } from "./CreateAccountUseCase";


const accountRepository = AccountRepository.getInstance();

const createAccountUseCase = new CreateAccountUseCase(accountRepository);

const createAccountController = new CreateAccountController(createAccountUseCase);

export { createAccountController };