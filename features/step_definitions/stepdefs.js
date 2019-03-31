const assert = require('assert');
const { Given, When, And, Then } = require('cucumber');
const isItFriday = require('../../friday');

Given('today is {string}', function (givenDay) {
   this.today = givenDay;
});

When('I ask whether it\'s Friday yet', function () {
   this.actualAnswer = isItFriday(this.today);
});

Then('I should be told {string}', function (expectedAnswer) {
   assert.equal(this.actualAnswer, expectedAnswer);
});

Given('today is Friday', function () {
  this.today = 'Friday';
});

