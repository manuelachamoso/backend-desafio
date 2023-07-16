import { v4 as uuid } from 'uuid'
import { userSchema } from '../model/user.js'
import { AppError } from '../../../errors/index.js'

class CreateUsers {

  async execute(request, response) {
    const { name } = request.body

    const userAlreadyExists = await userSchema.findOne({
      name
    })

    if (userAlreadyExists) {
      throw new AppError('Name already used by another User!')
    }

    const user = await userSchema()

    user.userId = uuid()
    user.name = name
    user.createDate = Date.now()

    await user.save()


    return response.status(201).json(user)
  }
}

export { CreateUsers }