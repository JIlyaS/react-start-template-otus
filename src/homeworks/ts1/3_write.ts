/**
 * Функции написанные здесь пригодятся на последующих уроках
 * */

type Category = {
    id: string;
    name: string;
    photo?: string;
};

type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: string;
    category: Category;
};

type Operation = Cost | Profit;

type Cost = {
  id: string;
  name: string;
  desc?: string;
  createdAt: string;
  amount: number;
  category: Category;
  type: 'Cost';
};

type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: 'Profit';
};

export const createRandomProduct = (createdAt: string): Product => {
    return {
        id: `${Math.ceil(Math.random()*100)}`,
        name: 'Новый продукт',
        photo: 'photo',
        desc: 'Описание',
        createdAt: createdAt,
        oldPrice: 100,
        price: '123',
        category: {
            id: `${Math.ceil(Math.random()*100)}`,
            name: '123',
            photo: '123',
        }
    };
};

export const createRandomOperation = (createdAt: string): Operation => {
    const randomNumber = Math.round(Math.random());
    const operations: string[] = ['Cost', 'Profit'];

    switch (operations[randomNumber]) {
      case 'Cost':
        return {
            id: `${Math.ceil(Math.random()*100)}`,
            name: 'Новый продукт',
            desc: 'Описание',
            createdAt: createdAt,
            amount: 500,
            category: {
                id: `${Math.ceil(Math.random()*100)}`,
                name: 'Категория',
                photo: '123',
            },
            type: 'Cost',
        };
      case 'Profit':
        return {
            id: `${Math.ceil(Math.random()*100)}`,
            name: 'Новый продукт',
            desc: 'Описание',
            createdAt: createdAt,
            amount: 600,
            category: {
                id: `${Math.ceil(Math.random()*100)}`,
                name: '123',
                photo: '123',
            },
            type: 'Profit',
        };
      default:
        throw new Error(`unknown type: ${operations[randomNumber]}`);
    }
};

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (строка)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
// export const createRandomProduct = (createdAt: string) => {};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
// export const createRandomOperation = (createdAt: string) => {};
