class Transaction {
  value: number;
  date: Date;
  description: string;
}

class Account {
  name: string;
  cpf: string;
  dbirth: string;
  balance?: number;
  statement: Transaction[] = [];

  constructor() {
    if (!this.balance) {
      this.balance = 0;
    }
  }
}

export { Account, Transaction };