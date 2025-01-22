import { ChangeEvent, useEffect, useState } from 'react'
import { asyncWrapper } from '../helpers/async-wrapper.helper'
import { InfoService } from '../services/info/info.service'

export const useShop = () => {
  const [inputValue, setInputValue] = useState(0)
  const [timeCoinsCount, setTimeCoinsCount] = useState(0)
  const [tokenCoinsCount, setTokenCoinsCount] = useState(0)
  const [isAccessible, setIsAccessible] = useState(false)

  useEffect(() => {
    asyncWrapper(async () => {
      const { timeCoinsCount, tokenCoinsCount } = await InfoService.getCoins()
      setTimeCoinsCount(timeCoinsCount)
      setTokenCoinsCount(tokenCoinsCount)
    })
  }, [])

  function checkInputValue(value: number) {
    return value <= tokenCoinsCount && value > 0
  }

  function onChangeInputValue(event: ChangeEvent<HTMLInputElement>) {
    const value = +event.target.value

    if (checkInputValue(value)) {
      setIsAccessible(true)
    } else {
      setIsAccessible(false)
    }

    setInputValue(value)
  }

  function convertTokenCoinsToTimeCoins() {
    if (checkInputValue(inputValue)) {
      asyncWrapper(async () => {
        setTokenCoinsCount(prev => prev - inputValue)
        setInputValue(0)

        const newTimeCoinsCount = timeCoinsCount + inputValue * 5,
          newTokenCoinsCount = tokenCoinsCount - inputValue

        await InfoService.editCoins(newTimeCoinsCount, newTokenCoinsCount)
      })
    } else {
      alert('Недостаточно средств!')
    }
  }

  return {
    inputValue,
    tokenCoinsCount,
    isAccessible,
    onChangeInputValue,
    convertTokenCoinsToTimeCoins,
  }
}
