import { FC, useEffect, useState } from 'react'

import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { TaskService } from '../../../services/task/task.service'
import { ITask } from '../../../interfaces/task.interface'
import { TaskWrapper } from '../../shared/Wrappers/Task-wrapper/TaskWrapper'
import { Stage } from './Stage/Stage'

export const Tasks: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([] as ITask[])

  useEffect(() => {
    asyncWrapper(async () => {
      const tasks = await TaskService.getTasks()
      setTasks(tasks)
    })
  }, [])

  return (
    <div>
      {tasks.map(task => (
        <TaskWrapper>
          <h3>
            {task.title}
            {task.condition && ` (${task.condition})`}
          </h3>
          <hr />
          <ul>
            {task.stages.length === 0 ? (
              <li>Обращаться к создателю</li>
            ) : (
              task.stages.map(stage => (
                <Stage {...stage} />
              ))
            )}
          </ul>
        </TaskWrapper>
      ))}
    </div>
  )
}
