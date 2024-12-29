import { FC } from "react"
import { BrowserRouter, Route, Routes } from "react-router"

import { Home } from "./screens/Home/Home"
import { Auth } from "./Auth/Auth"
import { Login } from "./screens/Login/Login"
import { Private } from "./Auth/Private/Private"
import { Public } from "./Auth/public/Public"
import { Admin } from "./screens/Admin/Admin"
import { Info } from "./screens/Info/Info"
import { Links } from "../constants/link.constant"

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Auth />}>
          <Route path={Links.LOGIN} element={<Login />} />
        </Route>
        <Route element={<Private />}>
          <Route path={Links.ADMIN} element={<Admin />} />
        </Route>
        <Route element={<Public />}>
          <Route index element={<Home />} />
          <Route path={Links.INFO} element={<Info />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
