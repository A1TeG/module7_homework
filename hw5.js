//Переписать консольное приложение из предыдущего юнита на классы.

class ElectricalApps {
  constructor(name) {
    this.name = name;
    this.device = "Electrical stuff for home"
  }
  getPowerConsumption(power, time, on) {
    if (on === 1) {
      console.log(`${this.name} потребляет за ${time}ч - ${power * time} Ватт`)
    } else {
      console.log(`${this.name} нужно включить в розетку, чтобы рассчитать потребление`)
    }
  }
}

class Description extends ElectricalApps {
  constructor(name, color) {
    super(name);
    this.color = color
  }
}

const computer = new Description("computer", "black");
const teapot = new Description("teapot", "wight");
const tableLamp = new Description("tableLamp", "green");

console.log(computer, teapot, tableLamp);

computer.getPowerConsumption(750, 2, 1)
teapot.getPowerConsumption(400, 1, 1)
tableLamp.getPowerConsumption(100, 5)