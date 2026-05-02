import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

export const revalidateStaticPage: CollectionAfterChangeHook = ({ doc }) => {
  if (doc?.slug) {
    revalidatePath(`/${doc.slug}`)
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook = ({ doc }) => {
  if (doc?.slug) {
    revalidatePath(`/${doc.slug}`)
  }
  return doc
}
