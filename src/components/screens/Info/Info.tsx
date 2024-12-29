import { FC, useEffect, useState } from "react"

import { TimeCoinOption } from "../../shared/Option/TimeCoinOption"
import { MassagesOption } from "../../shared/Option/MassagesOption"
import { asyncWrapper } from "../../../helpers/async-wrapper.helper"
import { InfoService } from "../../../services/info/info.service"

export const Info: FC = () => {
  const [massagesCount, setMassagesCount] = useState(0)
  const [timeCoinsCount, setTimeCoinsCount] = useState(0)

  useEffect(()=> {
    asyncWrapper(async () =>{
      const { massagesCount, timeCoinsCount } = await InfoService.getAll()
      setMassagesCount(massagesCount)
      setTimeCoinsCount(timeCoinsCount)
    })
  }, [])

  return (
    <div>
      <TimeCoinOption count={timeCoinsCount} />
      <MassagesOption count={massagesCount} />
    </div>
  )
}
