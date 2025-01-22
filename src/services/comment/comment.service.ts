import { $axios } from "../../api/axios"
import { IComment } from "../../interfaces/comment.interface"
import { Paths } from "../../constants/path.constant"
import { IResponseWrapper } from "../../interfaces/response.interface"

export const CommentService = {
  async getAll() {
    const { data } = await $axios.get<IResponseWrapper<{comments: IComment[]}>>(Paths.COMMENTS)
    return data.data.comments
  }
}