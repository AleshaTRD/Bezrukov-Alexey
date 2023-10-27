//myName = "Alex";
//console.log(myName);
const alex = { a: 1, b: true, c: "alex" };
const alexCopy = alex;
alexCopy.d = 5;
alex.a = true;
console.log(alexCopy);
console.table(alexCopy);

const myCity = { city: "Minsk" };
console.log(myCity);
myCity.pogoda = "Govno";
myCity.street = "Pyshkina";
myCity.number = 47;
console.log(myCity.number);

//удаление оператор
delete myCity.number;
console.log(myCity);

//Скобочная  запись (добавляем св-во для обьекта MyCity из значения переменной countryPropertyName)
const countryPropertyName = "country";
myCity[countryPropertyName] = "Belarus";
console.log(myCity);

//многоуровневая вложенность
const myDother = {
   herName: "Ksy",
   vozrost: 7,
   herLike: { smotret: "myltiki", kyshat: "konfety", pit: "kokteli" },
};
console.log(myDother.herLike.kyshat);

//удалить св-во из вложенного обюекта (2 варианта)
delete myDother.herLike.pit;
delete myDother.herLike["kyshat"];
console.log(myDother);

//значение свойства обьекта - из переменной, обьявленной ранее
const etajey = 12;
const moyEtaj = 10;
const dom = {
   etajey: etajey, //взял значение из переменной
   moyEtaj, //сокращенная запись ( если имя св-ва и переменной совпадают)
   perviEtaj: 1,
};
console.log(dom);

//Метод - сво-во обьекта значение которого функция
const street = {
   nazvanie: "Pyshkina",
   tablichka: function () {
      console.log("PYSHKINA!!!");
   }, //функция в значении
   nomerDoma() {
      console.log("47"); //функция в значении сокращенная запись!
   },
};
street.tablichka();
street.nomerDoma();

//JSON - JS object notation(формат обмена данными между компьютерами(с сервера на комп)
// в инете(таблицы CSS, данные о юзере и др.)) JSON - это строка

JSON.stringify(dom); // Конвертировал обьект "dom" в JSON с помощью метода "stringify"
const domStringify = JSON.stringify(dom); //помещаем в переменную "domStringify" получившуюся строку JSON
console.log(domStringify);
JSON.parse(domStringify); // Конвертируем строку с JSON'ом из переменной "domStringify" в обьект помощью метода "parse"(парсим)
const domParse = JSON.parse(domStringify); //помещаем обьект в переменную "domPars"
console.log(domParse);
