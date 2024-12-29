import { FC } from "react"
import { ClockAlert } from "lucide-react"
import cn from "classnames"

import styles from "./Options.module.scss"
import { ITimeCoinInfo } from "./Option.interface"

export const TimeCoinOption: FC<ITimeCoinInfo> = ({ count }) => {
  return (
    <div
      className={cn(styles.option, {
        [styles.good]: count > 100,
        [styles.normal]: count > 0 && count <= 100,
        [styles.bad]: count <= 0,
      })}
    >
      <ClockAlert />
      <span>Минуты - {count}</span>
    </div>
  )
}
