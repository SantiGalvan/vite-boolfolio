<script>
export default {
    name: 'AppHeader'
};
</script>

<template>
    <header>
        <nav class="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div class="container">
                <RouterLink class="navbar-brand" to="/">Boolfolio</RouterLink>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'home' }">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                            <RouterLink class="nav-link" :to="{ name: 'contact-us' }">Contattaci</RouterLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>