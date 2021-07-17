import { Request, Response } from 'express';
import { CreateAccountUseCase } from './CreateAccountUseCase';

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, cpf, dbirth } = request.body;

    this.createAccountUseCase.execute({ name, cpf, dbirth });

    return response.status(201).send();
  }
}
export { CreateAccountController };