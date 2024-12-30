import { $axios } from '../../api/axios'
import { IResponseWrapper } from '../../interfaces/response.interface'
import { IToken } from './Token.interface'

export const AuthService = {
  async getPrivate() {
    const { data } = await $axios.get<IResponseWrapper<IToken>>('/1')
    return data.data
  },

  async getPublic() {
    const { data } = await $axios.get<IResponseWrapper<IToken>>('/2')
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
