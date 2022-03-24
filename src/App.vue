<script setup>
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <header v-if="$store.state.user">
    <div class="mb-4" style="height: 100vh; border: 2px solid var(--va-primary);">
      <va-sidebar color="success" gradient minimizedWidth="64px" width="18rem" hoverable>
        <va-sidebar-item
          v-for="item in items"
          :key="item.to"
          :active="item.active"
          active-color="background"
        >
          <RouterLink :to="item.link">
            <va-sidebar-item-content>
              <va-icon :name="item.icon" />
              <va-sidebar-item-title style="height: 24px;">{{ item.title }}</va-sidebar-item-title>
            </va-sidebar-item-content>
          </RouterLink>
        </va-sidebar-item>
      </va-sidebar>
    </div>
  </header>
  <RouterView />
</template>
<script>
import { onBeforeMount } from "vue";
import { useStore } from "vuex";


export default {
  setup() {
    const store = useStore()
    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })
  },
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', active: true, link: '/' },
        { title: 'Register', icon: 'app_registration', link: 'register' },
        { title: 'Birthday', icon: 'cake', link: 'birthday' },
        { title: 'Favorite Number', icon: 'favorite', link: 'favorite' },
        { title: 'Fact of the Day', icon: 'event', link: 'fact' },
        { title: 'Random Facts', icon: 'casino', link: 'random' },
        { title: 'Horoscope', icon: 'auto_awesome', link: 'horoscope' },
        { title: 'Team', icon: 'groups', link: 'team' },
        { title: 'Sign Out', icon: 'logout', link: 'logout' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.va-sidebar {
  .va-sidebar__title {
    transition: opacity 0.2s ease-in-out;
  }

  &--minimized {
    .va-sidebar__title {
      opacity: 0;
    }
  }
}
</style>
<style>
@import "@/assets/base.css";

header {
  position: absolute;
}
</style>
