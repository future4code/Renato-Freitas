import { connection } from './connection'

const ActorTable = connection('Actor')

const createActor = async (
  id: string,
  name: string,
  salary: number,
  dateOfBirth: Date,
  gender: string
): Promise<void> => {
  await connection
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: dateOfBirth,
      gender: gender,
    })
    .into('Actor')
}

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

  return result[0][0]
}

const searchByName = async (name: string): Promise<any> => {
  const result = await ActorTable.where('name', name)
  return result
}

const countActors = async (gender: string): Promise<any> => {
  const result = await ActorTable.count('gender as contagem').where(
    'gender',
    gender
  )

  return result[0].contagem
}

const updateSalary = async (id: string, salary: number): Promise<void> => {
  await ActorTable.where('id', id).update('salary', salary)
}

const deleteActor = async (id: string): Promise<void> => {
  await ActorTable.where('id', id).delete()
}

const genderSalaryAverage = async (gender: string): Promise<any> => {
  const result = await ActorTable.avg('salary as salary_avg').where(
    'gender',
    gender
  )
  return result
}

export {
  createActor,
  getActorById,
  searchByName,
  countActors,
  updateSalary,
  deleteActor,
  genderSalaryAverage,
}