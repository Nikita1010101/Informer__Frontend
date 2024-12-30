import { FC } from 'react'
import { ArrowBigRight, Hand } from 'lucide-react'
import cn from 'classnames'

import styles from './Options.module.scss'
import { IMassagesInfo } from './Option.interface'

export const MassagesOption: FC<IMassagesInfo> = ({ count }) => {
  return (
    <div
      className={cn(styles.option, {
        [styles.good]: count === 0,
        [styles.normal]: count > 0 && count <= 3,
        [styles.bad]: count > 3,
      })}
    >
      <Hand />
      <span>Массажи</span>
      <ArrowBigRight fill='#fff' />
      <span className={styles.count}>{count}</span>
    </div>
  )
}
