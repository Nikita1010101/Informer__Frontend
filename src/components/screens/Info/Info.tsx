import { FC, useEffect, useState } from 'react'
import { ArrowBigRight, ClockAlert } from 'lucide-react'

import { asyncWrapper } from '../../../helpers/async-wrapper.helper'
import { InfoService } from '../../../services/info/info.service'
import { InfoWrapper } from '../../shared/Wrappers/Info-wrapper/InfoWrapper'

export const Info: FC = () => {
  const [massagesCount, setMassagesCount] = useState(0)
  const [timeCoinsCount, setTimeCoinsCount] = useState(0)

  useEffect(() => {
    asyncWrapper(async () => {
      const { massagesCount, timeCoinsCount } = await InfoService.getAll()
      setMassagesCount(massagesCount)
      setTimeCoinsCount(timeCoinsCount)
    })
  }, [])

  return (
    <div>
      <InfoWrapper
        greenColorCondition={timeCoinsCount > 100}
        yellowColorCondition={timeCoinsCount > 0 && timeCoinsCount <= 100}
        redColorCondition={timeCoinsCount <= 0}
      >
        <ClockAlert />
        <h3>Минуты</h3>
        <ArrowBigRight fill='#fff' />
        <h3>{timeCoinsCount}</h3>
      </InfoWrapper>
      <InfoWrapper
        greenColorCondition={massagesCount === 0}
        redColorCondition={massagesCount > 3}
        yellowColorCondition={massagesCount > 0 && massagesCount <= 3}
      >
        <ClockAlert />
        <h3>Массажи</h3>
        <ArrowBigRight fill='#fff' />
        <h3>{massagesCount}</h3>
      </InfoWrapper>
    </div>
  )
}
