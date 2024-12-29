import { FC } from "react"
import { Hand } from "lucide-react"
import cn from "classnames"

import styles from "./Options.module.scss"
import { IMassagesInfo } from "./Option.interface"

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
      <span>Массажи - {count}</span>
    </div>
  )
}
