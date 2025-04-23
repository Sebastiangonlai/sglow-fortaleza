// Ejemplo simple en un componente
// import { useEffect, useState } from 'react';
// import { supabase } from '../../../utils/superbase';

// const ImageViewer = () => {
//   const imagePath = '1.png'; 
//   const [imageUrl, setImageUrl] = useState(null);

//   useEffect(() => {
//     const getPublicUrl = async () => {
//       const { data, error } = supabase.storage
//         .from('img')
//         .getPublicUrl(imagePath);

//       if (error) {
//         console.error('Error al obtener URL pública:', error);
//       } else {
//         setImageUrl(data.publicUrl);
//       }
//     };

//     getPublicUrl();
//   }, [imagePath]);

//   if (!imageUrl) return <p>Cargando imagen...</p>;
//   return <img src={imageUrl} alt="Imagen desde Supabase" />;
// };
// export default ImageViewer;

// arriba ok una imagen desde supabase
// import { useEffect, useState } from 'react';
// import { supabase } from '../../../utils/superbase';


// const ImageViewer = ({ imgFirst, imgLimit = 100 }) => {
//   const [images, setimages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const { data, error } = await supabase.storage
//         .from('img')
//         .list('', {
//           limit: imgLimit,
//           offset: imgFirst,
//           sortBy: { column: 'name', order: 'asc' },
//         });

//       if (error) {
//         console.error('Error al listar imágenes:', error);
//         return;
//       } else {
//         if (data !== undefined && data.length > 0) {
//           const names = data.map((item) => `${URL}/` + item.name);
//           setimages(names);
//         }
//       }

//     };

//     fetchImages();
//   }, []);

//   return (
//     <div className="grid grid-cols-2 gap-2 mx-auto justify-items-center lg:gap-4 lg:grid-cols-3 lg:mx-[5%] lg:rounded-2xl">
//       {images.map((url, index) => (
//         <>
//           <img key={index} src={url} alt={`imagen-${index}`} className="w-[150px] h-auto" />
//         </>
//       ))}
//     </div>
//   );
// };

// export default ImageViewer;



import { useState } from 'react';
import { supabase } from '../../utils/supabase';

const URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;

const UploadImage = () => {
  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const uploadImage = async () => {
    if (!file) return;

    const filePath = `${file.name}`;

    const { data, error } = await supabase.storage
      .from('img')
      .upload(filePath, file);

    if (error) {
      console.error('Error al subir imagen:', error.message);
      return;
    }

    const { publicUrl } = supabase.storage
      .from('img')
      .getPublicUrl(filePath);

    setUploadUrl(publicUrl);
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadImage} className="bg-blue-500 text-white px-4 py-2 rounded">
        Subir imagen
      </button>
      {uploadUrl && <img src={uploadUrl} alt="Imagen subida" className="mt-4 w-48" />}
    </div>
  );
};

export default UploadImage;




///componene


// const [file, setFile] = useState(null);
// const [uploadUrl, setUploadUrl] = useState('');

// const handleFileChange = (e) => {
//   setFile(e.target.files[0]);
// };

// const handleUpload = async () => {
//   const { data, error } = await UploadImageSupabase(file);
//   if (error) {
//     console.error('Error al subir imagen:', error.message);
//     return;
//   }
//   setUploadUrl(data.publicUrl);
// };

// const cantidad = ContarImagenes();
// import { createClient } from '@supabase/supabase-js';
// import { ListImagesSupabase, GetImageSupabase, UploadImageSupabase } from "../admin/imagenes/ImagenService";
// // import UploadImage from "../admin/imagenes/apires";

// const listImages = ListImagesSupabase({ imgFirst: 0, imgLimit: 100 });
// const img = GetImageSupabase({ imgName: "1.png" });
// console.log("img: ", img);


// <div className="grid grid-cols-2 gap-2 mx-auto justify-items-center lg:gap-4 lg:grid-cols-4 lg:mx-[10%] ">
//   {listImages.map((url, index) => (
//     <>
//       {listImages.length - 1 > index && (
//         <img key={index} src={url} alt={`${url}`} className="w-[300px] h-auto rounded-xl" />
//       )
//       }
//     </>
//   ))}
// </div>

{/* <div className="space-y-4">
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">
            Subir imagen
          </button>
          {uploadUrl && <img src={uploadUrl} alt="Imagen subida" className="mt-4 w-48" />}
        </div> */}