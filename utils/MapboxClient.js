import MapboxDirectionsFactory from '@mapbox/mapbox-sdk/services/directions';


const clientOptions = {accessToken: 'pk.eyJ1IjoibWVycmljazE3IiwiYSI6ImNrNW1qNGNhejAyZDYzbm5zc2gxbm43ZHkifQ.kJHwGdb3NjNno06-kr3r7Q'};
const directionsClient = MapboxDirectionsFactory(clientOptions);

export {directionsClient};
