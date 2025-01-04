import { $axios } from '../../api/axios'
import { IResponseWrapper } from '../../interfaces/response.interface'
import { ITask } from '../../interfaces/task.interface'

export const TaskService = {
  async getTasks() {
    const { data } = await $axios.get<IResponseWrapper<{ tasks: ITask[] }>>(
      '/4'
    )
    return data.data.tasks
  },
}
