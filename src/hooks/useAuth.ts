import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

import { ITokens } from '../interfaces/token.interface'
import { asyncWrapper } from '../helpers/async-wrapper.helper'
import { AuthService } from '../services/token/Token.service'

export const useAuth = () => {
  const location = useLocation()
  const [token, setToken] = useState(
    localStorage.getItem(import.meta.env.VITE_TOKEN_KEY)
  )
  const [isLoading, setIsLoading] = useState(true)
  const [tokens, setTokens] = useState<ITokens>(() => {
    asyncWrapper(async () => {
      const { privateData, publicData } = await AuthService.getAll()

      setTokens({ private: privateData.token, public: publicData.token })
    })

    return {} as ITokens
  })
  const [conditionals, setConditionals] = useState({
    login: false,
    private: false,
    public: false,
  })

  useEffect(() => {
    if (Object.keys(tokens).length !== 0) {
      setConditionals({
        login: tokens.private === token || tokens.public === token,
        private: tokens.private !== token,
        public: tokens.private !== token && tokens.public !== token,
      })
      setIsLoading(false)
    }
  }, [token, tokens])

  useEffect(() => {
    setToken(localStorage.getItem(import.meta.env.VITE_TOKEN_KEY))
  }, [location])

  return { isLoading, conditionals }
}
