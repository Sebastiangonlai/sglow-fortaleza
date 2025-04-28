"use client"
import React, { useState, useEffect } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Divider from '@mui/joy/Divider';
import Stack from '@mui/joy/Stack';
import { styled } from '@mui/joy';
import swal from 'sweetalert';
import FormControl from '@mui/joy/FormControl';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import ImageCropper from './ImageCropper';
import imageCompression from "browser-image-compression";
import { uploadImageSupabase } from '@/api/ImagenService.jsx'
import { UploadCloud } from "lucide-react";


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
		if (!originalImage) return;
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
			const selectedFile = e.target.files[0];
			// setOriginalLink(e.target.files[0]);
			setOriginalLink(URL.createObjectURL(selectedFile));
			// setFile(e.target.files[0]);
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
		if (!originalImage) return;

		try {
			const uploadTask = await uploadImageSupabase(originalImage);
			setUploadProgress(100); // Actualizar el estado de progreso
		} catch (error) {
			console.error("Error al cargar la imagen:", error);
		}
	}
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
					<Typography sx={{ textAlign: 'center', color: 'white' }} noWrap>Estudiante egresado</Typography>
				</Box>
				<Divider />
				<Stack direction="column" sx={{ display: { xs: 'flex', md: 'flex' }, alignSelf: 'center' }}>

					<FormControl sx={{ display: { sm: 'flex', md: 'flex' }, gap: 0.8 }}  >
						<div className="group crop-container" style={{ width: '300px', height: '100%' }} >
							{(originalLink && uploadProgress < 100) && (
								<AspectRatio ratio="1.4/1">
									<Button mt={0} display="flex" alignItems="center" variant="outlined" color='primary' onClick={cien}>
										<img src={originalLink} value={originalLink} alt="Vista previa" loading="lazy" width={320} height={260} />
										{/* style={{ maxWidth: '320px', maxHeight: '260px' }} */}
									</Button>
								</AspectRatio>
							)}

							{(!originalLink || uploadProgress >= 100) && (
								<Box component="form" sx={{ marginTop: 4, marginBottom: 7, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
									<Button variant="none" direction="column" alignItems="center" sx={{ borderRadius: 2, cursor: 'pointer', overflow: 'hidden', }} component="label" onChange={handleFileChange} className="group-hover:opacity-50 group-hover:cursor-pointer">
										<img className="cursor-pointer " src={'/static/images/svg/photo.png'}
											loading="lazy" width={96} height={96} alt="Imagen" />
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
						startDecorator={<UploadCloud sx={{ width: "20px" }} opacity="80%" />} >
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