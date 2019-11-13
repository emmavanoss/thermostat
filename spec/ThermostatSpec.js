describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with temperature of 20 degrees', function() {
    expect(thermostat.temperature()).toEqual(20);
  });

  it('can increae the temperature with "up"', function() {
    thermostat.up()
    expect(thermostat.temperature()).toEqual(21);
  })
});