import { $axios } from '../../api/axios'
import { Paths } from '../../constants/path.constant'
import { IResponseWrapper } from '../../interfaces/response.interface'
import { IToken } from './Token.interface'

export const AuthService = {
  async getPrivate() {
    const { data } = await $axios.get<IResponseWrapper<IToken>>(
      Paths.PRIVATE_TOKEN
    )
    return data.data
  },

  async getPublic() {
    const { data } = await $axios.get<IResponseWrapper<IToken>>(
      Paths.PUBLIC_TOKEN
    )
    return data.data
  },

  async getAll() {
    const privateData = await this.getPrivate()
    const publicData = await this.getPublic()

    return {
      privateData,
      publicData,
    }
  },
}
