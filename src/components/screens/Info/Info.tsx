import { FC, useEffect, useState } from 'react'
import { ArrowBigRight, ClockAlert } from 'lucide-react'
import cn from 'classnames'

import styles from '../../../assets/scss/Item.module.scss'
import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { InfoService } from '../../../services/info/info.service'

export const Info: FC = () => {
  const [timeCoinsCount, setTimeCoinsCount] = useState(0)

  useEffect(() => {
    asyncWrapper(async () => {
      const { timeCoinsCount } = await InfoService.getCoins()
      setTimeCoinsCount(timeCoinsCount)
    })
  }, [])
  return (
    <div>
      <div
        className={cn(styles.item, styles.width_80, {
          [styles.green]: timeCoinsCount > 100,
          [styles.orange]: timeCoinsCount > 0 && timeCoinsCount <= 100,
          [styles.red]: timeCoinsCount <= 0,
        })}
      >
        <ClockAlert />
        <h3>ТаймКоины</h3>
        <ArrowBigRight fill='#fff' />
        <h3>{timeCoinsCount}</h3>
      </div>
    </div>
  )
}
