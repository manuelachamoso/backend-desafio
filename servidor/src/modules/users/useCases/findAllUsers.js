import { userSchema } from '../model/user.js'

class FindAllUsers {

  async execute(request, response) {
    const users = await userSchema.find()

    return response.status(200).json(users)
  }
}

export { FindAllUsers }