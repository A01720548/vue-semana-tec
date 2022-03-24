// const axios = require('axios').default;

// const horoscopeApi = "https://ohmanda.com/api/horoscope/";
// const numbersApi = "http://numbersapi.com/";
// const mathPath = "/math";
// const datePath = "/date";
// const randomTriviaPath = "random/trivia";
// const randomYearPath = "random/year";
// const randomDatePath = "random/date";
// const randomMathPath= "random/math";

// var currentDate = new Date();

// var name = "";
// var birthday = 0;
// var favoriteNumber = 0;

// function simulateGetData() {
//     name = "Carlos Astengo";
//     birthday = 973296000 * 1000; // convertir a milisegundos
//     birthday = new Date(birthday);
//     favoriteNumber = 25;
//     favoriteNumber = favoriteNumber.toString();
// }

// function getPersonalTrivia() {
//     //convert birthday to api format
//     var birthdayPath = (birthday.getMonth()+1).toString() + "/" +(birthday.getDate()).toString()

//     //calculate zodiac sign
//     const x = parseInt((birthday.getMonth()+1).toString() + (("0" + birthday.getDate()).slice(-2)));
//     const sign = x >= 121 && x <= 218 ? 'Aquarius' : x >= 219 && x <= 320 ? 'Pisces' : x >= 321 && x <= 420 ? 'Aries' : x >= 421 && x <= 521 ? 'Taurus' : x >= 522 && x <= 621 ? 'Gemini' : x >= 622 && x <= 722 ? 'Cancer' : x >= 723 && x <= 823 ? 'Leo' : x >= 824 && x <= 923 ? 'Virgo' : x >= 924 && x <= 1023 ? 'Libra' : x >= 1024 && x <= 1122 ? 'Scorpio' : x >= 1123 && x <= 1221 ? 'Sagittarius' : x >= 1222 || x <= 120 ? 'Capricorn' : void 0;

//     //get birthday trivia message
//     axios.get(numbersApi + birthdayPath + datePath)
//         .then((response) => {
//             console.log("Did you know that your birthday on ")
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error al conseguir trivia del cumpleaños \n");
//         })

//     //get favoriteNumber trivia message
//     axios.get(numbersApi + favoriteNumber)
//         .then((response) => {
//             console.log("Did yo know that your favorite number ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error al conseguir trivia del numero favorito \n");
//         })

//     //get favoriteNumber math message
//     axios.get(numbersApi + favoriteNumber + mathPath)
//         .then((response) => {
//             console.log("Did yo know that your favorite number ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error al conseguir trivia de mate del numero favorito \n");
//         })

//     //get horoscope
//     axios.get(horoscopeApi + sign.toLowerCase())
//         .then((response) => {
//             //Posible bug donde el dia del cumpleaños es uno menos del normal
//             console.log("For you " + sign + ": ");
//             console.log(response.data.horoscope + "\n");
//         })
//         .catch((error) => {
//             console.log(sign);
//             console.log("error al conseguir horoscopo \n");
//         })
// }

// function getRandomTrivia(){
//     //get random trivia
//     axios.get(numbersApi + randomTriviaPath)
//         .then((response) => {
//             console.log("Did you know that the number ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error en año trivia \n");
//         })

//     //get random year
//     axios.get(numbersApi + randomYearPath)
//         .then((response) => {
//             console.log("Did you know that the year ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error en año random \n");
//         })

//     //get random date
//     axios.get(numbersApi + randomDatePath)
//         .then((response) => {
//             console.log("Did you know that ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error en dia random \n");
//         })

//     //get random math
//     axios.get(numbersApi + randomMathPath)
//         .then((response) => {
//             console.log("Did you know that the number ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error en mate random \n");
//         })
// }

// function getDailyTrivia(){

//     const min = 1;
//     const max = 365;
//     const seed = parseInt((currentDate.getMonth()).toString() +(currentDate.getDate()).toString());
//     var key = ((seed * 9301 + 49297) % 233280)/233280;
//     key = Math.floor(min + key * (max - min));

//     //get daily trivia fact
//     axios.get(numbersApi + key.toString() + mathPath)
//         .then((response) => {
//             console.log("Today's number is " + key + ", ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error al conseguir numero del dia \n");
//         })

//     //get today trivia date fact
//     axios.get(numbersApi + ((currentDate.getMonth()+1).toString() + '/' +currentDate.getDate().toString()) + datePath)
//         .then((response) => {
//             console.log("Did you know that today, ");
//             console.log(response.data + "\n");
//         })
//         .catch((error) => {
//             console.log("error al conseguir la trivia de hoy \n");
//         }) 
// }

// simulateGetData();
// //getPersonalTrivia();
// //getRandomTrivia();
// getDailyTrivia();






