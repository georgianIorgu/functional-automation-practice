let I;

module.exports = {
    _init() {
        I = actor();
    },
    // setting locators for the Women screen
    elements: {
        title: 'Women',
        description: 'You will find here all woman fashion collections.\n' +
            '\n' +
            'This category includes all the basics of your wardrobe and much more:\n' +
            '\n' +
            'shoes, accessories, printed t-shirts, feminine dresses, women\'s jeans!',
        womenCategoryButton: '//ul//a[contains(@title,"Women")]',
        descriptionElement: '//div[contains(@class, "rte")]',
        //this type of xpath can be used with the .replace() function with the category title
        //Women, Dresses, T-shirts
        welcomeElement: '//div[contains(@class, "cat_desc")]//span[contains(.,"%s")]',
        productCategoryHeader: '//h1[contains(@class, "product-listing")]//span[contains(.,"%s")]',
        productNumberHeaderElement: '//h1[contains(@class, "product-listing")]//span',
    }
};

