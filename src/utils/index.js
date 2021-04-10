const API_KEY = 'jXiwGd5fgeVXVG8lKaClg4D6GlAGEz8q'; //  >>>>>> CHANGE TO ENV VARIABLE <<<<<

export const fetchLocation (lat,lng) => {
    fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey${API_KEY}&q=(${lat + ',' + lng})`).then((res)=> res.json());
}