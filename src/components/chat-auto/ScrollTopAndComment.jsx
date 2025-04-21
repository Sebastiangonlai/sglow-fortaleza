import React from 'react'
import { useEffect, useState } from 'react'
import { FloatingDockDemo } from './FloatingDockDemo'


const ScrollTopAndComment = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > 50) setShow(true)
      else setShow(false)
    }

    window.addEventListener('scroll', handleWindowScroll)
    return () => window.removeEventListener('scroll', handleWindowScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <>
      <div className={`fixed flex-col z-[100] ${show ? 'flex' : 'hidden'}`}>
        {show && (
          <FloatingDockDemo className='h-14 w-14 fixed flex-col z-[100] right-5 bottom-5 opacity-95' />
        )}
        <button
          aria-label='Ir al inicio'
          type='button'
          onClick={handleScrollTop}
          className='rounded-full right-5 bottom-8 pr-1 fixed flex-col z-[100] bg-dark/90 p-[3.5px] text-gray-100 transition-all  hover:bg-zinc-800 dark:bg-blue-700 dark:hover:ring-2 dark:hover:ring-blue-400 flex items-center justify-center dark:ring-1 dark:ring-blue-500'>
          <svg className='h-8 w-8 p-1' viewBox='0 0 20 20' fill='currentColor'>
            <path fillRule='evenodd'
              d='M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z'
              clipRule='evenodd' />
          </svg>
        </button>
      </div>
    </>
  )
}

export default ScrollTopAndComment
