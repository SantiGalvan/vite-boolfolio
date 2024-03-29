<script>
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'ProjectsList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">
        <div class="row mb-5" v-if="projects.length">
            <div class="col-4 g-4" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
        <div class="row" v-else>
            <h3 class="text-center">Al momento non ci sono progetti</h3>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>