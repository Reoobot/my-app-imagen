// import React, { useState } from 'react';

// const ImageGallery = () => {
//   const [images, setImages] = useState([]);

//   const handleImageUpload = (event) => {
//     const selectedImages = Array.from(event.target.files);
//     setImages([...images, ...selectedImages]);
//   };

//   const handleImageRemove = (index) => {
//     const newImages = [...images];
//     newImages.splice(index, 1);
//     setImages(newImages);
//   };

//   return (
//     <div>
//       <input type="file" multiple onChange={handleImageUpload} />
//       <div className="image-gallery">
//         {images.map((image, index) => (
//           <div className="image-item" key={index}>
//             <img src={URL.createObjectURL(image)} alt={`Imagen ${index}`} />
//             <button onClick={() => handleImageRemove(index)}>Eliminar</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;



// import React, { useEffect, useState } from 'react';

// const GalleryPage = () => {
//   const [savedImages, setSavedImages] = useState([]);

//   useEffect(() => {
//     // Recupera las imágenes del almacenamiento local del navegador
//     const retrievedImages = Object.keys(localStorage).map((key) => ({
//       name: key,
//       data: localStorage.getItem(key),
//     }));

//     setSavedImages(retrievedImages);
//   }, []);

//   return (
//     <div>
//       <h1>Galería de imágenes guardadas</h1>
//       <div className="image-gallery">
//         {savedImages.map((image, index) => (
//           <div className="image-item" key={index}>
//             <img src={image.data} alt={`Imagen ${index}`} className="w-40 h-40" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;


// import React, { useEffect, useState } from 'react';

// const GalleryPage = () => {
//   const [savedImages, setSavedImages] = useState([]);

//   useEffect(() => {
//     // Recupera las imágenes del almacenamiento local del navegador
//     const retrievedImages = Object.keys(localStorage).map((key) => ({
//       name: key,
//       data: localStorage.getItem(key),
//     }));

//     setSavedImages(retrievedImages);
//   }, []);

//   const handleImageRemove = (imageName) => {
//     // Elimina la imagen del almacenamiento local del navegador
//     localStorage.removeItem(imageName);

//     // Actualiza el estado de las imágenes en la galería
//     const updatedImages = savedImages.filter((image) => image.name !== imageName);
//     setSavedImages(updatedImages);
//   };

//   return (
//     <div>
//       <h1>Galería de imágenes guardadas</h1>
//       <div className="image-gallery">
//         {savedImages.map((image, index) => (
//           <div className="image-item" key={index}>
//             <img src={image.data} alt={`Imagen ${index}`} className="w-40 h-40" />
//             <button onClick={() => handleImageRemove(image.name)}>Eliminar</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GalleryPage;


// import React, { useEffect, useState } from 'react';

// const GalleryPage = () => {
//   const [savedImages, setSavedImages] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   useEffect(() => {
//     // Recupera las imágenes del almacenamiento local del navegador
//     const retrievedImages = Object.keys(localStorage).map((key) => ({
//       name: key,
//       data: localStorage.getItem(key),
//     }));

//     setSavedImages(retrievedImages);
//   }, []);

//   const handleImageRemove = (imageName) => {
//     // Elimina la imagen del almacenamiento local del navegador
//     localStorage.removeItem(imageName);

//     // Actualiza el estado de las imágenes en la galería
//     const updatedImages = savedImages.filter((image) => image.name !== imageName);
//     setSavedImages(updatedImages);
//   };

//   const handleImagePreview = (imageData) => {
//     setSelectedImage(imageData);
//   };

//   const handleClosePreview = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <h1>Galería de imágenes guardadas</h1>
//       <div className="image-gallery grid grid-cols-1 md:grid-cols-3 shadow-md gap-4 ">
//         {savedImages.map((image, index) => (
//           <div className="image-item shadow p-5 rounded" key={index}>
//             <img src={image.data} alt={`Imagen ${index}`} className="w-40 h-40 m-auto" />
//             <div className='text-center pt-4'>
//               <button onClick={() => handleImagePreview(image.data)} 
//               className="bg-purple-700 hover:bg-sky-900 text-white font-bold rounded-full py-2 px-4 mr-5"
//               >Ver</button>
//               <button onClick={() => handleImageRemove(image.name)}
//                className="bg-purple-950 hover:bg-sky-900 text-white font-bold rounded-full py-2 px-4 mr-5"
//               >Eliminar</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div className="image-preview w-40 ml-96">
//           <div className="preview-container ">
//             <button onClick={handleClosePreview}>Cerrar</button>
//             <img src={selectedImage} alt="Vista previa de imagen" className=''/>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GalleryPage;




import React, { useEffect, useState } from 'react';

const GalleryPage = () => {
  const [savedImages, setSavedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Recupera las imágenes del almacenamiento local del navegador
    const retrievedImages = Object.keys(localStorage).map((key) => ({
      name: key,
      data: localStorage.getItem(key),
    }));

    setSavedImages(retrievedImages);
  }, []);

  const handleImageRemove = (imageName) => {
    // Elimina la imagen del almacenamiento local del navegador
    localStorage.removeItem(imageName);

    // Actualiza el estado de las imágenes en la galería
    const updatedImages = savedImages.filter((image) => image.name !== imageName);
    setSavedImages(updatedImages);
  };

  const handleImagePreview = (imageData) => {
    setSelectedImage(imageData);
  };

  const handleClosePreview = () => {
    setSelectedImage(null);
  };

  return (
    <div>
     
      <div className="image-gallery grid grid-cols-1 md:grid-cols-3 shadow-md gap-4">
        {savedImages.map((image, index) => (
          <div className="image-item shadow p-5 rounded" key={index}>
            <img src={image.data} alt={`Imagen ${index}`} className="w-40 h-40 m-auto" />
            <div className='text-center pt-4'>
              <button
                onClick={() => handleImagePreview(image.data)}
                className="bg-purple-700 hover:bg-sky-900 text-white font-bold rounded-full py-2 px-4 mr-5"
              >
                Ver
              </button>
              <button
                onClick={() => handleImageRemove(image.name)}
                className="bg-purple-950 hover:bg-sky-900 text-white font-bold rounded-full py-2 px-4 mr-5"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="image-preview relative w-1/2 rounded-lg overflow-hidden">
            <button
              onClick={handleClosePreview}
              className="absolute top-2 right-2 bg-white text-gray-700 px-2 py-1 rounded-full"
            >
              Cerrar
            </button>
            <img src={selectedImage} alt="Vista previa de imagen" className="w-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;

