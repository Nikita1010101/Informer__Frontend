import { Links } from '../../constants/link.constant'

export type LinkValues = (typeof Links)[keyof typeof Links]

export interface IAuth {
  conditional: boolean
  isLoading: boolean
  link: LinkValues
}
