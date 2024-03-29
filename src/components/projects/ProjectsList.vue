<script>
export default {
    name: 'ProjectsList',
    props: { projects: Array }
};
</script>

<template>
    <section id="projects-list">
        <ol v-if="projects.length">
            <li v-for="project in projects" :key="project.id">{{ project.title }}</li>
        </ol>
        <h4 v-else>Non ci sono progetti</h4>
    </section>
</template>

<style lang="scss" scoped></style>