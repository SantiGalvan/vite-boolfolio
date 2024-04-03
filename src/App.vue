<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './data/store';

export default {
  name: 'Boolfolio',
  components: { AppHeader },
  data: () => ({
    store
  })

};
</script>

<template>

  <!-- Header -->
  <AppHeader />

  <!-- AppLoader -->
  <AppLoader v-if="store.isLoading" />

  <!-- Main -->
  <main class="container">
    <!-- Router View -->
    <RouterView />
  </main>
</template>

<style lang="scss">
body {
  background-color: #495057;
  color: #ced4da;
}
</style>