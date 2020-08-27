import Result from '../components/api_auto_demo/apiResult/ApiResult.vue'
import ApiList from '../components/api_auto_demo/apiList/ApiList.vue'
import Index from '../components/index/index'
import Child1 from '../components/api_auto_demo/child/child1'
import Child2 from '../components/api_auto_demo/child/child2'
import InterfacePage from '../components/index_demo/face'
import Index_demo from '../components/index_demo/index_demo'
import YtData from '../pages/yuantu/ytdata'
import Tools from '../components/tools/Tools'

export default [
    //重定向进入到index
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '/tools',
        name: 'tools',
        component: Tools,
        children: [
            {
                path: 'ytdata',
                name: 'ytdata',
                component: YtData
            }
        ]
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
    },
    //首页demo的路由
    {
        path: '/index_demo',
        name: 'index_demo',
        component: Index_demo,
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
        children: [
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

