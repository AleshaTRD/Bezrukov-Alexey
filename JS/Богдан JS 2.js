//Мутация - это изменение свойств обьекта(ссылочного типа) при изменении его копии.
//Как избежать мутации!

// Вариант 1 (позволяет избежать мутированья простых свойств обьекта, если св-вом обьекта является другой обьект - то ссылки на него остаются)
const person = {
   name: "Vasya",
   age: 25,
};
const person2 = Object.assign({}, person); // создается новый обьект "person2" и для него копируются св-ва "person"
person2.age = 30;
console.log(person.age);
console.log(person2.age);

//Вариант 2 так же как и 1ый не позволяет избежать мутированья если св-вом обьекта является другой обьект
const sity = {
   name: "Kiev",
   age: 950,
};
const sity2 = { ...sity }; // "..." - оператор разделения обьекта на св-ва. Эти св-ва присваиваются новому обьекту "sity2"
console.log(person.name);
console.log(person2.name);

//Вариант 3 создаеит полностью новый обьект со всеми новыми ссылками!
const man = {
   name: "Petr",
   Familia: "Vasilyk",
   info: { age: 40, children: 2 },
};
const man2 = JSON.parse(JSON.stringify(man)); //двойная конвертация из обьекта в строку JSON и обратно парсит в обьект!
man2.info.age = 20;
console.log(man.info.age);
console.log(man2.info.age);
