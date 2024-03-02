//Задание 1

function underNumber(a, b) {
  return a < b ? a : b;
}
console.log(underNumber(1, 6));
console.log(underNumber(6, 6));
console.log(underNumber(8, 6));

//Задание 2

function evenNumber(n) {
  if (n % 2 === 0) {
    console.log("чётное");
  } else {
    console.log("нечётное");
  }
}
evenNumber(2);
evenNumber(3);
evenNumber(1555);
evenNumber(1554);

//Задание 3.1
function squareNumber(number) {
  let square = number * number;
  console.log(square);
}
squareNumber(6);

//Задание 3.2
function returnSquare(number) {
  return number * number;
}

console.log(returnSquare(7));

//Задание 4

function age() {
  let n = prompt("Сколько Вам лет?");
  if (n < 0) {
    alert("Вы ввели неправильное значение");
  } else if (n > 0 && n < 12) {
    alert("Привет, друг!");
  } else {
    alert("Добро пожаловать!");
  }
}
age();

//Задание 4

function numbers(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    return "Одно или оба значения не являются числом";
  } else {
    return num1 * num2;
  }
}
console.log(numbers(3, 3));
console.log(numbers("3", 3));
console.log(numbers(1, "6"));
console.log(numbers("101", "7"));
console.log(numbers("b", "42"));

// Задание 6

function numberCucumber() {
  let getNumber = prompt("Введите число");
  if (!isNaN(getNumber)) {
    let number = parseInt(getNumber);
    let cube = number ** 3;

    return number + " в кубе равняется " + cube;
  } else {
    return "Переданный параметр не является числом";
  }
}
for (let i = 0; i <= 10; i++) {
  console.log(numberCucumber());
}

// Задание 7
let circle1 = {
  radius: 5,
  getArea: function () {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

let circle2 = {
  radius: 8,
  getArea: function () {
    return Math.PI * Math.pow(this.radius, 2);
  },
  getPerimeter: function () {
    return 2 * Math.PI * this.radius;
  },
};

console.log("Площадь круга 1: " + circle1.getArea());
console.log("Периметр окружности 1: " + circle1.getPerimeter());
console.log("Площадь круга 2: " + circle2.getArea());
console.log("Периметр окружности 2: " + circle2.getPerimeter());
