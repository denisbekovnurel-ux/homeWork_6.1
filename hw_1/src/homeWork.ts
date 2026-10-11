function calculateDiscount(price: number, discountPercentage: number): number {
  return price - (price * discountPercentage) / 100;
}

const categories: string[] = ["Electronics", "Clothes"];

export type OrderStatus = "pending" | "shipped" | "delivered";
export type PaymentMethod = string | number;

interface Product {
  readonly id: number;
  title: string;
  price: number;
  isAvailable: boolean;
  colors: string[];
  description?: string;
  manufacturer: {
    country: string;
    city: string;
  };
}

const myProduct: Product = {
  id: 1,
  title: "iPhone 15",
  price: 999,
  isAvailable: true,
  colors: ["black", "white"],
  manufacturer: {
    country: "China",
    city: "Shenzhen",
  },
};

interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  role: "admin";
  banUser(username: string): void;
}

const superAdmin: Admin = {
  id: 1,
  name: "Nurel",
  email: "nur@gmail.com",
  role: "admin",
  banUser(username) {
    console.log(`Пользователь ${username} забанен`);
  },
};

superAdmin.banUser("spammer123");

function processData(data: unknown): void {
  if (typeof data === "string") {
    console.log(`Данные - строка, длина: ${data.length}`);
  } else if (typeof data === "number") {
    console.log(`Данные - число, умноженное на 10: ${data * 10}`);
  } else if (Array.isArray(data)) {
    console.log(`Данные - массив, элементов: ${data.length}`);
  }
}

console.log(calculateDiscount(200, 15));
console.log(categories, myProduct);
processData("hello");
processData(7);
processData([1, 2, 3]);
