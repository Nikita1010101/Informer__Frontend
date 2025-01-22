import { FC } from 'react'
import cn from 'classnames'

import styles from '../../../assets/scss/Item.module.scss'
import { useShop } from '../../../hooks/useShop'

export const Shop: FC = () => {
  const {
    inputValue,
    isAccessible,
    tokenCoinsCount,
    convertTokenCoinsToTimeCoins,
    onChangeInputValue,
  } = useShop()

  return (
    <div
      className={cn(
        styles.item,
        styles.width_90,
        styles.direction_column_center,
        styles.blue
      )}
    >
      <h3>Обменник</h3>
      <hr className={styles.width_90} />
      <div className={styles.token_info}>
        <div>
          <span>
            {'Имеется --- '}
            <strong>{tokenCoinsCount}</strong>
          </span>
        </div>
        <div>
          <input
            className={cn({
              [styles.green_outline]: isAccessible,
              [styles.red_outline]: !isAccessible,
            })}
            value={inputValue}
            onChange={event => onChangeInputValue(event)}
            type='number'
            disabled={tokenCoinsCount === 0}
          />
        </div>
        <button
          className={cn(styles.convert, {
            [styles.animation]: tokenCoinsCount !== 0,
          })}
          onClick={convertTokenCoinsToTimeCoins}
        >
          Конвертировать
        </button>
        <span>
          в{' '}
          <strong>
            {inputValue > 0 && inputValue <= tokenCoinsCount
              ? inputValue * 5
              : 0}
          </strong>{' '}
          ТаймКоинов
        </span>
      </div>
    </div>
  )
}
