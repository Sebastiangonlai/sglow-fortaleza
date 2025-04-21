import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, listAll } from 'firebase/storage';
import { storage } from '../../../firebase/firebase';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { styled } from '@mui/joy';
import swal from 'sweetalert';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import imageCompression from "browser-image-compression";
import ImageCropper from './ImageCropper';
// import Image from 'next/image';


const VisuallyHiddenInput = styled('input')`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

const AltaImagen = () => {
	const [uploadProgress, setUploadProgress] = useState(0);
	const [outputFileName, setOutputFileName] = useState("");
	const [imageBase64, setImageBase64] = useState(null);
	const [showCropper, setShowCropper] = useState(false);
	const [originalLink, setOriginalLink] = useState("");
	const [originalImage, setOriginalImage] = useState("");
	const [compressedLink, setCompressedLink] = useState('/static/images/svg/photo.png');

	const handleCropComplete = (croppedImage) => {
		if (croppedImage) {
			setOriginalLink(URL.createObjectURL(croppedImage));
			setOriginalImage(croppedImage);
		}
		setShowCropper(false);
	};

	const handleCompressClick = async (e) => {
		e.preventDefault();
		if (!originalImage) return; // Verifica si la imagen original está disponible
		const options = {
			maxSizeMB: 1,
			maxWidthOrHeight: 800,
			useWebWorker: true
		};
		try {
			const output = await imageCompression(originalImage, options);
			const downloadLink = URL.createObjectURL(output);
			setCompressedLink(downloadLink);
			const reader = new FileReader();
			reader.onloadend = () => {
				setImageBase64(reader.result);
			};
			reader.readAsDataURL(output);
		} catch (error) {
			// console.error("Error compressing the image", error);
		}
	};

	const cien = async (e) => {
		setUploadProgress(101);
	};

	const handleFileChange = (e) => {
		const files = e.target.files;
		if (files && files.length > 0) {
			const selectedFile = files[0];
			setOriginalLink(URL.createObjectURL(selectedFile));
			setOriginalImage(selectedFile);
			setOutputFileName(selectedFile);
			setUploadProgress(0);
			setShowCropper(true);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (outputFileName && imageBase64) {
			handleCompressClick(e);
		}
		if (!compressedLink) {
			// console.error("No se ha comprimido ninguna imagen.");
			return;
		}
		if (!originalImage) return; // Verifica si la imagen original está disponible

		try {
			const listRef = ref(storage, "img/");
			const res = await listAll(listRef);
			const cantImagenes = res.items.length + 1;
			const storageRef = ref(storage, `img/alumno${cantImagenes}.webp`); // Crear una referencia al archivo en Firebase Storage
			const uploadTask = uploadBytesResumable(storageRef, originalImage); // `originalImage` ahora es el archivo comprimido
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100; // Calcular el porcentaje de subida
					setUploadProgress(progress); // Actualizar el estado de progreso
					// console.log(`Subida completada al ${progress}%`);
				},
				(error) => {
					// console.error('Error subiendo la imagen', error);
				},
			);
		} catch (error) {
			// console.error('Error durante el proceso de subida', error);
		}
	};


	// Mensaje al cargar la imagen (uploadProgress 100%)
	useEffect(() => {
		if (uploadProgress === 100) {
			swal({
				title: "Imagen cargada con exito!\n\n",
				text: "Ya se encuentra disponible en nuestra web.",
				icon: "success",
				dangerMode: false,
				position: "center",
				timer: 4000
			})
		}
	}, [uploadProgress]);


	return (
		<Box component="form" sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', }} onSubmit={handleSubmit}>
			<Card size='sm' sx={{ border: 0.01, borderColor: '#97c3f0', display: 'flex', alignSelf: 'center', zIndex: '1000', background: '#0d1117' }}>
				<Box sx={{ margin: 0, alignSelf: 'center' }}>
					<Typography sx={{ textAlign: 'center', color: 'CaptionText' }} noWrap>Estudiante egresado</Typography>
				</Box>
				<Divider />
				<Stack direction="column" sx={{ display: { xs: 'flex', md: 'flex' }, alignSelf: 'center' }}>

					<FormControl sx={{ display: { sm: 'flex', md: 'flex' }, gap: 0.8 }}>
						<div className="crop-container" style={{ width: '300px', height: '100%' }} >
							{(originalLink && uploadProgress < 100) && (
								<AspectRatio ratio="1.4/1">
									<Button mt={0} display="flex" alignItems="center" variant="outlined" color='primary' className="dark:hover:bg-gray-900/10 cursor-pointer" onClick={cien}>
										<img src={originalLink} value={originalLink} alt="Vista previa" loading="lazy" width={320} height={260} />
										{/* style={{ maxWidth: '320px', maxHeight: '260px' }} */}
									</Button>
								</AspectRatio>
							)}

							{(!originalLink || uploadProgress >= 100) && (
								<Box component="form" sx={{ marginTop: 4, marginBottom: 7, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
									<Button variant="none" direction="column" alignItems="center" sx={{ borderRadius: 2, cursor: 'pointer', overflow: 'hidden', '&:hover': { opacity: 0.6, } }} component="label" onChange={handleFileChange} >
										<img className="cursor-pointer" src={'/static/images/svg/photo.png'}
											loading="lazy" width={96} height={96} alt="Imagen" />
										{/* <Image className="cursor-pointer" src={'/images/svg/photo.png'}
											loading="lazy" width={96} height={96} style={{ maxWidth: "96px", alignItems: "center", opacity: "95%" }} alt="Imagen" /> */}
										<VisuallyHiddenInput type="file" />
									</Button>
								</Box>

							)}
						</div>
					</FormControl>
				</Stack>
				{showCropper && (
					<ImageCropper imageSrc={originalLink} onCropComplete={handleCropComplete} />
				)}
				{originalLink && uploadProgress < 100 && (
					<Button size="sm" fullWidth sx={{ mt: 0, mb: 0.1, border: 0.01, borderColor: '#3d3d3d' }} className="text-normal mt-3 flex w-full justify-center rounded-md bg-indigo-800 font-normal leading-4 border-indigo-800 dark:border-indigo-700" type="submit"
						startDecorator={<CloudUploadOutlinedIcon sx={{ width: "25px" }} opacity="80%" />} >
						Subir imagen
					</Button>
				)}

				{uploadProgress > 0 && uploadProgress < 100 && (
					<Typography sx={{ textAlign: 'center' }}>Cargando {Math.round(uploadProgress)}%</Typography>
				)}
			</Card>
		</Box>
	);
};

export default AltaImagen;