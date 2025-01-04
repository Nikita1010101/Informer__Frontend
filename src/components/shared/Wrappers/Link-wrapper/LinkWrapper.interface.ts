import { LucideIcon } from 'lucide-react'

export interface ILinkWrapper {
  link: string
  onClickFn?: () => void
}

export interface ILink {
  id: number,
  Image: LucideIcon,
  link: string,
  title: string,
}