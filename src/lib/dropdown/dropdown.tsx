import {
  PropsWithChildren,
  createRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'

import './dropdown.scss'

type DropdownTrigger = 'click' | 'hover'
type DropdownPosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-right'
  | 'bottom-left'

interface DropdownProps {
  panel: React.ReactNode
  trigger?: DropdownTrigger
  position?: DropdownPosition
  disabled?: boolean
  limitPanel?: boolean
  closeOnPanelClick?: boolean
  className?: string
}
function Dropdown({
  panel,
  trigger = 'hover',
  position = 'bottom-left',
  disabled,
  limitPanel,
  closeOnPanelClick,
  className,
  children,
}: PropsWithChildren<DropdownProps>) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = createRef<HTMLDivElement>()
  const triggerRef = createRef<HTMLDivElement>()
  const panelRef = createRef<HTMLDivElement>()

  let cssClass = 'pan-ui-dropdown'
  let panelCssClass = 'pan-ui-dropdown-panel'
  if (isOpen) cssClass += ' pan-ui-dropdown--open'
  if (!!disabled) cssClass += ' pan-ui-dropdown--disabled'
  if (className) {
    cssClass += ` ${className}`
    panelCssClass += ` ${className}`
  }

  /** Toggle panel open/close */
  const handleTriggerClick = useCallback(() => {
    if (!!disabled) return

    setIsOpen(!isOpen)
  }, [disabled, isOpen])
  const onTriggerClick = trigger === 'click' ? handleTriggerClick : undefined

  /** Close panel. */
  const handlePanelClick = useCallback(() => {
    // TODO: do we need to stop propagation? Maybe for selects?
    // event.stopPropagation()
    setIsOpen(false)
  }, [])
  const onPanelClick = !!closeOnPanelClick ? handlePanelClick : undefined

  /** Open panel if not disabled. */
  const handleMouseEnter = useCallback(() => {
    if (!!disabled) return
    setIsOpen(true)
  }, [disabled])
  const onMouseEnter = trigger === 'hover' ? handleMouseEnter : undefined

  /** Close panel. */
  const handleMouseLeave = useCallback(() => {
    setIsOpen(false)
  }, [])
  const onMouseLeave = trigger === 'hover' ? handleMouseLeave : undefined

  /** Make dropdown panel at least as big a as trigger element. If limitPanel is true it makes it exactly as big as the trigger. */
  useLayoutEffect(() => {
    if (panelRef.current) {
      const triggerWidth = triggerRef.current?.getBoundingClientRect().width
      panelRef.current.style.minWidth = `${triggerWidth}px`

      if (limitPanel) {
        panelRef.current.style.maxWidth = `${triggerWidth}px`
      }
    }
  }, [limitPanel, panelRef, triggerRef])

  /** Position panel according to position and available space. */
  useLayoutEffect(() => {
    if (!!triggerRef.current && !!panelRef.current) {
      const {
        x,
        y,
        width: triggerWidth,
        height: triggerHeight,
      } = triggerRef.current.getBoundingClientRect()
      let { width: panelWidth, height: panelHeight } =
        panelRef.current.getBoundingClientRect()

      // Limit space
      const padding = 0
      let availableSpace = 0

      switch (position) {
        case 'top-left':
        case 'top-right':
          availableSpace = y
          break
        case 'bottom-left':
        case 'bottom-right':
          availableSpace = window.innerHeight - (y + triggerHeight)
          break
      }

      const maxHeight = availableSpace - padding
      panelRef.current.style.maxHeight = `${maxHeight}px`

      // Position
      panelHeight = Math.min(panelHeight, maxHeight)

      if (['top-left', 'top-right'].includes(position))
        panelRef.current.style.top = `${y - panelHeight}px`
      if (['bottom-right', 'bottom-left'].includes(position))
        panelRef.current.style.top = `${y + triggerHeight}px`

      if (['top-left', 'bottom-left'].includes(position))
        panelRef.current.style.left = `${x - (panelWidth - triggerWidth)}px`
      if (['top-right', 'bottom-right'].includes(position))
        panelRef.current.style.left = `${x}px`
    }
  }, [panelRef, position, triggerRef])

  /** Close panel on outside click. */
  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        !triggerRef.current?.contains(event.target) &&
        !panelRef.current?.contains(event.target) &&
        isOpen
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mouseup', handleClick)

    return () => document.removeEventListener('mouseup', handleClick)
  }, [panelRef, isOpen, triggerRef])

  /** Close panel on outside scroll */
  useEffect(() => {
    const close = (event: any) => {
      if (!panelRef.current?.contains(event.target)) setIsOpen(false)
    }

    if (isOpen) document.addEventListener('scroll', close, true)

    return () => document.removeEventListener('scroll', close, true)
  }, [isOpen, panelRef])

  return (
    <div ref={dropdownRef} className={cssClass}>
      <div
        ref={triggerRef}
        className="pan-ui-dropdown__trigger"
        onClick={onTriggerClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {children}
        {createPortal(
          isOpen && (
            <div
              ref={panelRef}
              className={panelCssClass}
              onClick={onPanelClick}
            >
              {panel}
            </div>
          ),
          document.getElementById('root') as HTMLElement
        )}
      </div>
    </div>
  )
}

export default Dropdown
export type { DropdownProps }
