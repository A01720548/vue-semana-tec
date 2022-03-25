<template>
    <div class="container">
        <va-list>
            <va-list-label color="success">Team Members</va-list-label>

            <va-list-item v-for="(contact, index) in contacts" :key="index">
                <va-list-item-section avatar>
                    <va-avatar>
                        <img :src="contact.img" />
                    </va-avatar>
                </va-list-item-section>

                <va-list-item-section>
                    <va-list-item-label>{{ contact.name }}</va-list-item-label>

                    <va-list-item-label caption>{{ contact.matricula }}</va-list-item-label>
                </va-list-item-section>

                <va-list-item-section icon>
                    <va-icon name="person" color="gray" />
                </va-list-item-section>
            </va-list-item>
        </va-list>
    </div>
</template>

<script>
export default {
    data() {
        return {
            contacts: [
                { name: 'Esteban de la Maza', matricula: 'A01720548', img: 'https://avatars.githubusercontent.com/u/82958825?v=4' },
                { name: 'Carlos Astengo', matricula: 'A01570405', img: 'https://avatars.githubusercontent.com/u/69476270?s=100&v=4' },
                { name: 'Ivan Delfin', matricula: 'A01024265', img: 'https://avatars.githubusercontent.com/u/75266088?v=4' },
                { name: 'Marcelo Marquez Murillo', matricula: 'A01720588', img: 'https://avatars.githubusercontent.com/u/55757884?v=4' },
            ],
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
    padding: 10rem 30rem;
}
</style>