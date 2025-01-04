import { FC } from 'react'
import { CircleCheckBig } from 'lucide-react'
import cn from 'classnames'

import styles from './Stage.module.scss'
import { IStage } from '../../../../interfaces/task.interface'

export const Stage: FC<IStage> = ({ isCompleted, reward, title }) => {
  return (
    <li className={cn(styles.stage, { [styles.isCompleted]: isCompleted })}>
      <div>
        <span>
          {`${title} --- `} <strong>{reward}</strong> Т
        </span>
        {isCompleted && <CircleCheckBig size={18} stroke='#0f0' />}
      </div>
    </li>
  )
}
