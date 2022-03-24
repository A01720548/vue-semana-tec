<script setup>
import axios from 'axios'
import { db } from '../main'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth } from '../main'
</script>

<template>
    <div class="container">
        <h1 class="display-1">Favorite Number</h1>
        <h2>Did yo know that your favorite number</h2>
        <p>{{ favoriteTrivia }}</p>
        <h2>Did yo know that your favorite number</h2>
        <p>{{ favoriteMath }}</p>
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