<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';

export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage }
};
</script>

<template>

  <!-- Header -->
  <AppHeader />


  <!-- Main -->
  <main class="container">

    <!-- Home Page -->
    <HomePage />

  </main>
</template>

<style lang="scss">
body {
  background-color: #495057;
  color: #ced4da;
}
</style>