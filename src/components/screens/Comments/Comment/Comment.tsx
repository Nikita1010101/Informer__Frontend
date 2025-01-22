import { FC } from 'react'
import cn from 'classnames'

import styles from '../../../../assets/scss/Item.module.scss'
import { IComment } from '../../../../interfaces/comment.interface'

export const Comment: FC<Omit<IComment, 'id'>> = ({ date, text }) => {
  return (
    <div
      className={cn(
        styles.item,
        styles.width_90,
        styles.direction_column_center,
        styles.orange
      )}
    >
      <p className={styles.width_90}>{text}</p>
      <hr className={styles.width_90} />
      <span>{date}</span>
    </div>
  )
}
