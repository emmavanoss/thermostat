describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("initialize", function(){
  
    it('starts with temperature of 20 degrees', function() {
      expect(thermostat.temperature()).toEqual(20);
    });

    it('Defaults to Power saving mode', function() {
      expect(thermostat._powerSavingMode).toEqual(true)
    })

    
  });
  
  describe ("up & down", function() {

    it('can increae the temperature with "up"', function() {
      thermostat.up()
      expect(thermostat.temperature()).toEqual(21);
    });


    it('can decreae the temperature with "down"', function() {
      thermostat.down()
      expect(thermostat.temperature()).toEqual(19);
    });
  
  });

  describe ("Power Saving Mode", function() {

    it('Throw error once minimum temperature has reached', function (){
      thermostat._temperature = 10
      expect(function() { thermostat.down() }).toThrow("Minimum temperature reached")
    });
 
    it('Power Saving mode is on then max temperature is 25', function() {
      thermostat.powerSavingMode = true 
      expect(thermostat._powerSavingMode).toEqual(25)
    });

    it('Power Saving mode is off then max temperature is 32', function() {
      thermostat.powerSavingMode = false
      expect(thermostat._maxTemp).toEqual(32)
    });

  });

});