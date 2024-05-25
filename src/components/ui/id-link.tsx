import { mt } from '@/utils/tailwind'
import { useRouterState } from '@tanstack/react-router'
import * as React from 'react'

interface IdLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  isRoot?: boolean
}

export const IdLink = ({ isRoot, ...props }: IdLinkProps) => {
  const { location } = useRouterState()

  const isActive =
    (isRoot && location.href === '/') || location.href === props.href

  return <a className={mt(props.className, { active: isActive })} {...props} />
}
