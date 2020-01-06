import Result from '../pages/ApiResult.vue'

import Page from '../pages/ApiList.vue'


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

