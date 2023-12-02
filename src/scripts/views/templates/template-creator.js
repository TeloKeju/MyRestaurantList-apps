import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
    <section class='content'>
        <img class='content-img lazyload' data-src='${restaurant.pictureId ? API_ENDPOINT.IMG.S + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}' alt='${restaurant.name} tabindex='0' crossorigin='anonymous'>
        <h3 class='city' tabindex='0'>${restaurant.city}</h3>
        <h3 class='title'><a href='/#/detail/${restaurant.id}' tabindex='0'>${restaurant.name}</a></h3>
        <h3 class='rating' tabindex='0'>Rating: ${restaurant.rating}⭐</h3>
        <p class='description' tabindex='0'>${restaurant.description}</p>
    </section>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <section class='inner-content'>
        <img class='detail-content-img' src='${restaurant.pictureId ? API_ENDPOINT.IMG.M + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}' alt='${restaurant.name}' crossorigin='anonymous'>
        <h3 class='detail-city' tabindex='0'>${restaurant.city}</h3>
        <h3 class='detail-title' tabindex='0'>${restaurant.name}</h3>
        <h3 class='detail-rating' tabindex='0'>Rating: ${restaurant.rating}⭐</h3>
        <h3 class='detail-categories' tabindex='0'>Kategori: ${restaurant.categories[0].name}</h3>
        <h3 class='detail-address' tabindex='0'>Alamat: ${restaurant.address}</h3>
        <p class='detail-description' tabindex='0'>${restaurant.description}</p>
        <section class='list-container'>
            <section class='detail-food'>
                <h4 tabindex='0'>Menu Makanan</h4>
                <ul>
                    ${restaurant.menus.foods.map((food) => `
                        <li tabindex='0'>${food.name}</li>
                    `).join('')}
                </ul>
            </section>
            <section class='detail-drink'>
                <h4 tabindex='0'>Menu Minuman</h4>
                <ul>
                    ${restaurant.menus.drinks.map((drink) => `
                    <li tabindex='0'>${drink.name}</li>
                    `).join('')}
                </ul>
            </section>
        </section>
        <section class='detail-review'>
            <h4 tabindex='0'>Review Restaurant</h4>
            <section class='review'>
                ${restaurant.customerReviews.map((review) => `
                    <p class='line-top' tabindex='0'>Review: ${review.review}</p>
                    <h5 class='line-bot' tabindex='0'>Oleh: ${review.name} pada ${review.date}</h5>
                `).join('')}
            </section>
        </section>
    </section>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label='Like this restaurant' id='likeButton' class='like' tabindex='0'>
        <i class='fa fa-heart-o' aria-hidden='true'></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label='Unlike this restaurant' id='likeButton' class='like' tabindex='0'>
        <i class='fa fa-heart' aria-hidden='true'></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
