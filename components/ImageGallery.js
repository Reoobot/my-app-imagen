import React, { useState } from 'react';
import { useRouter } from 'next/router';

const ImageGallery = () => {
  const router = useRouter();
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const selectedImages = Array.from(event.target.files);

    // Guarda las imágenes en el almacenamiento local del navegador
    selectedImages.forEach((image) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target.result;
        localStorage.setItem(image.name, imageData);
      };
      reader.readAsDataURL(image);
    });

    // Actualiza el estado de las imágenes en el cliente
    setImages([...images, ...selectedImages]);

    // Redirige a la página principal
    router.push('/');
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="flex items-center justify-center h-screen">
    <div className="w-full max-w-xs">
      <input type="file" multiple onChange={handleImageUpload} className="bg-blue-500 hover:bg-purple-500 text-white font-bold rounded-full py-2 px-4" />
      <div className="image-gallery">
        {images.map((image, index) => (
          <div className="image-item" key={index}>
            <img src={URL.createObjectURL(image)} alt={`Imagen ${index}`} className="w-40 h-40" />
            <button
              onClick={() => handleImageRemove(index)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default ImageGallery;


