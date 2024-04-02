<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './pages/HomePage.vue';
import ContactUsPage from './pages/ContactUsPage.vue'

export default {
  name: 'Boolfolio',
  components: { AppHeader, HomePage, ContactUsPage }
};
</script>

<template>

  <!-- Header -->
  <AppHeader />


  <!-- Main -->
  <main class="container">

    <!-- Home Page -->
    <HomePage />

    <!-- Contact Us Page -->
    <ContactUsPage />

  </main>
</template>

<style lang="scss">
body {
  background-color: #495057;
  color: #ced4da;
}
</style>