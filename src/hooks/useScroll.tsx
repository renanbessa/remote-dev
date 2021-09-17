import {MutableRefObject, useEffect, useMemo, useState} from 'react'

export type ScrollListenerName =
  | 'scroll'
  | 'scroll-up'
  | 'scroll-down'
  | 'scroll-top'
  | 'scroll-bottom'
  | 'cross'
export type ScrollListenerTarget = 'below' | 'above'
export type ScrollListenerPositionReference = 'top' | 'bottom'
export type ScrollListenerCallback = (event: ScrollListenerEvent) => void

export interface HookOptions {
  asBottomReference?: boolean
  containerRef?: MutableRefObject<HTMLElement>
}

export interface ScrollListener<
  T extends ScrollListenerName = ScrollListenerName
> {
  name: ScrollListenerName
  options: ScrollListenerOptions<T>
  current: ScrollListenerEvent
}

export interface ScrollListenerOptions<T extends ScrollListenerName> {
  once?: boolean
  id?: T extends 'cross' ? string : undefined
  offset?: T extends 'cross' ? number : undefined
  positionReference?: T extends 'cross'
    ? ScrollListenerPositionReference
    : undefined
  callback: ScrollListenerCallback
}

export interface ScrollListenerEvent {
  position: ScrollCoordination
  speed: ScrollCoordination
  target?: ScrollListenerTarget
  isBelow: () => boolean
  isAbove: () => boolean
}

export interface ScrollCoordination {
  x: number
  y: number
}

