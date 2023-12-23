import { MutableRefObject, useEffect } from "react"

export const useOnClickOutside = <T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  handler: (e: Event) => void
) => {
  useEffect(() => {
    const listener = (e: Event) => {
      const el = e.target
      // 如果點蓻的 element 是在 ref 就不觸發 event
      if (!el || ref.current?.contains((el as Node) || null)) {
        return
      }
      handler(e)
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('touchstart', listener)
      document.removeEventListener('mousedown', listener)

    }
  }, [handler, ref])
}