<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const defaultEndpoint = 'http://localhost:8000/api/projects/'

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getPost() {
            this.isLoading = true;
            axios.get(defaultEndpoint + this.$route.params.slug).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.error(err);
            }).then(() => {
                this.isLoading = false;
            })
        }
    },
    created() {
        this.getPost();
    }
};
</script>

<template>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard class="my-5" v-if="!isLoading && project" :project="project" :isDetail="true" />
</template>

<style></style>