import React from "react"
import { useLocation } from "react-router-dom"

import {
  Badge,
  BadgeProps
} from "./ui/badge"
import {
  ChevronRight,
  type LucideIcon
} from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar"

export type NavLabel = string | Pick<BadgeProps, 'variant' | 'children'>

export interface NavItem {
  title: string
  url?: string
  target?: React.HTMLAttributeAnchorTarget
  icon?: string | LucideIcon
  isOpen?: boolean
  label?: NavLabel
  items?: NavItem[]
}

export function NavMain({
  label,
  items = [],
}: {
  label?: string
  items?: NavItem[]
}) {
  return (
    <SidebarGroup>
      {label && (
        <SidebarGroupLabel className="capitalize">
          {label}
        </SidebarGroupLabel>
      )}
      <NavItem items={items} />
    </SidebarGroup >
  )
}

export function NavItem({
  items,
  isNested = false
}: {
  items: NavItem[]
  isNested?: boolean
}) {
  const { pathname } = useLocation();

  return (
    <SidebarMenu>
      {items.map((item) => (
        <NavItemContent
          key={item.title}
          item={item}
          isNested={isNested}
          pathname={pathname}
        />
      ))}
    </SidebarMenu>
  )
}


interface NavItemContentProps {
  item: NavItem
  isNested: boolean
  pathname: string
}

function NavItemContent({
  item,
  isNested,
  pathname,
}: NavItemContentProps) {
  const isCollapsed = item.items?.some((subItem) => subItem.url === pathname)
  const isOpen = isCollapsed || item.isOpen
  const isActive = !item.items && item.url === pathname

  return (
    <Collapsible key={item.title} asChild defaultOpen={isOpen}>
      <SidebarMenuItem>
        <NavItemButton
          item={item}
          isNested={isNested}
          isActive={isActive}
        />
        {item.items?.length ? (
          <NavItemSubMenu item={item} />
        ) : null}
      </SidebarMenuItem>
    </Collapsible>
  )
}

interface NavItemButtonProps {
  item: NavItem
  isNested: boolean
  isActive: boolean
}

function NavItemButton({ item, isNested, isActive }: NavItemButtonProps) {
  return (
    <SidebarMenuButton
      asChild
      isActive={isActive}
      tooltip={item.title}
    >
      <a href={item.url ?? '#'} target={item.target}>
        {renderIcon(item, isNested)}
        <span>
          {item.title}
          {item.label && renderLabel(item.label)}
        </span>
      </a>
    </SidebarMenuButton>
  )
}

function renderIcon(item: NavItem, isNested: boolean) {
  if (!item.icon || isNested) return null
  return typeof item.icon !== 'string' ? <item.icon /> : (
    item.icon
  )
}

function renderLabel(label: NavLabel) {
  return typeof label !== 'string' ? (
    <Badge {...label} className="text-xs font-thin hover:bg-primary px-1 py-0 ml-2" />
  ) : (
    <Badge className="text-xs font-thin hover:bg-primary px-1 py-0 ml-2">
      {label}
    </Badge>
  )
}

interface NavItemSubMenuProps {
  item: NavItem
}

function NavItemSubMenu({ item }: NavItemSubMenuProps) {
  return (
    <>
      <CollapsibleTrigger asChild>
        <SidebarMenuAction
          className="data-[state=open]:rotate-90"
        >
          <ChevronRight />
          <span className="sr-only">
            Toggle
          </span>
        </SidebarMenuAction>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <SidebarMenuSub>
          <NavItem items={item.items!} isNested />
        </SidebarMenuSub>
      </CollapsibleContent>
    </>
  )
}