const searchCandies = require('./searchCandies.js')

describe ('searchCandies', () => {
    it ('finds Mars & Maltesers if the first chars are Ma and the price is 10', () => {
        expect (searchCandies('Ma', 10)). toEqual(['Mars', 'Maltesers']);
    });

    it ('finds Mars & excludes Maltesers if the first chars are Ma and the price is 2', () => {
        expect (searchCandies('Ma', 2)). toEqual(['Mars']);
    });

    it ('finds Skitties, Skittles & Starburst if the first chars are S and the price is 10', () => {
        expect (searchCandies('S', 10)). toEqual(['Skitties','Skittles', 'Starburst']);
    });

    it ('finds Skitties, Skittles & excludes Starburst if the first chars are S and the price is 4', () => {
        expect (searchCandies('S', 4)). toEqual(['Skitties','Skittles']);
    });

    it ('finds Mars & Maltesers if the first chars are Ma and the price is 10', () => {
        expect (searchCandies('ma', 10)). toEqual(['Mars', 'Maltesers']);
    });
    
});

// searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

//  searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4
