export interface IUser {
  name: string
  age: number
}

export class User implements IUser {
  name: string = ""
  age: number = 0

  constructor(obj: any)
  constructor(name: string, age: number)
  constructor(obj: any, age?: number) {
    if (obj instanceof Object) {
      this.name = obj.name
      this.age = parseInt(obj.age)
    }
    if (obj instanceof String) {
      this.name = obj.toString()
      this.age = age || 0
    }
  }
}
