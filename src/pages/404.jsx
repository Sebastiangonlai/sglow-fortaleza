import React from 'react'

export default function FourZeroFour() {
  const navigations = [
    {
      icon: <svg fill="#111928" strokeWidth="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" height="2em" width="2em" className="overflow: visible; color: #111928;">
        <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z">
        </path>
        <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z">
        </path>
      </svg>,
      title: "Nuestros Servicios",
      desc: "Conoce todos nuestros servicios.",
      href: "/nuestros-servicios"
    }, {
      icon: <svg fill="#111928" strokeWidth="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="2.2em" width="2.2em" className="overflow: visible; color: #111928;">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z">
        </path>
        <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
      </svg>,
      title: "Nuestros Cursos",
      desc: "Ofrecemos una variedad de cursos.",
      href: "/cursos-personalizados"
    }, {
      icon: <svg fill="#111928" strokeWidth="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="2.2em" width="2.2em" className="overflow: visible; color: #111928;">
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z">
        </path>
        <path d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"></path>
      </svg>,
      title: "Contacto",
      desc: "Información de contacto.",
      href: "/contacto"
    }
  ]

  return (
    <>
      {/* <PageSEO title={`Page Not Found - ${siteMetadata.title}`} /> */}
      <section className="bg-white dark:bg-transparent">
        <div className="flex pt-6 flex-col items-start justify-start md:pt-8 md:flex-row md:items-center md:justify-center md:space-x-6">
          <div className="max-w-screen-lg mx-auto px-4 flex items-center justify-start max-h-screen md:px-8">
            <div className="max-w-lg mx-auto text-gray-600">
              <div className="space-y-3 text-center">
                <h3 className="text-indigo-500 font-semibold">
                  Error
                </h3>
                <p className="text-3xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-4xl md:leading-1">
                  Página no encontrada
                </p>
                <p className="text-gray-900 dark:text-gray-300 text-sm xl:text-base">
                  Lo siento, la página que está buscando no se puede encontrar o se ha eliminado.
                </p>
              </div>
              <div className="bottom-0 left-0 w-full mx-auto h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-[#111928]-5 to-stroke/0 mt-2">
              </div>

              <div className="mt-6">
                <ul>
                  {navigations.map((item, idx) => (
                    <>
                      <li key={idx} className="flex gap-x-4 py-6">
                        <div className="flex-none w-14 h-14 bg-indigo-50 rounded-full text-indigo-600 flex items-center justify-center">
                          {item.icon}
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-gray-900 dark:text-gray-100 font-medium">{item.title}</h4>
                          <p className="text-gray-900 dark:text-gray-300 text-sm">
                            {item.desc}
                          </p>
                          <a href={item.href} className="text-sm text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300 duration-150 hover:text-indigo-300 font-medium inline-flex items-center gap-x-1">
                            Más información
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                              <path fillRule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clipRule="evenodd" />
                            </svg>
                          </a>
                        </div>
                      </li>
                      <div className=" bottom-0 left-0 w-full h-px bg-gradient-to-r from-stroke/0 via-stroke dark:via-[#1F2A37] to-stroke/0">
                      </div>
                    </>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}