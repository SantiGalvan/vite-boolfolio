<script>
import ProjectsList from '../components/projects/ProjectsList.vue';
import { store } from '../data/store';
import axios from 'axios';
const defaultEndpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',
    data: () => ({
        store,
        projects: [],
        isAlertOpen: false
    }),
    components: { ProjectsList },
    methods: {
        fetchProjects() {
            store.isLoading = true;

            axios.get(defaultEndpoint).then(res => {
                this.projects = res.data;

                this.isAlertOpen = false;
            }).catch(err => {
                console.error(err);

                this.isAlertOpen = true;
            }).then(() => {
                store.isLoading = false;
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

    <!-- Section Projects List -->
    <ProjectsList v-if="!store.isLoading" :projects="projects" />
</template>

<style></style>