import { $axios } from "../../api/axios"
import { IResponseWrapper } from "../../interfaces/response.interface"
import { IInfo } from "./info.interface"

export const InfoService = {
  async getAll() {
    const { data } = await $axios.get<IResponseWrapper<IInfo>>('/3')
    console.log(data.data)
    return data.data
  }
}