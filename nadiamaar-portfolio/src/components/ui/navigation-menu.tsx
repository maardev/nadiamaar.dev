'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utilities/ui'

// ─── Context ──────────────────────────────────────────────────────────────────

type ItemCtx = { open: boolean; setOpen: (v: boolean) => void }
const ItemContext = React.createContext<ItemCtx>({ open: false, setOpen: () => {} })

// ─── NavigationMenu ───────────────────────────────────────────────────────────

const NavigationMenu = React.forwardRef<HTMLDivElement, React.ComponentPropsWithoutRef<'div'>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
      {...props}
    >
      {children}
    </div>
  ),
)
NavigationMenu.displayName = 'NavigationMenu'

// ─── NavigationMenuList ───────────────────────────────────────────────────────

const NavigationMenuList = React.forwardRef<HTMLUListElement, React.ComponentPropsWithoutRef<'ul'>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
      {...props}
    />
  ),
)
NavigationMenuList.displayName = 'NavigationMenuList'

// ─── NavigationMenuItem ───────────────────────────────────────────────────────

const NavigationMenuItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<'li'>>(
  ({ className, children, ...props }, ref) => {
    const [open, setOpen] = React.useState(false)
    return (
      <ItemContext.Provider value={{ open, setOpen }}>
        <li
          ref={ref}
          className={cn('relative', className)}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
          {...props}
        >
          {children}
        </li>
      </ItemContext.Provider>
    )
  },
)
NavigationMenuItem.displayName = 'NavigationMenuItem'

// ─── NavigationMenuTrigger ────────────────────────────────────────────────────

const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<'button'>
>(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(ItemContext)
  return (
    <button
      ref={ref}
      data-state={open ? 'open' : 'closed'}
      className={cn(
        'group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
        'focus:outline-none disabled:pointer-events-none disabled:opacity-50',
        className,
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children}
      <ChevronDown
        className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </button>
  )
})
NavigationMenuTrigger.displayName = 'NavigationMenuTrigger'

// ─── NavigationMenuContent ────────────────────────────────────────────────────

const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => {
  const { open } = React.useContext(ItemContext)
  if (!open) return null
  return (
    <div
      ref={ref}
      data-state="open"
      className={cn('absolute left-0 top-full pt-2', className)}
      {...props}
    />
  )
})
NavigationMenuContent.displayName = 'NavigationMenuContent'

// ─── NavigationMenuLink ───────────────────────────────────────────────────────

const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<'a'> & { asChild?: boolean }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : 'a'
  return <Comp ref={ref as React.Ref<HTMLAnchorElement>} className={cn(className)} {...props} />
})
NavigationMenuLink.displayName = 'NavigationMenuLink'

// ─── Exports ──────────────────────────────────────────────────────────────────

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
}
