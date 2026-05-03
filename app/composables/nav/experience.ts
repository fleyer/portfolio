import type { ExperiencesCollectionItem } from '@nuxt/content'

export const useNavPrevious = async function (current: Ref<ExperiencesCollectionItem | null | undefined>) {
  if (current.value == null) return

  const experienceObj = current.value

  const { data: experience } = await useAsyncData('navigation-prev-experience-' + experienceObj.stem, () => {
    return queryCollection('experiences')
      .where('startDate', '<', experienceObj.startDate)
      .order('startDate', 'DESC')
      .first()
  })

  return experience
}

export const useNavNext = async function (current: Ref<ExperiencesCollectionItem | null | undefined>) {
  if (current.value == null) return

  const experienceObj = current.value

  const { data: next } = await useAsyncData('navigation-next-experience-' + experienceObj.stem, () => {
    return queryCollection('experiences')
      .where('startDate', '>', experienceObj.startDate)
      .order('startDate', 'ASC')
      .first()
  })

  return next
}
