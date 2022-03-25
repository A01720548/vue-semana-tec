<template>
    <div class="display-1">
        <h1>Fact of the Day</h1>
    </div>
    <div class="mega-container">
        <div class="container">
            <h2>Today's number</h2>
            <p>{{ dailyTrivia }}</p>
        </div>
        <div class="container">
            <h2>Did you know that today,</h2>
            <p>{{ dailyTriviaDate }}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

const numbersApi = "http://numbersapi.com/";
const mathPath = "/math";
const datePath = "/date";


var currentDate = new Date();
const min = 1;
const max = 365;
const seed = parseInt((currentDate.getMonth()).toString() + (currentDate.getDate()).toString());
var key = ((seed * 9301 + 49297) % 233280) / 233280;
key = Math.floor(min + key * (max - min));
console.log(key);

export default {
    name: 'daily-fact',
    data() {
        return {
            dailyTrivia: null,
            dailyTriviaDate: null
        };
    },
    created() {
        //get daily trivia fact
        axios.get(numbersApi + key.toString() + mathPath)
            .then((response) => {
                console.log("Today's number is " + key + ", ");
                console.log(response.data + "\n");
                this.dailyTrivia = response.data
            })
            .catch((error) => {
                console.log("error al conseguir numero del dia \n");
            })

        //get today trivia date fact
        axios.get(numbersApi + ((currentDate.getMonth() + 1).toString() + '/' + currentDate.getDate().toString()) + datePath)
            .then((response) => {
                console.log("Did you know that today, ");
                console.log(response.data + "\n");
                this.dailyTriviaDate = response.data
            })
            .catch((error) => {
                console.log("error al conseguir la trivia de hoy \n");
            })
    }
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Poppins:wght@100&display=swap');
.mega-container {
    /* align-items: center;
    justify-content: center; */
    margin: 20rem auto 20rem auto;
}

.container {
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: auto;
    padding: 5px;
    overflow: auto;
    max-width: 1000px;
    /* max-height: 1000px; */
    border: 1px solid steelblue;
    display: flex;
    flex-direction: column;
    min-height: 15vh;
    text-align: center;
}
.display-1 {
    color: white;
    text-align: center;
    font-family: 'Spectral', 'sans-Serif';
    /* margin-top: 2rem auto; */
    padding-top: 20px;
    
    /* margin: 3rem 0rem; */
}
</style>