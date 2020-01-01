import Result from '../pages/result.vue'
// import Index from '../App.vue'
import Page from '../pages/page.vue'


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

