//http://numbersapi.com/#42

const axios = require('axios').default;
const api = "http://numbersapi.com/";
const math = "/math";
const trivia = "";
const date = "/date";
const randomTrivia = "random/trivia";
const randomYear = "random/year";
const randomDate = "random/date";
const randomMath= "random/math";
const birthday = "06/30";
const favoriteNumber = "69";
var today = new Date();
const min = 1;
const max = 365;
const seed = parseInt((today.getMonth()).toString() +(today.getDay()).toString());
var key = ((seed * 9301 + 49297) % 233280)/233280;
key = Math.floor(min + key * (max - min));

const api2 = "https://ohmanda.com/api/horoscope/";
const sign = "cancer";

//get birthday trivia message
axios.get(api + birthday + date)
    .then((data) => {
        console.log("1: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get favoriteNumber trivia message
axios.get(api + favoriteNumber + trivia)
    .then((data) => {
        console.log("2: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get favoriteNumber math message
axios.get(api + favoriteNumber + math)
    .then((data) => {
        console.log("3: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get daily trivia fact
axios.get(api + key.toString() + math)
    .then((data) => {
        console.log("4: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get today trivia date fact
axios.get(api + ((today.getMonth()+1).toString() + '/' +today.getDate().toString()) + date)
    .then((data) => {
        console.log("5: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    }) 

//get random trivia
axios.get(api + randomTrivia)
    .then((data) => {
        console.log("6: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get random year
axios.get(api + randomYear)
    .then((data) => {
        console.log("7: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get random date
axios.get(api + randomDate)
    .then((data) => {
        console.log("8: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get random math
axios.get(api + randomMath)
    .then((data) => {
        console.log("9: " + data.data + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })

//get horoscope
axios.get(api2 + sign)
    .then((data) => {
        console.log("10: " + data.data.horoscope + "\n");
    })
    .catch((error) => {
        console.log("error en cumpleaños \n");
    })