const commonStep = require("../acceptance/steps/common");

Feature('LoginTest');
let password;
let username;

BeforeSuite((I) => {
    //Here you can add your account email address
    username = "testingTesterson900@gmail.com";
    password = "Qwerty.1";
});

AfterSuite( (I) => {

});
Scenario('test something',  (I) => {
    I.loginAs(username, password);
    commonStep.selectSpecificCategory('Women');
    //debug test code which allows you to freeze the test at any point
    pause();
});
