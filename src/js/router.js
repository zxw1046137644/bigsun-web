import Result from '../pages/apiResult/ApiResult.vue'
import ApiList from '../pages/apiList/ApiList.vue'
import Index from '../components/index/index'
import Child1 from '../pages/child/child1'
import Child2 from '../pages/child/child2'
import InterfacePage from '../components/interface/interface'

export default [
    {
        path: '/',
        redirect: '/index'//重定向
    },
    {
        path: '/index',
        name: 'index',
        component: Index,

    },
    {
        path: '/result',
        name: 'result',
        component: Result
    },

    {
        path: '/apiPage',
        name: 'interfacePage',
        component: InterfacePage,
        children:[
            {
                path: 'apiList',
                name: 'ApiList',
                component: ApiList
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
    }
]

