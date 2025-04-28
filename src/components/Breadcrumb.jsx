import React from 'react'


const Breadcrumb = ({ title, subtitle, nameUri, uri }) => {
  if (uri === undefined) {
    uri = "";
  }
  const url = "../#" + uri;

  return (
    <div className="relative z-10 overflow-hidden pt-[50px] pb-[50px] md:pt-[80px] lg:pt-[100px] dark:bg-[#111928]">
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-[#DFE4EA]/0 via-stroke dark:via-[#374151] to-[#DFE4EA]/0">
      </div>
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center">
              <h1 className="mb-2 text-3xl font-bold text-[#111928] dark:text-white sm:text-4xl md:text-[38px] md:leading-[1.2]">
                {title}
              </h1>
              <h2 className="mb-6 text-base text-[#637381] dark:text-[#9CA3AF]">
                {subtitle}
              </h2>
              <ul className="flex items-center justify-center gap-[10px]">
                <li>
                  <a href={url} className="flex items-center gap-[10px] text-base font-medium text-[#111928] dark:text-white" aria-label={url}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="" className="flex items-center gap-[10px] text-base font-medium text-[#637381] whitespace-nowrap" aria-label={url}>
                    <span className="text-[#637381] dark:text-[#9CA3AF]"> / </span>
                    {nameUri}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Breadcrumb