export function useScroll(options?: HookOptions) {
  const listeners: ScrollListener[] = []
  const scrollPosition: ScrollCoordination = {x: 0, y: 0}
  const scrollSpeed: ScrollCoordination = {x: 0, y: 0}

  const [scrollPositionX, setScrollPositionX] = useState(0)
  const [scrollPositionY, setScrollPositionY] = useState(0)

  const [scrollSpeedX, setScrollSpeedX] = useState(0)
  const [scrollSpeedY, setScrollSpeedY] = useState(0)

  useEffect(() => {
    const el = isDocument() ? window : getContainer()

    el.addEventListener('scroll', scrollEvent)

    return () => {
      el.removeEventListener('scroll', scrollEvent)
    }
  }, [])

  const getContainer = () =>
    options?.containerRef?.current ?? document.documentElement

  const getBottomOffset = () =>
    options?.asBottomReference ? getClientHeight() : 0

  const isDocument = () => getContainer() === document.documentElement

  const getClientTop = () =>
    isDocument() ? 0 : getContainer().getBoundingClientRect().y

  const getClientHeight = () =>
    isDocument() ? window.innerHeight : getContainer().clientHeight

  const getPositionByDirection = (direction: keyof ScrollCoordination) => {
    const coordination: ScrollCoordination = {
      x: getContainer().scrollLeft,
      y: getContainer().scrollTop,
    }

    coordination.y += getBottomOffset()

    return coordination[direction]
  }

  const scrollTo = (position: number) => {
    getContainer().scrollTo({
      top: position,
      behavior: 'smooth',
    })
  }

  const scrollToCoordination = (coordination: ScrollCoordination) =>
    getContainer().scrollTo({
      top: coordination.y,
      left: coordination.x,
      behavior: 'smooth',
    })

  const scrollToElement = (id: string, offset = 0) => {
    const el = document.getElementById(id)
    const reference = options?.asBottomReference ? 'bottom' : 'top'
    const y = el?.getBoundingClientRect()[reference] ?? 0

    scrollTo(y + scrollPositionY - getBottomOffset() - getClientTop() + offset)
  }

  const onScroll = (callback: ScrollListenerCallback) =>
    addEventListener('scroll', {callback})

  const onceScroll = (callback: ScrollListenerCallback) =>
    addEventListener('scroll', {once: true, callback})

  const onScrollUp = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-up', {callback})

  const onceScrollUp = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-up', {once: true, callback})

  const onScrollDown = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-down', {callback})

  const onceScrollDown = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-down', {once: true, callback})

  const onScrollTop = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-top', {callback})

  const onceScrollTop = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-top', {once: true, callback})

  const onScrollBottom = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-bottom', {callback})

  const onceScrollBottom = (callback: ScrollListenerCallback) =>
    addEventListener('scroll-bottom', {once: true, callback})

  const onCross = (options: ScrollListenerOptions<'cross'>) =>
    addEventListener('cross', options)

  const onCrossTopElement = (
    id: string,
    callback: ScrollListenerCallback,
    offset?: number
  ) =>
    addEventListener('cross', {id, callback, offset, positionReference: 'top'})

  const onCrossBottomElement = (
    id: string,
    callback: ScrollListenerCallback,
    offset?: number
  ) =>
    addEventListener('cross', {
      id,
      callback,
      offset,
      positionReference: 'bottom',
    })

  const onceCrossTopElement = (
    id: string,
    callback: ScrollListenerCallback,
    offset?: number
  ) =>
    addEventListener('cross', {
      id,
      offset,
      callback,
      positionReference: 'top',
      once: true,
    })

  const onceCrossBottomElement = (
    id: string,
    callback: ScrollListenerCallback,
    offset?: number
  ) =>
    addEventListener('cross', {
      id,
      callback,
      offset,
      positionReference: 'bottom',
      once: true,
    })

  function addEventListener<T extends ScrollListenerName>(
    name: T,
    options: ScrollListenerOptions<T>
  ) {
    const state = buildCurrentState(name, options)
    const listener: ScrollListener = {name, options, current: state}

    listeners.push(listener)

    return listener
  }

  const removeEventListener = (listener: ScrollListener) => {
    const i = listeners.findIndex((it) => it === listener)
    if (i >= 0) listeners.splice(i, 1)
  }

  function buildCurrentState<T extends ScrollListenerName>(
    name: T,
    options: ScrollListenerOptions<T>
  ): ScrollListenerEvent {
    let targetPosition = 0
    const offset = options.offset ?? 0

    if (options.id) {
      const el = document.getElementById(options.id)

      targetPosition += scrollPosition.y
      targetPosition -= getBottomOffset()
      targetPosition -= getClientTop()
      targetPosition +=
        el?.getBoundingClientRect()[options.positionReference ?? 'top'] ?? 0
    }

    let target: ScrollListenerTarget | undefined

    if (name === 'cross') {
      target = targetPosition + offset <= scrollPosition.y ? 'above' : 'below'
    }

    return {
      position: scrollPosition,
      speed: scrollSpeed,
      target,
      isAbove: () => target === 'above',
      isBelow: () => target === 'below',
    }
  }

  const scrollEvent = () => {
    scrollSpeed.x = getPositionByDirection('x') - scrollPosition.x
    scrollSpeed.y = getPositionByDirection('y') - scrollPosition.y

    scrollPosition.x = getPositionByDirection('x')
    scrollPosition.y = getPositionByDirection('y')

    setScrollPositionX(scrollPosition.x)
    setScrollPositionY(scrollPosition.y)
    setScrollSpeedX(scrollSpeed.x)
    setScrollSpeedY(scrollSpeed.y)

    listeners.forEach((it) => {
      switch (it.name) {
        case 'scroll':
          callbackEvent(it)
          break
        case 'scroll-up':
          scrollUpEvent(it)
          break
        case 'scroll-down':
          scrollDownEvent(it)
          break
        case 'scroll-top':
          scrollTopEvent(it)
          break
        case 'scroll-bottom':
          scrollBottomEvent(it)
          break
        case 'cross':
          crossEvent(it)
          break
      }
    })
  }

  const callbackEvent = (listener: ScrollListener) => {
    listener.options.callback(listener.current)

    if (listener.options.once) {
      removeEventListener(listener)
    }
  }

  const scrollUpEvent = (listener: ScrollListener) => {
    if (listener.current.speed.y < 0) {
      callbackEvent(listener)
    }
  }

  const scrollDownEvent = (listener: ScrollListener) => {
    if (listener.current.speed.y > 0) {
      callbackEvent(listener)
    }
  }

  const scrollTopEvent = (listener: ScrollListener) => {
    if (listener.current.position.y === 0) {
      callbackEvent(listener)
    }
  }

  const scrollBottomEvent = (listener: ScrollListener) => {
    if (
      listener.current.position.y >=
      getContainer().scrollHeight - getClientHeight() + getBottomOffset()
    ) {
      callbackEvent(listener)
    }
  }

  const crossEvent = (listener: ScrollListener) => {
    const oldTarget = listener.current.target
    listener.current = buildCurrentState(listener.name, listener.options)

    if (listener.current.target !== oldTarget) callbackEvent(listener)
  }

  return useMemo(
    () => ({
      scrollPositionX,
      scrollPositionY,
      scrollSpeedX,
      scrollSpeedY,
      scrollTo,
      scrollToCoordination,
      scrollToElement,
      onScroll,
      onceScroll,
      onScrollUp,
      onceScrollUp,
      onScrollDown,
      onceScrollDown,
      onScrollTop,
      onceScrollTop,
      onScrollBottom,
      onceScrollBottom,
      onCross,
      onCrossTopElement,
      onCrossBottomElement,
      onceCrossTopElement,
      onceCrossBottomElement,
      addEventListener,
      removeEventListener,
    }),
    [scrollPositionX, scrollPositionY, scrollSpeedX, scrollSpeedY]
  )
}
