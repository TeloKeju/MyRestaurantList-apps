const assert = require('assert');
const { title } = require('process');

Feature('Liking Restaurant');

Scenario('showing empty liked restaurants', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('.main-content');
});

Scenario('liking and unliking one restaurants', async ({ I }) => {
  I.amOnPage('/');
  I.wait(3);
  I.seeElement('.title a');
  const firstRestaurant = locate('.title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(2);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.main-content');
  const likedRestaurantTitle = await I.grabTextFrom('.title');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  I.seeElement('.title a');
  I.click('.title a');
  I.wait(3);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(3);
  I.amOnPage('/#/favorite');
  I.wait(3);
  I.seeElement('.main-content');
});
