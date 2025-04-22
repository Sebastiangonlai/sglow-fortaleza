// import Image from 'next/image';
import PropTypes from 'prop-types';


const ImageComponent = ({ iSrc, iAlt, iWidth, iHeight, iClassName, iPriority }) => {
	return (
		<img
			src={iSrc}
			alt={iAlt}
			width={iWidth}
			height={iHeight}
			className={`${iClassName} w-full h-auto`}
			loading={iPriority ? 'eager' : 'lazy'}
		/>
	);
};

ImageComponent.propTypes = {
	iSrc: PropTypes.string.isRequired,
	iAlt: PropTypes.string.isRequired,
	iWidth: PropTypes.number.isRequired,
	iHeight: PropTypes.number.isRequired,
	iClassName: PropTypes.string,
	iPriority: PropTypes.bool,
};

export default ImageComponent;