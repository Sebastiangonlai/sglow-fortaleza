export const getCroppedImg = (imageSrc, crop) => {
	const createImage = url =>
		new Promise((resolve, reject) => {
			const image = new Image();
			image.addEventListener('load', () => resolve(image));
			image.addEventListener('error', error => reject(error));
			image.setAttribute('crossOrigin', 'anonymous'); // Para evitar problemas de cross-origin
			image.src = url;
		});

	return new Promise((resolve, reject) => {
		createImage(imageSrc).then(image => {
			const canvas = document.createElement('canvas');
			const ctx = canvas.getContext('2d');

			// Crear el recorte original
			const croppedCanvas = document.createElement('canvas');
			const croppedCtx = croppedCanvas.getContext('2d');
			croppedCanvas.width = crop.width;
			croppedCanvas.height = crop.height;

			croppedCtx.drawImage(
				image,
				crop.x,
				crop.y,
				crop.width,
				crop.height,
				0,
				0,
				crop.width,
				crop.height
			);

			// Ajustar las dimensiones del canvas al tamaño deseado
			const finalWidth = 1024;
			const finalHeight = 731;
			canvas.width = finalWidth;
			canvas.height = finalHeight;

			// Calcular la escala para ajustar la imagen dentro de 1024x768
			const scaleX = finalWidth / crop.width;
			const scaleY = finalHeight / crop.height;
			// const scale = Math.min(scaleX, scaleY);
			const scale = Math.max(scaleX, scaleY);
			const scaledWidth = crop.width * scale;
			const scaledHeight = crop.height * scale;

			// Centrar la imagen recortada en el canvas
			const offsetX = (finalWidth - scaledWidth) / 2;
			const offsetY = (finalHeight - scaledHeight) / 2;

			// Rellenar el fondo con color negro (opcional)
			ctx.fillStyle = '#F000000';
			ctx.fillRect(0, 0, finalWidth, finalHeight);

			// Dibujar la imagen recortada y escalada en el canvas
			ctx.drawImage(
				croppedCanvas,
				0,
				0,
				crop.width,
				crop.height,
				offsetX,
				offsetY,
				scaledWidth,
				scaledHeight
			);
			canvas.toBlob(blob => {
				if (blob) {
					const file = new File([blob], 'cropped.webp', { type: 'image/webp' });
					resolve(file);
				} else {
					reject(new Error('Error al convertir el canvas a WebP'));
				}
			}, 'image/webp');
		}).catch(error => {
			reject(error);
		});
	});
};
