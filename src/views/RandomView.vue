<script setup>
import axios from 'axios'
</script>

<template>
    <div class="container">
        <h1 class="display-1">Favorite Number</h1>
        <h2>Did you know that the number</h2>
        <p>{{ randomTrivia }}</p>
        <h2>Did you know that the year</h2>
        <p>{{ randomYear }}</p>
        <h2>Did you know that</h2>
        <p>{{ randomDate }}</p>
        <h2>Did you know that the number</h2>
        <p>{{ randomMath }}</p>
    </div>
</template>

<script>
const numbersApi = "http://numbersapi.com/";
const randomTriviaPath = "random/trivia";
const randomYearPath = "random/year";
const randomDatePath = "random/date";
const randomMathPath = "random/math";

export default {
    name: 'get-favorite-number',
    data() {
        return {
            randomTrivia: null,
            randomYear: null,
            randomDate: null,
            randomMath: null
        };
    },
    created() {
        // get random trivia
        axios.get(numbersApi + randomTriviaPath)
            .then((response) => {
                console.log("Did you know that the number ");
                console.log(response.data + "\n");
                this.randomTrivia = response.data
            })
            .catch((error) => {
                console.log("error en año trivia \n");
            })

        //get random year
        axios.get(numbersApi + randomYearPath)
            .then((response) => {
                console.log("Did you know that the year ");
                console.log(response.data + "\n");
                this.randomYear = response.data
            })
            .catch((error) => {
                console.log("error en año random \n");
            })

        //get random date
        axios.get(numbersApi + randomDatePath)
            .then((response) => {
                console.log("Did you know that ");
                console.log(response.data + "\n");
                this.randomDate = response.data
            })
            .catch((error) => {
                console.log("error en dia random \n");
            })

        //get random math
        axios.get(numbersApi + randomMathPath)
            .then((response) => {
                console.log("Did you know that the number ");
                console.log(response.data + "\n");
                this.randomMath = response.data
            })
            .catch((error) => {
                console.log("error en mate random \n");
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