import { type IconType } from 'react-icons'
import {
  MdOutlineCheck,
  MdOutlineWarningAmber,
  MdErrorOutline,
  MdInfoOutline,
  MdTagFaces
} from 'react-icons/md'

import { type Variant } from '@/types'
type AlertIcon = Record<Variant, IconType>

export const alertIcon: AlertIcon = {
  primary: MdTagFaces,
  success: MdOutlineCheck,
  error: MdErrorOutline,
  warning: MdOutlineWarningAmber,
  info: MdInfoOutline
}
