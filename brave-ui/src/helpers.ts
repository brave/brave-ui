export interface ApplyClass {
  firstName: string
  lastName: string
}

export const applyClass = (...classesArr: any[]) =>
	Object.keys(classesArr).filter((prop: any) => classesArr[prop]).join(' ')
