// Задача 1. Акаунт користувача
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі.
// Виконай рефакторинг методів об'єкта customer,
// розставивши відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг.
// Після оголошення об'єкта ми додали виклики методів.
// У консоль будуть виведені результати їх роботи.


const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return balance;
  },
  getDiscount() {
    return discount;
  },
  setDiscount(value) {
    discount = value;
  },
  getOrders() {
    return orders;
  },
  addOrder(cost, order) {
    balance -= cost - cost * discount;
    orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
