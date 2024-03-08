// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// ПИСАТЬ КОД ЗДЕСЬ
let programmer = {
  name: "Azat",
  surname: "Muratbekov",
  age: 16,
  programmingLanguage: "JavaScript",
  salary: 4 ,
  valuta:"com",
  poprikolu :"Можно же еще это добавить?"
};

console.log(programmer.name);
console.log(programmer.surname);
console.log(programmer.age);
console.log(programmer.programmingLanguage);
console.log(programmer.salary + "" , programmer.valuta ,"" + "-" ,programmer.poprikolu);
// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ
// let firstNum = prompt("Введите первое число");
// let secondNum = prompt("Введите второе число");

// let sum = parseInt(firstNum) + parseInt(secondNum);

// if (sum > 10 && sum < 20) {
//     sum *= 5;
// } else if (sum > 20 && sum < 50) {
//     sum /= 3;
// } else {
//     sum += 10;
// }

// console.log("Результат:", sum);
// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ

let aboutUs = [
    ["name", "Makers"],
    ["type", "Bootcamp"],
    ["place", "Bishkek"],
    ["languages", "JavaScript, Python"],
    ["simply", "the best!"]
];
for(let i = 0;i < aboutUs.lenght;i++){
  let key = aboutUs[i][0];
  let value = aboutUs[i][1];
  console.log($`${key}: ${value}`);
}


// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// ПИСАТЬ КОД ЗДЕСЬ
let users = {
  "John": 28,
  "Mark": 30,
  "David": 25,
  "Richard": 42
};
let totalAge = 0;
let userCount = 0;

for (let user in users) {
  totalAge += users[user];
  userCount++;
}
let sumAge = totalAge + userCount;
sumAge = Math.round(sumAge);

console.log("Суммарный возраст всех участников составляет", sumAge);
// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

// ПИСАТЬ КОД ЗДЕСЬ
function removeElem(arr, element) {
  return arr.filter(function(value) {
      return value !== element;
  });
}
let arr = [2, 'hello', true, 'world', 5, 'js'];
let smashArr = removeElem(arr, 'world');

console.log(smashArr);
// Задание №6
// Создайте функцию-замыкание, которая возвращает анонимную функцию и высчитывает сумму аргументов возвращаемой функции с аргументом главной функции, то есть нужно посчитать сумму аргументов родительской функции и дочерней функции.

// function foo(a) {
//   //Допишите ф-ю
// }
// // Пример:
// const res = foo(3)(4);
// console.log(res); //7

// function foo(a) {
//     //Допишите ф-ю
//   }
//   // Пример:
//   const res = foo(3)(4);
//   console.log(res); //7

// ПИСАТЬ КОД ЗДЕСЬ
function foo(a) {
  return function(b) {
      return a + b;
  };
}

const res = foo(3)(4);
console.log(res); // 7  
// Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ
function functionLimit(value, limit) {
  let currentValue = value;
  
  while (currentValue < limit) {
    console.log(currentValue);
    currentValue *= 2;
  }
  
  let backArguments = [];
  
  while (currentValue >= value) {
    backArguments.push(currentValue);
    currentValue /= 2;
  }
  
  
  backArguments.forEach((arg) => {
    console.log(arg);
  });
  
  backArguments.slice(5,"Неважно что тут написано")
  
  backArguments.reverse();
}
functionLimit(50, 1000);

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

// ПИСАТЬ КОД ЗДЕСЬ
let friends = ["Aлмаз", "Руслан", "Арген", "Бекжан","Алихан","Абдурахмон"];
let filtered = friends.filter((item) =>{
    if(item.length > 5){
        return item;
    }
});
console.log((filtered));


// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ
let task2 = [10, 25, 25, 15, 5, 10];
let sum = 0;

task2.forEach(function(item) {
    sum += item;
});

// alert("Сумма элементов массива: " + sum);
// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ

function maxDuplicateCount(array) {
  let maxCount = 0;
  array.forEach(function(item, index) {
      let count = 0;
      for (let i = index; i < array.length; i++) {
          if (array[i] === item) {
              count++;
          }
      }
      if (count > maxCount) {
          maxCount = count;
      }
  });
  return maxCount;
}

let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];
let maxCount = maxDuplicateCount(task5);
console.log("Максимальное количество повторяющихся элементов в массиве: " + maxCount);
// Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ
function countSmallerNumbers(nums) {
  return nums.map((num, index) => {
      let count = nums.reduce((acc, curr) => {
          if (curr < num) {
              return acc + 1;
          } else {
              return acc;
          }
      }, 0);
      return count;
  });
}

let nums1 = [8, 1, 2, 2, 3];
let result1 = countSmallerNumbers(nums1);
console.log(result1);
// -ужас[4, 0, 1, 1, 3]

let nums2 = [6, 5, 4, 8];
let result2 = countSmallerNumbers(nums2);
console.log(result2);
// -Страшное позади[2, 1, 0, 3]
// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// ПИСАТЬ КОД ЗДЕСЬ
let a = 0;
let b = 1;
[a, b] = [b, a];
console.log(a,",",b)
// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// ПИСАТЬ КОД ЗДЕСЬ
const obj = { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true };

const { size: { width, height }, items: [item1, item2], extra } = obj;

console.log("Width:", width);
console.log("Height:", height);
console.log("Item 1:", item1);
console.log("Item 2:", item2);
console.log("Extra:", extra);
// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ


let checkTask = {
  currentFloor: 1,
  printFloor: function() {
      return this.currentFloor
  },

  upOneFloor: function() {
      if(this.currentFloor < 16) {
          this.currentFloor++;
          return this.currentFloor
      }  
      else {
          return 'Error!'
      }
  },

  downOneFloor: function() {
      if(this.currentFloor > 1) {
          this.currentFloor--;
          return this.currentFloor
      }
      else{
          return 'Error!'
      }
  },

  toFloor: function(floor) {
      if(floor < 1 || floor > 16) {
          return 'Error!'
      }
      
      while (this.currentFloor < floor) {
          this.upOneFloor()
          return this.printFloor()
      }

      while (this.currentFloor > floor) {
          this.downOneFloor()
          return this.printFloor()
      }

      return `Вы на ${floor}`
  }
}
//-Приложенно сил: 0.00001%;
//-Потраченно time:4 hours;(
//-Закончил: 22:41 8sec;