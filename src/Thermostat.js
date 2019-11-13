function Thermostat() {
  this._temperature = 20;  
  this._minTemperature = 10;
  this._maxTemp = 25
  this._powerSavingMode = true; 
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
}

Thermostat.prototype.up = function() {
  this._temperature++;
}

Thermostat.prototype.down = function() {
  if (this._temperature <= this._minTemperature ) throw ("Minimum temperature reached");
  this._temperature--;
}

Thermostat.prototype._powerSavingMode = function() { 
  if (this._powerSavingMode === true) {
    return this._maxTemp = 25
  } else {
     return this._maxTemp = 32
  }
};