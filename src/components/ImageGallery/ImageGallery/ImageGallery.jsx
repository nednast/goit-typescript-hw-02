import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, onSelect }) => {
  return (
    <div>
      <ul>
        {images &&
          images.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} onSelect={onSelect} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
