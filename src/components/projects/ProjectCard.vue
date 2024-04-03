<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
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
    <div class="card">
        <div class="card-header text-center" :style="{ 'background-color': project.type ? project.type.color : '' }">
            <h3>{{ project.title }}</h3>
            <h6>{{ project.type ? project.type.label : 'Nessuna Tipologia' }}</h6>
        </div>

        <!-- Card-body nella lista di progetti -->
        <div class="card-body text-center" v-if="!isDetail" style="height: 300px;">
            <img class="img-fluid mb-3" :src="project.image" :alt="project.title">
            <div><strong>Framework:</strong> {{ project.framework }}</div>
            <div class="mt-2"><strong>Creato il:</strong> {{ creationDate }}</div>
            <div class="mt-2"><strong>Linguaggio: </strong>
                <span v-for="technology in project.technologies" :key="technology.id" class="badge rounded-pill me-1"
                    :style="{ backgroundColor: technology.color }">
                    {{ technology.label }}</span>
            </div>
        </div>

        <!-- Card-body nel singolo progetto -->
        <div class="card-body" v-else>
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid mb-3" :src="project.image" :alt="project.title">
                    <div><strong>Framework:</strong> {{ project.framework }}</div>
                    <div class="mt-2"><strong>Creato il:</strong> {{ creationDate }}</div>
                    <div class="mt-2">
                        <strong>Tipologia: </strong>
                        <span v-if="project.type" class="badge" :style="{ backgroundColor: project.type.color }">
                            {{ project.type.label }}
                        </span>
                        <span v-else>Nessuna Tipologia</span>
                    </div>
                    <div class="mt-2"><strong>Linguaggio: </strong>
                        <span v-for="technology in project.technologies" :key="technology.id"
                            class="badge rounded-pill me-1" :style="{ backgroundColor: technology.color }">
                            {{ technology.label }}</span>
                    </div>
                </div>
                <div class="col">
                    <p class="lead">{{ project.description }}</p>
                </div>
            </div>
        </div>

        <!-- Card-footer da vedere solo nella lista dei progetti -->
        <div class="card-footer text-center" v-if="!isDetail">
            <RouterLink class="btn btn-primary" :to="{ name: 'project-detail', params: { slug: project.slug } }">Vedi
            </RouterLink>
        </div>
        <div class="card-footer" v-else>
            <button class="btn btn-secondary" @click="$router.back()">Torna indietro</button>
        </div>
    </div>
</template>

<style lang=" scss" scoped></style>
