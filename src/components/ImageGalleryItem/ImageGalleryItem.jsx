import PropTypes from 'prop-types';
import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ src, alt, onClick }) => {
  return (
    <GalleryItem onClick={onClick}>  {/* ✅ Folosește direct componenta stilizată */}
      <GalleryImage src={src} alt={alt} />
    </GalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
