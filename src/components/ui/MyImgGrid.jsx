
function MyImagesGrid({ imgSrc }) {
  return (
    <img className="max-w-20 h-full bg-slate-50 rounded-md"
      src={imgSrc}
      alt={imgSrc}
      width={158}
      height={48}
    />
  )
}

function MyImagesGrid2({ imgSrc }) {
  return (
    <img className="slider-container max-w-screen mx-auto cursor-pointer items-center"
      src={imgSrc}
      alt={imgSrc}
      width={1700}
      height={600}
    />
  )
}
export { MyImagesGrid, MyImagesGrid2 }
