import {initialState as userData} from "../store/user-data/reducer";
import {initialState as screenData} from "../store/screen/reducer";
import {initialState as offersData} from "../store/offers-data/reducer";
import {initialState as currentOfferData} from "../store/current-offer-data/reducer";
import {AuthorizationStatus, CityList, FetchStatus, SortTypes} from "../const";

export const notEmptyStore = {
  DATA: {
    cards: [
      {
        "city": {
          "name": `Paris`,
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
        ],
        "title": `The house among olive `,
        "is_favorite": false,
        "is_premium": true,
        "rating": 3,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 169,
        "goods": [
          `Breakfast`,
          `Air conditioning`,
          `Laptop friendly workspace`,
          `Washer`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 48.83861,
          "longitude": 2.350499,
          "zoom": 16
        },
        "id": 1
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
        ],
        "title": `Waterfront with extraordinary view`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "max_adults": 6,
        "price": 310,
        "goods": [
          `Dishwasher`,
          `Towels`,
          `Washer`,
          `Breakfast`,
          `Baby seat`,
          `Air conditioning`,
          `Fridge`,
          `Laptop friendly workspace`,
          `Coffee machine`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 50.844556999999995,
          "longitude": 4.346697,
          "zoom": 16
        },
        "id": 2
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": false,
        "is_premium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 6,
        "price": 182,
        "goods": [
          `Laptop friendly workspace`,
          `Washer`,
          `Breakfast`,
          `Air conditioning`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 50.950361,
          "longitude": 6.961974,
          "zoom": 16
        },
        "id": 3
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `The house among olive `,
        "is_favorite": false,
        "is_premium": false,
        "rating": 5,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 115,
        "goods": [
          `Washer`,
          `Laptop friendly workspace`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
        "location": {
          "latitude": 50.849557,
          "longitude": 4.374696999999999,
          "zoom": 16
        },
        "id": 4
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`
        ],
        "title": `The Joshua Tree House`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 5,
        "price": 457,
        "goods": [
          `Laptop friendly workspace`,
          `Washer`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.889976,
          "zoom": 16
        },
        "id": 5
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 525,
        "goods": [
          `Air conditioning`,
          `Baby seat`,
          `Coffee machine`,
          `Dishwasher`,
          `Laptop friendly workspace`,
          `Towels`,
          `Breakfast`,
          `Washer`,
          `Fridge`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 50.827557,
          "longitude": 4.336697,
          "zoom": 16
        },
        "id": 6
      },
      {
        "city": {
          "name": `Dusseldorf`,
          "location": {
            "latitude": 51.225402,
            "longitude": 6.776314,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`
        ],
        "title": `Nice, cozy, warm big bed apartment`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4,
        "type": `house`,
        "bedrooms": 3,
        "max_adults": 9,
        "price": 117,
        "goods": [
          `Breakfast`,
          `Washer`,
          `Laptop friendly workspace`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        "location": {
          "latitude": 51.214402,
          "longitude": 6.764314000000001,
          "zoom": 16
        },
        "id": 7
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
        ],
        "title": `The Joshua Tree House`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.1,
        "type": `house`,
        "bedrooms": 4,
        "max_adults": 4,
        "price": 983,
        "goods": [
          `Towels`,
          `Laptop friendly workspace`,
          `Breakfast`,
          `Fridge`,
          `Air conditioning`,
          `Washer`,
          `Baby seat`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        "location": {
          "latitude": 50.957361,
          "longitude": 6.9509739999999995,
          "zoom": 16
        },
        "id": 8
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.2,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 182,
        "goods": [
          `Washer`,
          `Baby seat`,
          `Towels`,
          `Air conditioning`,
          `Fridge`,
          `Laptop friendly workspace`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
        "location": {
          "latitude": 53.565341000000004,
          "longitude": 9.978654,
          "zoom": 16
        },
        "id": 9
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `Amazing and Extremely Central Flat`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 2,
        "max_adults": 9,
        "price": 271,
        "goods": [
          `Air conditioning`,
          `Laptop friendly workspace`,
          `Breakfast`,
          `Baby seat`,
          `Towels`,
          `Washer`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 53.546341000000005,
          "longitude": 10.022654000000001,
          "zoom": 16
        },
        "id": 10
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`
        ],
        "title": `Canal View Prinsengracht`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 2.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 638,
        "goods": [
          `Laptop friendly workspace`,
          `Washing machine`,
          `Washer`,
          `Baby seat`,
          `Towels`,
          `Air conditioning`,
          `Coffee machine`,
          `Breakfast`,
          `Dishwasher`,
          `Fridge`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.911976,
          "zoom": 16
        },
        "id": 11
      }
    ],
    isCardsLoaded: true,
    favoriteCard: [
      {
        "city": {
          "name": `Paris`,
          "location": {
            "latitude": 48.85661,
            "longitude": 2.351499,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
        ],
        "title": `The house among olive `,
        "is_favorite": true,
        "is_premium": true,
        "rating": 3,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 169,
        "goods": [
          `Breakfast`,
          `Air conditioning`,
          `Laptop friendly workspace`,
          `Washer`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 48.83861,
          "longitude": 2.350499,
          "zoom": 16
        },
        "id": 1
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
        ],
        "title": `Waterfront with extraordinary view`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "max_adults": 6,
        "price": 310,
        "goods": [
          `Dishwasher`,
          `Towels`,
          `Washer`,
          `Breakfast`,
          `Baby seat`,
          `Air conditioning`,
          `Fridge`,
          `Laptop friendly workspace`,
          `Coffee machine`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 50.844556999999995,
          "longitude": 4.346697,
          "zoom": 16
        },
        "id": 2
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": true,
        "is_premium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 6,
        "price": 182,
        "goods": [
          `Laptop friendly workspace`,
          `Washer`,
          `Breakfast`,
          `Air conditioning`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 50.950361,
          "longitude": 6.961974,
          "zoom": 16
        },
        "id": 3
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `The house among olive `,
        "is_favorite": true,
        "is_premium": false,
        "rating": 5,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 115,
        "goods": [
          `Washer`,
          `Laptop friendly workspace`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
        "location": {
          "latitude": 50.849557,
          "longitude": 4.374696999999999,
          "zoom": 16
        },
        "id": 4
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`
        ],
        "title": `The Joshua Tree House`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 5,
        "price": 457,
        "goods": [
          `Laptop friendly workspace`,
          `Washer`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.889976,
          "zoom": 16
        },
        "id": 5
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 4.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 525,
        "goods": [
          `Air conditioning`,
          `Baby seat`,
          `Coffee machine`,
          `Dishwasher`,
          `Laptop friendly workspace`,
          `Towels`,
          `Breakfast`,
          `Washer`,
          `Fridge`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 50.827557,
          "longitude": 4.336697,
          "zoom": 16
        },
        "id": 6
      },
      {
        "city": {
          "name": `Dusseldorf`,
          "location": {
            "latitude": 51.225402,
            "longitude": 6.776314,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`
        ],
        "title": `Nice, cozy, warm big bed apartment`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 4,
        "type": `house`,
        "bedrooms": 3,
        "max_adults": 9,
        "price": 117,
        "goods": [
          `Breakfast`,
          `Washer`,
          `Laptop friendly workspace`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        "location": {
          "latitude": 51.214402,
          "longitude": 6.764314000000001,
          "zoom": 16
        },
        "id": 7
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`
        ],
        "title": `The Joshua Tree House`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.1,
        "type": `house`,
        "bedrooms": 4,
        "max_adults": 4,
        "price": 983,
        "goods": [
          `Towels`,
          `Laptop friendly workspace`,
          `Breakfast`,
          `Fridge`,
          `Air conditioning`,
          `Washer`,
          `Baby seat`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.`,
        "location": {
          "latitude": 50.957361,
          "longitude": 6.9509739999999995,
          "zoom": 16
        },
        "id": 8
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.2,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 182,
        "goods": [
          `Washer`,
          `Baby seat`,
          `Towels`,
          `Air conditioning`,
          `Fridge`,
          `Laptop friendly workspace`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.`,
        "location": {
          "latitude": 53.565341000000004,
          "longitude": 9.978654,
          "zoom": 16
        },
        "id": 9
      },
      {
        "city": {
          "name": `Hamburg`,
          "location": {
            "latitude": 53.550341,
            "longitude": 10.000654,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `Amazing and Extremely Central Flat`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 3.3,
        "type": `hotel`,
        "bedrooms": 2,
        "max_adults": 9,
        "price": 271,
        "goods": [
          `Air conditioning`,
          `Laptop friendly workspace`,
          `Breakfast`,
          `Baby seat`,
          `Towels`,
          `Washer`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 53.546341000000005,
          "longitude": 10.022654000000001,
          "zoom": 16
        },
        "id": 10
      },
      {
        "city": {
          "name": `Amsterdam`,
          "location": {
            "latitude": 52.37454,
            "longitude": 4.897976,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`
        ],
        "title": `Canal View Prinsengracht`,
        "is_favorite": true,
        "is_premium": false,
        "rating": 2.8,
        "type": `house`,
        "bedrooms": 2,
        "max_adults": 3,
        "price": 638,
        "goods": [
          `Laptop friendly workspace`,
          `Washing machine`,
          `Washer`,
          `Baby seat`,
          `Towels`,
          `Air conditioning`,
          `Coffee machine`,
          `Breakfast`,
          `Dishwasher`,
          `Fridge`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!`,
        "location": {
          "latitude": 52.36354,
          "longitude": 4.911976,
          "zoom": 16
        },
        "id": 11
      }
    ],
    isFavoriteCardsLoaded: true,
    fetchStatus: FetchStatus.PENDING
  },
  SCREEN: {
    location: CityList.Paris,
    sort: SortTypes.POPULAR
  },
  USER: {
    authorizationStatus: AuthorizationStatus.AUTH,
    login: `Fake login`,
    userAvatar: `https://www.avatar.ru`
  },
  CURRENT_OFFER: {
    currentOffer: {
      "city": {
        "name": `Paris`,
        "location": {
          "latitude": 48.85661,
          "longitude": 2.351499,
          "zoom": 13
        }
      },
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
      "images": [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
      ],
      "title": `The house among olive `,
      "is_favorite": false,
      "is_premium": true,
      "rating": 3,
      "type": `room`,
      "bedrooms": 1,
      "max_adults": 1,
      "price": 169,
      "goods": [
        `Breakfast`,
        `Air conditioning`,
        `Laptop friendly workspace`,
        `Washer`
      ],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "is_pro": true,
        "avatar_url": `img/avatar-angelina.jpg`
      },
      "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      "location": {
        "latitude": 48.83861,
        "longitude": 2.350499,
        "zoom": 16
      },
      "id": 1
    },
    isOfferLoaded: true,
    nearPlaces: [
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`
        ],
        "title": `Waterfront with extraordinary view`,
        "is_favorite": false,
        "is_premium": false,
        "rating": 4.8,
        "type": `apartment`,
        "bedrooms": 5,
        "max_adults": 6,
        "price": 310,
        "goods": [
          `Dishwasher`,
          `Towels`,
          `Washer`,
          `Breakfast`,
          `Baby seat`,
          `Air conditioning`,
          `Fridge`,
          `Laptop friendly workspace`,
          `Coffee machine`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
        "location": {
          "latitude": 50.844556999999995,
          "longitude": 4.346697,
          "zoom": 16
        },
        "id": 2
      },
      {
        "city": {
          "name": `Cologne`,
          "location": {
            "latitude": 50.938361,
            "longitude": 6.959974,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/14.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/17.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `Penthouse, 4-5 rooms + 5 balconies`,
        "is_favorite": false,
        "is_premium": true,
        "rating": 4.2,
        "type": `hotel`,
        "bedrooms": 4,
        "max_adults": 6,
        "price": 182,
        "goods": [
          `Laptop friendly workspace`,
          `Washer`,
          `Breakfast`,
          `Air conditioning`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `This is a place for dreamers to reset, reflect, and create. Designed with a 'slow' pace in mind, our hope is that you enjoy every part of your stay; from making local coffee by drip in the morning, choosing the perfect record to put on as the sun sets.`,
        "location": {
          "latitude": 50.950361,
          "longitude": 6.961974,
          "zoom": 16
        },
        "id": 3
      },
      {
        "city": {
          "name": `Brussels`,
          "location": {
            "latitude": 50.846557,
            "longitude": 4.351697,
            "zoom": 13
          }
        },
        "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
        "images": [
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/1.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/15.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
          `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`
        ],
        "title": `The house among olive `,
        "is_favorite": false,
        "is_premium": false,
        "rating": 5,
        "type": `room`,
        "bedrooms": 1,
        "max_adults": 1,
        "price": 115,
        "goods": [
          `Washer`,
          `Laptop friendly workspace`,
          `Breakfast`
        ],
        "host": {
          "id": 25,
          "name": `Angelina`,
          "is_pro": true,
          "avatar_url": `img/avatar-angelina.jpg`
        },
        "description": `Design interior in most sympathetic area! Complitely renovated, well-equipped, cosy studio in idyllic, over 100 years old wooden house. Calm street, fast connection to center and airport.`,
        "location": {
          "latitude": 50.849557,
          "longitude": 4.374696999999999,
          "zoom": 16
        },
        "id": 4
      },
    ],
    isNearPlacesLoaded: true,
    comments: [
      {
        "id": 1,
        "user": {
          "id": 12,
          "is_pro": true,
          "name": `Isaac`,
          "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`
        },
        "rating": 2,
        "comment": `The house is very good, very happy, hygienic and simple living conditions around it are also very good. I hope to have the opportunity to come back. Thank you.`,
        "date": `2021-03-10T08:04:28.646Z`
      }
    ],
    isCommentsLoaded: true
  }
};

export const emptyStore = {
  DATA: offersData,
  SCREEN: screenData,
  USER: userData,
  CURRENT_OFFER: currentOfferData
};
