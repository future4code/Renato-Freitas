class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string
  ) {
    console.log("Chamando o construtor da classe User")
    this.id = id
    this.email = email
    this.name = name
    this.password = password
  }

  public getId(): string {
    return this.id
  }

  public getEmail(): string {
    return this.email
  }

  public getName(): string {
    return this.name
  }

  public introduceYourself(): string {
    return `Olá sou ${this.name}, bom dia!`
  }
}
const renato = new User("1", "renato.marinhofr@gmail.com", "Renato", "123456")

console.log(renato.password)

console.log(renato.introduceYourself());

class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
    id: string,
    email: string,
    name: string,
    password: string,
    creditCard: string
  ) {
    super(id, email, name, password);
    console.log("Chamando o construtor da classe Customer");
    this.creditCard = creditCard;
  }

  public getCreditCard(): string {
    return this.creditCard;
  }
}

const customerRenato = new Customer("2", "renato.marinhofr@gmail.com", "Renato", "123456", "5421125678891245");

console.log(customerRenato.getCreditCard());
console.log(customerRenato.introduceYourself());

