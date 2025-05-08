import PropTypes from 'prop-types';

const ImageComponent = ({ iSrc, iAlt = "", iWidth = 120, iHeight = 120, iClassName = "", iPriority = false }) => {
	return (
		<img
			src={iSrc}
			alt={iAlt}
			width={iWidth}
			height={iHeight}
			loading={iPriority ? "eager" : "lazy"}
			decoding="async"
			className={`w-fit h-fit ${iClassName}`}
		/>
	);
};

ImageComponent.propTypes = {
	iSrc: PropTypes.string.isRequired,
	iAlt: PropTypes.string,
	iWidth: PropTypes.number,
	iHeight: PropTypes.number,
	iClassName: PropTypes.string,
	iPriority: PropTypes.bool,
};

export default ImageComponent;