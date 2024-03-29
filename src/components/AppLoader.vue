<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <div class="overlay">
        <div class="spinner-border text-info" role="status"></div>
    </div>
</template>

<style lang="scss" scoped>
.overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(.5, .5, .5, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    .spinner-border {
        width: 200px;
        height: 200px;
    }
}
</style>