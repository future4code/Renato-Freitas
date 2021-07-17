import { Router } from 'express';
import { createAccountController } from '../modules/useCases/createAccount';

const accountRoutes = Router();

accountRoutes.post("/", (request, response) => {
  return createAccountController.handle(request, response)  
})

export { accountRoutes };