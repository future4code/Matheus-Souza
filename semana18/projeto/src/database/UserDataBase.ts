import { User } from "../entities/User"
import { BaseDataBase } from "./BaseDataBase"

export class UserDataBase extends BaseDataBase{

  async create(user: User) {
    await BaseDataBase.connection("User")
      .insert(User)
  }

  async getAll() {
    return BaseDataBase.connection("character").select()
  }
}
