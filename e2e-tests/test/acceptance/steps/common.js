const womenPage = require("../pages/women");
let I;

module.exports = {
    _init() {
        I = actor();
    },

/**
    Here you'll be able to add common methods containing steps commonly used in the interaction with your web app
     */
    selectSpecificCategory: function (category) {
    I.click(womenPage.elements.womenCategoryButton);
    I.waitForVisible(womenPage.elements.productCategoryHeader.replace("%s", category), 20);
    I.see(category, womenPage.elements.welcomeElement.replace("%s", category));
    this.returnToHomePage();
},
    returnToHomePage: function () {
        I.amOnPage('index.php?controller=authentication&back=my-account');
        I.waitForVisible("//img[contains(@class, 'logo')]", 20);
    }

    };