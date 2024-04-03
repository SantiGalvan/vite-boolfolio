<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        creationDate() {
            const date = new Date(this.project.created_at);

            let day = date.getDate();
            let month = date.getMonth() + 1;
            const year = date.getFullYear();
            const hours = date.getHours();
            const minutes = date.getMinutes();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`
        }
    }
};
</script>

<template>
    <div class="card text-center">
        <div class="card-header" :style="{ 'background-color': project.type ? project.type.color : '' }">
            <h3>{{ project.title }}</h3>
            <h6>{{ project.type ? project.type.label : 'Nessuna Tipologia' }}</h6>
        </div>
        <div class="card-body">
            <img class="img-fluid mb-3" :src="project.image" :alt="project.title">
            <div><strong>Framework:</strong> {{ project.framework }}</div>
            <div class="mt-2"><strong>Creato il:</strong> {{ creationDate }}</div>
        </div>
        <div class="card-footer">
            <RouterLink class="btn btn-primary" :to="{ name: 'project-detail', params: { slug: project.slug } }">Vedi
            </RouterLink>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>