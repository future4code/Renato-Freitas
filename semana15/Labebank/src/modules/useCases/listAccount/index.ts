import { AccountRepository } from "../../repositories/implemetations/AccountRepository";
import { ListAccountController } from "./ListAccountController";
import { ListAccountUseCase } from "./ListAccountUseCase";

const accountRepository = AccountRepository.getInstance();
const listAccountUseCase = new ListAccountUseCase(accountRepository);
const listAccountController = new ListAccountController(listAccountUseCase);

export { listAccountController };