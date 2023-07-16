import { userSchema } from '../model/user.js'

class DeleteUsers {

  async execute(request, response) {
    const { id } = request.params

    const countDelete = await userSchema.deleteOne({
      userId: id
    })

    const deleteUserSuccess = countDelete.deletedCount === 1

    return response.status(200).json({deletedWithSuccess: deleteUserSuccess})
  }
}

export { DeleteUsers }