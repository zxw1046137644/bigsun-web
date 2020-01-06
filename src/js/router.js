import Result from '../pages/apiResult/ApiResult.vue'

import Page from '../pages/apiList/ApiList.vue'


export default [
    {
        path: '/',
        name: 'Page',
        components: {
            default: Page,
            middle: Page,
            footer: Page
        }
    },
    {
        path: '/result',
        name: 'result',
        component: Result
    }
]

