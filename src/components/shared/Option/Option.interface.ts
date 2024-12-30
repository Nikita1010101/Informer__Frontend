import { LucideIcon } from 'lucide-react'

export interface ILinkOption {
  id: number
  Image: LucideIcon
  link: string
  title: string
  onClickFn?: () => void
}

export interface IInfo {
  count: number
}

export type ITimeCoinInfo = IInfo
export type IMassagesInfo = IInfo
