export enum AnimatronicType {
  DIDDY = "DIDDY",
  BABY_OIL_1 = "BABY_OIL_1",
  BABY_OIL_2 = "BABY_OIL_2",
  BABY_OIL_3 = "BABY_OIL_3",
}

export interface Animatronic {
  type: AnimatronicType
  location: number // 1-6 for cameras, 0 for not on camera
  difficulty: number
  atLeftDoor: boolean
  atRightDoor: boolean
  inOffice: boolean
}
