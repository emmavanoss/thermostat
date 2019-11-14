function Thermostat(powerSavingMode = true) {
  this._temperature = 20;
  this._minTemperature = 10;
  this._powerSavingMode = true;
  this._maxTemp = 25
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  if (this._temperature >= this._maxTemp ) throw ("Maximum temperature reached");
  this._temperature++;
}

Thermostat.prototype.down = function() {
  if (this._temperature <= this._minTemperature ) throw ("Minimum temperature reached");
  this._temperature--;
}

Thermostat.prototype.changeMode = function() {
  this._powerSavingMode = !this._powerSavingMode
  if (this._powerSavingMode) {
    this._maxTemp = 25
  } else {
    this._maxTemp = 32
  };
};

Thermostat.prototype.reset = function() {
 this._temperature = 20
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18){
    return "low usage"
  } else if (this._temperature > 24) {
    return "high usage"
  } else {
    return "medium usage"
  }
};
