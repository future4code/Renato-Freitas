import { Router } from 'express';
import { createAccountController } from '../modules/useCases/createAccount';
import { listAccountController } from '../modules/useCases/listAccount'

const accountRoutes = Router();

accountRoutes.post("/", (request, response) => {
  return createAccountController.handle(request, response)  
})
accountRoutes.get("/", (request, response) => {
  return listAccountController.handle(request, response);
})

export { accountRoutes };