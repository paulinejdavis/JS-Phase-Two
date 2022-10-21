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


    xit ('decreases by 2', () => {
        const thermostat = new Thermostat();
        thermostat.down()
        thermostat.reset()
        expect(thermostat.getTemperature()).toEqual(18)
    })

    xit ('sets temp at 15', () => {
        const thermostat = new Thermostat();
        for(let i=1; i<=16; i++) {
            thermostat.down()
        }
        expect(thermostat.getTemperature()).toEqual(15)
    })

    it ('turns off power saving', () => {
        const thermostat = new Thermostat();
       thermostat.turnPowerSaveModeOff()
        expect(thermostat.powerSavingMode).toEqual(false)
    })

})