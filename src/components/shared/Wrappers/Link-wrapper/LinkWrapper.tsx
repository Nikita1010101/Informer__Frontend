import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router'

import styles from './LinkWrapper.module.scss'
import { ILinkWrapper } from './LinkWrapper.interface'

export const LinkWrapper: FC<PropsWithChildren<ILinkWrapper>> = ({
  children,
  link,
  onClickFn,
}) => {
  return (
    <Link to={link} onClick={onClickFn} className={styles.wrapper}>
      {children}
    </Link>
  )
}
