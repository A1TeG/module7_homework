//Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. Данная функция не должна возвращать значение.

const userLocation = {
  country: "Russia",
  capital: "Moscow",
  people: 147000000
};

const userLanguage = Object.create(userLocation);
userLanguage.lang = "Russian";
userLanguage.additionalLang = "English";

const showProperty = (obj) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`Ключ - ${key}, значение - ${obj[key]}`);
    }
  }
};

showProperty(userLanguage);