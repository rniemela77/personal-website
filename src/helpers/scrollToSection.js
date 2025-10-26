export async function scrollToSection(router, sectionId) {
    if (!sectionId) return

    const hash = sectionId.startsWith('#') ? sectionId : `#${sectionId}`
    const onHome = window.location.pathname === '/'

    if (!onHome) {
        // Delegate scrolling to router scrollBehavior
        await router.push({ path: '/', hash })
        return
    }

    // If the same hash is clicked again on Home, manually re-scroll
    if (window.location.hash === hash) {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
    }

    // Normal in-page hash navigation; router scrollBehavior handles the scroll
    await router.push({ hash }).catch(() => {})
}


