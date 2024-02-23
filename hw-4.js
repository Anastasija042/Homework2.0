//Задание 1
let i = 0;
while (i < 2) {
  console.log("Привет!");
  i++;
}

//Задание 2
let i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);

//Задание 3
let i = 7;
do {
  console.log(i);
  i++;
} while (i <= 22);

//Задание 4
const obj = {
  Коля: "200",
  Вася: "300",
  Петя: "400",
};
for (let key in obj) console.log(`${key} - зарплата ${obj[key]} долларов.`);

//Задание 5

let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log(n);
console.log(num);

//Задание 6
let firstFriday = 5;
let day = firstFriday;
while (day <= 31) {
  console.log(
    "Сегодня пятница, " + day + "-е число. Необходимо подготовить отчет."
  );
  day += 7;
}
