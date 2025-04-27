// import Mail from './mail.svg'
// import Instagram from './github.svg'
import { ReactComponent as Instagram } from './github.svg'
import Mail from '@/components/social-icons/mail.svg?react'

// import Facebook from './facebook.svg'
// import Youtube from './youtube.svg'
// import Whatsapp from './linkedin.svg'
// import Twitter from './twitter.svg'
// import Galeria from './galery.svg'
// import Email from './envelope.svg'
// import { ReactComponent as Mail } from './mail.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  instagram: Instagram,
  // facebook: Facebook,
  // youtube: Youtube,
  // whatsapp: Whatsapp,
  // twitter: Twitter,
  // galeria: Galeria,
  // email: Email
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a aria-label="redes" className="text-sm text-gray-500 transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current text-gray-800 hover:text-blue-700 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`} />
    </a>
  )
}

const IconosReact = ({ kind, href, size = 4 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a aria-label="redes" className="overflow-visible  mr-1 flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-[#111928] hover:border-primary hover:bg-primary dark:border-[#1F2A37] dark:text-white dark:hover:border-blue-400 sm:mr-4 lg:mr-1 xl:mr-2 text-sm transition hover:text-gray-600" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg className={`fill-current text-gray-800 dark:text-gray-100 h-${size} w-${size}`} />
    </a>
  )
}

export { SocialIcon, IconosReact };




// rounded-full border border-stroke text-[#111928] hover:border-primary hover:bg-primary hover:text-white dark:border-[#111928]-3 dark:text-white dark:hover:border-primary