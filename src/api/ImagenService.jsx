import { useState, useEffect } from "react";
import { supabase } from './supabase';

const URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;
// Obtener la cantidad de imágenes en Supabase
export const ContarImagenesSupabase = async () => {
  const { data, error } = await supabase.storage
    .from('img')
    .list('', {
      limit: 170,
    });

  if (error) {
    console.error('Error al listar imágenes:', error.message);
    return 0;
  }

  const imagenes = data.filter(item =>
    item.name.match(/\.(jpe?g|png|webp|gif|bmp)$/i)
  );

  return imagenes.length;
};

// Obtener la lista de imágenes desde Supabase
// export function ListImagesSupabase({ imgFirst = 0, imgLimit = 170 }) {
//   const [images, setimages] = useState([]);

//   useEffect(() => {
//     const fetchImages = async () => {
//       const { data, error } = await supabase.storage
//         .from('img')
//         .list('', {
//           // limit: imgLimit,
//           // offset: imgFirst,
//           sortBy: { column: 'name', order: 'desc' },
//         });

//       if (error) {
//         console.error('Error al listar imágenes:', error);
//         return;
//       } else {
//         const imagenes = data
//           .filter(file => file.name !== '.emptyFolderPlaceholder')
//           .sort((a, b) => {
//             const numA = parseInt(a.name.match(/\d+/)[0], 10)
//             const numB = parseInt(b.name.match(/\d+/)[0], 10)
//             return numB - numA
//           })
//           .map(file => `${URL}${file.name}`)
//         setimages(imagenes);
//       }
//     };
//     fetchImages();
//   }, []);

//   return images;
// };
export function ListImagesSupabase({ imgFirst = 0, imgLimit = 170 }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage
        .from('img')
        .list('', {
          offset: 0,
          limit: imgLimit,
          sortBy: { column: 'name', order: 'desc' }
        });

      if (error) {
        console.error('Error al listar imágenes:', error);
        return;
      }

      const imagenes = data
        .filter(file => file.name !== '.emptyFolderPlaceholder')
        .sort((a, b) => {
          const numA = parseInt(a.name.match(/\d+/)[0], 10);
          const numB = parseInt(b.name.match(/\d+/)[0], 10);
          return numB - numA;
        })
        .map(file => `${URL}${file.name}`);

      setImages(imagenes);
    };

    fetchImages();
  }, []);

  return images;
}


// export const ListImagesSupabase = async () => {
//   try {
//     const { data, error } = await supabase.storage
//       .from('img')
//       .list('', {
//         sortBy: { column: 'name', order: 'desc' },
//       });

//     if (error) {
//       console.error('Error al listar imágenes:', error);
//       return [];
//     }

//     const imagenes = data
//       .filter(file => file.name !== '.emptyFolderPlaceholder')
//       .sort((a, b) => {
//         const numA = parseInt(a.name.match(/\d+/)?.[0] || 0, 10);
//         const numB = parseInt(b.name.match(/\d+/)?.[0] || 0, 10);
//         return numB - numA;
//       })
//       .map(file => `${URL}${file.name}`);

//     return imagenes;
//   } catch (err) {
//     console.error('Error inesperado al listar imágenes:', err);
//     return [];
//   }
// };


// Obtener la URL de una imagen específica
export function GetImageSupabase({ imgName }) {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const getPublicUrl = async () => {
      const { data, error } = supabase.storage
        .from('img')
        .getPublicUrl(imgName);

      if (error) {
        console.error('Error al obtener URL pública:', error);
      } else {
        setImageUrl(data.publicUrl);
      }
    };
    getPublicUrl();
  }, [imgName]);

  return imageUrl;
};




// Subir imagen a Supabase
export const UploadImageSupabase = async (file) => {
  const cantidad = await ContarImagenesSupabase() + 1;

  if (!file) return { error: 'No file provided', data: null };
  const filePath = `${cantidad}.webp`;
  const { data, error } = await supabase.storage
    .from('img')
    .upload(filePath, file);

  if (error) return { error, data: null };

  const { publicUrl } = supabase.storage
    .from('img')
    .getPublicUrl(filePath);

  return { data: { publicUrl }, error: null };
};
