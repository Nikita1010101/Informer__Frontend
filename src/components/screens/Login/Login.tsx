import { FC, useState } from "react"
import { DoorOpen } from "lucide-react"

import styles from "./Login.module.scss"
import { AuthService } from "../../../services/token/Auth.service"
import { localStorageHelper } from "../../../helpers/local-storage.helper"
import { compareSync } from "bcryptjs"
import { useNavigate } from "react-router"

export const Login: FC = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

  const login = async () => {
    const privateData = await AuthService.getPrivate()
    const publicData = await AuthService.getPublic()

    if (password === '') {
      alert('Поле не должно быть пустым')
    }
    else if (compareSync(password, privateData.token)) {
      localStorageHelper.setItem("token", privateData.token)
      navigate("/")
    } else if (compareSync(password, publicData.token)) {
      localStorageHelper.setItem("token", publicData.token)
      navigate("/")
    } else {
      setPassword("")
      alert("Неверный пароль")
    }
  }

  return (
    <div className={styles.login}>
      <div className={styles.title}>
        <h1>Вход</h1>
        <DoorOpen size={28} />
      </div>
      <div className={styles.form}>
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
        <button onClick={login}>Войти</button>
      </div>
    </div>
  )
}