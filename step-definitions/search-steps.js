module.exports = function () {


    this.When(/^I goto "([^"]*)"$/, function (url) {

        return helpers.loadPage(url);
    });

    this.Then(/^I can see "([^"]*)" section$/, function (section) {

        return driver.wait(until.elementsLocated(by.css('div.news-post__listing-header')), 10000).then(function() {

            return driver.findElement(by.css('div.news-post__listing-header .block-header__heading')).getText();

        }) .then(function (element) {

        expect(element.toLowerCase()).to.equal(section + "1");

        });

    });

    this.Then(/^I goto "([^"]*)" page$/, function (page) {

        return helpers.loadPage(page);
    });

    this.Then(/^The header sxetion should contain "([^"]*)"$/, function (headerText) {

        return driver.wait(until.elementsLocated(by.css('div.page-header')), 10000).then(function() {

            // return the promise of an element to the following then.
            return driver.findElement(by.css('div.page-header h1')).getText();

        }) .then(function (element) {

            // verify this element has children
            expect(element.toLowerCase()).to.equal(headerText);

        });
    });

};
