import { FC } from 'react'
import { CircleCheckBig } from 'lucide-react'
import cn from 'classnames'

import styles from './Stage.module.scss'
import { IStage } from '../../../../interfaces/task.interface'

export const Stage: FC<IStage> = ({
  completedSubStagesCount,
  reward,
  subStagesCount,
  title,
}) => {
  return (
    <li
      className={cn(styles.stage, {
        [styles.isCompleted]: completedSubStagesCount === subStagesCount,
      })}
    >
      <div>
        <span>
          {`${title} --- `} <strong>{reward}</strong> Т
        </span>
        {completedSubStagesCount === subStagesCount ? (
          <CircleCheckBig size={18} stroke='#0f0' />
        ) : (
          subStagesCount !== 1 && (
            <span>
              ({completedSubStagesCount} из {subStagesCount})
            </span>
          )
        )}
      </div>
    </li>
  )
}
