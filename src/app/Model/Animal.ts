enum Categorie {
  Cat,
  Dog,
  Bird,
  Cow,
  Lamb,
  Horse,
  Other
}

export class Animal {


  public Title: string;
  public Description : string;
  public Price : number;
  public Created : Date;
  public Categorie : Categorie;
  public Age : number;
  public Amount : number;
  public image : string;

  constructor(Title: string, Description: string, Price: number, Created: Date , Categorie: Categorie , Age: number , Amount:number , image: string) {
   this.Title = Title;
   this.Description =Description;
   this.Price = Price;
   this.Created = Created;
   this.Categorie= Categorie;
   this.Age = Age;
   this.Amount = Amount;
   this.image = image;
  }

}
