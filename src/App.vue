<script>
import AppHeader from './components/AppHeader.vue';
import ProjectsList from './components/projects/ProjectsList.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',
  data: () => ({
    projects: [],
  }),
  components: { AppHeader, ProjectsList },
  methods: {
    fetchProjects() {
      axios.get(defaultEndpoint).then(res => {
        this.projects = res.data;
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
    <h1 class="text-center my-4">Progetti</h1>

    <!-- Section Projects List -->
    <ProjectsList :projects="projects" />
  </main>
</template>

<style lang="scss">
body {
  background-color: #495057;
  color: #ced4da;
}
</style>