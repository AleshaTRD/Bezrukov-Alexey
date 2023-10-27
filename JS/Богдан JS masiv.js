const MyArray = ["petr", 1, true, null, "vasya"];
console.log(MyArray);

// оператор ...  разделение обьекта на свойства

let userInfo = { name: "Alex", familia: "Bezrukov", detey: 2 };

let userAdres = { sity: "Minsk", street: "Pushkina" };

let tanyaInfo = {
  // Обьявляем обьект
  ...userInfo, // добавляем в него с помощью оператора ... св-ва из обьекта userInfo
  ...userAdres, // добавляем в него с помощью оператора ... св-ва из обьекта userAdres
  name: "Tanya", // меняем значения добавленных  св-в
  familia: "Zolotar",
};
console.table(tanyaInfo);
//
const name = "Alex";
const sity = "Minsk";
console.log(
  `меня зовут ${name + " " + "Безруков"} 
я живу в городе ${sity + " " + "РБ"}`
);

// Значение параметра по умолчанию

// Стрелочная функция
const deneg = (summa, kyrs = 2.5) => {
  return summa * kyrs;
};
console.log(deneg(1000));
//
const deneg2 = (summa, kyrs = 2.5) => summa * kyrs;
console.log(deneg2(2000, 5));
//
// ананимное Функциональное выражение
const deneg3 = function (summa, kyrs = 2.5) {
  return summa * kyrs;
};
console.log(deneg(5000));
const x = Date();
console.log(x);
