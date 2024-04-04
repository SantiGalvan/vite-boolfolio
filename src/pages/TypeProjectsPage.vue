<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
import { store } from '../data/store';
const baseUri = 'http://localhost:8000/api';

export default {
    name: 'TypeProjectsPage',
    components: { ProjectsList },
    data: () => ({
        projects: [],
        typeLabel: '',
        store
    }),
    methods: {
        fetchProjects() {
            store.isLoading = true;

            axios.get(`${baseUri}/types/${this.$route.params.slug}/projects`).then(res => {
                const { label, projects } = res.data;
                this.projects = projects;
                this.typeLabel = label;
            }).catch(err => {
                console.error(err);
                this.$router.push({ name: 'not-found' });
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
    <div v-if="!store.isLoading">
        <h1 class="text-center my-4">Progetti della Tipologia {{ typeLabel }}</h1>
        <ProjectsList :projects="projects" />
    </div>
</template>
