# TypeScript Comprehensive Guide

## 1. Introduction to TypeScript
TypeScript is a strongly typed superset of JavaScript that compiles to plain JavaScript. It adds static typing, interfaces, and other features to improve maintainability and scalability.

## 2. Installation and Setup
### Installing TypeScript
```sh
npm install -g typescript
```
### Checking the Version
```sh
tsc --version
```
### Compiling TypeScript
```sh
tsc filename.ts
```
### TypeScript Configuration File
Create a `tsconfig.json` file:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "strict": true,
    "outDir": "./dist"
  },
  "include": ["src"]
}
```

## 3. Defensive Coding
TypeScript helps enforce defensive coding by providing strict type checking, making code less prone to runtime errors.

## 4. Obligatory Types Basics Lesson
```ts
let isDone: boolean = false;
let age: number = 25;
let username: string = "John";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 42];
let notSure: any = 4;
let u: undefined = undefined;
let n: null = null;
```

## 5. Adding Types to Variables
```ts
let orderId: string = "ORD1234";
```

## 6. Defining Custom Types
```ts
type Pizza = {
  name: string;
  price: number;
};
```

## 7. Moving Code to TypeScript
Ensure JavaScript files are converted to TypeScript by renaming `.js` files to `.ts` and applying types.

## 8. Adding a Pizza Type
```ts
type Pizza = {
  id: string;
  name: string;
  price: number;
};
```

## 9. Nested Object Types
```ts
type Customer = {
  name: string;
  address: {
    street: string;
    city: string;
    zipCode: string;
  };
};
```

## 10. Optional Properties
```ts
type Order = {
  id: string;
  pizzaId: string;
  customerId?: string;
};
```

## 11. Adding an Order Type
An `Order` type defines the structure of an order object. It helps in keeping track of pizzas, their status, and customer details.
```ts
type Order = {
  id: string;
  pizza: Pizza;
  status: "pending" | "completed" | "canceled";
  customer?: Customer;
};
```
### Example Usage:
```ts
const order: Order = {
  id: "ORD001",
  pizza: { id: "PZ001", name: "Pepperoni", price: 12.99 },
  status: "pending",
};
```

## 12. Typing Arrays
TypeScript allows us to define arrays with specific types to ensure type safety.
```ts
let pizzas: Pizza[] = [
  { id: "PZ001", name: "Margherita", price: 10.99 },
  { id: "PZ002", name: "BBQ Chicken", price: 14.99 },
];
```
### Example:
```ts
pizzas.push({ id: "PZ003", name: "Veggie", price: 9.99 });
```

## 13. Type orderQueue
`orderQueue` represents an array of `Order` objects, useful for tracking pending orders.
```ts
let orderQueue: Order[] = [];
```
### Example:
```ts
orderQueue.push(order);
console.log(orderQueue);
```

## 14. Literal Types
Literal types restrict a variable to a specific set of values.
```ts
type OrderStatus = "pending" | "completed" | "canceled";
let status: OrderStatus = "pending";
```
### Example:
```ts
status = "completed"; // ✅ Valid
status = "shipped"; // ❌ Error: Type '"shipped"' is not assignable to type 'OrderStatus'.
```

## 15. Unions
Unions allow a variable to have multiple types.
```ts
type PaymentMethod = "cash" | "credit card" | "paypal";
let payment: PaymentMethod = "credit card";
```
### Example:
```ts
function processPayment(method: PaymentMethod) {
  console.log(`Processing payment via ${method}`);
}
processPayment("cash"); // ✅ Valid
processPayment("bank transfer"); // ❌ Error
```

## 16. Function Return Types
Defining function return types enhances clarity and prevents unintended results.
```ts
function getPizzaPrice(pizza: Pizza): number {
  return pizza.price;
}
```
### Example:
```ts
const price = getPizzaPrice({ id: "PZ001", name: "Pepperoni", price: 15.99 });
console.log(price); // Outputs: 15.99
```

## 17. TS-Specific Types: `any`
```ts
let data: any = "Hello";
data = 42;
```

## 18. Adding Return Type to `getPizzaDetail`
```ts
function getPizzaDetail(pizza: Pizza): string {
  return `${pizza.name} costs $${pizza.price}`;
}
```

## 19. Void Return Type
```ts
function logMessage(message: string): void {
  console.log(message);
}
```

## 20. Add Automatic IDs to Menu Items
```ts
function createPizza(name: string, price: number): Pizza {
  return { id: crypto.randomUUID(), name, price };
}
```

## 21. Utility Types & Partial
`Partial<T>` makes all properties optional.
```ts
type PartialOrder = Partial<Order>;
```
### Example:
```ts
const newOrder: PartialOrder = {
  id: "ORD002",
  status: "pending",
};
```

## 22. Omit Utility Type
`Omit<T, K>` removes specified properties from a type.
```ts
type OrderWithoutStatus = Omit<Order, "status">;
```
### Example:
```ts
const orderDetails: OrderWithoutStatus = {
  id: "ORD003",
  pizza: { id: "PZ002", name: "BBQ Chicken", price: 14.99 },
};
```

## 23. Fix TS Warnings with Omit
Using `Omit` can help prevent unnecessary type warnings when handling object properties dynamically.

## 24. Generics
```ts
function identity<T>(arg: T): T {
  return arg;
}
```

## 25. Generic Functions in the Pizza Restaurant
```ts
function getFirstItem<T>(items: T[]): T {
  return items[0];
}
```

## 26. Explicitly Type Generic Function Calls
```ts
const firstPizza = getFirstItem<Pizza>(pizzas);
```

## 27. Conclusion... for Now
TypeScript enhances JavaScript by adding static types, improving code reliability and maintainability. With practice, you can leverage its full potential to build scalable applications!
