/*// Задание 1
let password = "пароль";
let QuestionPassword = prompt("Какой пароль?");
if (QuestionPassword === password) {
  alert("Верно");
} else {
  alert("нет");
}


// Задание 2
let c = 5;
if (c > 0 && c < 10) {
  console.log("Верно");
} else {
  console.log("Неверно");
}

// Задание 3
d = 3;
e = 105;
if (d > 100 || e > 100) {
  console.log("Верно");
} else {
  console.log("Неверно");
}


// Задание 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));

// Задание 5
let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '12':
    case '1':
    case '2':
        console.log('зима');
        break;
    case '3':
    case '4':
    case '5':
        console.log('весна');
        break;
    case '6':
    case '7':
    case '8':
        console.log('лето');
        break;
    case '9':
    case '10':
    case '11':
        console.log('осень');
        break;

    default:
        console.log('такого месяца не бывает')
        break;
}

// Задание 7

let zufra = prompt("Введите число");
if (!isNaN(Number(zufra))) {
  if (Number(zufra) % 2 === 0) {
    alert("чётное");
  } else {
    alert("нечётное");
  }
} else {
  alert("это не число");
}

// Задание 8
let clientOS = 0;
if (clientOS === 0) {
  console.log("Установите версию приложения для iOS по ссылке");
} else if (clientOS === 1) {
  console.log("Установите версию приложения для Android по ссылке");
} else {
  console.log("Неизвестная система");
}
*/
