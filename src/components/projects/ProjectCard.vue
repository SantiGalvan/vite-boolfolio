<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
};
</script>

<template>
    <div class="card text-center">
        <div class="card-header">
            <h3>{{ project.title }}</h3>
        </div>
        <div class="card-body">
            <img class="img-fluid mb-3" :src="project.image" :alt="project.title">
            <div><strong>Framework:</strong> {{ project.framework }}</div>
            <div class="mt-2"><strong>Creato il:</strong> {{ creationDate }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>