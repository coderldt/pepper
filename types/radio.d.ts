import { PepperComponent, PepperComponentSize } from './component'

/** Radio Component */
export declare class PRadio extends PepperComponent {
  /** Radio binding value */
  value: string | number

  /** Radio key value */
  keyName: string | number

  /** Disable the radio */
  disabled: boolean

  /** Radio size */
  size: PepperComponentSize
}
