<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',
  data: () => ({
    projects: [],
    isLoading: false,
    isAlertOpen: false
  }),
  components: { AppHeader, ProjectsList },
  methods: {
    fetchProjects() {
      this.isLoading = true;

      axios.get(defaultEndpoint).then(res => {
        this.projects = res.data;

        this.isAlertOpen = false;
      }).catch(err => {
        console.error(err);

        this.isAlertOpen = true;
      }).then(() => {
        this.isLoading = false;
      })
    }
  },
  created() {
    this.fetchProjects()
  }
};
</script>

<template>

  <!-- Header -->
  <AppHeader />


  <!-- Main -->
  <main class="container">
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" />
    <h1 class="text-center my-4">Progetti</h1>

    <AppLoader v-if="isLoading" />
    <!-- Section Projects List -->
    <ProjectsList v-else :projects="projects" />
  </main>
</template>

<style lang="scss">
body {
  background-color: #495057;
  color: #ced4da;
}
</style>