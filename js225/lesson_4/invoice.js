function createInvoice(services = {}) {
  // implement the factory function here
  internet = services.internet || 5500;
  phone = services.phone || 3000;
  return {
    internet,
    phone,
    total(){
      return this.internet + this.phone
    },
    addPayments(payment){
      //turn the payment to an array if it isn't one already
      if (!Array.isArray(payment)) {
        payment = [payment]
      };
      payment.forEach((obj) => {
        this.amountPaid += obj.total();
      })
    },
    amountDue(){
      return this.total() - this.amountPaid
    },
    amountPaid: 0,
  }
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}


function createPayment(services = {}) {
  return{
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount || 0,
    total(){
      if (this.amount > 0) {
        return this.amount
      } else {
        return this.phone + this.internet
      }
    }
  }
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});
invoice.addPayments(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0