<script setup>
import { db } from '../main'
import { collection, addDoc } from 'firebase/firestore'


</script>

<template>
    <div class="container">
        <div class="flex md6 lg4">
            <va-card stripe stripe-color="success" style="width: 30rem">
                <va-card-title>Register User Data</va-card-title>
                <va-card-content>
                    <va-form style="width: 100%">
                        <va-input
                            color="success"
                            class="mb-4"
                            label="First Name"
                            v-model="firstNameValue"
                            :rules="[value => (value && value.length > 0) || 'Field is required']"
                        />
                        <va-input
                            color="success"
                            label="Last Name"
                            class="mb-4"
                            v-model="lastNameValue"
                            :rules="[value => (value && value.length > 0) || 'Field is required']"
                        />
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
                            <va-button @click="handleSubmit" size="large" color="success">Submit</va-button>
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
            firstNameValue: '',
            lastNameValue: '',
            favoriteNumber: null,
            dateValue: new Date(),
        }
    },
    methods: {
        handleSubmit: async function () {
            console.log('clicked')
            try {
                const docRef = await addDoc(collection(db, "userData"), {
                    firstName: this.firstNameValue,
                    lastName: this.lastNameValue,
                    favoriteNumber: this.favoriteNumber,
                    dob: this.dateValue
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
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