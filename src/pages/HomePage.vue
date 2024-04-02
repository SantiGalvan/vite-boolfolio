<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',
    data: () => ({
        projects: [],
        isLoading: false,
        isAlertOpen: false
    }),
    components: { ProjectsList },
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
    <AppAlert :show="isAlertOpen" @close="isAlertOpen = false" />
    <h1 class="text-center my-4">Progetti</h1>

    <AppLoader v-if="isLoading" />
    <!-- Section Projects List -->
    <ProjectsList v-else :projects="projects" />
</template>

<style></style>