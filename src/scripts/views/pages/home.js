import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const home = {
  async render() {
    return `
    <h2 tabindex='0'>Explore Restaurant</h2>
    <article class='main-content' id='main-content'></article>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.homeRestaurant();
    const restaurantContainer = document.querySelector('#main-content');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default home;
