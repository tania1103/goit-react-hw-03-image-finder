import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryList } from './ImageGallery.styled';

const ImageGallery = ({ images, loading, changeStateCallback }) => {
  const handleImageClick = index => {
    changeStateCallback(prevState => ({
      ...prevState,
      selectedImageIndex: index, // 🔹 Actualizează indexul imaginii selectate
    }));
  };

  return (
    <ImageGalleryList>
      {loading ? (
        <div>Loading...</div>
      ) : (
        images.map((image, index) => (
          <ImageGalleryItem
            key={image.id}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => handleImageClick(index)} // 🔹 Transmite indexul corect
          />
        ))
      )}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  changeStateCallback: PropTypes.func.isRequired,
};

export default ImageGallery;
