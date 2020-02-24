const user = {
  name: 'Miguel',
  transactions: [],
  balance: 0,
  
}

function createTransaction(transaction) {
  user.transactions.push(transaction);

  if (transaction.type === 'credit') {
    user.balance = user.balance + transaction.value;
  } else if(transaction.type === 'debit') {
    user.balance = user.balance - transaction.value;
  }
}

function getHigherTransactionByType(type) {
  let higherTransaction;
  let higherValue = 0;

  for (let transaction of user.transactions) {
    if ( transaction.type == type && transaction.value > higherValue ){
        higherValue = transaction.value;
        higherTransaction = transaction;
      }
    }

  return higherTransaction;
} 

function getAverageTransactionValue() {
  let sum = 0;

  for(let transaction of user.transactions) {
    sum += transaction.value;
  }

  return sum / user.transactions.length;
}

function getTransactionsCount() {
  let countCredit = 0;
  let countDebit = 0;

  for(let transaction of user.transactions) {
    if(transaction.type == 'credit'){
      countCredit++;
    } else
      countDebit++;
  }

  return {countCredit, countDebit}
}

createTransaction({ type: "credit", value: 250 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 150 });

console.log(user.balance);
console.log(getHigherTransactionByType('credit'));
console.log(getHigherTransactionByType('debit'));
console.log(getAverageTransactionValue());
console.log(getTransactionsCount());