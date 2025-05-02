import PropTypes from 'prop-types';


const ImageComponent = ({ iSrc, iAlt = "Imagenes Academia de conducir", iWidth = 120, iHeight = 120, iClassName = "", iPriority = false }) => {
	return (
		<img
			src={iSrc}
			alt={iAlt}
			width={iWidth}
			height={iHeight}
			className={`${iClassName} w-fit h-fit`}
			loading={iPriority ? 'eager' : 'lazy'}
		/>
	);
};

ImageComponent.propTypes = {
	iSrc: PropTypes.string.isRequired,
	iAlt: PropTypes.string.isRequired,
	iWidth: PropTypes.number,
	iHeight: PropTypes.number,
	iClassName: PropTypes.string,
	iPriority: PropTypes.bool,
};

export default ImageComponent;