<script setup>
import axios from 'axios'
import { db } from '../main'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth } from '../main'
</script>

<template>
    <div>
        <h1 class="display-1">Favorite Number</h1>
    </div>
    <div class="mega-container">
        <div class="container">
            <h2>Trivia: Did yo know that your favorite number</h2>
            <p>{{ favoriteTrivia }}</p>
        </div>
        <div class="container">
            <h2>Math: Did yo know that your favorite number</h2>
            <p>{{ favoriteMath }}</p>
        </div>
    </div>
</template>

<script>
const numbersApi = "http://numbersapi.com/";
const mathPath = "/math";


export default {
    name: 'get-favorite-number',
    data() {
        return {
            favoriteTrivia: null,
            favoriteMath: null,
            favoriteNumber: null
        };
    },
    async created() {
        const docRef = doc(db, "userData", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.favoriteNumber = docSnap.data().favoriteNumber
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

        //get favoriteNumber trivia message
        axios.get(numbersApi + this.favoriteNumber)
            .then((response) => {
                console.log("Did yo know that your favorite number ");
                console.log(response.data + "\n");
                this.favoriteTrivia = response.data
            })
            .catch((error) => {
                console.log("error al conseguir trivia del numero favorito \n");
            })

        //get favoriteNumber math message
        axios.get(numbersApi + this.favoriteNumber + mathPath)
            .then((response) => {
                console.log("Did yo know that your favorite number ");
                console.log(response.data + "\n");
                this.favoriteMath = response.data
            })
            .catch((error) => {
                console.log("error al conseguir trivia de mate del numero favorito \n");
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
    /* position: absolute; */
    font-family: 'Spectral', 'sans-Serif';
    padding-top: 20px;
    
}
</style>