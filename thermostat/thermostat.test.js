const Thermostat = require('./thermostat.js')

describe('Thermostat', () => {
    it ('sets temp at 20', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toEqual(20)
    })

    it ('increases by 1', () => {
        const thermostat = new Thermostat();
        thermostat.up()
        expect(thermostat.getTemperature()).toEqual(21)
    })


    it ('decreases by 2', () => {
        const thermostat = new Thermostat();
        thermostat.down()
        thermostat.reset()
        expect(thermostat.getTemperature()).toEqual(18)
    })
})