import { useState, useEffect } from "react";
import { supabase } from './supabase';

const URL = import.meta.env.VITE_SUPABASE_STORAGE_URL;


// Función para listar imágenes desde Supabase
export const listImagesSupabase = async ({ imgFirst = 0, imgLimit = 170 } = {}) => {
  try {
    const { data, error } = await supabase.storage
      .from('img')
      .list('', {
        offset: imgFirst,
        limit: imgLimit,
        sortBy: { column: 'name', order: 'desc' },
      });

    if (error) {
      console.error('Error al listar imágenes:', error.message);
      return [];
    }

    // Filtrar y ordenar imágenes
    const imagenes = data
      .filter(file => file.name !== '.emptyFolderPlaceholder' && file.name.match(/\.(jpe?g|png|webp|gif|bmp)$/i))
      .sort((a, b) => {
        const numA = parseInt(a.name.match(/\d+/)?.[0] || 0, 10);
        const numB = parseInt(b.name.match(/\d+/)?.[0] || 0, 10);
        return numB - numA;
      })
      .map(file => `${URL}${file.name}`);

    return imagenes;
  } catch (err) {
    console.error('Error inesperado al listar imágenes:', err);
    return [];
  }
};

// Hook para obtener imágenes desde Supabase
export const useListImagesSupabase = ({ imgFirst = 0, imgLimit = 170 } = {}) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const imagenes = await listImagesSupabase({ imgFirst, imgLimit });
      setImages(imagenes);
    };

    fetchImages();
  }, [imgFirst, imgLimit]);

  return images;
};

// Obtener la cantidad de imágenes en Supabase
export const contarImagesSupabase = async () => {
  const { data, error } = await supabase.storage
    .from('img')
    .list('', {
      limit: 1000,
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
// Función para obtener la URL pública de una imagen específica
export const getImageSupabase = async (imgName) => {
  try {
    const { data, error } = supabase.storage
      .from('img')
      .getPublicUrl(imgName);

    if (error) {
      console.error('Error al obtener URL pública:', error.message);
      return null;
    }

    return data.publicUrl;
  } catch (err) {
    console.error('Error inesperado al obtener URL pública:', err);
    return null;
  }
};

// Función para subir una imagen a Supabase
export const uploadImageSupabase = async (file) => {
  if (!file) {
    console.error('No se proporcionó un archivo para subir.');
    return { error: 'No file provided', data: null };
  }

  try {
    const cantidad = await contarImagesSupabase() + 1;
    const filePath = `alumno${cantidad}.webp`;

    const { data, error } = await supabase.storage
      .from('img')
      .upload(filePath, file);

    if (error) {
      console.error('Error al subir imagen:', error.message);
      return { error, data: null };
    }

    const publicUrl = await getImageSupabase(filePath);
    return { data: { publicUrl }, error: null };
  } catch (err) {
    console.error('Error inesperado al subir imagen:', err);
    return { error: err, data: null };
  }
};