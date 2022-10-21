class ShoppingBasket {
    constructor() {
        this.items = [];
        this.discount = 0 
    }

    addItem(item) {
        this.items.push(item);
    }

    applyDiscount(discount) {
        this.discount = discount
    }

    getTotalPrice() {
        let totalPrice = 0;
        this.items.forEach((candy) => {
            totalPrice += candy.getPrice();
        });
        return totalPrice - this.discount;
    }
}

module.exports = ShoppingBasket;
// const candy = new Candy('Mars', 4.99);

//  candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// const basket = new ShoppingBasket();
// basket.getTotalPrice();
// 0

//  basket.addItem(candy);

// basket.getTotalPrice();
// 4.99

// basket.addItem(new Candy('Skittle', 3.99));
// basket.addItem(new Candy('Skittle', 3.99));

//  basket.getTotalPrice();
// 12.97