import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import Introductory from "@/views/Introductory.vue";
import Calculator from "@/views/Calculator.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/introductory'
    },
    {
        path: '/calculator',
        name: 'Calculator',
        component: Calculator
    },
    {
        path: '/introductory',
        name: 'Introductory',
        component: Introductory,
        meta: {checkIntro: true}
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router
