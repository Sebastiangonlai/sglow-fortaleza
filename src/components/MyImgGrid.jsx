
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

/* STYLE MyImagesGrid2 */
// .slider-container {
//     width: 100%;
//     margin: 50px auto;
//     border-radius: 10px;
//     box-shadow: 0px 0px 4px 4px rgba(255, 255, 255, 0.2);
//     background-color: #fff;
// }