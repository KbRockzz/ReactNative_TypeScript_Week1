interface Payment {
    pay(amount: number): void;
  }
  
  class CashPayment implements Payment {
    public pay(amount: number): void {
      console.log(`Paid $${amount} with cash.`);
    }
  }
  
  class CardPayment implements Payment {
    public pay(amount: number): void {
      console.log(`Paid $${amount} with card.`);
    }
  }
  
  const cashPayment = new CashPayment();
  const cardPayment = new CardPayment();
  
  cashPayment.pay(100);
  cardPayment.pay(200);