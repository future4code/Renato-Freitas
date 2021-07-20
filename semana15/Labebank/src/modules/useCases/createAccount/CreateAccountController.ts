import { Request, Response } from 'express';
import { CreateAccountUseCase } from './CreateAccountUseCase';

class CreateAccountController {
  constructor(private createAccountUseCase: CreateAccountUseCase) { }

  handle(request: Request, response: Response): Response {
    const { name, cpf, formatedDate } = request.body;

    const [day, month, year] = formatedDate.split('/');
    const dbirth: Date = new Date(`${year}-${month}-${day}`);
    const ageInMilliseconds: number = Date.now() - dbirth.getTime();
    const ageInYears: number = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
    
    if (ageInYears < 18) {
      return response.status(400).send({ message: 'Para criar uma conta você deve ter mais de 18 anos' });
    }

    this.createAccountUseCase.execute({ name, cpf, dbirth });
    return response.status(201).send();
  }
}
export { CreateAccountController };