import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'

import type { ServicePage } from '../../../payload-types'

export const revalidateServicePage: CollectionAfterChangeHook<ServicePage> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      const path = `/${doc.slug}`
      payload.logger.info(`Revalidating service page at path: ${path}`)
      revalidatePath(path)
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      const oldPath = `/${previousDoc.slug}`
      payload.logger.info(`Revalidating old service page at path: ${oldPath}`)
      revalidatePath(oldPath)
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<ServicePage> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    revalidatePath(`/${doc?.slug}`)
  }
  return doc
}
