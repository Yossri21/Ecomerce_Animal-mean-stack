export class User {

  public email : string;
  public password : string;
  public name?: string;
  public lastName? : string;
  public phone? : number;
  public address?: string;

  constructor(email: string, password: string, name?: string, LastName?: string, Phone?: number, address?: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.lastName = LastName;
    this.phone = Phone;
    this.address = address;

  }

}
