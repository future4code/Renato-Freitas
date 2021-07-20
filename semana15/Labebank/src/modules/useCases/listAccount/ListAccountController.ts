import { Request, Response } from 'express';

import { ListAccountUseCase } from './ListAccountUseCase'

class ListAccountController {
  constructor(private listAccountUseCase: ListAccountUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listAccountUseCase.execute();
    return response.json(all);
  }
}

export { ListAccountController }