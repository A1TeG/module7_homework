//Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
//Определите иерархию электроприборов. Включите некоторые в розетку. Посчитайте потребляемую мощность (передайте аргумент).
//Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

function ElectricalApps(name) {
  this.name = name;
  this.device = "Electrical stuff for home"
}

ElectricalApps.prototype.getPowerConsumption = function (power, time, on) {
  if (on === 1) {
    console.log(`${this.name} потребляет за ${time}ч - ${power * time} Ватт`)
  } else {
    console.log(`${this.name} нужно включить в розетку, чтобы рассчитать потребление`)
  }
}

function Description(name, color) {
  this.name = name;
  this.color = color
}

Description.prototype = new ElectricalApps();

const computer = new Description("computer", "black");
const teapot = new Description("teapot", "wight");
const tableLamp = new Description("tableLamp", "green");

console.log(computer, teapot, tableLamp);

computer.getPowerConsumption(750, 2, 1)
teapot.getPowerConsumption(400, 1, 1)
tableLamp.getPowerConsumption(100, 5)