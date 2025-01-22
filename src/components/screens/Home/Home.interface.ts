import { LucideIcon } from "lucide-react"

import { Links } from "../../../constants/link.constant"

export type TLink = typeof Links[keyof typeof Links]

export interface IPage {
  id: number
  Image: LucideIcon
  link: TLink
  title: string
}