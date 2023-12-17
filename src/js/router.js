import Result from '../components/1api_auto/apiResult/ApiResult.vue'
import ApiList from '../components/1api_auto/apiList/ApiList.vue'
import Index from '../components/index/index'
import Index_demo from '../components/2index_demo/index_demo'
import ToDoListDemo from '../components/3todo_list_demo/todolist_demo'
import Tools from '../components/tools/Tools'
import NotLogin from '../pages/others/NotLogin'
import Main from "@/components/1api_auto/main/Main";
import ApiIndex from "@/components/1api_auto/main/ApiIdex";
import ApiResult from "@/components/1api_auto/apiResult/ApiResult";

export default [
    //重定向进入到index
    {
        path: '/',
        redirect: '/index'
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('@/pages/others/404'),
    },
    {
        path: '/NotLogin',
        name: 'NotLogin',
        component: NotLogin
    },
    {
        path: '/tools',
        name: 'tools',
        component: Tools,
        // children: [
        //     {
        //         path: 'ytdata',
        //         name: 'ytdata',
        //         component: YtData
        //     }
        // ]
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
        path: '/toDolistDemo',
        name: 'toDolistDemo',
        component: ToDoListDemo
    },
    {
        path: '/result',
        name: 'result',
        component: Result
    },
    {
        path: '/api',
        name: 'Main',
        component: Main,
        children: [
            {
                path: 'index',
                name: 'ApiIndex',
                component: ApiIndex
            },
            {
                path: 'apiList',
                name: 'ApiList',
                component: ApiList
            },
            {
                path: 'apiResult',
                name: 'ApiResult',
                component: ApiResult
            }
        ]
    }
]

