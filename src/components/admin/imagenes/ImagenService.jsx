import { useState, useEffect } from "react";
import { supabase } from '../../utils/supabase';

const URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;

// Obtener la lista de imágenes desde Supabase
export function ListImagesSupabase({ imgFirst = 1, imgLimit = 170 }) {
  const [images, setimages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase.storage
        .from('img')
        .list('', {
          limit: imgLimit,
          offset: imgFirst,
          sortBy: { column: 'name', order: 'asc' },
        });

      if (error) {
        console.error('Error al listar imágenes:', error);
        return;
      } else {
        if (data !== undefined && data.length >= 0) {
          const names = data.map((item) => `${URL}/` + item.name);
          setimages(names);
        }
      }
    };
    fetchImages();
  }, []);

  return images;
};


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


// Obtener la cantidad de imágenes en Supabase
export const ContarImagenesSupabase = async () => {
  const { data, error } = await supabase.storage
    .from('img')
    .list('', {
      limit: 100,
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
