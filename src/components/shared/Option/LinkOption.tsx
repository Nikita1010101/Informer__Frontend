import { FC } from "react"
import { Link } from "react-router"

import styles from "./Options.module.scss"
import { ILinkOption } from "./Option.interface"

export const LinkOption: FC<Omit<ILinkOption, "id">> = ({ Image, link, title, onClickFn }) => {
  return (
    <Link onClick={onClickFn} to={link} className={styles.option}>
      <Image />
      <span>{title}</span>
    </Link>
  )
}
