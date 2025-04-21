import React from 'react';
import Cropper from 'react-easy-crop';
import { getCroppedImg } from './CroppedImg';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Box from "@mui/joy/Box";
import Modal2 from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import { Divider } from '@mui/joy';
import Typography from '@mui/joy/Typography';
import Modal from 'react-bootstrap/Modal';


const ImageCropper = ({ imageSrc, onCropComplete }) => {
	const [value, setValue] = React.useState('');
	const [open, setOpen] = React.useState(true);
	const [crop, setCrop] = React.useState({ x: 0, y: 0 });
	const [zoom, setZoom] = React.useState(1);
	const [croppedAreaPixels, setCroppedAreaPixels] = React.useState(null);

	const handleCropComplete = (croppedArea, croppedAreaPixels) => {
		setCroppedAreaPixels(croppedAreaPixels);
	};

	const handleCropClick = async () => {
		try {
			const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
			onCropComplete(croppedImage);
		} catch (e) {
			// console.error(e);
		}
	};

	return (
		<>
			<React.Fragment>
				<Box size="sm" sx={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
					<Modal2 show={!!imageSrc} onHide={() => onCropComplete(null)} open={open} onClose={() => setOpen(false)} >
						<ModalDialog size="sm" style={{ background: '#0d1117' }}>
							<Typography sx={{ textAlign: 'center', color: 'CaptionText' }} noWrap>Editar imagen</Typography>
							<Divider />
							<Stack spacing={0.8} sx={{ '--hue': Math.min(value.length * 10, 120), }}>
								<Modal.Body>
									<div className="crop-container" style={{ width: '320px', height: '250px' }}>
										{imageSrc && (
											<Cropper
												image={imageSrc}
												crop={crop}
												zoom={zoom}
												aspect={1.4 / 1}
												onCropChange={setCrop}
												onCropComplete={handleCropComplete}
												onZoomChange={setZoom}
												style={{
													containerStyle: { height: '100%', width: '100%', position: 'relative' },
													cropAreaStyle: { border: '1px solid #242424' }
												}}
											/>
										)}
									</div>
								</Modal.Body>

								<Stack direction="row" spacing={0.8} sx={{ pt: 1, ustifyContent: 'right' }}>
									<Button size="sm" fullWidth sx={{ mb: 0.1, border: 0.01, borderColor: '#3d3d3d' }} className="text-normal mt-3 flex w-full justify-center rounded-md bg-transparent font-normal" onClick={() => onCropComplete(null)}>
										Cancelar
									</Button>
									<Button size="sm" type="submit" sx={{ border: 0.01, borderColor: '#3d3d3d' }} className="text-normal mt-3 flex w-full justify-center rounded-md bg-indigo-800 font-normal leading-4 border-indigo-800 dark:border-indigo-700" onClick={handleCropClick}>
										Cortar
									</Button>
								</Stack>
							</Stack>
						</ModalDialog>
					</Modal2>
				</Box>
			</React.Fragment>
		</>
	);
};

export default ImageCropper;