const Search = () => import('@/pages/Search')

export default [
    {
        path: '/',
        component: () => import('@/pages/Home')
    },
    {
        name: 'search',
        path: '/search/:keyword?',
        component: Search,
        props: route => ({ keyword3: route.params.keyword, keyword4: route.query.keyword2 })
    }
]