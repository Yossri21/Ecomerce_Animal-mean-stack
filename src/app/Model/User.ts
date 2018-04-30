export class User {

  public name: string;
  public lastName : string;
  public phone : number;
  public Email : string;
  public PWD : string;
  public Statue : Boolean;

  constructor(name: string, LastName: string, Phone: number, Email: string, PWD: string , Statue: Boolean) {
    this.name = name;
    this.lastName = LastName;
    this.phone = Phone;
    this.Email = Email;
    this.PWD = PWD;
    this.Statue = Statue;

  }

}
