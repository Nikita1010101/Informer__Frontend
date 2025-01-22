import { $axios } from '../../api/axios'
import { Paths } from '../../constants/path.constant'
import { IResponseWrapper } from '../../interfaces/response.interface'
import { ITask } from '../../interfaces/task.interface'

export const TaskService = {
  async getTasks() {
    const { data } = await $axios.get<IResponseWrapper<{ tasks: ITask[] }>>(
      Paths.TASKS
    )
    return data.data.tasks
  },
}
