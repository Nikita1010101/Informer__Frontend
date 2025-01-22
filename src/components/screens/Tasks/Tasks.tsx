import { FC, useEffect, useState } from 'react'
import cn from 'classnames'

import styles from '../../../assets/scss/Item.module.scss'
import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { TaskService } from '../../../services/task/task.service'
import { ITask } from '../../../interfaces/task.interface'
import { Stage } from './Stage/Stage'
import { calculateCompletedColor } from '../../../utils/calculate-completed-color'

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
        <div
          className={cn(styles.item, styles.width_90, styles.direction_column_start)}
          style={calculateCompletedColor(task.stages)}
        >
          <h3>
            {task.title}
            {task.condition && ` (${task.condition})`}
          </h3>
          <hr className={styles.width_90} />
          <ul>
            {task.stages.length === 0 ? (
              <li>Обращаться к создателю</li>
            ) : (
              task.stages.map(stage => <Stage {...stage} />)
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}
