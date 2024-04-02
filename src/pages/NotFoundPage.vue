<script>
export default {
    name: 'NotFoundPage'
};
</script>

<template>
    <div class="not-found d-flex flex-column justify-content-center align-items-center">
        <h2 class="text-white text-center">404 | Page not found</h2>
        <button class="btn btn-primary my-4" @click="$router.back()">Torna indietro</button>
    </div>
</template>

<style lang="scss" scoped>
.not-found {
    height: calc(100vh - 80px);
}
</style>