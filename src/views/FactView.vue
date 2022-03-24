<template>
    <div class="container">
        <h1 class="display-1">Fact of the Day</h1>
        <h2>Today's number is {{ key }}</h2>
        <p>{{ dailyTrivia }}</p>
        <h2>Did you know that today,</h2>
        <p>{{ dailyTriviaDate }}</p>
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
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
}
.display-1 {
    color: white;
}
</style>