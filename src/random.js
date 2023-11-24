

export default function RandomCity(){
    const cities = ['Tokyo','Delhi','Shanghai','Los Angeles','São Paulo','Mexico City','Cairo','Dhaka','Mumbai','Beijing','Osaka','Washington D.C','Tampa','Denver','Toranto','Tuzla','London','New York','New Jersey','Lima','Ho Chi Minh','Jinan','Baghdad','Bogota','Bengaluru','Paris','Vienna','Sydney','Buenos Aires','Santiago','Tehran' ]
    const cityLength = cities.length
    return cities[Math.floor(Math.random()*cityLength)]
}