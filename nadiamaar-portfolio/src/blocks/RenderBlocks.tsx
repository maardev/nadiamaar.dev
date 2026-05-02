import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import type { BlockSettings } from '@/blocks/shared/types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
}

function settingsToCssProperties(s?: BlockSettings | null): React.CSSProperties {
  if (!s) return {}

  const style: React.CSSProperties = {}

  if (s.colorBackground) style.backgroundColor = s.colorBackground
  if (s.colorText) style.color = s.colorText
  if (s.fontFamily && s.fontFamily !== 'inherit') style.fontFamily = s.fontFamily
  if (s.fontSize) style.fontSize = `${s.fontSize}px`
  if (s.fontWeight) style.fontWeight = s.fontWeight
  if (s.paddingTop != null) style.paddingTop = `${s.paddingTop}px`
  if (s.paddingBottom != null) style.paddingBottom = `${s.paddingBottom}px`

  if (s.bgImageUrl) {
    style.backgroundImage = `url(${s.bgImageUrl})`
    style.backgroundSize = s.bgImageFit ?? 'cover'
    style.backgroundPosition = 'center'
    style.backgroundRepeat = 'no-repeat'
  }

  // Expose accent as a CSS variable so child components can consume it
  if (s.colorAccent) {
    ;(style as Record<string, string>)['--block-accent'] = s.colorAccent
  }

  return style
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              // settings is injected by Payload after generate:types; cast safely
              const settings = (block as any).settings as BlockSettings | undefined
              const blockStyle = settingsToCssProperties(settings)

              return (
                <div
                  key={index}
                  className="my-16"
                  data-block-type={blockType}
                  data-block-id={(block as any).id ?? index}
                  style={blockStyle}
                >
                  {/* @ts-expect-error block union types may mismatch slightly */}
                  <Block {...block} disableInnerContainer />

                  {/* Custom HTML/JS injected after the block */}
                  {settings?.customCode && (
                    <div
                      dangerouslySetInnerHTML={{ __html: settings.customCode }}
                      data-custom-code
                    />
                  )}
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
