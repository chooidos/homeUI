export type OpenhabItemType = 'Group' | 'Switch' | 'Dimmer';

export interface IOpenhabItem {
  type: OpenhabItemType
  name: string
  label: string
  category: string
  tags: string[]
  link: string
  state: string
  transformedState: string
  stateDescription?: {
    minmum: number
    maximum: number
    step: number
    pattern: string
    readOnly: boolean
  }
}