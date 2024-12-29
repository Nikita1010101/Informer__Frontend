import { BadgeInfo, Dices, ShieldBan } from "lucide-react"
import { IPage } from "../../shared/Option/Option.interface"

export const publicPages: IPage[] = [
  {
    id: 1,
    Image: BadgeInfo,
    link: "/info",
    title: "Информация",
  },
  {
    id: 2,
    Image: Dices,
    link: "/wheel",
    title: "Колесо",
  },
]

export const privatePages: IPage[] = [
  ...publicPages,
  {
    id: 3,
    Image: ShieldBan,
    link: "/admin",
    title: "Админ",
  },
]
