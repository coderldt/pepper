import { PepperComponent, PepperComponentSize } from './component'

export type RadioGroupType = 'default' | 'button'

/** RadioGroup Component */
export declare class PRadioGroup extends PepperComponent {
  /** Radio group data object */
  data: object[]

  /** The key field name of the Radio group object */
  keyName: string

  /** The key label name of the Radio group object */
  labelName: string

  /** Radio binding value */
  value: string | number

  /** Radio group type */
  type: RadioGroupType

  /** Radio group size */
  size: PepperComponentSize

  /** Disable the Radio */
  disabled: boolean
}
