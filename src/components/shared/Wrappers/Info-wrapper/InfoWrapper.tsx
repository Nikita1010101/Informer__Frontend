import { FC, PropsWithChildren } from 'react'
import cn from 'classnames'

import styles from './InfoWrapper.module.scss'
import { IInfoWrapper } from './InfoWrapper.interface'

export const InfoWrapper: FC<PropsWithChildren<Partial<IInfoWrapper>>> = ({
  children,
  blueColorCondition = false,
  greenColorCondition = false,
  redColorCondition = false,
  yellowColorCondition = false,
}) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.blue]: blueColorCondition,
        [styles.green]: greenColorCondition,
        [styles.red]: redColorCondition,
        [styles.yellow]: yellowColorCondition,
      })}
    >
      {children}
    </div>
  )
}
