// Importo le due funzioni di Vue Router utili per usare il router
import { createRouter, createWebHistory } from 'vue-router';

// Importo le pagine da usare
import HomePage from '../pages/HomePage.vue';
import ContactUsPage from '../pages/ContactUsPage.vue';

// Definisco le rotte
export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/contact-us', component: ContactUsPage },
        // Deve essere per ultimo
        { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});