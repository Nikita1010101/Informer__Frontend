import { $axios } from '../../api/axios'
import { Paths } from '../../constants/path.constant'
import { responseBody } from '../../helpers/response-body'
import { IResponseWrapper } from '../../interfaces/response.interface'
import { ICoins } from './info.interface'

export const InfoService = {
  async getCoins() {
    const { data } = await $axios.get<IResponseWrapper<ICoins>>(Paths.COINS)
    return data.data
  },

  async editCoins(timeCoinsCount: number, tokenCoinsCount: number) {
    const body = responseBody({ timeCoinsCount, tokenCoinsCount })

    await $axios.put(Paths.COINS, body)
  },
}
