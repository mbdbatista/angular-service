export interface ModalData {
  title: string
  subtitle: string
  isEnabled: boolean
  content: string
}

export enum ModalCallbackType {
  CLOSE = 'CLOSE',
  CANCEL = 'CANCEL',
  CONFIRM = 'CONFIRM'
}