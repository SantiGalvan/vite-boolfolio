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

html::-webkit-scrollbar {
  width: 10px;
}

html::-webkit-scrollbar-track {
  background: white;
}

html::-webkit-scrollbar-thumb {
  background: rgba(42, 41, 41, 0.383);
}
</style>