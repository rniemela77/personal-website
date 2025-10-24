import { useRouter } from 'vue-router'

export function useScrollToSection() {
    const router = useRouter()

    const scrollToSection = async (sectionId) => {
        if (!sectionId) return

        if (window.location.pathname !== '/') {
            await router.push('/')
        }

        const targetId = sectionId.replace('#', '')
        const section = document.getElementById(targetId)
        if (!section) return

        window.scrollTo({
            top: section.offsetTop - 100,
            behavior: 'smooth'
        })
    }

    return { scrollToSection }
}


