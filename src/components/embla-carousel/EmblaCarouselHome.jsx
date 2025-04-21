import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'
import ImageComponent from '../ImageComponent';


const EmblaCarouselHome = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options)
	const [scrollProgress, setScrollProgress] = useState(0)
	const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

	const onScroll = useCallback((emblaApi) => {
		const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
		setScrollProgress(progress * 100)
	}, [])

	useEffect(() => {
		if (!emblaApi) return

		onScroll(emblaApi)
		emblaApi
			.on('reInit', onScroll)
			.on('scroll', onScroll)
			.on('slideFocus', onScroll)
	}, [emblaApi, onScroll])

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__parallax">
								<div className="embla__parallax__layer">
									{index === 0 && (
										<div className="bg-transparent relative group/card dark:bg-transparent rounded-xl justify-center items-center ">
											<ImageComponent key={index} iWidth={500} iHeight={320} iAlt="Alumnos graduados" iSrc="/static/images/carousel/carousel_1.webp" loading="lazy" iLayout="responsive" iClassName="embla__slide__img embla__parallax__img" />
										</div>
									)}
									{index === 1 && (
										<div className="bg-transparent relative group/card dark:bg-transparent rounded-xl justify-center items-center ">
											<ImageComponent key={index} iWidth={500} iHeight={320} iAlt="Alumnos graduados" iSrc="/static/images/carousel/carousel_2.webp" loading="lazy" iLayout="responsive" iClassName="embla__slide__img embla__parallax__img" />
										</div>
									)}
									{index === 2 && (
										<div className="bg-transparent relative group/card dark:bg-transparent rounded-xl justify-center items-center ">
											<ImageComponent key={index} iWidth={500} iHeight={390} iAlt="Alumnos graduados" iSrc="/static/images/carousel/carousel_3.webp" loading="lazy" iLayout="responsive" iClassName="embla__slide__img embla__parallax__img" />
										</div>
									)}
									{index === 3 && (
										<div className="bg-transparent relative group/card dark:bg-transparent rounded-xl justify-center items-center ">
											<ImageComponent key={index} iWidth={500} iHeight={390} iAlt="Alumnos graduados" iSrc="/static/images/carousel/carousel_5.webp" loading="lazy" iLayout="responsive" iClassName="embla__slide__img embla__parallax__img" />
										</div>
									)}
								</div>
							</div>
						</div>
					))}

				</div>
			</div>

			<div className="embla__controls">
				<div className="embla__buttons">
					<PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
					<NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
				</div>
				<div className="embla__progress">
					<div className="embla__progress__bar" style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }} />
				</div>
			</div>
		</div>
	)
}

export default EmblaCarouselHome