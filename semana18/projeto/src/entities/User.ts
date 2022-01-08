export class User {
    private id :string
    private name: string
    private email: string
    private age: number
  
    constructor(
      charId: string,
      charName: string,
      charEmail: string,
      charAge: number
    ) {
      this.id = charId
      this.name = charName
      this.email = charEmail
      this.age = charAge
    }

  }
  
  