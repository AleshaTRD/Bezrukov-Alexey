// ФУНКЦИЯ - блок кода который можно выполнять многократно!
function myFun(a, b) {
   let c;
   a = a + 1;
   c = a + b;
   return c;
}
const rezyltF = myFun(8, 10); //присвоили переменной результат вызова F
console.log(rezyltF);

//(Не рекомендуется) Функция не должна мутировать внешний обьект (вне самой функции)!
const ivanovich = { name: "Sergey", age: 36 }; //обьект
function increasePersonAge(person) {
   //ф-ция прибавляет св-ву "age" обьекта еденицу
   person.age += 1;
   return person;
}
increasePersonAge(ivanovich); //после выполнения ф-ции мутирует св-во "age" в обьекте
console.log(ivanovich.age);

//Как избежать мутации при выполнении ФУНКЦИИ
const vanyshin = { name: "Sanya", age: 37 }; //обьект
function changePersonAge(person) {
   const olderPerson1 = Object.assign({}, person); //в теле ф-ции создается обьект, который копирует обьект из аргумент функции
   olderPerson1.age += 1;
   return olderPerson1; // и уже в этой копии мы меняем св-во "age" и возвращаем измененную копию
}
const olderPerson = changePersonAge(vanyshin); //константе "olderPerson" мы присваиваем значение полученное при выполнении Функции
console.log(olderPerson.age); //св-во "age" в новом обьектк изменилось при выполнении ф-ции
console.log(vanyshin.age); //св-во "age" в оригинальном обьекте осталось неизменным

//КОЛБЭК ФУНКЦИЯ - ф-ция которая вызывается внутри другой ф-ции
function printMyName() {
   console.log("Alex");
}
setTimeout(printMyName, 2000); //setTimeout это встроенная JS ф-ция

function printHisName(colbackFun) {
   colbackFun();
}
printHisName(printMyName);
