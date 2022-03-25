<script setup>
import { db } from '../main'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { auth } from '../main'

</script>

<template>
    <div class="container">
        <div class="flex md6 lg4">
            <va-card stripe stripe-color="success" style="width: 30rem">
                <va-card-title>Register your favorite number and date of birth!</va-card-title>
                <va-card-content>
                    <va-form style="width: 100%">
                        <va-input
                            color="success"
                            label="Favorite Number"
                            class="mb-4"
                            v-model="favoriteNumber"
                            :rules="[value => (value && value.length > 0) || 'Field is required']"
                            mask="numeral"
                        />
                        <div class="centeredItem">
                            <va-date-picker color="success" v-model="dateValue" />
                            <va-button
                                @click="handleSubmit"
                                size="large"
                                color="success"
                                id="submitButton"
                            >Submit</va-button>
                        </div>
                    </va-form>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            favoriteNumber: null,
            dateValue: null,
        }
    },
    async created() {
        const docRef = doc(db, "userData", auth.currentUser.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            this.favoriteNumber = docSnap.data().favoriteNumber
            this.dateValue = docSnap.data().dob.toDate()
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    },
    methods: {
        handleSubmit: async function () {
            document.getElementById('submitButton').loading = true;
            console.log('clicked')
            try {
                await setDoc(doc(db, "userData", auth.currentUser.uid), {
                    favoriteNumber: this.favoriteNumber,
                    dob: this.dateValue,
                });
                alert('Succesfully updated DB');
            } catch (e) {
                console.error("Error adding document: ", e);
                $vaToast.init({ message: 'Error adding document', color: 'danger' })
            }
        }
    },
}
</script>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 10rem;
}

.centeredItem {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex-direction: column;
}
</style>