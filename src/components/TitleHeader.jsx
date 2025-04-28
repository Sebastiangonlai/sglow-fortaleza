import React from 'react'
import TextAnimation from '@/components/AnimatedText'
import { ScrollAnimation } from '@/components/ScrollAnimation'


const TitleHeader = ({ title, subtitle, uri }) => {
  return (
    <div className="-mx-4 flex flex-wrap pt-8">
      <div className="w-full px-4 z-[40]" >
        <ScrollAnimation
          description={
            <div className="mx-auto mb-[50px] max-w-[520px] text-center">
              <TextAnimation className="w-full px-4" title={title} time={100} uri={uri} />
              <h2 className="mx-auto max-w-[485px] text-base text-gray-700 dark:text-gray-400 leading-tight tracking-tight delay-100 px-1.5">
                {subtitle}
              </h2>
            </div>
          }
          duration={1}
          delay={0.5}
          rootMargin="0px 0px -10px 0px"
          effect={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeInOut' }} />
      </div>
    </div>
  )
}

export default TitleHeader