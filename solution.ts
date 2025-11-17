function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    if (value === true) {
      return false;
    } else {
      return true;
    }
  } else {
    return "The input value is not accepted";
  }
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  } else {
    return 0;
  }
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: '${this.name}, Age: ${this.age}'`;
  }
}

interface IFilterItems {
  title: string;
  rating: number;
}

function filterByRating(items: IFilterItems[]): IFilterItems[] {
  return items.filter((item) => item.rating >= 4);
}

interface IUsers {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: IUsers[]): IUsers[] {
  return users.filter((user) => user.isActive === true);
}

interface IBook {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: IBook): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(
  array1: (number | string)[],
  array2: (number | string)[]
): (number | string)[] {
  const result: (number | string)[] = [];
  const newArray = [...array1, ...array2];

  for (let i = 0; i < newArray.length; i++) {
    let isExist = false;

    for (let j = 0; j < result.length; j++) {
      if (newArray[i] === result[j]) {
        isExist = true;
      }
    }
    if (!isExist) {
      result.push(newArray[i]);
    }
  }

  return result;
}

function calculateTotalPrice() {
  //TODO: Solve problem 8
}
