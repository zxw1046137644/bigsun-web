import Result from '../pages/apiResult/ApiResult.vue'
import Page from '../pages/apiList/ApiList.vue'
import Index from '../components/index/index'
import Child1 from '../pages/child/child1'
import Child2 from '../pages/child/child2'

export default [
    {
        path: '/',
        redirect: '/index'//重定向
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children:[
            {
                path: '',
                name: 'child1',
                redirect:'child2'
            },
            {
                path: 'child1',
                name: 'child1',
                component: Child1
            },
            {
                path: 'child2',
                name: 'child2',
                component: Child2
            },
        ]
    },
    {
        path: '/result',
        name: 'result',
        component: Result
    },
    {
        path: '/page',
        name: 'Page',
        component: Page
    }
]

