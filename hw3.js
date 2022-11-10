//Написать функцию, которая создает пустой объект, но без прототипа.

const createEmptyObj = (obj) => {
  let resultObj = {};
  return (obj = resultObj);
};

let emptyObj = createEmptyObj("obj");
console.log(emptyObj); //Пустой объект
console.log(emptyObj.prototype); //Отсутствие prototype
