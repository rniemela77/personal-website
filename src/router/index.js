import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/views/HomePage.vue'
import BlogPage from '../components/views/BlogPage.vue'
import SomniProgress from '../components/blog-posts/SomniProgress.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/blog/:post',
    name: 'Blog',
    component: BlogPage,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Scroll behavior:
  // - Hash routes: wait for element; smooth on Home, instant when coming from Blog
  // - Non-hash routes: keep position (avoid flashing top)
  // Note: 320ms fallback roughly matches the page transition; enough time for mount/layout
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Delay restoring position when leaving Blog so the page doesn't
      // scroll while the Blog view is still visible during the leave transition
      const fromBlog = !!from && ((from.name === 'Blog') || (from.path && from.path.startsWith('/blog')))
      if (fromBlog) {
        return new Promise((resolve) => {
          setTimeout(() => resolve(savedPosition), 320)
        })
      }
      return savedPosition
    }

    if (to.hash) {
      const selector = to.hash
      const findEl = () => document.querySelector(selector)
      return new Promise(async (resolve) => {
        // Instant scroll from Blog, smooth scroll otherwise
        const fromBlog = !!from && ((from.name === 'Blog') || (from.path && from.path.startsWith('/blog')))
        const behavior = fromBlog ? 'auto' : 'smooth'

        // If coming from Blog, wait for the leave transition to finish first,
        // then locate the element and scroll. This avoids scrolling the Blog DOM.
        if (fromBlog) {
          setTimeout(() => {
            const el = findEl()
            if (el) {
              const navOffsetStr = getComputedStyle(document.documentElement).getPropertyValue('--nav-offset') || '0'
              const navOffset = parseInt(navOffsetStr, 10) || 0
              const rect = el.getBoundingClientRect()
              const top = window.pageYOffset + rect.top - navOffset
              resolve({ left: 0, top, behavior })
            } else {
              resolve(undefined)
            }
          }, 320)
          return
        }

        // Default behavior on same-page hash navigation
        // Wait a few frames (~16ms each) for the element, then short timeout as fallback
        for (let i = 0; i < 4; i++) {
          await new Promise(requestAnimationFrame)
          const el = findEl()
          if (el) {
            const navOffsetStr = getComputedStyle(document.documentElement).getPropertyValue('--nav-offset') || '0'
            const navOffset = parseInt(navOffsetStr, 10) || 0
            const rect = el.getBoundingClientRect()
            const top = window.pageYOffset + rect.top - navOffset
            resolve({ left: 0, top, behavior })
            return
          }
        }
        setTimeout(() => {
          const el = findEl()
          if (el) {
            const navOffsetStr = getComputedStyle(document.documentElement).getPropertyValue('--nav-offset') || '0'
            const navOffset = parseInt(navOffsetStr, 10) || 0
            const rect = el.getBoundingClientRect()
            const top = window.pageYOffset + rect.top - navOffset
            resolve({ left: 0, top, behavior })
          } else {
            // If still missing, do nothing; avoids warnings/scroll-to-top flashes
            resolve(undefined)
          }
        }, 320)
      })
    }

    // Keep position for non-hash routes
    return undefined
  }
})

export default router 