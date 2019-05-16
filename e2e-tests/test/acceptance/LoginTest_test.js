const uniqid = require('uniqid');

Feature('LoginTest');
let password;
let username;

BeforeSuite((I) => {
    password = "Qwerty.1";
    username = "testingTesterson900@gmail.com";
});

AfterSuite( (I) => {

});
Scenario('test something',  (I) => {
    I.loginAs(username, password);
});
