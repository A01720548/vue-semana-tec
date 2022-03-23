<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";

</script>

<template>
  <header>
    <div class="mb-4" style="height: 100vh; border: 2px solid var(--va-primary);">
      <va-sidebar color="success" gradient minimizedWidth="64px" width="18rem" hoverable>
        <va-sidebar-item
          v-for="item in items"
          :key="item.to"
          :active="item.active"
          active-color="background"
        >
          <va-sidebar-item-content>
            <va-icon :name="item.icon" />
            <va-sidebar-item-title style="height: 24px;">{{ item.title }}</va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </va-sidebar>
    </div>
  </header>
  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      items: [
        { title: 'Home', icon: 'home', active: true },
        { title: 'Birthday', icon: 'cake' },
        { title: 'Favorite Number', icon: 'favorite' },
        { title: 'Sign Out', icon: 'logout' },
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
