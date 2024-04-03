<script>
import axios from 'axios';
import { store } from '../data/store';
import ProjectCard from '../components/projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/'

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        store
    }),
    methods: {
        getPost() {
            store.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.slug).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.error(err);
            }).then(() => {
                store.isLoading = false;
            })
        }
    },
    created() {
        this.getPost();
    }
};
</script>

<template>
    <ProjectCard class="my-5" v-if="!store.isLoading && project" :project="project" :isDetail="true" />
</template>

<style></style>