import { FC, PropsWithChildren } from 'react'

import styles from './Task.module.scss'

export const TaskWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>
}
