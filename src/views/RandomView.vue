<script setup>
import axios from 'axios'
</script>

<template>
    <div>
        <h1 class="display-1">Random Fact</h1>
    </div>
    <div class="mega-container">
        <div class="container">
            <h2>Did you know that the number</h2>
            <p>{{ randomTrivia }}</p>
        </div>
        <div class="container">
            <h2>Did you know that the year</h2>
            <p>{{ randomYear }}</p>
        </div>
        <div class="container">
            <h2>Did you know that</h2>
            <p>{{ randomDate }}</p>
        </div>
        <div class="container">
            <h2>Did you know that the number</h2>
            <p>{{ randomMath }}</p>
        </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Poppins:wght@100&display=swap');
.mega-container {
    /* align-items: center;
    justify-content: center; */
    margin: 10rem auto 20rem auto;
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
    /* position: absolute; */
    padding-top: 20px;
    
}
</style>