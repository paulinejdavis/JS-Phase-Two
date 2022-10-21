class Thermostat {
    constructor() {
        this.temperature = 20;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        this.temperature++;
        if (this.temperature > 25)  {
            this.temperature = 25 
            
        }
        if (this.temperature > 32)  {
 this.temperature = 32
            
        }
    }

    down() {
        this.temperature--;
        if (this.temperature < 10) this.temperature = 10; 
          
    }

    reset() {
        this.temperature = 20;    
    }
        
}

module.exports = Thermostat






// const thermostat = new Thermostat();

// thermostat.getTemperature(); // should return 20

// thermostat.up();
// thermostat.up();
// thermostat.getTemperature(); // should now return 22

// thermostat.down();
// thermostat.getTemperature(); // should now return 21

// thermostat.setPowerSavingMode(true); // PSM is now on, max temperature is 25

// for (let i = 0 ; i < 10 ; i++) {
//   thermostat.up();
// }

// thermostat.getTemperature(); // should be 25 (max reached)

// thermostat.setPowerSavingMode(false); // PSM is now off, max temperature is no more 25

// thermostat.up();
// thermostat.getTemperature(); // should now return 26

// thermostat.reset();
// thermostat.getTemperature(); // should be back to 20