import { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../../../firebase/firebase';



export function GetContarImagenes() {
  const [lengthImg, setLengthImg] = useState(0);

  useEffect(() => {
    const listRef = ref(storage, "img/");
    listAll(listRef)
      .then(async (res) => {
        const urls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        );
        setLengthImg(urls.length + 1);
      })
      .catch((error) => {
        // console.error("Error al listar las imágenes:", error);
      });
  }, []);
  return lengthImg;
}


// export function GetContarImagenes() {
//     const imagesRef = ref(storage, 'img/');
//     const [total, setTotal] = useState([]);
//     listAll(imagesRef)
//         .then((res) => {
//             const cantidad = res.items.length;
//             setTotal(cantidad);
//         })
//         .catch((error) => {
//             console.error("Error al listar imágenes:", error);
//         });

//     return total;
// }


export function GetUltimasImagenes(cantidad) { // Obtener las últimas 'n' imágenes
    const [imagenesUrls, setImagenesUrls] = useState([]);

    useEffect(() => {
        const listRef = ref(storage, "img/");
        listAll(listRef)
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

