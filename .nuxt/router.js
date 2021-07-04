import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _118d3759 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _3dbb0eac = () => interopDefault(import('../pages/blogPosts.vue' /* webpackChunkName: "pages/blogPosts" */))
const _3113a38c = () => interopDefault(import('../pages/thankYou.vue' /* webpackChunkName: "pages/thankYou" */))
const _8f421faa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _92af623a = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _118d3759,
    name: "blog"
  }, {
    path: "/blogPosts",
    component: _3dbb0eac,
    name: "blogPosts"
  }, {
    path: "/thankYou",
    component: _3113a38c,
    name: "thankYou"
  }, {
    path: "/",
    component: _8f421faa,
    name: "index"
  }, {
    path: "/:slug",
    component: _92af623a,
    name: "slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
