import { useState, useEffect } from "react";
import { ref, listAll, list, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase/firebase';


// Cantidad de imágenes
export function GetContarImagenes(ruta) {
  const [cantidad, setCantidad] = useState(0);

  useEffect(() => {
    const listRef = ref(storage, ruta);

    listAll(listRef)
      .then((res) => {
        setCantidad(res.items.length);
      })
      .catch((error) => {
        console.error("Error al contar archivos:", error);
      });
  }, [ruta]);

  return cantidad;
}



// Obtener las últimas 'n' imágenes
export function GetUltimasImagenes(cantidad) {
  const [imagenesUrls, setImagenesUrls] = useState([]);

  useEffect(() => {
    const listRef = ref(storage, "img/");
    list(listRef)
      .then(async (res) => {
        const sortedItems = res.items.sort((a, b) => {
          const numA = parseInt(a.name.match(/\d+/)?.[0], 10);
          const numB = parseInt(b.name.match(/\d+/)?.[0], 10);
          return numA - numB;
        });
        const limitedItems = sortedItems.slice(-cantidad); // Limitar la cantidad a las últimas 'n' imágenes
        const urls = await Promise.all(
          limitedItems.map((itemRef) => getDownloadURL(itemRef))
        );
        setImagenesUrls(urls);
      })
      .catch((error) => {
        // console.error("Error al listar las imágenes:", error);
      });
  }, [cantidad]);
  return imagenesUrls;
}

