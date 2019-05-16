
// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

      loginAs: function (user, password) {
              this.amOnPage('index.php?controller=authentication&back=my-account');
              this.resizeWindow("maximize", "maximize");
              this.waitForVisible("//img[contains(@class, 'logo')]", 20);
              this.fillField("//input[contains(@id, 'email') and (@name = 'email')]", user);
              this.fillField("//input[contains(@id, 'passwd')]", password);
              this.click("//button[contains(.,'Sign in')]");
              this.amOnPage('index.php');

      }
  });
};
