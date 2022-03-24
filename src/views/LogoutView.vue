<template>
    <div class="container">
        <h1 class="display-1">Semana Tec Vue</h1>
        <div class="flex md6 lg4">
            <va-card stripe stripe-color="success">
                <va-card-title>Logout</va-card-title>
                <va-card-content>
                    <div class="containerCenter">
                        <va-button
                            @click="$store.dispatch('logout')"
                            color="success"
                            gradient
                            class="mr-4"
                        >Logout</va-button>
                    </div>
                </va-card-content>
            </va-card>
        </div>
    </div>
</template>

<script setup>

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
    margin: 2rem;
}
.containerCenter {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>