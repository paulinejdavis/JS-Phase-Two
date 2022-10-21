const Thermostat = require('./thermostat.js')

describe('Thermostat', () => {
    it ('sets temp at 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20);
    })

})