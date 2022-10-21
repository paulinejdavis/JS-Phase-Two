const ShoppingBasket = require('./shoppingBasket')

describe ('shoppingBasket', () => {
    it ('returns #all to shoppingBasket', () => {
        basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });

    it ('#adds to shoppingBasket', () => {
        basket = new ShoppingBasket();
        const candy = {getName: () => 'Mars', getPrice: () => '4.99'}
        basket.addItem(candy);
        expect(basket.getTotalPrice()).toEqual(4.99);
    });

});