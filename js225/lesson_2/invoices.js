let invoices = {
  unpaid: [],
  add(name, amount) {
    this.unpaid.push({name, amount})
  },
  totalDue() {
    return this.computeSum(this.unpaid)
  },
  totalPaid() {
    return this.computeSum(this.paid)
  },
  computeSum(array) {
    return array.reduce((prev, curr) => {
      return prev += curr.amount;
    }, 0)
  },
  paid: [],
  payInvoice(name) {
    let newUnpaid = []
    this.unpaid.forEach((invoice) => {
      if (invoice.name === name) {
        this.paid.push(invoice);
      } else {
        newUnpaid.push(invoice);
      }
    })
    this.unpaid = newUnpaid;
  }
}

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
console.log(invoices.totalDue()) 
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());//550
console.log(invoices.totalDue()); //187.5