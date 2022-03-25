<script setup>
import { db } from '../main'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth } from '../main'
import axios from 'axios'
</script>

<template>
    <div>
         <h1 class="display-1">Birthday Fact</h1>
    </div>
    <div class="container">
        <h2>Did you know that today,</h2>
        <p>{{ birthdayFact }}</p>
    </div>
</template>

<script>
const numbersApi = "http://numbersapi.com/";
const datePath = "/date";


export default {
    name: 'get-birthday-fact',
    data() {
        return {
            birthdayFact: null,
            birthday: null
        };
    },
    async created() {
        const docRef = doc(db, "userData", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.birthday = docSnap.data().dob.toDate()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }

        //get birthday trivia message
        var birthdayPath = (this.birthday.getMonth() + 1).toString() + "/" + (this.birthday.getDate()).toString()
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@1,200&family=Poppins:wght@100&display=swap');
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
    min-height: 30vh;
    margin: 20rem auto 20rem auto;
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