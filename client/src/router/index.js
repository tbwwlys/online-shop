// 路由如何介绍
import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
// import Admin from '../pages/Admin.vue';
// import Cart from '../pages/Cart.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },{
            path: '/admin',
            name: 'Admin',
            component: () => import('../pages/admin/Index.vue'),
            children: [
                {
                    path: 'new',
                    name: 'New',
                    component: () => import('../pages/admin/New.vue')
                },
                {
                    path: 'products',
                    name: 'Products',
                    component: () => import('../pages/admin/Products.vue')
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: () => import('../pages/admin/Edit.vue')
                }
            ]
        },{
            path: '/cart',
            name: 'Cart',
            component: () => import('../pages/Cart.vue') 
        }
    ]
            
})