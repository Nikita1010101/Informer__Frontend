import { FC } from 'react'

import styles from './Loading.module.scss'

export const Loading: FC = () => {
  return <h1 className={styles.loading}>Загрузка....</h1>
}
