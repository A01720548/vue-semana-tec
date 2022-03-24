<template>
    <div class="container">
        <h1 class="display-1">Birhday Fact</h1>
        <h2>Did you know that today,</h2>
        <p>{{ birthdayFact }}</p>
    </div>
</template>

<script>
import axios from 'axios'

var birthday = 973296000 * 1000; // convertir a milisegundos
birthday = new Date(birthday);
var favoriteNumber = 25;
favoriteNumber = favoriteNumber.toString();

const numbersApi = "http://numbersapi.com/";
const datePath = "/date";

//convert birthday to api format
var birthdayPath = (birthday.getMonth() + 1).toString() + "/" + (birthday.getDate()).toString()

export default {
    name: 'get-birthday-fact',
    data() {
        return {
            birthdayFact: null
        };
    },
    created() {
        //get birthday trivia message
        axios.get(numbersApi + birthdayPath + datePath)
            .then((response) => {
                console.log("Did you know that your birthday on ")
                console.log(response.data + "\n");
                this.birthdayFact = response.data
            })
            .catch((error) => {
                console.log("error al conseguir trivia del cumpleaños \n");
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