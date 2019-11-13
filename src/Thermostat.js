function Thermostat(powerSavingMode = true) {
  this._temperature = 20;  
  this._minTemperature = 10;
  this._maxTemp = 0
  this._powerSavingMode = powerSavingMode; 
  this._energyUsage = "medium Usage"
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

Thermostat.prototype.powerSavingMode = function() { 
  if (this._powerSavingMode === true) {
    this._maxTemp = 25
  }
  if (this._powerSavingMode === false){ 
     this._maxTemp = 32
  }
};

Thermostat.prototype.reset = function() {
 this._temperature = 20
};

Thermostat.prototype.energy = function() {
  if (this._temperature <= 18){
    this._energyUsage = "low usage"
  }
  if (this._temperature >= 25) {
    this._energyUsage = "High usage"
  }
 
};



// this._powerSavingMode = false
//   return this._maxTemp = 32