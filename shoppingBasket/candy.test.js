const Candy = require('./candy.js')

describe ('Candy', () => {
    it ('returns name and price of candy', () => {
        const candy = new Candy('Skittle', 3.99);
        expect(candy.getName()).toEqual('Skittle');
        expect(candy.getPrice()).toEqual(3.99)
    });
});