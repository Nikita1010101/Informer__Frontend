import { FC } from "react"
import { ArrowBigRight, ClockAlert } from "lucide-react"
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
      <span>Минуты</span>
      <ArrowBigRight fill="#fff" />
      <span className={styles.count}>{count}</span>
    </div>
  )
}
