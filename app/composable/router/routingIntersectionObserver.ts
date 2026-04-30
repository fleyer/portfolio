import { useIntersectionObserver as _useIntersectionObserver } from '#imports'
import { disableScrollBehaviorUntilNextNav } from '~/router.options'

const debouncedUpdateLocationHash = useDebounceFn(updateWindowLocationHash, 500)

function updateWindowLocationHash([entry]: IntersectionObserverEntry[]) {
  const router = useRouter()

  disableScrollBehaviorUntilNextNav()
  if (entry?.target.id) {
    router.push(entry.target.id ? `#${entry.target.id}` : '')
  } else {
    router.push(window.location.pathname + window.location.search)
  }
}

function filterIntersectingEntries(fn: (entries: IntersectionObserverEntry[]) => void) {
  return (entries: IntersectionObserverEntry[]) => {
    const intersectingEntries = entries.filter(entry => entry.isIntersecting)
    if (intersectingEntries.length > 0) {
      fn(intersectingEntries)
    }
  }
}

export const useRoutingIntersectionObserver = function (targets: MaybeRefOrGetter[]) {
  _useIntersectionObserver(
    targets,
    filterIntersectingEntries(debouncedUpdateLocationHash),
    { threshold: 0.4 }
  )
}
