let I;

module.exports = {
    _init() {
        I = actor();
    },
    // setting locators for the Women screen
    loginElements: {
        title: 'Women',
        description: 'You will find here all woman fashion collections.\n' +
            '\n' +
            'This category includes all the basics of your wardrobe and much more:\n' +
            '\n' +
            'shoes, accessories, printed t-shirts, feminine dresses, women\'s jeans!',
        welcomeElement: '//div[contains(@class, "cat_desc")]//span[contains(.,"Women")]',
        descriptionElement: '//div[contains(@class, "rte")]',
        //V2 login page elements

    }
};

