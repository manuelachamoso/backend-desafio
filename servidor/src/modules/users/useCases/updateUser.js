import { userSchema } from '../model/user.js'
import { AppError } from '../../../errors/index.js'

class UpdateUser {

  async execute(request, response) {
    const { id } = request.params
    const { name } = request.body

    const userAlreadyExists = await userSchema.findOne({
      name
    })

    if (userAlreadyExists) {
      throw new AppError("Name already used by another User!")
    }

    const user = await userSchema.updateOne({ userId: id }, { name, updateDate: Date.now() })

    return response.status(201).json(user)
  }
}

export { UpdateUser }