describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("Initialize", function(){

    it('starts with temperature of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

  });

  describe ("Up & Down", function() {

    it('can increae the temperature with "up"', function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21);
    });

    it('can decrease the temperature with "down"', function() {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    });

    it('Throw error once minimum temperature has reached', function (){
      thermostat._temperature = 10
      expect(function() { thermostat.down() }).toThrow("Minimum temperature reached")
    });

    it("Reset the temperature to 20 with a reset function", function(){
      thermostat._temperature = 11
      thermostat.reset()
      expect(thermostat._temperature).toEqual(20)
    });
  });

  describe ("Power Saving Mode", function() {
    it('Defaults to Power saving mode', function() {
      expect(thermostat._powerSavingMode).toEqual(true)
    })

    it('Power Saving mode is on then max temperature is 25', function() {
      thermostat._powerSavingMode = true
      thermostat.powerSavingMode()
      expect(thermostat._maxTemp).toEqual(25)
    });

    it('Power Saving mode is off then max temperature is 32', function() {
      thermostat._powerSavingMode = false
      thermostat.powerSavingMode()
      expect(thermostat._maxTemp).toEqual(32)
    });
  });

  describe("Energy Usage", function(){
    it("Return low usage when temp is below 18", function(){
      thermostat._temperature = 17
      expect(thermostat.energyUsage()).toEqual("low usage")
    });

    it("Return medium usage when temp is 18", function(){
      thermostat._temperature = 18
      expect(thermostat.energyUsage()).toEqual("medium usage")
    });

    it("Return medium usage when temp is 24", function(){
      thermostat._temperature = 24
      expect(thermostat.energyUsage()).toEqual("medium usage")
    });
    it("Return high usage when temp 25+", function(){
      thermostat._temperature = 25
      expect(thermostat.energyUsage()).toEqual("high usage")
    });
  });
});
