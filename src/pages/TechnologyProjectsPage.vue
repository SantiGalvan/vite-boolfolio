<script>
import axios from 'axios';
import ProjectsList from '../components/projects/ProjectsList.vue';
import { store } from '../data/store';
const baseUri = 'http://localhost:8000/api';

export default {
    name: 'TechnologyProjectsPage',
    components: { ProjectsList },
    data: () => ({
        projects: [],
        technologyLabel: '',
        store
    }),
    methods: {
        async fetchProjects() {
            store.isLoading = true;

            try {
                const res = await axios.get(`${baseUri}/technologies/${this.$route.params.slug}/projects`);
                const { label, projects } = res.data;
                this.projects = projects;
                this.technologyLabel = label;
            } catch (err) {
                console.error(err);
                this.$router.push({ name: 'not-found' });
            }

            store.isLoading = false;
        }
    },
    created() {
        this.fetchProjects()
    }
};
</script>

<template>
    <div v-if="!store.isLoading">
        <h1 class="text-center my-4">Progetti della Tecnologia {{ technologyLabel }}</h1>
        <ProjectsList :projects="projects" />
    </div>
</template>
