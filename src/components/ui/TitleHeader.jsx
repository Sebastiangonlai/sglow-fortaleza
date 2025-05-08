"use client"
import { Stagger } from '@/components/motion/Stagger'

const TitleHeader = ({ title, subtitle, uri }) => {
  return (
    <div className="-mx-4 flex flex-wrap pt-8 w-full px-4 z-[40]">
      <Stagger duration={400} delay={600} once={false}>
        <div className="mx-auto mb-[50px] max-w-[520px] text-center text-shadow-sm/40">
          <a href={uri} className="block cursor-pointer hover:text-[#808ae8] transition-colors duration-500 ease-in-out">
            <h2 className="mb-2 text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold leading-tight tracking-tight">
              {title}
            </h2>
          </a>
          <p className="mx-auto max-w-[485px] text-base text-gray-600 dark:text-gray-300/90 leading-tight tracking-tight px-1.5 text-shadow-sm/20">
            {subtitle}
          </p>
        </div>
      </Stagger>
    </div>
  )
}

export default TitleHeader