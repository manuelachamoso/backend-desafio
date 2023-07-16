import { Router } from 'express'

import { CreateUsers } from "../modules/users/useCases/createUsers.js"
import { FindOneUser } from '../modules/users/useCases/findOneUser.js'
import { FindAllUsers } from '../modules/users/useCases/findAllUsers.js'
import { UpdateUser } from '../modules/users/useCases/updateUser.js'
import { DeleteUsers } from '../modules/users/useCases/deleteUsers.js'

const routes = Router()

const createUsers = new CreateUsers()
const findOneUser = new FindOneUser()
const findAllUsers = new FindAllUsers()
const updateUser = new UpdateUser()
const deleteUsers = new DeleteUsers()

routes.get("/users", findAllUsers.execute)
routes.get("/users/:id", findOneUser.execute)
routes.post("/users", createUsers.execute)
routes.put("/users/:id", updateUser.execute)
routes.delete("/users/:id", deleteUsers.execute)

export { routes }