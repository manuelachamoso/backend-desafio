import { userSchema } from '../model/user.js'

class FindOneUser {

  async execute(request, response) {
    const { id } = request.params

    const user = await userSchema.findOne({
      userId: id
    })

    return response.status(200).json(user)
  }
}

export { FindOneUser }