import { Request, Response } from 'express'
import app from './app'
import { connection } from './connection'
import {
  countActors,
  createActor,
  deleteActor,
  getActorById,
  updateSalary,
} from './queries'

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.get('/actors', async (req: Request, res: Response) => {
  try {
    const result = await connection('Actor')

    res.send(result)
  } catch (error) {
    console.log(error.sqlMessage || error.message)

    res.status(500).send('An unexpected error occurred')
  }
})

app.get('/actor', async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string)
    res.status(200).send({
      quantidade: count,
    })
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    })
  }
})

app.get('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    const actor = await getActorById(id)

    res.status(200).send(actor)
  } catch (error) {
    res.status(400).send({
      message: error.sqlMessage || error.message,
    })
  }
})

app.put('/actor', async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.dateOfBirth),
      req.body.salary
    )

    res.status(200).send()
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

app.post('/actor', async (req: Request, res: Response) => {
  try {
    await updateSalary(req.body.id, req.body.salary)

    res.status(200).send({ message: 'Updated!' })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})

app.delete('/actor/:id', async (req: Request, res: Response) => {
  try {
    await deleteActor(req.body.id)

    res.status(204).send({ message: 'Deleted!' })
  } catch (err) {
    res.status(400).send({
      message: err.message,
    })
  }
})