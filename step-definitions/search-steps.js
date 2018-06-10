module.exports = function () {


    this.When(/^I goto "([^"]*)"$/, function (url) {

        return helpers.loadPage(url);
    });

    this.Then(/^I can see "([^"]*)" section$/, function (section) {

         return driver.wait(until.elementsLocated(by.css('div.news-post__listing-header')), 10000).then(function() {

            return driver.findElement(by.css('div.news-post__listing-header .block-header__heading')).getText();

        }) .then(function (element) {

        expect(element.toLowerCase()).to.equal(section);

        });

    });

    this.Then(/^I goto "([^"]*)" page$/, function (page) {

        return helpers.loadPage(page);
    });

    this.Then(/^the header section should contain "([^"]*)"$/, function (headerText) {

        return driver.wait(until.elementsLocated(by.css('.page-header')), 10000).then(function() {

            return driver.findElement(by.css('.page-header h1')).getText();

        }) .then(function (element) {

            expect(element.toLowerCase()).to.equal(headerText);

        });
    });

    this.Then(/^the no of companies in contact us section are "([^"]*)"$/, function (noOfOffices) {

        return driver.wait(until.elementsLocated(by.css('.foot__offices')), 10000).then(function() {

            return driver.findElement(by.css('.foot__offices')).getText();

        }) .then(function (element) {

            var actualOffices = element.split(",").length -1;
            expect(actualOffices).to.equal(parseInt(noOfOffices));
        });
    });

};
