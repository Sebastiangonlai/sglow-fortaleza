import React from 'react'


const ButtonSection = ({ namebtn, uri }) => {
  return (
    <div className="animate__animated animate__zoomIn animate__delay-2s text-center lg:pb-10 pb-6 whitespace-nowrap" data-wow-delay=".3s" data-wow-duration="1s">
      <div className="inline-block border shadow-sm rounded-full dark:border-[#4B5563]/20 ">
        <div className="py-2 px-4 flex items-center gap-x-2">
          <a className="text-gray-400 dark:text-neutral-300 dark:hover:text-blue-300 text-[12px] md:text-[12px] lg:text-[14px]" href={uri}>
            {namebtn}
          </a>

          <a className="inline-flex items-center gap-x-1.5 text-blue-500 decoration-2 dark:hover:text-blue-300 focus:outline-none font-medium dark:text-blue-300" aria-label={namebtn} href={uri}>
            <svg className="shrink-0 size-4 mt-0.5" viewBox="-0.5 -0.5 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="Square-Top-Down--Streamline-Solar-Ar" height="14" width="14">
              <path d="m8.125 6.875 5.625 -5.625m0 0h-3.339875M13.75 1.25v3.33984375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
              </path>
              <path d="M13.75 7.5c0 2.94625 0 4.4194375 -0.9153125 5.3346875C11.9194375 13.75 10.44625 13.75 7.5 13.75c-2.94628125 0 -4.41941875 0 -5.33470625 -0.9153125C1.25 11.9194375 1.25 10.44625 1.25 7.5c0 -2.94628125 0 -4.41941875 0.91529375 -5.33470625C3.0805812500000003 1.25 4.55371875 1.25 7.5 1.25" stroke="currentColor" strokeLinecap="round" strokeWidth="1"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}


export default ButtonSection