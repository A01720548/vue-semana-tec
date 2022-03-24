<script setup>
import { db } from '../main'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth } from '../main'
import axios from 'axios'

</script>

<template>
    <div class="container">
        <h1 class="display-1">Birhday Fact</h1>
        <h2>For you {{ sign }}</h2>
        <p>{{ horoscope }}</p>
    </div>
</template>

<script>
const horoscopeApi = "https://ohmanda.com/api/horoscope/";


export default {
    name: 'get-birthday-fact',
    data() {
        return {
            horoscope: null,
            birthday: null,
            sign: null
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
        // calculate zodiac sign
        const x = parseInt((this.birthday.getMonth() + 1).toString() + (("0" + this.birthday.getDate()).slice(-2)));
        this.sign = x >= 121 && x <= 218 ? 'Aquarius' : x >= 219 && x <= 320 ? 'Pisces' : x >= 321 && x <= 420 ? 'Aries' : x >= 421 && x <= 521 ? 'Taurus' : x >= 522 && x <= 621 ? 'Gemini' : x >= 622 && x <= 722 ? 'Cancer' : x >= 723 && x <= 823 ? 'Leo' : x >= 824 && x <= 923 ? 'Virgo' : x >= 924 && x <= 1023 ? 'Libra' : x >= 1024 && x <= 1122 ? 'Scorpio' : x >= 1123 && x <= 1221 ? 'Sagittarius' : x >= 1222 || x <= 120 ? 'Capricorn' : void 0;

        //get horoscope

        axios.get(horoscopeApi + this.sign.toLowerCase())
            .then((response) => {
                //Posible bug donde el dia del cumpleaños es uno menos del normal
                console.log("For you " + this.sign + ": ");
                console.log(response.data.horoscope + "\n");
                this.horoscope = response.data.horoscope
            })
            .catch((error) => {
                console.log(this.sign);
                console.log("error al conseguir horoscopo \n");
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