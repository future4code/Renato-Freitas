class Transaction {
  private date: string;
  private value: number;
  private description: string;

  constructor(date: string, value: number, description: string) {
    this.date = date;
    this.value = value;
    this.description = description
  }
}

class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  // 01
  // a) Podemos ter ações que devem ser executadas ao criar uma instância da classe e para isso chamamos o constructor que pode receber parâmetros no momento de criar a instância.

  // C) Para ter acesso às propriedades privadas de uma classe, deve ser adicionado métodos públicos que proporcionem isso.

  
  constructor(cpf: string, name: string, age: number,) {
    console.log("Chamando o construtor da classe UserAccount")
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }
}

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }
}

const novoUsuario = new UserAccount("123.456.789-10", "João", 40);

