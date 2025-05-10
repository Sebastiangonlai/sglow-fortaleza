import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NextButton, PrevButton, usePrevNextButtons } from './EmblaCarouselArrowButtons'


const EmblaCarouselVideos = (props) => {
	const [isVideoPoppedUp, setVideoPopUp] = useState(false)
	const [isIndex, setIndex] = useState(false)

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
									<img className="embla__slide__img embla__parallax__img" src={`/static/images/emblavideos/${index}.webp`}
										alt="Video Academia Fortaleza" width={1000} height={1000} />

									<button className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-700/70 hover:bg-blue-600/70 ring-offset-2 hover:ring focus:ring text-white/90" onClick={() => { setVideoPopUp(true), setIndex(index) }}>
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
											<path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
										</svg>
									</button>
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


			{/**************  PopUp Video  **************/}
			{isVideoPoppedUp ? (
				<div className="fixed inset-0 w-full h-full flex items-center justify-center z-[200]">
					<div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
					<div className="px-4 relative">
						<button className="w-10 h-10 mb-4 rounded-full duration-150 bg-zinc-900/90 hover:bg-zinc-900/90 hover:ring text-white/90" onClick={() => setVideoPopUp(false)}>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
								<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
							</svg>
						</button>
						<video className="rounded-lg w-full max-w-3xl" controls autoPlay={true}>
							<source src={`/static/videos/${isIndex}.mp4`} />
							{/* // src="https://academiafortaleza.com.uy/static/videos/IntroWeb-Fortaleza.mp4" type="video/mp4" /> */}
						</video>
					</div>
				</div>
			) : ""
			}
		</div>


	)
}

export default EmblaCarouselVideos