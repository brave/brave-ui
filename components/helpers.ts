export interface ApplyClass {
  [key: string]: boolean
}

export const applyClass = (classesObj: ApplyClass) => {
	return Object.keys(classesObj).filter((prop: any) => classesObj[prop]).join(' ')
}
