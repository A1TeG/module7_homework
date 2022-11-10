//Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.

const userLocation = {
  country: "Russia",
  capital: "Moscow",
  people: 147000000
};

const checkString = (str, obj) => {
  console.log(str in obj);
};

checkString("Russia", userLocation);