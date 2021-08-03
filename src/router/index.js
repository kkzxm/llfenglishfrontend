import { createRouter, createWebHashHistory } from 'vue-router'
import Control from '@/components/Control'

const routes = [
  {
    path: '/',
    name: 'Control',
    component: Control,
    children: [
      {
        path: '/showTag',
        name: 'showTag',
        component: () => import('@/views/showTag'),
      },
      {
        path: '/showWord',
        name: 'showWord',
        component: () => import('@/views/showWord'),
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

/*router.beforeEach((to,
                   form, next) => {
    let token = getToken();
    if (!to.path.startsWith('/login')) {
        //token存在且未过期
        if (token !== null && jwtDecode(token).exp >= (new Date().getTime()) / 0x3e8) {
            next()
        } else {
            next({path: '/login'})
        }
    } else {
        //如果它是要去登录的,删除localStorage里的token
        next()
    }
})*/

export default router
