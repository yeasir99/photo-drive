import {useEffect, useRef} from 'react'

const useClickOutside = (elementRef, callback) => {
  const callbackRef = useRef()
  callbackRef.current = callback
  useEffect(() => {
    const handleClickOutside = e => {
      if (!elementRef?.current?.contains(e.target) && callbackRef.current) {
        callbackRef.current()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.addEventListener('click', handleClickOutside, true)
    }
  }, [callbackRef, elementRef])
}

export default useClickOutside
