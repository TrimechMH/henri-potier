export const CART = {
    cartList: [{
        isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
        title: 'Henri Potier à l\'école des sorciers',
        price: 35,
        cover: 'http://henri-potier.xebia.fr/hp0.jpg',
        synopsis: ['test'],
        quantity: 1
    }],
    totalPrice: 35,
    bestOffer: {
        type: 'minus',
        value: 15,
        proposedOffer: 34
    }
};

export const MOCK_BOOK_RESULT_LIST = [
    {
        isbn: 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
        title: 'Henri Potier à l\'école des sorciers',
        price: 35,
        cover: 'http://henri-potier.xebia.fr/hp0.jpg',
        synopsis: ['test'],
    },
    {
        isbn: 'a460afed-e5e7-4e39-a39d-c885c05db861',
        title: 'Henri Potier et la Chambre des secrets',
        price: 30,
        cover: 'http://henri-potier.xebia.fr/hp1.jpg',
        synopsis: [
            'Henri Potier passe'
        ]
    }
];

export const MOCK_OFFERS = {
    offers: [
        {
            type: 'percentage',
            value: 5
        },
        {
            type: 'minus',
            value: 15
        },
        {
            type: 'slice',
            sliceValue: 100,
            value: 12
        }
    ]
};